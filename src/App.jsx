/* eslint-disable no-unused-vars */
import { ToggleOffCircle, ToggleOnCircle } from 'iconsax-react'
import { useState } from 'react'



export default function App() {
  const [theme, setTheme] = useState('1')
  const [displayNumber, setDisplayNumber] = useState('0')

  function handleClick(e) {
    if (displayNumber === "0") {
      setDisplayNumber('')
      setDisplayNumber(e.target.name)
    } else if (e.target.name === '%' & displayNumber !== '') {
      setDisplayNumber((prevInput) => {
        const percentageValue = parseFloat(prevInput) / 100;
        return percentageValue.toString();
      })
    } else{
    setDisplayNumber(displayNumber.concat(e.target.name));

    }
  }

  function handleInverse() {
   setDisplayNumber((prevInput) => {
      if (prevInput.startsWith('-')) {
        return prevInput.slice(1);
      } else {
        return '-' + prevInput;
      }
    });
  }

   const clear = () => {
    setDisplayNumber("0");
  }

  const calculate = () => {
    try {
      setDisplayNumber(eval(displayNumber).toString());
    } catch {
      setTimeout(setDisplayNumber("Error"), 1000)
      setDisplayNumber("0")
      
    }
  }

  function toggleTheme() {
    setTheme(theme === '1' ? '2' : '1')
  }

  return (
    <main className="w-full h-screen flex items-center justify-center relative">

      <section className="xl:w-[50%] lg:w-[90%] md:w-[80%] w-[90%] md:h-[80vh] h-[60vh] shadow-2xl drop-shadow-2xl">
        <div className={`h-[25%] ${theme === '1' ? "bg-[rgba(50,30,0,0.8)]" : "bg-[rgba(0,0,0,0.5)]"} text-white flex item-end justify-end text-[50px] font-thin pr-3`}>
          <button onClick={toggleTheme} className="absolute top-0 left-2 flex items-center underline gap-x-2 text-xs transition-all duration-1000"><span>Theme 1</span>{theme === '1' ? <ToggleOffCircle size="32" variant="Bold"/> : <ToggleOnCircle size="32" variant="Bold"/>} <span>Theme 2</span> </button>
          
            <input type={"text" || 'number'} value={displayNumber} readOnly  className="bg-transparent self-end w-full h-fit text-right outline-none p-2" />
         
           
        </div>


        <div className={`w-full h-3/4 flex flex-col justify-center gap-[2px] ${theme === '1' ? "bg-[rgba(50,30,0,0.8)] text-white" : "bg-[rgba(0,0,0,0.5)] text-black"} bg-[rgba(50,30,0,0.8)] p-[2px] text-3xl`}>
          <div className="flex items-center h-[20%] gap-[2px]">
            <button
              onClick={clear}
              className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>
              AC
            </button>
            <button
              
              onClick={handleInverse}
              className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>
            ±
          </button>
            <button
              name='%'
              onClick={handleClick}
              className={`w-1/4 h-full ${theme === '1' ? "bg-[#7b6e5e] hover:bg-[#9c9286]" : "bg-[#999999] hover:bg-[#b2b2b2]"} `}>%</button>
            <button
              name='/'
              onClick={handleClick}
              className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>÷</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button 
              name='7'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>7</button>
          <button 
              name='8'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>8</button>
          <button 
              name='9'
              onClick={handleClick}

           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>9</button>
          <button 
              name='*'
              onClick={handleClick}

           className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>&times;</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button 
              name='4'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>4</button>
          <button 
              name='5'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>5</button>
          <button 
              name='6'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>6</button>
          <button 
              name='-'
              onClick={handleClick}
           className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>-</button>
        </div>

        <div className="flex items-center h-[20%] gap-[2px]">
          <button 
              name='1'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>1</button>
          <button 
              name='2'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>2</button>
          <button 
              name='3'
              onClick={handleClick}
           className={`w-1/4 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>3</button>
          <button 
              name='+'
              onClick={handleClick}
           className={`w-1/4 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>+</button>
        </div>

        <div className="flex items-center justify-center h-[20%] gap-[2px]">
            <button
              name='0'
              onClick={handleClick}
             className={`w-1/2 h-full xl:pl-[80px] lg:pl-[112px] md:pl-[75px] text-left ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>
              0
            </button>
            <div className="flex items-center w-1/2 h-full gap-[2px]">
             <button
              name='.'
              onClick={handleClick}
              className={`w-1/2 h-full ${theme === '1' ? 'bg-[#9c9286] hover:bg-[#b2a9a0]' : 'bg-[#b2b2b2] hover:bg-[#c3c3c3]'}`}>•</button>
          <button
              name=''
              onClick={calculate}
           className={`w-1/2 h-full text-white ${theme === '1' ? "bg-[#ff9f0c] hover:bg-[#dd890d]" : "bg-[#cc0000] hover:bg-[#af0100]"}`}>=</button>
      
            </div>
          </div>
        </div>

        
      </section>

    </main>
  )
}
