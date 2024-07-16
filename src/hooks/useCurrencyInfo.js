import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
  const [currList, setCurrList] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setCurrList(res[currency]));
    console.log(currList);
  }, [currency]);
  return currList;
}
export default useCurrencyInfo;
