import { useEffect, useState } from "react";

function Counter() {
    //The parameter on useState() function will give the default starting value of the state
    const [count, setCounter] = useState(0);
    const [show, setShow] = useState(false);

    function increment() {
        // count++; Do not mess with the variable that stores the value directly
        //It will not work due to states being IMMUTABLE
        setCounter(1+count);
        console.log(count);
    }

    function showCounter() {
        setShow(true);
        console.log(show); //There is a tendency for setting states to have a delayed affect, console.log might still show the previous value
    }

    //When you have very important things to setup before or after you finish rendering your component
    useEffect(() => {
        console.log("A variable was changed within this component!");
    });

    // if (!show) {
    //     return <button onClick={showCounter}>Show Counter</button>
    // }
    // else {
    //     return <div>
    //         Counter component is working

    //         <p>{count}</p>
    //         <button onClick={increment}>+</button>
    //     </div>
    // }

    return <div>
        {/* inline if statement with && operator */}
        {
            !show && <button onClick={showCounter}>Show Counter</button>

        }

        {
            show && <div>
                     Counter component is working
        
                     <p>{count}</p>
                     <button onClick={increment}>+</button>
                 </div>
        }
    </div>

}

export default Counter;