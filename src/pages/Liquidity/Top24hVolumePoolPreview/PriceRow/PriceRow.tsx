import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { AmmPool } from '../../../../common/models/AmmPool';

export const FullWidthBox = styled(Box)`
  width: 100%;
`;

export interface PriceRowProps {
  readonly ammPool: AmmPool;
}

export const PriceRow: FC<PriceRowProps> = ({ ammPool }) => {
  const [ratio, setRatio] = useState(ammPool.xRatio);

  useEffect(() => {}, []);

  const handlePriceViewClick = () => {
    setRatio((prev) => prev.invertRatio());
  };

  return (
    <FullWidthBox>
      <Flex justify="center">
        <Typography.Body align="center" onClick={handlePriceViewClick}>
          {ratio.toString()} {ratio.baseAsset.name} per {ratio.quoteAsset.name}
        </Typography.Body>
      </Flex>
    </FullWidthBox>
  );
};
