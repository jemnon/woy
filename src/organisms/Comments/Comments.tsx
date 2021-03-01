import React, { FC } from 'react';
import styled from 'styled-components';
import Grid, { GridCell } from '../../organisms/Grid';
import Divider from '../../atoms/Divider';
import Paragraph from '../../atoms/Paragraph';
import Text from '../../atoms/Text';
import { hexToRGBA } from '../../utils/colors';
import CommentsType from '../../types/comments';

interface CommentsProps {
  comments?: CommentsType[];
  onReply?: (id: string, name: string) => void;
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

const Comments: FC<CommentsProps> = ({ comments }) => {
  console.log('comments: ', comments);
  const total = comments?.length;
  return (
    <CommentsContainer>
      <CommentsHeader>
        <Text display="inline" fontWeight="bold">
          {total}
        </Text>
        <Text> Comments</Text>
      </CommentsHeader>
      {comments && (
        <CommentsList>
          {comments.map(comment => (
            <CommentsItem key={comment.id}>
              <Text fontWeight="bold" bottomSpacing="sm2">
                {comment.name}
              </Text>
              <Paragraph fontSize="f1">{comment.message}</Paragraph>
              {comment.replies && (
                <CommentsList>
                  {comment.replies.map(comment => (
                    <CommentsItem key={comment.id} isReply>
                      <Text fontWeight="bold" bottomSpacing="sm2">
                        {comment.name}
                      </Text>
                      {comment.message}
                    </CommentsItem>
                  ))}
                </CommentsList>
              )}
            </CommentsItem>
          ))}
        </CommentsList>
      )}
    </CommentsContainer>
  );
};

export default Comments;
