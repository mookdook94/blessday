import * as userService from '../../utilities/users-service';
import { checkToken } from '../../utilities/users-service'


export default function OrderHistoryPage() {
    async function handleCheckToken() {
       const expDate = await checkToken();
       console.log(expDate);
    }
    return (
        <>
        <h1>Order History</h1>
        <button onClick={handleCheckToken}>Check When User</button>
        </>
    )
}