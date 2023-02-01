
const titles = ["#", "Coin", "Symbol", "Price", "Price Change","24h Volume"];

export default function CardCoin({ coins, search }) {
  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center">
        <table className=" border-b border-gray-800">
        <thead>
        <tr className="border-b border-gray-800">
        {titles.map((title, i) => (
          <td className="p-4 text-gray-400 font-bold" key={i}>{title}</td>
        ))}
        </tr>
        </thead>
        <tbody>
        {filteredCoins.map((coin, index) => (
          <tr key={coin.id} className="border-b border-gray-800">
            <td className="text-gray-300">{index + 1}</td>
            <td className="flex items-center gap-3 pt-2">
              <img src={coin.image} alt="" className="" width={20} height={20}/>
              <span className="text-gray-400">{coin.name}</span>
            </td>
            <td><span className="text-gray-600">{coin.symbol}</span></td>

            <td className="">${coin.current_price.toLocaleString()}</td>

            <td
              className={coin.price_change_percentage_24h > 0 ? "text-green-600 p-2" : "text-red-600"}>
              {coin.price_change_percentage_24h}
            </td>

            <td className="p-2">
            ${coin.total_volume.toLocaleString()}
            </td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
    </>

  )

}
