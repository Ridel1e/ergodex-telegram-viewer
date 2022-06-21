import { Box, Flex, Typography } from '@ergolabs/ui-kit';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Area, AreaChart } from 'recharts';

import { top24hVolumeAmmPool$ } from '../../../common/api/ammPools/ammPools';
import { useObservable } from '../../../common/hooks/useObservable';
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

export const Top24hVolumePoolPreview: FC = () => {
  const [top24hVolumeAmmPool, loading] = useObservable(top24hVolumeAmmPool$);
  const ref = useRef<HTMLDivElement | null>();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight);
      setWidth(ref.current?.clientWidth);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(ref.current?.clientHeight);
      setWidth(ref.current?.clientWidth);
    });
  }, []);

  return (
    <Flex col stretch>
      <Flex.Item marginBottom={1}>
        <Typography.Title level={4}>Top 1 by 24h Volume</Typography.Title>
      </Flex.Item>
      <Flex.Item flex={1}>
        <Box contrast padding={2} height="100%">
          {!loading && top24hVolumeAmmPool && (
            <Flex col stretch>
              <Flex.Item marginBottom={2}>
                <TitleRow ammPool={top24hVolumeAmmPool} />
              </Flex.Item>
              <Flex.Item marginBottom={2}>
                <PriceRow ammPool={top24hVolumeAmmPool} />
              </Flex.Item>
              <Flex.Item flex={1}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                    }}
                    ref={ref as any}
                  >
                    {/*  <ResponsiveContainer height="100%" width="100%">*/}
                    <AreaChart data={data} height={height} width={width}>
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="var(--ergo-primary-color-hover)"
                        fill="url(#gradientColor)"
                      />
                      <defs>
                        <linearGradient
                          id="gradientColor"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            stopColor="var(--ergo-primary-color-hover)"
                            stopOpacity="0.5"
                          />
                          <stop
                            offset="1"
                            stopColor="var(--ergo-primary-color-hover)"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                    {/*  </ResponsiveContainer>*/}
                  </div>
                </div>
              </Flex.Item>
            </Flex>
          )}
        </Box>
      </Flex.Item>
    </Flex>
  );
};
