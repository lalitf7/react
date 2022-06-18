import { useRef, useState } from "react";
//import "./DynamicClass.css";

function DynamicClass (){
    const [name, setName] = useState("")

    const nameInput = useRef(); 
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!name){
            let oldClass = nameInput.current.className
            //nameInput.current.className
            oldClass = oldClass + " invalid";
            nameInput.current.className = oldClass;
        }
    };

    const nameChangeHandler =(event) => {
        event.preventDefault();
        setName(event.target.value)
    }

    return (
        <>
        <h2>Dynamic Class</h2>
            <div>
                <input type="text" 
                    ref={nameInput}
                    onChange={nameChangeHandler}
                    className="form-control"
                />
            </div>
            <input onClick={handleSubmit} type="Submit"/>
        </>
    )
}

export default DynamicClass;