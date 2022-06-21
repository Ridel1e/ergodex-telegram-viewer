import '@ergolabs/ui-kit/dist/styles/fonts/fonts.less';

import { RustModule } from '@ergolabs/ergo-sdk';
import React, { FC, useEffect, useState } from 'react';

import { startAppTicks } from './common/streams/appTick';
import { PoolsOverview } from './pages/PoolsOverview/PoolsOverview';

const App: FC = () => {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
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

  useEffect(() => {
    RustModule.load().then(() => {
      setIsAppReady(true);
      startAppTicks();
    });
  }, []);

  if (!isAppReady) {
    return null;
  }

  return (
    <>
      <PoolsOverview
        expand={() => Telegram.WebApp.expand()}
        isExpanded={isExpanded}
      />
    </>
  );
};

export default App;
