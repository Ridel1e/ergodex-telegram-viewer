import { Flex, List, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { ammPools$ } from '../../../common/api/ammPools/ammPools';
import { useObservable } from '../../../common/hooks/useObservable';
import { PoolItemView } from './PoolItemView/PoolItemView';

export const PoolsList: FC = () => {
  const [ammPools] = useObservable(ammPools$, [], []);

  return (
    <Flex col stretch>
      <Flex.Item marginBottom={1}>
        <Typography.Title level={4}>Pools Overview</Typography.Title>
      </Flex.Item>
      <Flex.Item flex={1}>
        <List dataSource={ammPools} height={'100%' as any}>
          {(ammPool) => <PoolItemView ammPool={ammPool} />}
        </List>
      </Flex.Item>
    </Flex>
  );
};
