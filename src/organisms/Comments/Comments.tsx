import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import CommentsForm from './CommentsForm';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import Text from '../../atoms/Text';
import { hexToRGBA } from '../../utils/colors';
import { postComment } from '../../lib/Comments';
import useGetComments from '../../hooks/useGetComments';
import CommentsType from '../../types/comments';

interface CommentsProps {
  postId: string;
}

const CommentsContainer = styled.div``;

const CommentsHeader = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};

  > div:first-child {
    padding-right: ${({ theme: { spacing } }): string => spacing.sm1};
  }
`;

const CommentsList = styled.ul``;
const CommentsItem = styled.li<{ isReply?: boolean }>`
  margin-left: ${({ isReply, theme: { spacing } }): string =>
    isReply ? spacing.sm4 : '0'};
  padding-top: ${({ theme: { spacing } }): string => spacing.sm4};
  padding-bottom: ${({ theme: { spacing } }): string => spacing.sm4};

  border-top: 1px solid
    ${({ theme: { colors } }): string => `${hexToRGBA(colors.nearBlack, 10)}`};

  &:last-child {
    padding-bottom: 0;
  }
`;

const CommentsDate = styled.time``;

const CommentsContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    max-width: 80%;
  }
`;

const Comments: FC<CommentsProps> = ({ postId }) => {
  const commentsFormRef = useRef<HTMLFormElement | null>(null);
  const { comments } = useGetComments(postId);
  const [isSubmittingComment, setIsSubmittingComment] = useState<boolean>(
    false,
  );
  const [replyId, setReplyId] = useState<string | undefined>(undefined);
  const [replyName, setReplyName] = useState<string | undefined>(undefined);
  const total = comments?.length;
  const handleCommentFormSubmit = async (
    comment: CommentsType,
  ): Promise<void> => {
    localStorage.setItem('timestamp', `${comment?.timestamp}`);
    const id = uuid();
    const body = {
      id,
      postId,
      replyId,
      ...comment,
    };
    setIsSubmittingComment(true);
    try {
      await postComment(body);
      setIsSubmittingComment(false);
    } catch (error) {
      console.log('form comment error: ', error);
      setIsSubmittingComment(false);
    }
  };
  const handleReply = (id?: string, name?: string): void => {
    console.log('reply id: ', id);
    console.log('reply name:  ', name);
    setReplyId(id);
    setReplyName(name);
    if (commentsFormRef && commentsFormRef.current) {
      commentsFormRef.current.focus();
      const top = commentsFormRef.current.offsetTop - 160;
      window.scrollTo({ top, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <CommentsContainer>
      <CommentsForm
        isLoading={isSubmittingComment}
        onSubmit={handleCommentFormSubmit}
        replyName={replyName}
        ref={commentsFormRef}
      />
      <CommentsHeader>
        <Text display="inline" fontWeight="bold">
          {total}
        </Text>
        <Text> Comments</Text>
      </CommentsHeader>
      {comments && (
        <CommentsList>
          {comments.map(comment => {
            const { timestamp } = comment || {};
            const commentDate = new Date(timestamp ?? '');
            return (
              <CommentsItem key={comment.id}>
                <CommentsContent>
                  <div>
                    <Text fontWeight="bold" textColor="orange">
                      {comment.name}
                    </Text>
                    {commentDate && (
                      <>
                        {/* @ts-ignore */}
                        <CommentsDate
                          as={Text}
                          bottomSpacing="sm4"
                          dateTime={commentDate}
                          fontSize="f-sm"
                          fontWeight="normal"
                        >
                          {commentDate.toLocaleDateString('en-us', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </CommentsDate>
                      </>
                    )}
                    <Paragraph fontSize="f1" bottomSpacing="sm4">
                      {comment.message}
                    </Paragraph>
                  </div>
                  <Button
                    minWidth={false}
                    onClick={(): void => handleReply(comment.id, comment.name)}
                    width="53px"
                    shape="rectangle"
                    size="small"
                    variant="outline"
                  >
                    Reply
                  </Button>
                </CommentsContent>
                {comment.replies && (
                  <CommentsList>
                    {comment.replies.map(comment => {
                      const { timestamp: timestampReply } = comment || {};
                      const commentDateReply = new Date(timestampReply ?? '');
                      return (
                        <CommentsItem key={comment.id} isReply>
                          <Text fontWeight="bold" textColor="orange">
                            {comment.name}
                          </Text>
                          {commentDate && (
                            <>
                              {/* @ts-ignore */}
                              <CommentsDate
                                as={Text}
                                bottomSpacing="sm4"
                                dateTime={commentDateReply}
                                fontSize="f-sm"
                                fontWeight="normal"
                              >
                                {commentDateReply.toLocaleDateString('en-us', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </CommentsDate>
                            </>
                          )}
                          {comment.message}
                        </CommentsItem>
                      );
                    })}
                  </CommentsList>
                )}
              </CommentsItem>
            );
          })}
        </CommentsList>
      )}
    </CommentsContainer>
  );
};

export default Comments;
