import React from 'react';
import { Page, Box } from 'zmp-ui';

import { Welcome } from './welcome';
import { Search } from './search';
import { Banner } from './banner'
import { Categories } from './categories'
import { Recommendation } from './recommendation';

const HomePage: React.FunctionComponent = () => {


  return (
    <Page className='relative bg-white flex-1 flex flex-col'>
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Search />
        <Banner />

        <Categories />
        <Recommendation />
      </Box>
    </Page>
  );
};

export default HomePage;
