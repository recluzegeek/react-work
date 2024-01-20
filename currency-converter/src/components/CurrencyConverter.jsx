import React, { useCallback, useEffect, useState } from "react";
import { CurrencySelector } from "./CurrencySelector";
import ShowResult from "./ShowResult";
import { FaRightLeft } from "react-icons/fa6";

export default function CurrencyConverter() {
  const APP_ID = "907a4af88c1ad8118c512ffd";

  const [amount, setAmount] = useState(0);
  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [conversion, setConversion] = useState(null);
  const [countries, setCountries] = useState(null);

  const handleSelection = (value, condition) => {
    condition === "From" ? setBase(value) : setTarget(value);
  };

  const fetchData = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  });
  useEffect(() => {
    async function fetchCountries() {
      const countriesData = await fetchData(
        `https://v6.exchangerate-api.com/v6/${APP_ID}/codes`
      );
      setCountries(() => countriesData.supported_codes);
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    if (amount < 0 || !base || !target) return;
    async function performConversion() {
      const conversion = await fetchData(
        `https://v6.exchangerate-api.com/v6/${APP_ID}/pair/${base}/${target}`
      );
      setConversion(conversion.conversion_rate);
    }
    performConversion();
  }, [amount, base, target]);

  function handleSwap() {
    setBase(() => target);
    setTarget(() => base);
  }

  return (
    <>
      <h1 className="m-8 font-bold text-3xl text-center">Currency Converter</h1>
      <div className="flex border-solid border-2 border-{#dadce0} m-auto w-fit ">
        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white m-4"
          >
            Amount
          </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="h-8 p-4 mx-2 my-1 outline-none rounded-md border-solid border-2 border-{#dadce0}"
          />
        </div>
        <CurrencySelector
          name="From"
          countriesData={countries}
          value={base}
          onSelection={handleSelection}
        />
        <h1 className="text-3xl relative top-12">
          {<FaRightLeft onClick={handleSwap} />}
        </h1>
        <CurrencySelector
          name="To"
          countriesData={countries}
          value={target}
          onSelection={handleSelection}
        />
      </div>
      {conversion && (
        <div className="flex justify-center">
          {
            <ShowResult
              amount={amount}
              base={base}
              target={target}
              conversion={conversion}
            />
          }
        </div>
      )}
    </>
  );
}