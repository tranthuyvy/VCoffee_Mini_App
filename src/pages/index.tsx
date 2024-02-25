import React from 'react';
import { List, Page, Icon, useNavigate } from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userState } from '../state';

import { Welcome } from './welcome';

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className='page'>
      <Welcome />
    </Page>
  );
};

export default HomePage;
