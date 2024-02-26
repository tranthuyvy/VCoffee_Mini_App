import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";

const CartPage: FC = () => {
  return (
    <Page>
      <Header title="Cart" showBackIcon={false} />
      <Text size='xLarge' className='font-serif text-[#491919]'>
        CartItem1
      </Text>
    </Page>
  );
};

export default CartPage;