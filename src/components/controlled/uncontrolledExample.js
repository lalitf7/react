import {useRef} from "react";

function UncontrolledExapleled (){
    const titleInput = useRef(null); // DOM controlled all event

    const submitHnadler = (event) => {
        event.preventDefault();
        console.log(titleInput.current.value);
        titleInput.current.className ="test"
    }
    return(
        <form onSubmit={submitHnadler}>
            <div>UnControlled</div>
            <input type="text" ref={titleInput} />
            <br />
            <input type="submit" />
        </form>
    )
}

export default UncontrolledExapleled