import React, { ChangeEvent, FormEvent, forwardRef, FC, useState } from 'react';
import styled from 'styled-components';
import Stack, { StackItem } from '../../organisms/Stack';
import Button from '../../atoms/Button';
import TextField, { TextArea } from '../../atoms/TextField';
import CommentsType from '../../types/comments';

interface CommentsFormProps {
  isLoading?: boolean;
  onSubmit?: (comment: Omit<CommentsType, 'replies'>) => void;
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
  ({ isLoading, onSubmit }, commentsFormRef) => {
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
              placeholder="Leave a Comment"
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
          </CommentsFormFooter>
        </Stack>
      </CommentsFormContainer>
    );
  },
);

export default CommentsForm;
