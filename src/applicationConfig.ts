interface NetworkConfig {
  readonly explorerUrl: string;
  readonly networkUrl: string;
  readonly analyticUrl?: string;
  readonly metadataUrl: string;
  readonly faucet?: string;
  readonly lowBalanceGuide?: string;
}

interface ApplicationConfig {
  readonly networksSettings: { [key: string]: NetworkConfig };
  readonly applicationTick: number;
  readonly requestRetryCount: number;
}

export const applicationConfig: ApplicationConfig = {
  requestRetryCount: 3,
  networksSettings: {
    cardano: {
      metadataUrl: 'https://testnet-meta.ergodex.io/metadata',
      networkUrl: 'https://testnet-api.quickblue.io/v1',
      explorerUrl: 'https://testnet.cardanoscan.io',
      faucet: 'https://faucet.ergodex.io/v1/',
      lowBalanceGuide: '',
    },
    ergo: {
      metadataUrl:
        'https://raw.githubusercontent.com/ergolabs/ergo-dex-asset-icons/master',
      networkUrl: 'https://api.ergoplatform.com',
      explorerUrl: 'https://explorer.ergoplatform.com',
      analyticUrl: 'https://api.ergodex.io/v1/',
      lowBalanceGuide:
        'https://docs.ergodex.io/docs/user-guides/quick-start#3-get-assets',
    },
  },
  applicationTick: 10 * 1000,
};
