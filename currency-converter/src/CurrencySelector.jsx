import React from "react";


export function CurrencySelector({ name, onSelection }) {
  return (
    <div className="w-full flex flex-col m-4 ">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <select
        name={name}
        id={name}
        onChange={(e) => onSelection(e.target.value, name)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="default">Select Currency</option>
        <option value="usd">US Dollar (USD)</option>
        <option value="eur">Euro (EUR)</option>
        <option value="jpy">Japanese Yen (JPY)</option>
        <option value="gbp">British Pound (GBP)</option>
        <option value="aud">Australian Dollar (AUD)</option>
        <option value="cad">Canadian Dollar (CAD)</option>
        <option value="inr">Indian Rupee (INR)</option>
        <option value="pkr">Pakistani Rupee (PKR)</option>
        <option value="cny">Chinese Yuan (CNY)</option>
        <option value="brl">Brazilian Real (BRL)</option>
        <option value="zar">South African Rand (ZAR)</option>
      </select>
    </div>
  );
}
