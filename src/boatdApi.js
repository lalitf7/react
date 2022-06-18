import Expence from './components/Expence'
const dataList= {"data":{"status":"SUCCESS","bots":[{"_id":"623af28d8bbed6ee92bcd184","name":"test","description":"test","price":1,"inputFormat":null,"user":[{"_id":"6204afd43ebf922d72ef51fe","firstName":"Kumar"}]},{"_id":"623ae1528c6e2355cd9da038","name":"kumar test","description":"Updating bot","price":5,"inputFormat":[{"type":"string","name":"username","title":"Admin Username","description":"Your Username"}],"user":[{"_id":"6204afd43ebf922d72ef51fe","firstName":"Kumar"}]},{"_id":"620d02c1f197e120baaff505","name":"Resume Auto-Scanner","description":"Auto connect with a list of LinkedIn users by sending invitations with a personalized message.","price":2,"inputFormat":[{"type":"string","name":"username","title":"Admin Username","description":"Your  Username"},{"type":"password","name":"password","title":"Admin Password","description":"Your Chipin Admin Password"}],"user":[{"_id":"6204afd43ebf922d72ef51fe","firstName":"Kumar"}]}]},"status":"OK","message":"success","code":200};

function BoatsApi() {
    let bots = dataList?.data?.bots;
    return (
        <>
            {bots.map((object) => {
                return <Expence expence={object} />
            })}
        </>
    )
}

export default BoatsApi