import React from 'react';
import { 
  CustomHeading,
  CustomPara,
  CustomInput,
  Box
} from "./components";

function App() {

  return(
    <div>
      <Box myColor={'yellow'}>
         <CustomHeading rameezKaText={'Hello Dunya'} />
          <CustomInput
            typeArif={'email'} 
            placeHolder={'Enter your email'}
          />
          <h2>akjdslkajsldkj</h2>
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