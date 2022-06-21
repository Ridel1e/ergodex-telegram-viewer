import { LoadingOutlined, Typography } from '@ergolabs/ui-kit';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { StateContainer } from '../StateContainer/StateContainer';

export interface LoadingStateProps {
  readonly height: number;
  readonly children?: ReactNode | ReactNode[];
}

const LoadingIcon = styled(LoadingOutlined)`
  font-size: 40px;
  color: var(--ergo-table-view-icon);
`;

export const LoadingState: FC<LoadingStateProps> = ({ height, children }) => (
  <StateContainer height={height} icon={<LoadingIcon />}>
    <Typography.Body align="center">{children}</Typography.Body>
  </StateContainer>
);
