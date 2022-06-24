import {Link} from 'react-router-dom';

function Bots(){
    return(
        <>
        <div>Bots</div>
        <div><Link to={`/bot-detail/1`}>Bot 1</Link></div>
        <div><Link to={`/bot-detail/2`}>Bot 2</Link></div>
        </>
    )
}

export default Bots