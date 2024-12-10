import { useState } from "react"


export default function Calculator() {

  const [data, setData] = useState("");


  const getValue=(e)=>{
    // console.log(e.target.value)
    setData(data.concat(e.target.value) )

  }

  const calculate=()=>{
    setData(eval(data).toString())

  }
  const clear=()=>{
    setData(data.slice(0,-1))
  }
  const ac=()=>{
    setData("")
  }
  return (
    <>

<div className="calculator">
  <input type="text" placeholder="0" className="display" disabled value={data} />
  
  <button onClick={getValue} value="(">(</button>
  <button onClick={getValue} value=")">)</button>
  <button onClick={getValue} value="%">%</button>
  <button onClick={ac} value="AC">AC</button>

  <button onClick={getValue} value="7">7</button>
  <button onClick={getValue} value="8">8</button>
  <button onClick={getValue} value="9">9</button>
  <button onClick={getValue} value="*">×</button>

  <button onClick={getValue} value="4">4</button>
  <button onClick={getValue} value="5">5</button>
  <button onClick={getValue} value="6">6</button>
  <button onClick={getValue} value="-">−</button>

  <button onClick={getValue} value="1">1</button>
  <button onClick={getValue} value="2">2</button>
  <button onClick={getValue} value="3">3</button>
  <button onClick={getValue} value="+">+</button>

  <button onClick={getValue} value="0" className="zero">0</button>
  <button onClick={getValue} value=".">.</button>
  <button onClick={calculate} >=</button>
  <button onClick={getValue} value="/">÷</button>
  <button onClick={clear} value="clear">clear</button>
</div>

    </>
  )
}
