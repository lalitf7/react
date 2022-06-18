function Expence(props){
    return(
        <>
            <div>Name: {props.expence.name}</div>
            <div>Description: {props.expence.description}</div>
            <div>Price: {props.expence.price}</div>
            <hr />
        </>
    )
}

export default Expence