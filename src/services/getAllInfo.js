import axios from "axios"

const getAllInfo =  async() => {

    const URL = `http://users-crud1.herokuapp.com/users/`
    const req = await axios.get(URL)
    return req
}

export default getAllInfo;