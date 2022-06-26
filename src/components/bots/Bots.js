import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Bots(){
    const [botsData, setBotData] = useState([]);
    
    useEffect (() => {
        async function fetchData(){
            let response = await axios.get("http://54.160.70.225:3001/api/v1/bots")
            setBotData(response.data?.data?.bots)
        }
        fetchData();
        
    }, [])
    
    return(
        <>
        <div>Bots</div>
        <div><Link to={`/bot-detail/1`}>Bot 1</Link></div>
        <div><Link to={`/bot-detail/2`}>Bot 2</Link></div>

        {botsData.map((data) => {
            <p>{data.description}</p>
        })}


        </>
    )
}

export default Bots