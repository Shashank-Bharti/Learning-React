import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)

  const options =  Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(Math.round(convertedAmount))
    
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  let BackgroundImage = './src/assets/bg-img.jpg'
  
  return (
        <div
            className="w-full h-screen  flex flex-wrap justify-center items-center bg-center md:bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,

            }}
        >
            <div className=" md:absolute md:h-screen left-0 place-items-center md:w-1/2 md:backdrop-blur-sm md:bg-white/30">
                <div className="w-full md:absolute md:top-1/3 border md:border-none items-center border-gray-60  backdrop-blur-sm bg-white/30 md:bg-transparent md:backdrop-blur-none rounded-lg p-5 ">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 hover:bg-blue-500 border-white rounded-full transitio bg-blue-600 text-white p-2"
                                onClick={swap}
                            >
                                swap

                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 transition-colors  text-white px-4 py-3 hover:bg-blue-400 rounded-lg">
                            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
