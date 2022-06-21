import { Button, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ammPools$ } from '../../common/api/ammPools/ammPools';
import { useObservable } from '../../common/hooks/useObservable';
import { WebView } from '../../common/types/WebView';
import { PoolsListView } from './PoolsListView/PoolsListView';

export interface PoolsOverviewProps {
  readonly isExpanded?: boolean;
  readonly expand: () => void;
}

const INITIAL_CONTENT_HEIGHT = Telegram.WebApp.viewportHeight - 142;

const ActionButton = styled(Button)`
  width: 100%;
`;

export const PoolsOverview: FC<PoolsOverviewProps> = ({
  isExpanded,
  expand,
}) => {
  const [ammPools, loading] = useObservable(ammPools$, []);

  return (
    <Flex col stretch>
      <Flex.Item marginBottom={1}>
        <Typography.Title level={4}>Pools overview</Typography.Title>
      </Flex.Item>
      <Flex.Item flex={1}>
        <PoolsListView
          ammPools={ammPools}
          ammPoolsLoading={loading}
          contentHeight={INITIAL_CONTENT_HEIGHT}
          view={isExpanded ? WebView.EXPAND : WebView.PARTIAL}
        />
      </Flex.Item>
      <Flex.Item marginTop={4}>
        <ActionButton
          size="extra-large"
          type="primary"
          onClick={expand}
          loading={loading}
        >
          Show More Pools
        </ActionButton>
      </Flex.Item>
    </Flex>
  );
};
