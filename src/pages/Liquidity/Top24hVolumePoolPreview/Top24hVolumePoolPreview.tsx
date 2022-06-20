import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { PriceRow } from './PriceRow/PriceRow';
import { TitleRow } from './TitleRow/TitleRow';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Top24hVolumePoolPreview: FC = () => (
  <Flex col stretch>
    <Flex.Item marginBottom={1}>
      <Typography.Title level={4}>Top 1 by 24h Volume</Typography.Title>
    </Flex.Item>
    <Flex.Item flex={1}>
      <Box contrast padding={2} height="100%">
        <Flex col stretch>
          <Flex.Item marginBottom={2}>
            <TitleRow />
          </Flex.Item>
          <Flex.Item marginBottom={2}>
            <PriceRow />
          </Flex.Item>
          <Flex.Item flex={1}>
            <div style={{ width: '100%', height: '100%' }}>
              <ResponsiveContainer height="100%" width="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Flex.Item>
        </Flex>
      </Box>
    </Flex.Item>
  </Flex>
);
