import axios from "axios";

const deleteUser = async (id) => {
    const URL = `http://users-crud1.herokuapp.com/users/${id}`; 
    const req = await axios.delete(URL)

    return req;

}


export default deleteUser;