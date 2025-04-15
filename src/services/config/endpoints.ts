const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const ENDPOINTS = {
  CRYPTO: `${COINGECKO_BASE_URL}/simple/price?ids=bitcoin,ethereum,solana,sui,kaspa&vs_currencies=usd&include_24hr_change=true&precision=2`
} as const;