import React, { FC, useEffect, useRef, useState } from 'react';
import { Area, AreaChart } from 'recharts';

import { AmmPool } from '../../../../../common/models/AmmPool';

export interface PriceChartProps {
  readonly ammPool: AmmPool;
}

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

export const PriceChart: FC<PriceChartProps> = () => {
  const ref = useRef<HTMLDivElement | null>();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight);
      setWidth(ref.current?.clientWidth);
    }

    window.addEventListener('resize', () => {
      setHeight(ref.current?.clientHeight);
      setWidth(ref.current?.clientWidth);
    });
  }, []);

  return (
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
        <AreaChart data={data} height={height} width={width}>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="var(--ergo-primary-color-hover)"
            fill="var(--ergo-primary-color)"
          />
        </AreaChart>
      </div>
    </div>
  );
};
