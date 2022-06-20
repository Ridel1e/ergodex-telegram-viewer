import { Button, Flex } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { Top24hVolumePoolPreview } from './Top24hVolumePoolPreview/Top24hVolumePoolPreview';

export interface LiquidityProps {
  readonly isExpanded?: boolean;
  readonly expand: () => void;
}

export const Liquidity: FC<LiquidityProps> = ({ isExpanded, expand }) => (
  <Flex col stretch>
    <Flex.Item marginBottom={4} flex={1}>
      <Top24hVolumePoolPreview />
    </Flex.Item>
    {!isExpanded && (
      <Button size="extra-large" type="primary" onClick={expand}>
        Show Pools
      </Button>
    )}
  </Flex>
);
