import {React, Fragment} from "react";
import { useParams } from "react-router-dom";

const BotDetails = () => {
    const params =useParams();
    return (
        // <React.Fragment></React.Fragment>
        <Fragment>
            BotDetails {params.botId}
        </Fragment>
    )
}

export default BotDetails