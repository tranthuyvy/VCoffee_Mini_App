import React, { Suspense } from 'react';
import { Page, Box } from 'zmp-ui';

import { Welcome } from './welcome';
import { Search } from './search';
import { Banner } from './banner'
import { Categories } from './categories'
import { Recommendation } from './recommendation';
import { Divider } from '../components/divider';

const HomePage: React.FunctionComponent = () => {


  return (
    <Page className='relative bg-white flex-1 flex flex-col'>
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Search />
        <Banner />
        <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <Recommendation />
        <Divider />

      </Box>
    </Page>
  );
};

export default HomePage;
