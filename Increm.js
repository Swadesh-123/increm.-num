import React, { useEffect, useState } from 'react';
 export default function App(){

const[num, setNum] = useState (0);
    return(
        <button onClick = {() => {setNum(num +1)}
         } > <h1>Click Me {num} </h1>   </button>
    )
}