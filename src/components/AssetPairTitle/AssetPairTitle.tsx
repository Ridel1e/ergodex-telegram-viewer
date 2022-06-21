import { AssetInfo } from '@ergolabs/ergo-sdk/build/main/entities/assetInfo';
import { Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';

import { AssetIconPair } from '../AssetIconPair/AssetIconPair';
import { Truncate } from '../Truncate/Truncate';

export interface TokenTitleProps {
  readonly assetX?: AssetInfo;
  readonly assetY?: AssetInfo;
  readonly size?: 'large' | 'small';
}

export const AssetPairTitle: FC<TokenTitleProps> = ({
  assetX,
  assetY,
  size,
}) => (
  <Flex align="center">
    <Flex.Item marginRight={1}>
      <AssetIconPair size={size} assetY={assetY} assetX={assetX} />
    </Flex.Item>
    <Flex.Item marginRight={1}>
      <Typography.Body>
        <Truncate>{`${assetX?.name} / ${assetY?.name}`}</Truncate>
      </Typography.Body>
    </Flex.Item>
  </Flex>
);
