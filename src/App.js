import React, {useState} from 'react';
import { 
  CustomHeading,
  CustomPara,
  CustomInput,
  Box
} from "./components";

function App() { //newOneAyan1
  const [inputText, setInputText] = useState('')
  
  const handleText = (e) => {
    console.log("app.js", e.target.value)
    setInputText(e.target.value)
  }

  return(
    <div style={{background:'black', height:'100vh', width:'100vw', margin:0, padding:0}}>
      <Box myColor={'yellow'}>
         <CustomHeading rameezKaText={inputText} />
          <CustomInput
            typeArif={'email'} 
            placeHolder={'Enter your email'}
            handleText={handleText}
          />
          <h2>{inputText}</h2>
      </Box>

      <Box myColor={'pink'}>
        <CustomHeading rameezKaText={'Hello world'} />
        <CustomPara />


        <CustomInput
          typeArif={'password'}
          placeHolder={'Enter your password'}
        />
      </Box>
      
      
    </div>
  )
}

export default App