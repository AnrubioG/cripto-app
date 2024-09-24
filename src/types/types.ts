import { z } from "zod";
import {
  CryptoCurrencySchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairSchema,
} from "../schema/crypty-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
