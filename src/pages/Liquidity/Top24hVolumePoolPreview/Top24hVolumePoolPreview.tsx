import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { PriceRow } from './PriceRow/PriceRow';
import { TitleRow } from './TitleRow/TitleRow';

export const Top24hVolumePoolPreview: FC = () => (
  <Flex col>
    <Flex.Item marginBottom={1}>
      <Typography.Title level={4}>Top 1 by 24h Volume</Typography.Title>
    </Flex.Item>
    <Flex.Item>
      <Box contrast padding={2}>
        <Flex col>
          <Flex.Item marginBottom={2}>
            <TitleRow />
          </Flex.Item>
          <Flex.Item marginBottom={2}>
            <PriceRow />
          </Flex.Item>
        </Flex>
      </Box>
    </Flex.Item>
  </Flex>
);
