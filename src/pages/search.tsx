import React from "react";
import { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";

export const Search: FC = () => {

  return (
    <Box p={4} className="bg-white">
      <Input.Search
        placeholder="Search ..."
      />
    </Box>
  );
};
