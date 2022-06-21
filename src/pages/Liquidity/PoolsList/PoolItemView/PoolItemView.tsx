import { Box } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import styled from 'styled-components';

import { AmmPool } from '../../../../common/models/AmmPool';

export interface PoolItemViewProps {
  readonly ammPool: AmmPool;
}

const _PoolItemView: FC<PoolItemViewProps> = () => <Box>Test</Box>;

export const PoolItemView = styled(_PoolItemView)``;
