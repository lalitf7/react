import ExpenceForm from "./ExpenceForm";

const NewExpence = (props) => {
    

    return (
        <>
            <ExpenceForm updateExpenceData ={props.updateExpenceData} />
        </>
    )
}

export default NewExpence

