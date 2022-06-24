import {Route, Routes} from 'react-router-dom';

import Home from '../home/home';
import Bots from '../bots/Bots';
import BotDetails from '../bots/botDetails'
import Login from '../login/login';

function AppRouter() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route> 
                <Route exact path="/bots" element={<Bots />}></Route>
                <Route exact path="/bot-detail/:botId" element={<BotDetails />}></Route> 
                <Route exact path="/login" element={<Login />}></Route> 

                {/* <Route exact path="*" element={<NotFound />}></Route>  */}
            </Routes>
        </>
    )
}

export default AppRouter