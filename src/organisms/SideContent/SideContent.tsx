import React, { FC } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Grid, { GridCell } from '../../organisms/Grid';
import Newsletter from '../../organisms/Newsletter';
import Scroller from '../../organisms/Scroller';
import Stack from '../../organisms/Stack';
import ProfileCard from '../../molecules/ProfileCard';
import { H4 } from '../../atoms/Headings';
import ImgWrapper from '../../atoms/ImgWrapper';
import Link from '../../atoms/Link';
import { InstaDesktop, InstaMobile } from '../../atoms/InstagramContainer';
import InstagramType from '../../types/instagram';
import ProfileAboutType from '../../types/profile-about';

interface SideContentProps {
  about?: ProfileAboutType;
  instagram?: {
    node: InstagramType;
  }[];
}

const SideContentContainer = styled.aside`
  width: 100%;
`;

const SideContent: FC<SideContentProps> = ({ about, instagram }) => {
  console.log(instagram);
  return (
    <SideContentContainer>
      {about && (
        <Stack>
          <ProfileCard
            descriptionHtml={about?.description.childMarkdownRemark.html}
            image={about?.avatar.fixed.src}
            name={about?.name}
            onClick={(): void => {
              navigate('/about');
            }}
          />
        </Stack>
      )}
      <Stack>
        <H4>Newsletter</H4>
        <Newsletter />
      </Stack>
      {instagram && (
        <Stack>
          <H4>Instagram</H4>
          <InstaDesktop>
            <Grid columns={2} gap="sm4" rowGap="sm4">
              {instagram.map(item => (
                <GridCell key={item.node.id} width={1}>
                  <Link to={item.node.permalink} target="_blank">
                    <ImgWrapper ratio={1 / 1}>
                      <img
                        alt="whisperofyum instagram"
                        loading="lazy"
                        src={item.node.localImage.childImageSharp.fixed.src}
                      />
                    </ImgWrapper>
                  </Link>
                </GridCell>
              ))}
            </Grid>
          </InstaDesktop>
          <InstaMobile>
            <Scroller>
              {instagram.map(item => (
                <Link
                  to={item.node.permalink}
                  key={item.node.id}
                  target="_blank"
                >
                  <ImgWrapper ratio={1 / 1}>
                    <img
                      alt="whisperofyum instagram"
                      loading="lazy"
                      src={item.node.localImage.childImageSharp.fixed.src}
                    />
                  </ImgWrapper>
                </Link>
              ))}
            </Scroller>
          </InstaMobile>
        </Stack>
      )}
    </SideContentContainer>
  );
};

export default SideContent;
