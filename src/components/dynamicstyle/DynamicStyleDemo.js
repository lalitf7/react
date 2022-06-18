const DynamicStyleDemo = (props) => {
    const nameChangeHandler =() =>{
        
    }
    return (
        <>
            <h2>Dynamic style</h2>

            <div>
                <input 
                type="text" 
                onChange={nameChangeHandler}
                style={{
                    border: "2px solid red",
                    borderColor: "red"
                }}
                
                />
                <br/>
            </div>
            <input type="submit" />
        </>
    )
}

export default DynamicStyleDemo