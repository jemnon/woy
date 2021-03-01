import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
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
`;

const CommentsFormFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

const CommentsForm: FC<CommentsFormProps> = ({ isLoading, onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [handle, setHandle] = useState<string>('');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const handleSubmit = (event: FormEvent<EventTarget>): void => {
    event.preventDefault();
    const timestamp = Date.now();
    if (onSubmit) onSubmit({ name, message, handle, rating, timestamp });
  };
  return (
    <CommentsFormContainer
      name="comments-form"
      method="POST"
      onSubmit={handleSubmit}
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
            id="handle"
            name="handle"
            placeholder="Social Handle (optional)"
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setHandle(event.target.value);
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
};

export default CommentsForm;
