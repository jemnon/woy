import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

interface MessageProps {
  color: string;
}

const Form = styled.form`
  border: none;
`;

const Message = styled.p<MessageProps>`
  color: ${({ theme }): string => theme.colors.white};
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ theme, color }): string => theme.colors[color]};
`;

const EmailNewsletterContainer = styled.section``;

const EmailNewsletter: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isEmailDirty, setIsEmailDirty] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<boolean>(false);
  const handleSubmit = async (event: FormEvent<EventTarget>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await addToMailchimp(email);
      setIsSubmitting(false);
      setSuccess('Thank you for subscribing.');
    } catch (error) {
      setIsSubmitting(false);
      setError('There was an error. Please try again.');
    }
    console.log('do submit');
  };
  return (
    <EmailNewsletterContainer>
      {error && <Message color="red">{error}</Message>}
      {success && <Message color="green">{success}</Message>}
      <Form name="email-newsletter" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Subscribe to our Newletter</label>
        <input
          id="email"
          disabled={isSubmitting}
          onChange={({ target }): void => {
            setEmail(target.value);
            setValidationError(!target.validity.valid);
          }}
          onBlur={(): void => {
            setIsEmailDirty(true);
          }}
          type="email"
          placeholder="email"
          name="email"
          value={email}
          required
          pattern="[^@]+@.+\..+"
        />
        <button type="submit">Subscribe</button>
      </Form>
    </EmailNewsletterContainer>
  );
};

export default EmailNewsletter;
