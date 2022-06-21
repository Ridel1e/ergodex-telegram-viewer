import { Button, Flex } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { PoolsList } from './PoolsList/PoolsList';
import { Top24hVolumePoolPreview } from './Top24hVolumePoolPreview/Top24hVolumePoolPreview';

export interface LiquidityProps {
  readonly isExpanded?: boolean;
  readonly expand: () => void;
}

const FIRST_CARD_MAX_HEIGHT = Telegram.WebApp.viewportHeight - 100;

export const Liquidity: FC<LiquidityProps> = ({ isExpanded, expand }) => {
  return (
    <Flex col stretch>
      <Flex.Item style={{ height: FIRST_CARD_MAX_HEIGHT }} stretch>
        <Top24hVolumePoolPreview />
      </Flex.Item>
      {!isExpanded && (
        <Flex.Item marginTop={4}>
          <Button
            size="extra-large"
            type="primary"
            onClick={expand}
            style={{ width: '100%' }}
          >
            Show Pools
          </Button>
        </Flex.Item>
      )}
      {isExpanded && (
        <Flex.Item
          style={{ height: `calc(100vh - ${FIRST_CARD_MAX_HEIGHT}px)` }}
          marginTop={4}
        >
          <PoolsList />
        </Flex.Item>
      )}
    </Flex>
  );
};
