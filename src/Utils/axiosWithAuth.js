import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: 'https://secretfamilyrecipesbw.herokuapp.com/api',
        headers: {
        authorization: `Bearer ${token}`,
        },
    });
};
export default axiosWithAuth;