import React, {
  ChangeEvent,
  FormEvent,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import styled from 'styled-components';
import Rating from '../../molecules/Rating';
import Stack, { StackItem } from '../../organisms/Stack';
import Button, { ButtonGroup } from '../../atoms/Button';
import TextField, { TextArea } from '../../atoms/TextField';
import CommentsType from '../../types/comments';

interface CommentsFormProps {
  commentId?: string;
  isLoading?: boolean;
  onCancelReply?: () => void;
  onSubmit: (comment: Omit<CommentsType, 'replies'>) => void;
  replyName?: string;
}

const CommentsFormContainer = styled.form`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
`;

const CommentsFormFooter = styled.footer`
  ${up('sm')} {
    display: flex;
    justify-content: center;
  }
`;

const CommentsForm = forwardRef<HTMLFormElement, CommentsFormProps>(
  (
    { commentId, isLoading, onCancelReply, onSubmit, replyName },
    commentsFormRef,
  ) => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const handleEmailSubmit = (event: FormEvent<EventTarget>): void => {
      event.preventDefault();
      const timestamp = Date.now();
      onSubmit({ name, message, email, rating, timestamp });
    };
    const isSmallUp = useBreakpoint(up('sm'));
    useEffect(() => {
      if (commentId) setRating(0);
    }, [commentId]);
    return (
      <>
        <Rating
          commentId={commentId}
          onSetRating={(val: number): void => {
            setRating(val);
          }}
        />
        <CommentsFormContainer
          name="comments-form"
          method="POST"
          onSubmit={handleEmailSubmit}
          ref={commentsFormRef}
        >
          <Stack bottomSpacing="sp-0">
            <StackItem bottomSpacing="sm4">
              <TextField
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                required
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                  setName(event.target.value);
                }}
              />
            </StackItem>
            <StackItem bottomSpacing="sm4">
              <TextField
                id="email"
                name="email"
                pattern="[^@]+@.+\..+"
                placeholder="Email (optional)"
                type="email"
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                  setEmail(event.target.value);
                }}
              />
            </StackItem>
            <StackItem bottomSpacing="sm4">
              <TextArea
                id="message"
                name="message"
                placeholder={
                  replyName ? `Replying to ${replyName}` : 'Leave a Comment'
                }
                required
                onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                  setMessage(event.target.value);
                }}
              />
            </StackItem>
            <CommentsFormFooter>
              <ButtonGroup flow={isSmallUp ? 'row' : 'column'} sp="sm3">
                <Button
                  isDisabled={isLoading}
                  disabled={isLoading}
                  isLoading={isLoading}
                  minWidth={false}
                  type="submit"
                  width={isSmallUp ? '10rem' : '100%'}
                >
                  {isLoading ? '...Loading' : 'Comment'}
                </Button>
                {replyName && onCancelReply && (
                  <Button
                    onClick={onCancelReply}
                    minWidth={false}
                    variant="outline"
                    width={isSmallUp ? '10rem' : '100%'}
                  >
                    Cancel Reply
                  </Button>
                )}
              </ButtonGroup>
            </CommentsFormFooter>
          </Stack>
        </CommentsFormContainer>
      </>
    );
  },
);

export default CommentsForm;
