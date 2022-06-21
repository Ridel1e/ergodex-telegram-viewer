import { Collapse } from '@ergolabs/ui-kit';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { AmmPool } from '../../../common/models/AmmPool';
import { PoolId } from '../../../common/types/common';
import { WebView } from '../../../common/types/WebView';
import { PoolItemContent } from './PoolItemContent/PoolItemContent';
import { PoolItemHeader } from './PoolItemHeader/PoolItemHeader';

interface PoolsListVIewProps {
  readonly className?: string;
  readonly view: WebView;
  readonly ammPools?: AmmPool[] | undefined;
  readonly ammPoolsLoading?: boolean;
  readonly expandHeight: number;
}

const COLLAPSE_TITLE_HEIGHT = 72.5;

const getAmmPoolsByWebView = (
  ammPools: AmmPool[],
  activePoolId: PoolId | undefined,
  view: WebView,
): AmmPool[] => {
  if (view === WebView.EXPAND) {
    return ammPools;
  }
  if (!activePoolId) {
    return [ammPools[0]];
  }
  return ammPools.filter((ap) => ap.id === activePoolId);
};

const _PoolsListView: FC<PoolsListVIewProps> = ({
  className,
  view,
  expandHeight,
  ammPools,
  ammPoolsLoading,
}) => {
  const [activePoolId, setActivePoolId] = useState<PoolId | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!activePoolId && ammPools) {
      setActivePoolId(ammPools[0].id);
    }
  }, [ammPools]);

  const handlePoolItemClick = (poolId: PoolId | PoolId[]) => {
    if (typeof poolId === 'string') {
      setActivePoolId(poolId);
    }
  };

  return ammPools ? (
    <Collapse
      accordion
      className={className}
      activeKey={activePoolId}
      onChange={handlePoolItemClick}
    >
      {getAmmPoolsByWebView(ammPools, activePoolId, view).map((ammPool) => (
        <Collapse.Panel
          collapsible={view === WebView.EXPAND ? 'header' : 'disabled'}
          showArrow={false}
          key={ammPool.id}
          header={<PoolItemHeader ammPool={ammPool} />}
        >
          <PoolItemContent
            ammPool={ammPool}
            contentHeight={expandHeight - COLLAPSE_TITLE_HEIGHT}
          />
        </Collapse.Panel>
      ))}
    </Collapse>
  ) : null;
};

export const PoolsListView = styled(_PoolsListView)`
  > .ant-collapse-item {
    background: var(--ergo-box-bg-contrast);
    border: 1px solid var(--ergo-box-border-color) !important;
    border-radius: var(--ergo-border-radius-md) !important;

    &:not(:last-child) {
      margin-bottom: var(--ergo-base-gutter);
    }
  }

  .ant-collapse-item,
  .ant-collapse-content,
  .ant-collapse-content-box {
    will-change: height;
    transform: translateZ(0);
  }

  .ant-collapse-content-box {
    height: 100%;
  }

  .ant-collapse-content-box {
    background: var(--ergo-box-bg-contrast);
    padding-top: 0;
  }

  .ant-collapse-header-text {
    width: 100%;
  }
`;
