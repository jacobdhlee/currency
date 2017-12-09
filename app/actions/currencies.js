export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

export const swapCurrecy = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const chageBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency,
});

export const chageQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency,
});
