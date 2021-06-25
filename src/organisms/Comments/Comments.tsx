import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Rating from '../../molecules/Rating';
import Button from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import Paragraph from '../../atoms/Paragraph';
import Text from '../../atoms/Text';
import { hexToRGBA } from '../../utils/colors';
import CommentsType from '../../types/comments';

interface CommentsProps {
  comments?: CommentsType[];
  currentCommentId?: string;
  onReply: (id?: string, name?: string) => void;
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

const Comments: FC<CommentsProps> = ({ comments, onReply }) => {
  const total = comments?.length;
  return (
    <CommentsContainer>
      {comments && (
        <CommentsHeader>
          <Text display="inline" fontWeight="bold">
            {total}
          </Text>
          <Text> Comments</Text>
        </CommentsHeader>
      )}
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
                    <Rating size="small" rating={comment?.rating} />
                    <Spacer />
                    <Paragraph fontSize="f1" bottomSpacing="sm4">
                      {comment.message}
                    </Paragraph>
                  </div>
                  <Button
                    minWidth={false}
                    onClick={(): void => onReply(comment.id, comment.name)}
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
