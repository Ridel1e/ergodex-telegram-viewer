import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import styled from 'styled-components';

export const FullWidthBox = styled(Box)`
  width: 100%;
`;

export const PriceRow: FC = () => (
  <FullWidthBox>
    <Flex justify="center">
      <Typography.Body align="center">
        0.519148856 ERG per SigUSD
      </Typography.Body>
    </Flex>
  </FullWidthBox>
);
