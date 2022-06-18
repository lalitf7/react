import { useState } from "react";


const KeysDemo = (props) => {
   // const nameArray = ["kumar", "Lalit", "Shiv"];
    const nameArray = [];

    const [dataArray, setDataArray] = useState(nameArray)

    const addName = (event) => {
        event.preventDefault();
        setDataArray([...dataArray, "Nik"])
    }

    const dynamicContent = () => {
        if(dataArray.length ===0){
            return "No data"
        }
        else {
           return dataArray.map((data,index)=> {
            return <div key={index}>{data}</div>
        }) 
        }
    }
    return (
        <>
            <div>Keys</div>
            {/* {(dataArray.length ===0)? "No" : dataArray.map((data,index)=> {
                return <div key={index}>{data}</div>
            })} */}

            {/* {dataArray.length === 0 && "No Data"}
            {dataArray.length > 0 && 
                dataArray.map((data,index)=> {
                    return <div key={index}>{data}</div>
                })
            } */}
            {dynamicContent()}
            <div>
                <button onClick ={addName}>Add</button>
            </div>
        </>
    )
}

export default KeysDemo