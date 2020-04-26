import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from '../Button';

interface EmailNewsletterInputProps {
  validationError?: boolean;
}

const EmailNewsletterForm = styled.form`
  display: grid;
  grid-template-areas:
    'label label'
    'input button';
  grid-template-columns: 71% auto;
  border: none;
`;

const EmailNewsletterLabel = styled.label`
  grid-area: label;
  text-transform: uppercase;
  font-size: 0.875;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 0.75rem;
  }
`;

const EmailNewsletterInput = styled.input<EmailNewsletterInputProps>`
  grid-area: input;
  border: 0;
  border-bottom: 2px solid
    ${({ theme, validationError }): string =>
      validationError ? theme.colors.red : theme.colors.white};
  background-color: transparent;
  padding: 0.5rem;
  margin-right: 2rem;
  color: ${({ theme }): string => theme.colors.white};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.125rem;
  }
  font-size: 1rem;
  &:focus {
    outline: none;
    /* border-bottom-color: ${({ theme, validationError }): string =>
      validationError ? theme.colors.red : theme.colors.lightBrown}; */
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const EmailNewsletterMessage = styled.p`
  color: ${({ theme }): string => theme.colors.orange};
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: ${({ theme, color }): string => theme.colors.white};
`;

const EmailNewsletterContainer = styled.section`
  max-width: 32rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const EmailNewsletter: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<boolean>(false);
  const handleSubmit = async (event: FormEvent<EventTarget>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await addToMailchimp(email);
      setIsSubmitting(false);
      setMessage('Thank you for subscribing.');
    } catch (error) {
      setIsSubmitting(false);
      setMessage('There was an error. Please try again.');
    }
  };
  return (
    <EmailNewsletterContainer id="newsletter">
      {message && <EmailNewsletterMessage>{message}</EmailNewsletterMessage>}
      <EmailNewsletterForm
        name="email-newsletter"
        method="POST"
        onSubmit={handleSubmit}
      >
        <EmailNewsletterLabel htmlFor="email">
          Subscribe to our Newletter
        </EmailNewsletterLabel>
        <EmailNewsletterInput
          disabled={isSubmitting}
          id="email"
          name="email"
          onChange={({ target }): void => {
            setEmail(target.value);
            setValidationError(!target.validity.valid);
          }}
          pattern="[^@]+@.+\..+"
          placeholder="Email"
          required
          type="email"
          value={email}
        />
        <Button
          color="white"
          textColor="orange"
          isDisabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? '...Sending' : 'Subscribe'}
        </Button>
      </EmailNewsletterForm>
    </EmailNewsletterContainer>
  );
};

export default EmailNewsletter;
