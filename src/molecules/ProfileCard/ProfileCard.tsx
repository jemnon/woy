import React, { FC } from 'react';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar';
import Paragraph from '../../atoms/Paragraph';
import Text from '../../atoms/Text';
import CalloutLink from '../CalloutLink';

interface ProfileCardProps {
  description: string;
  image: string;
  onClick?: () => void;
}

const ProfileCardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: ${({ theme }): string => theme.spacing.md4};
  padding-bottom: ${({ theme }): string => theme.spacing.md4};
  padding-left: ${({ theme }): string => theme.spacing.sm4};
  padding-right: ${({ theme }): string => theme.spacing.sm4};

  background-color: ${({ theme }): string => theme.colors.nearWhite};
`;

const ProfileCardName = styled.h5`
  margin-bottom: ${({ theme }): string => theme.spacing.sm4};
`;

const ProfileCardDivider = styled.div`
  width: 45px;
  height: 4px;

  background-color: ${({ theme }): string => theme.colors.orange};

  margin-bottom: ${({ theme }): string => theme.spacing.sm4};
`;

const ProfileFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;

const ProfileCard: FC<ProfileCardProps> = ({ description, image, onClick }) => (
  <ProfileCardContainer>
    <Avatar alt="jerildine" src={image} />
    <ProfileCardName as={Text} fontSize="f4" fontWeight="bold">
      Jerildine
    </ProfileCardName>
    <ProfileCardDivider />
    <Paragraph>{description}</Paragraph>
    <ProfileFooter>
      <CalloutLink colorScheme="nearBlack" onClick={onClick}>
        More
      </CalloutLink>
    </ProfileFooter>
  </ProfileCardContainer>
);

export default ProfileCard;
