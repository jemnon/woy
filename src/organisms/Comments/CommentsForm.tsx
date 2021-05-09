import React, {
  ChangeEvent,
  createContext,
  FormEvent,
  forwardRef,
  useContext,
  useState,
} from 'react';
import styled from 'styled-components';
import Stack, { StackItem } from '../../organisms/Stack';
import Button from '../../atoms/Button';
import TextField, { TextArea } from '../../atoms/TextField';
import CommentsType from '../../types/comments';

interface CommentsFormProps {
  isLoading?: boolean;
  onCancelReply?: () => void;
  onSubmit?: (comment: Omit<CommentsType, 'replies'>) => void;
  replyName?: string;
}

const CommentsFormContainer = styled.form`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};

  &:focus {
    border: 1px solid #000;
  }
`;

const CommentsFormFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

const CommentsForm = forwardRef<HTMLFormElement, CommentsFormProps>(
  ({ isLoading, onCancelReply, onSubmit, replyName }, commentsFormRef) => {
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [rating, setRating] = useState<number | undefined>(undefined);
    const emailSubmit = (event: FormEvent<EventTarget>): void => {
      event.preventDefault();
      const timestamp = Date.now();
      if (onSubmit) onSubmit({ name, message, email, rating, timestamp });
    };
    return (
      <CommentsFormContainer
        name="comments-form"
        method="POST"
        onSubmit={emailSubmit}
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
            <Button
              isDisabled={isLoading}
              disabled={isLoading}
              isLoading={isLoading}
              type="submit"
            >
              {isLoading ? '...Loading' : 'Comment'}
            </Button>
            {replyName && onCancelReply && (
              <Button onClick={onCancelReply} variant="outline">
                Cancel Reply
              </Button>
            )}
          </CommentsFormFooter>
        </Stack>
      </CommentsFormContainer>
    );
  },
);

export default CommentsForm;
