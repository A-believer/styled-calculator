import { ToggleOffCircle, ToggleOnCircle } from 'iconsax-react'
import {useState} from 'react'

export default function App() {
  const [theme, setTheme] = useState('1')

  function toggleTheme() {
    setTheme(theme === '1' ? '2' : '1')
  }

  return (
    <main className="w-full h-screen flex items-center justify-center relative">

      <section className="xl:w-[50%] lg:w-[90%] md:w-[80%] w-[90%] h-[80vh] shadow-2xl drop-shadow-2xl">
        <div className={`h-[25%] ${theme === '1' ? "bg-[rgba(50,30,0,0.8)]" : "bg-[rgba(0,0,0,0.5)]"} text-white flex item-end justify-end text-[50px] font-thin pr-3`}>
          <button onClick={toggleTheme} className="absolute top-0 right-2 flex items-center underline gap-x-2 text-xs"><span>Theme 1</span>{theme === '1' ? <ToggleOffCircle size="32" variant="Bold"/> : <ToggleOnCircle size="32" variant="Bold"/>} <span>Theme 2</span> </button>
          <span className="self-end h-fit">
           {123456789}
          </span>
           
        </div>


        <div className={`w-full h-3/4 flex flex-col justify-center gap-[2px] ${theme === '1' ? "bg-[rgba(50,30,0,0.8)] text-white" : "bg-[rgba(0,0,0,0.5)] text-black"} bg-[rgba(50,30,0,0.8)] p-[1px] text-3xl`}>
          <div className="flex items-center h-[20%] gap-[2px]">
            <button
              className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>
              AC
            </button>
          <button className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>
            ±
          </button>
          <button className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>%</button>
          <button className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>÷</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>7</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>8</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>9</button>
          <button className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>&times;</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>4</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>5</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>6</button>
          <button className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>-</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>1</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>2</button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>3</button>
          <button className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>+</button>
        </div>

        <div className="flex items-center justify-center h-[20%] gap-[2px]">
            <button className={`w-1/2 h-full flex justify-center items-center ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>
              <span className="w-1/2 h-full text-center flex items-center justify-center">0</span>
              <span className="w-1/2 h-full"></span>
            </button>
          <button className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>•</button>
          <button className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>=</button>
        </div>
        </div>

        
      </section>

    </main>
  )
}
