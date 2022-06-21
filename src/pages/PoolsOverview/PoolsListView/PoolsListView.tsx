import { Collapse } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ammPools$ } from '../../../common/api/ammPools/ammPools';
import { useObservable } from '../../../common/hooks/useObservable';
import { AmmPool } from '../../../common/models/AmmPool';
import { WebView } from '../../../common/types/WebView';
import { PoolItemContent } from './PoolItemContent/PoolItemContent';
import { PoolItemHeader } from './PoolItemHeader/PoolItemHeader';

interface PoolsListVIewProps {
  readonly className?: string;
  readonly view: WebView;
  readonly expandHeight: number;
}

const COLLAPSE_TITLE_HEIGHT = 72.5;

const getAmmPoolsByWebView = (ammPools: AmmPool[], view: WebView): AmmPool[] =>
  ammPools.slice(0, view === WebView.EXPAND ? ammPools.length : 1);

const _PoolsListView: FC<PoolsListVIewProps> = ({
  className,
  view,
  expandHeight,
}) => {
  const [ammPools] = useObservable(ammPools$, []);

  return ammPools ? (
    <Collapse accordion className={className} defaultActiveKey={ammPools[0].id}>
      {getAmmPoolsByWebView(ammPools, view).map((ammPool) => (
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
