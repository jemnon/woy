import React, { FC } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import Img from 'gatsby-image';
import Grid, { GridCell } from '../../organisms/Grid';
import Newsletter from '../../organisms/Newsletter';
import Scroller from '../../organisms/Scroller';
import { VStack } from '../../organisms/Stack';
import ProfileCard from '../../molecules/ProfileCard';
import AdUnit from '../../atoms/AdUnit';
import Box from '../../atoms/Box';
import { H4 } from '../../atoms/Headings';
import ImgWrapper from '../../atoms/ImgWrapper';
import Link from '../../atoms/Link';
import { InstaDesktop, InstaMobile } from '../../atoms/InstagramContainer';
import FeaturedOnType from '../../types/featured-on';
import InstagramType from '../../types/instagram';
import ProfileAboutType from '../../types/profile-about';
import useAd from '../../hooks/useAd';

interface SideContentProps {
  about?: ProfileAboutType;
  featuredOn?: FeaturedOnType;
  instagram?: {
    node: InstagramType;
  }[];
}

const SideContentContainer = styled.aside`
  width: 100%;
`;

const SideContent: FC<SideContentProps> = ({
  about,
  featuredOn,
  instagram,
}) => {
  const location = useLocation();
  useAd({ key: location?.key, size: 'flexrec', id: 'skm-ad-flexrec-1' });
  useAd({ key: location?.key, size: 'sky', id: 'skm-ad-sky-1' });
  useAd({ key: location?.key, size: 'medrec', id: 'skm-ad-medrec-1' });
  return (
    <SideContentContainer>
      <VStack sp="xlg4">
        {about && (
          <ProfileCard
            descriptionHtml={about?.description.childMarkdownRemark.html}
            image={about?.avatar.fixed.src}
            name={about?.name}
            onClick={(): void => {
              navigate('/about');
            }}
          />
        )}
        <AdUnit>
          <div id="skm-ad-medrec-1" />
        </AdUnit>
        <div>
          <H4>Newsletter</H4>
          <Newsletter />
        </div>
        <AdUnit>
          <div id="skm-ad-sky-1" />
        </AdUnit>
        {featuredOn && (
          <div>
            <H4>Featured On</H4>
            <Grid columns={3} rowGap="sm4" gap="sm4">
              {featuredOn.logos.map((logo, idx) => (
                <Link key={idx} to={featuredOn.links[idx]} target="_blank">
                  <Box
                    display="flex"
                    bgColor="nearWhite"
                    width="100%"
                    padding="sm4"
                    height="100%"
                  >
                    {logo.fluid && (
                      <Img
                        alt="feature on logos"
                        fluid={logo.fluid}
                        style={{ width: '100%' }}
                      />
                    )}
                  </Box>
                </Link>
              ))}
            </Grid>
          </div>
        )}
        {instagram && (
          <div>
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
                          src={item.node.localImage?.childImageSharp.fixed.src}
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
                        src={item.node.localImage?.childImageSharp.fixed.src}
                      />
                    </ImgWrapper>
                  </Link>
                ))}
              </Scroller>
            </InstaMobile>
          </div>
        )}
        <AdUnit>
          <div id="skm-ad-flexrec-1" />
        </AdUnit>
      </VStack>
    </SideContentContainer>
  );
};

export default SideContent;
