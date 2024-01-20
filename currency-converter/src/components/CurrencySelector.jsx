import React from "react";

export function CurrencySelector({ name, countriesData, value, onSelection }) {
  if (!countriesData) return;
  const countriesMarkup = countriesData.map((country, idx) => (
    <option key={idx} value={country[0]}>
      {country[1]} ({country[0]})
    </option>
  ));
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
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="default">Select Currency</option>
        {countriesMarkup}
      </select>
    </div>
  );
}
