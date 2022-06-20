import '@ergolabs/ui-kit/dist/styles/fonts/fonts.less';

import React, { FC, useEffect, useState } from 'react';

import { Liquidity } from './pages/Liquidity/Liquidity';

const App: FC = () => {
  const [n, setN] = useState('no');

  useEffect(() => {
    (window as any).Telegram.WebApp.onEvent('viewportChanged', (res: any) =>
      setN(JSON.stringify(res)),
    );
  });

  return (
    <>
      {n}
      <Liquidity />
    </>
  );
};

export default App;
