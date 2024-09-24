import { useEffect } from "react";
import { CriptoSherachForm } from "./components/CriptoSherachForm";
import { useCryptoStore } from "./store";
import { CryptoPriceDisplay } from "./components/CryptoPriceDisplay";

function App() {
  const { fetchCryptos } = useCryptoStore((state) => state);

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          CONTADOR DE <span>CRIPTOMONEDAS</span>
        </h1>
        <div className="content">
          <CriptoSherachForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
