import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from '../Button';

interface EmailNewsletterInputProps {
  validationError?: boolean;
}

const EmailNewsletterForm = styled.form`
  border: none;
  display: grid;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    grid-template-columns: 71% auto;
    grid-template-areas:
      'label label'
      'input button';
  }
  grid-template-areas:
    'label label'
    'input input'
    'button button';
`;

const EmailNewsletterLabel = styled.label`
  grid-area: label;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  /* padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }): string => theme.colors.white}; */
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 0.875rem;
  }
`;

const EmailNewsletterInput = styled.input<EmailNewsletterInputProps>`
  grid-area: input;
  border: 0;
  border-bottom: 2px solid
    ${({ theme, validationError }): string =>
      validationError ? theme.colors.red : theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.white};
  padding: 1rem;
  color: ${({ theme }): string => theme.colors.orange};
  margin-bottom: 1rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    /* font-size: 1.125rem; 
    margin-right: 2rem; */
    margin-bottom: 0;
  }
  font-size: 1rem;
  &:focus {
    outline: none;
    /* border-bottom-color: ${({ theme, validationError }): string =>
      validationError ? theme.colors.red : theme.colors.lightBrown}; */
  }
  ::placeholder {
    color: rgba(170, 97, 67, 0.75);
  }
`;

const EmailNewsletterMessage = styled.p`
  color: ${({ theme }): string => theme.colors.orange};
  padding: 0.5rem;
  background-color: ${({ theme }): string => theme.colors.white};
`;

const EmailNewsletterContainer = styled.section`
  /* margin-bottom: 2rem; */
  grid-area: newsletter;
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
      {!message && (
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
            borderColor="white"
            color="orange"
            textColor="white"
            isDisabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? '...Sending' : 'Subscribe'}
          </Button>
        </EmailNewsletterForm>
      )}
    </EmailNewsletterContainer>
  );
};

export default EmailNewsletter;
