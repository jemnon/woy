import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';

interface NewsletterFormProps {}

const NewsletterFormContainer = styled.form`
  position: relative;
`;

const NewsletterFormField = styled.input`
  position: relative;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z0};

  height: 3.25rem;

  padding-right: 122px;
`;

const NewsletterFormButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z1};

  max-width: 110px;
  min-width: auto;

  font-size: ${({ theme: { fontSizes } }): string => fontSizes['f-xsm']};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const NewsletterForm: FC<NewsletterFormProps> = () => {
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
    <NewsletterFormContainer
      name="newsletter"
      method="POST"
      onSubmit={handleSubmit}
    >
      <NewsletterFormField
        as={TextField}
        disabled={isSubmitting}
        id="email"
        name="email"
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          setEmail(event.target.value);
          setValidationError(!event.target.validity.valid);
        }}
        pattern="[^@]+@.+\..+"
        placeholder="Email"
        required
        type="email"
        value={email}
      />
      <NewsletterFormButton as={Button} shape="rectangle">
        Submit
      </NewsletterFormButton>
    </NewsletterFormContainer>
  );
};

export default NewsletterForm;
