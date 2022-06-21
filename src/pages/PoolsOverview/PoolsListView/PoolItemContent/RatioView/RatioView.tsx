import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC, useState } from 'react';

import { AmmPool } from '../../../../../common/models/AmmPool';

export interface RatioViewProps {
  readonly ammPool: AmmPool;
}

export const RatioView: FC<RatioViewProps> = ({
  ammPool: { xRatio, yRatio },
}) => {
  const [inverted, setInverted] = useState<boolean>(false);
  const ratio = inverted ? yRatio : xRatio;
  const handlePriceViewClick = () => setInverted((prev) => !prev);

  return (
    <Box>
      <Flex justify="center">
        <Typography.Body align="center" onClick={handlePriceViewClick}>
          {ratio.toString()} {ratio.baseAsset.name} per {ratio.quoteAsset.name}
        </Typography.Body>
      </Flex>
    </Box>
  );
};
