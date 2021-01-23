import React from 'react';

function Box({children, myColor}) {

    return(
        <div style={{ height: '500px', width:'500px', background: myColor }}>
          {children}
        </div>
    )
}

export default Box
