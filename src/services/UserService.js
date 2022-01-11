import axios from 'axios';

const USER_API_BASE_URL = "https://wikipedia/wp-json/react_crud/v1/";

console.log(USER_API_BASE_URL);

class UserService{

    getUsers() {
        return axios.get(USER_API_BASE_URL + 'get_users');
    }

    insertUser(data){
        return axios.post(USER_API_BASE_URL + 'insert_user', data );
    }

}

export default new UserService();