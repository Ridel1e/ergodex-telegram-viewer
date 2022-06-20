import { Button, Flex } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { networkContext$ } from '../../common/api/networkContext/networkContext';
import { useObservable } from '../../common/hooks/useObservable';
import { Top24hVolumePoolPreview } from './Top24hVolumePoolPreview/Top24hVolumePoolPreview';

export interface LiquidityProps {
  readonly isExpanded?: boolean;
  readonly expand: () => void;
}

export const Liquidity: FC<LiquidityProps> = ({ isExpanded, expand }) => {
  const [ctx] = useObservable(networkContext$, []);

  console.log(ctx);

  return (
    <Flex col stretch>
      <Flex.Item marginBottom={4} flex={1} stretch>
        <Top24hVolumePoolPreview />
      </Flex.Item>
      {!isExpanded && (
        <Button size="extra-large" type="primary" onClick={expand}>
          Show Pools
        </Button>
      )}
    </Flex>
  );
};
