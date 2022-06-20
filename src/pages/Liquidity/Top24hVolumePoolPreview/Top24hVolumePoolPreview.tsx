import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { AssetIconPair } from '../../../components/AssetIconPair/AssetIconPair';

export const Top24hVolumePoolPreview: FC = () => (
  <Flex col>
    <Flex.Item marginBottom={1}>
      <Typography.Title level={4}>Top 1 by 24h Volume</Typography.Title>
    </Flex.Item>
    <Flex.Item>
      <Box contrast padding={2}>
        <AssetIconPair assetX={undefined} assetY={undefined} />
      </Box>
    </Flex.Item>
  </Flex>
);
