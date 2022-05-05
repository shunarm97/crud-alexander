import axios from "axios";

const editUser = async (id, userObj) => {

    const URL = `http://users-crud1.herokuapp.com/users/${id}/`
    const req = await axios.put(URL, userObj)
    return req
}
export default editUser; 