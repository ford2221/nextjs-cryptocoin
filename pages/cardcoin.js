
import Image from 'next/image'
const titles = ["#", "Coin", "Symbol", "Price", "Price Change","24h Volume"];

export default function CardCoin({ coins, search }) {
  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div className='pb-40 flex justify-center '>
        <table className="shadow-lg shadow-green-700 border border-gray-800 px-2 w-96 text-xs md:w-4/6 md:text-xs lg:text-base xl:text-base xl:w-5/6 lg:w-5/6">
        <thead>
        <tr className="border-b border-gray-800">
        {titles.map((title, i) => (
          <td className="p-4 pl-10 text-gray-400 font-bold" key={i}>{title}</td>
        ))}
        </tr>
        </thead>
        <tbody>
        {filteredCoins.map((coin, index) => (
          <tr key={coin.id} className="border-b border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
            <td className="text-gray-300 pl-10">{index + 1}</td>
            <td className="flex items-center gap-3 pt-2">
              <Image src={coin.image} alt="" className="" width={20} height={20}/>
              <span className="text-gray-400">{coin.name}</span>
            </td>
            <td><span className="text-gray-300">{coin.symbol}</span></td>

            <td className="text-gray-400">${coin.current_price.toLocaleString()}</td>

            <td
              className={coin.price_change_percentage_24h > 0 ? "text-green-600 p-2" : "text-red-600"}>
              {coin.price_change_percentage_24h}
            </td>

            <td className="p-2 text-gray-400">
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
