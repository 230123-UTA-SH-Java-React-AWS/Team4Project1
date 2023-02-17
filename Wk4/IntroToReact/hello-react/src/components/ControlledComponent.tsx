import React, { useReducer, useState } from "react";

/*
    Controlled components is whenever you have a state that have more control/validation required

    - Note: React recommends you do this way 99% of the time
*/


/*
    useReducer() hook will act like the reducers in React Redux

    - it will dictate a specific behavior on how to change the state depending on the type you gave
    - mostly used if useState simple state change is not enough
    - Or if the state change is more complex and have to be used everywhere in your application
*/
export function reducer(state:any, action:any)
{
    if (action.type == "setPokemon") {
        
    }
    else if(action.type == "setDefault") {

    }
}

function ControlledComponent() {
    const [pokeId, setPokeId] = useState(1);

    // const [state, dispath] = useReducer(reducer, {count:10});

    return <div>
        {/* onSubmit Event Listener will execute your function if the form was submitted either through pressing "Enter" key or hitting a submit button */}
        <form onSubmit={onSubmit}>
        <label>PokeId</label>
        {/* Input element allows only numbers and above 0 */}
        {/* onChange Event Listener will execute your function if the value of the input was changed */}
        <input type="number" min={1} onChange={onPokeIdChange}/>
        </form>
    </div>

    function onPokeIdChange(event: React.ChangeEvent<HTMLInputElement>) {

        //Adding "+" syntax will convert the string into a number
        
        //Implement actual validation to enforce any business reqs
        if (+event.target.value > 0) {
            setPokeId(+event.target.value);
        }
        else
        {
            //Implement a way to visually tell the user they inputted the wrong thing
        }
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        //preventDefault will stop the default behavior of a form element of refreshing your page
        event.preventDefault();

        console.log(pokeId);
    }
}

export default ControlledComponent;