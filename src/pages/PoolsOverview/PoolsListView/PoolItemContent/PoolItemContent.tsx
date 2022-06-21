import { Flex } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { AmmPool } from '../../../../common/models/AmmPool';
import { PriceChart } from './PriceChart/PriceChart';
import { RatioView } from './RatioView/RatioView';

export interface PoolItemContentProps {
  readonly ammPool: AmmPool;
  readonly contentHeight: number;
}

export const PoolItemContent: FC<PoolItemContentProps> = ({
  ammPool,
  contentHeight,
}) => (
  <Flex col style={{ height: contentHeight }}>
    <Flex.Item marginBottom={2}>
      <RatioView ammPool={ammPool} />
    </Flex.Item>
    <Flex.Item flex={1}>
      <PriceChart ammPool={ammPool} />
    </Flex.Item>
  </Flex>
);
