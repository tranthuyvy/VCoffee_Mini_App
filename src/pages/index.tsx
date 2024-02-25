import React from 'react';
import { Page, Box } from 'zmp-ui';

import { Welcome } from './welcome';
import { Search } from './search';
import { Banner } from './banner'

const HomePage: React.FunctionComponent = () => {


  return (
    <Page className='relative bg-white'>
      <Welcome />
      <Box className="">
        <Search />
        <Banner />
      </Box>
    </Page>
  );
};

export default HomePage;
