

//PokeID must be above 0

import React from "react";

/*
    TLDR: only useful if you don't care about validation
    - Validation is not required for this state at all since it is impossible to add one with a uncontrolledcomponent
    - A lot less "setup" required to use
    - Your website will not re-render if that state was change
*/

function UncontrolledComponent () {

    let inputRef = React.createRef<HTMLInputElement>();

    return <div>
        <form onSubmit={() => {console.log(inputRef.current?.value)}}>
            <label>PokeId</label>
            {/* Input element allows only numbers and above 0 */}
            <input type="number" min={1} ref={inputRef}/>
        </form>
    </div>
}

export default UncontrolledComponent;