import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { hexToRGBA } from '../../utils/colors';
import Button from '../../atoms/Button';
import CloseButton from '../../atoms/CloseButton';
import Text from '../../atoms/Text';
import TextField from '../../atoms/TextField';

const NewsletterFormContainer = styled.form`
  position: relative;
`;

const NewsetterMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z2};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: ${({ theme: { spacing } }): string => spacing.sm4};

  background-color: ${({ theme: { colors } }): string =>
    `${hexToRGBA(colors.white, 95)}`};
`;

const NewsletterFormField = styled.input<{ hasError?: boolean }>`
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

const NewsletterForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleReset = (): void => {
    setMessage(null);
    setIsError(false);
  };

  const handleSubmit = async (event: FormEvent<EventTarget>): Promise<void> => {
    event.preventDefault();
    if (isError) {
      setIsError(false);
    }
    setIsSubmitting(true);
    try {
      await addToMailchimp(email);
      setIsSubmitting(false);
      setMessage('Thank you for subscribing.');
    } catch (error) {
      setIsSubmitting(false);
      setIsError(true);
      setMessage('There was an error. Please try again.');
    }
  };
  return (
    <NewsletterFormContainer
      name="newsletter"
      method="POST"
      onSubmit={handleSubmit}
    >
      {message && (
        <NewsetterMessage>
          <Text
            fontWeight="bold"
            textAlign="center"
            textColor={isError ? 'red' : 'green'}
          >
            {message}
          </Text>
          <CloseButton onClick={handleReset} />
        </NewsetterMessage>
      )}
      <NewsletterFormField
        as={TextField}
        disabled={isSubmitting}
        id="email"
        name="email"
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          setEmail(event.target.value);
        }}
        pattern="[^@]+@.+\..+"
        placeholder="Email"
        required
        type="email"
        value={email}
      />
      <NewsletterFormButton
        as={Button}
        disabled={isSubmitting}
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        shape="rectangle"
        type="submit"
      >
        {isSubmitting ? '...loading' : 'Submit'}
      </NewsletterFormButton>
    </NewsletterFormContainer>
  );
};

export default NewsletterForm;
