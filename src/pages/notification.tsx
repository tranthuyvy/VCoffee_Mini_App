import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "../components/divider";

const NotificationList: FC = () => {

  return (

    <Box className="bg-background">
      <Text size='xLarge' className='font-serif text-[#491919]'>
        Notification1
      </Text>
    </Box>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

export default NotificationPage;
