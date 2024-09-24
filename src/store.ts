import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types/types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGE24HOUR: "",
      LASTUPDATE: "",
    },
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await fetchCurrencyCryptoPrice(pair);
      set(() => ({
        result,
      }));
    },
  }))
);
