import {Route, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from '../home/home';
import Bots from '../bots/Bots';
import BotDetails from '../bots/botDetails'
import Login from '../login/Login';

function AppRouter() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route> 
                <Route exact path="/bots" element={<Bots />}></Route>
                <Route exact path="/bot-detail/:botId" element={<BotDetails />}></Route> 
                {/* <Route exact path="/login" element={<Login />}></Route> */}
                <Route exact path="/login" element={(loggedIn) ?<Navigate to={"/"} /> : <Login />}></Route> 

                {/* <Route exact path="*" element={<NotFound />}></Route>  */}
            </Routes>
        </>
    )
}

export default AppRouter