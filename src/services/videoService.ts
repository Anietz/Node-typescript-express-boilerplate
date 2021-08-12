import axios from "axios";

export const testAPI =  async <T extends unknown>(message:T):Promise<T>=>{

    const URL = "https://reqres.in/api/users?page=2";

    const result = await axios.get(URL);
    const ress = result.data;
    const data:any = {message,ress};
    return data;
    
}


