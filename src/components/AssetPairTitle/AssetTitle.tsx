import { AssetInfo } from '@ergolabs/ergo-sdk/build/main/entities/assetInfo';
import { Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { AssetIconPair } from '../AssetIconPair/AssetIconPair';

export interface TokenTitleProps {
  readonly assetX?: AssetInfo;
  readonly assetY?: AssetInfo;
  readonly size?: 'large' | 'small';
}

export const AssetTitle: FC<TokenTitleProps> = ({ assetX, assetY, size }) => (
  <Flex align="center">
    <Flex.Item marginRight={1}>
      <AssetIconPair size={size} assetY={assetY} assetX={assetX} />
    </Flex.Item>
    <Typography.Title level={5}>{assetX?.name}</Typography.Title> /
    <Typography.Title level={5}>{assetY?.name}</Typography.Title>
  </Flex>
);
