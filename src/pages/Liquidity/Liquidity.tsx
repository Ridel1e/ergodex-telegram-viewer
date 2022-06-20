import { Flex } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { Top24hVolumePoolPreview } from './Top24hVolumePoolPreview/Top24hVolumePoolPreview';

export interface LiquidityProps {
  readonly a?: string;
}

export const Liquidity: FC<LiquidityProps> = () => (
  <Flex col>
    <Flex.Item marginBottom={4}>
      <Top24hVolumePoolPreview />
    </Flex.Item>
    <Top24hVolumePoolPreview />
  </Flex>
);
