import '@ergolabs/ui-kit/dist/styles/fonts/fonts.less';

import React, { FC, useEffect, useState } from 'react';

import { Liquidity } from './pages/Liquidity/Liquidity';

const App: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    // Telegram.WebApp.isExpanded,
    false,
  );

  useEffect(() => {
    const handleViewportChanged = ({
      isStateStable,
    }: {
      isStateStable: boolean;
    }) => {
      setIsExpanded(Telegram.WebApp.isExpanded && isStateStable);
    };

    Telegram.WebApp.onEvent('viewportChanged', handleViewportChanged);
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
