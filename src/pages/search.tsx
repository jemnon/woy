import React, { FC } from 'react';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';
import { H4 } from '../atoms/Headings';

interface SearchPageProps {
  location: {
    pathname: string;
  };
}

const Search: FC<SearchPageProps> = ({ location }) => {
  return (
    <Layout>
      <SEO
        description="Whisper of yum search page"
        image="https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60"
        title="Search"
        type="website"
        pathname={location.pathname}
      />
      <Header />
      <Container hasTopMargin>
        <H4>Search</H4>
      </Container>
    </Layout>
  );
};

export default Search;
