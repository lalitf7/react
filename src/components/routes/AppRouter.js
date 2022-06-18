import {Route, Routes} from 'react-router-dom';

import Home from '../home/home';
import Bots from '../bots/Bots'

function AppRouter() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route> 
                <Route exact path="/bots" element={<Bots />}></Route> 
            </Routes>
        </>
    )
}

export default AppRouter