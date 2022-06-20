import '@ergolabs/ui-kit/dist/styles/fonts/fonts.less';

import React, { FC, useEffect, useState } from 'react';

import { Liquidity } from './pages/Liquidity/Liquidity';

const App: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    Telegram.WebApp.isExpanded,
  );

  useEffect(() => {
    const handleViewportChanged = () => {
      if (Telegram.WebApp.isExpanded !== isExpanded) {
        setIsExpanded(Telegram.WebApp.isExpanded);
      }
    };

    Telegram.WebApp.onEvent('viewportChanged', handleViewportChanged);

    return () =>
      Telegram.WebApp.offEvent('viewportChanged', handleViewportChanged);
  }, []);

  return (
    <>
      <Liquidity
        expand={() => Telegram.WebApp.expand()}
        isExpanded={isExpanded}
      />
    </>
  );
};

export default App;
