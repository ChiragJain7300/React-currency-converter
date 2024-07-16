function InputBox({
  label,
  amount,
  onAmountChange,
  selectCurrency,
  currList = [],
  onCurrencyChange,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black mb-2 inline-block">{label}</label>
        <input
          className="outline-none text-black w-full bg-transparent py-1.5"
          type="number"
          placeholder={0}
          value={amount}
          onChange={onAmountChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
          onChange={onCurrencyChange}
          value={selectCurrency}
        >
          {currList.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
