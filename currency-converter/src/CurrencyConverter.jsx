import React, { useEffect, useState } from "react";
import { CurrencySelector } from "./CurrencySelector";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(null);
  const [base, setBase] = useState(null);
  const [target, setTarget] = useState(null);
  const [conversion, setConversion] = useState(null);

  const handleSelection = (value, condition) => {
    condition === "From" ? setBase(value) : setTarget(value);
  };

  useEffect(() => {
    if (amount < 0 || !base || !target) return;
    async function fetchData() {
      try {
        const APP_ID = "907a4af88c1ad8118c512ffd";
        const url = `https://v6.exchangerate-api.com/v6/${APP_ID}/pair/${base}/${target}`;
        const response = await fetch(url);
        const data = await response.json();
        setConversion(data.conversion_rate);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [amount, base, target]);

  

  function showResult() {
    const convertedAmount = amount * conversion;
    const baseStr = base.toUpperCase();
    const targetStr = target.toUpperCase();
    return (
      <div className="relative -left-52 mt-4">
        <p className="font-semibold">
          {amount} {baseStr} ={" "}
        </p>
        <h3 className="font-bold text-2xl">
          {convertedAmount} {targetStr}
        </h3>
        <small className="block text-base">
          1 {baseStr} = {conversion} {targetStr}
        </small>
        <small className="block text-base">
          1 {targetStr} = {1 / conversion} {baseStr}
        </small>
      </div>
    );
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
            <CurrencySelector name="From" onSelection={handleSelection} />
            <CurrencySelector name="To" onSelection={handleSelection} />
          </div>
          {conversion && (
          <div className="flex justify-center">
            {showResult()}
          </div>
        )}
    </>
  );
}
