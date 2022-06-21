import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { AmmPool } from '../../../../common/models/AmmPool';
import { formatToUSD } from '../../../../common/utils/number';
import { AssetPairTitle } from '../../../../components/AssetPairTitle/AssetPairTitle';

export interface PoolItemHeaderProps {
  readonly ammPool: AmmPool;
}

export const PoolItemHeader: FC<PoolItemHeaderProps> = ({ ammPool }) => (
  <Flex align="center">
    <Flex.Item flex={1}>
      <AssetPairTitle assetX={ammPool.x.asset} assetY={ammPool.y.asset} />
    </Flex.Item>
    <Box>
      <Typography.Body>
        {ammPool.tvl && formatToUSD(ammPool.tvl.currency, 'abbr')}
      </Typography.Body>
    </Box>
  </Flex>
);
