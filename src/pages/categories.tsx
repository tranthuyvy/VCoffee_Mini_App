import React, { FC } from "react";
import { Box, Text } from "zmp-ui";
import category1 from "../static/data_pic/category-coffee.svg";
import category2 from "../static/data_pic/category-food.svg";

export const Categories: FC = () => {

  return (
    <Box className="bg-white grid grid-cols-4 gap-4 p-4">
      <div
        className="flex flex-col space-y-2 items-center"
      >
        <img className="w-12 h-12" src={category1} />
        <Text size="xxSmall" className="text-gray">
          coffee
        </Text>
      </div>

      <div
        className="flex flex-col space-y-2 items-center"
      >
        <img className="w-12 h-12" src={category2} />
        <Text size="xxSmall" className="text-gray">
          food
        </Text>
      </div>

    </Box>
  );
};
