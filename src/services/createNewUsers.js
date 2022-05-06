import axios from "axios";

const createNewUsers =  async(data) => {

    const URL = `http://users-crud1.herokuapp.com/users/`;
    const req =  await axios.post(URL, data)

    return req

}
export default createNewUsers  


