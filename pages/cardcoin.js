
import Image from 'next/image'
const titles = ["#", "Coin", "Symbol", "Price", "Price Change","24h Volume"];
import { navbar } from './navbar'

export default function CardCoin({ coins, search }) {
  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div className='pb-40 flex flex-wrap gap-3 justify-center px-5'>
        {filteredCoins?.map((coin) => (
          <div  key={coin.id} className="w-60 h-auto bg-blue-900 rounded-lg text-xs hover:shadow hover:shadow-indigo-900 ">
            <div  className="w-60 h-auto bg-gray-900 opacity-80 rounded-lg mt-1 p-2 hover:cursor-pointer ">
              <div className="flex gap-6 items-center">
                <Image src={coin.image} alt="" width={25} height={25}/>
                <h3 className="text-gray-400 text-xs">{coin.name} ( <span className="text-gray-300">{coin.symbol}</span> )</h3> 
              </div>
              <div className="flex items-center justify-between pt-4">
                <h4 className="text-gray-400">Price:</h4>
                <p className="text-gray-400">${coin.current_price.toLocaleString()}</p>
              </div>
              
              <div className="flex items-center justify-between  border-t-ingo-500 py-1">
                <h4 className="text-gray-400">Price Change:</h4>
                <p className={coin.price_change_percentage_24h > 0 ? "text-green-600 " : "text-red-600 "}>
                  {coin.price_change_percentage_24h}
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t-ingo-500">
                <h4 className="text-gray-400">24h Volume:</h4>
                <p className="text-gray-400">${coin.total_volume.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )

}
