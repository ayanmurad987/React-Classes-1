import React from 'react';

function CustomInput(props) {


    return(
        <div>
            <input onChange={props.handleText} type={props.typeArif} placeholder={props.placeHolder} />
        </div>
    )
}

export default CustomInput
