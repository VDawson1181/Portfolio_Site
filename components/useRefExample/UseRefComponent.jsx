// useState() = Re-renders the component when the state value changes.

/*
useRef() = "use reference" doesn't cause re-renders when it's value changes.
           When you want a component to 'remember' some info, but you don't
           want that info to trigger new renders.

1. Accessing/Interacting with DOM elements
2. Handling Focus, Animations, and Transitions
3. Managing Timers and Intervals
*/

import React, {useState, useEffect, useRef} from 'react';

let UseRefComponent = () => {

    // let [number, setNumber] = useState(0);
    // const ref = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
        // console.log(inputRef);
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "green";
    }

    return (
        <>        
            <button onClick={handleClick1}> Click Me 1!</button>
            <input ref={inputRef1} />
            <br />
            <button onClick={handleClick2}> Click Me 2!</button>
            <input ref={inputRef2} />
            <br />
            <button onClick={handleClick3}> Click Me 3!</button>
            <input ref={inputRef3} />
        </>
    )
}

export default UseRefComponent