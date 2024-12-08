
import { hostName } from "../../config/hostName";
import { isLoading } from "../../store/auth/auth.slice";

async function tokenVerification(dispatch: any,token:string) { 
    
    if (!token) return null;

    try {
        dispatch(isLoading(true)); 
        const response = await fetch(`${hostName}/api/auth`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const responseData = await response.json();

        dispatch(isLoading(false)); 

        if (responseData.success) {
            return { login: responseData.success,};
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        dispatch(isLoading(false)); 
    }
}

export default tokenVerification;