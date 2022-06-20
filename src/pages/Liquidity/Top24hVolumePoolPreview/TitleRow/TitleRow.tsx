import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { networkAsset } from '../../../../common/api/networkAsset/networkAsset';
import { AssetPairTitle } from '../../../../components/AssetPairTitle/AssetPairTitle';

export const TitleRow: FC = () => (
  <Flex align="center">
    <Flex.Item flex={1}>
      <AssetPairTitle assetX={networkAsset} assetY={networkAsset} />
    </Flex.Item>
    <Box>
      <Typography.Body>$55.24k</Typography.Body>
    </Box>
  </Flex>
);
