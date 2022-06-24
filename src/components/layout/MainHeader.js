import {Link} from 'react-router-dom'

function MainHeader(){
    return(
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bots">Bots</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </>
    )
}

export default MainHeader