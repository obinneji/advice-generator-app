import { useEffect, useState } from 'react';
import './styles.css'

function App() {
  const [advice, setAdvice] = useState("")
  const [adviceId,setAdviceId] = useState("")
  const [clickAdvise, setClickAdvice]= useState(false)
  

  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    setAdviceId(data.slip.id)
    setAdvice(data.slip.advice)});
  },[clickAdvise])

  function getNewAdvice(){
    setClickAdvice((prevValue)=>{
      return !prevValue
    })
  }
  return (
    <div>
      <main>
        <p className='advice-id'>Advice {adviceId}</p>
        <section><h2 className='advice-word'>&ldquo;{advice}&rdquo;</h2></section>
        <img src='../images/pattern-divider-desktop.svg' className='divider' alt='dividing line'/>
      </main>
      <aside onClick={getNewAdvice}><img src="../images/icon-dice.svg" className='dice-image' alt='dice'/></aside>
    </div>
  );
}

export default App;
