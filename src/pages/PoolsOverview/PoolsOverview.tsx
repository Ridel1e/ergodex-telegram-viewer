import { Button, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import styled from 'styled-components';

import { WebView } from '../../common/types/WebView';
import { PoolsListView } from './PoolsListView/PoolsListView';

export interface PoolsOverviewProps {
  readonly isExpanded?: boolean;
  readonly expand: () => void;
}

const INITIAL_CONTENT_HEIGHT = Telegram.WebApp.viewportHeight - 134;

const ActionButton = styled(Button)`
  width: 100%;
`;

export const PoolsOverview: FC<PoolsOverviewProps> = ({
  isExpanded,
  expand,
}) => {
  return (
    <Flex col stretch>
      <Flex.Item marginBottom={1}>
        <Typography.Title level={4}>Pools overview</Typography.Title>
      </Flex.Item>
      <Flex.Item flex={1}>
        <PoolsListView
          expandHeight={INITIAL_CONTENT_HEIGHT}
          view={isExpanded ? WebView.EXPAND : WebView.PARTIAL}
        />
      </Flex.Item>
      <Flex.Item marginTop={4}>
        <ActionButton size="extra-large" type="primary" onClick={expand}>
          Show More Pools
        </ActionButton>
      </Flex.Item>
    </Flex>
  );
};
