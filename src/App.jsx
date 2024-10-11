import { useState } from 'react'
import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {

  let [calVal, setCalVal] = useState("");
  
  const onButtonClick = (buttonText) => { 
     if(buttonText === 'C'){
        setCalVal("");
     }else if(buttonText === '='){
        const result = eval(calVal);
        setCalVal(result);
     }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
     }
  
  }


  return (
    <>
    <h1 className={styles.center}>Calculator</h1>
    <div className={styles.center}>
    <div className={styles.calculator}>
     <Display displayValue={calVal}></Display>
     <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    </div>
    </div>
    </>
  )
}

export default App;
