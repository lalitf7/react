import { useState } from "react";

const ExpenceForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleHandler = (event) =>{
       // console.log(event.target.value);
        setTitle(event.target.value);
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value);
    }
    const dateHandler = (event) =>{
        setDate(event.target.value);
    }

    const updateExpence = (event) =>{
        event.preventDefault();
        const expence = {title, amount, date};
       // console.log(expence);
        props.updateExpenceData(expence)
        setTitle("");
        setAmount("");
        setDate("")
    }
    return(
        <form onSubmit={updateExpence}>
            <div>
                <label>Title: </label> 
                <input type="text" onChange={titleHandler} value={title}/>
            </div>
            <div>
                <label>Amount: </label> 
                <input type="text" onChange={amountHandler} value={amount}/>
            </div>
            <div>
                <label>Date: </label> 
                <input type="date" onChange={dateHandler} value={date}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ExpenceForm