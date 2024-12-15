import { axiosService } from "../Axios/axiosRequest";
import { APIsPath } from "./APIsPath";
import { loginFormValues, signUpFormValues } from "../../utils/schemas/Auth";

export const registerUser = async (payload: signUpFormValues) => {
    const res = await axiosService.post(APIsPath.AuthAPIs.signup, payload)
    return res
}

export const loginUser = async (payload: loginFormValues) => {
    const res = await axiosService.post(APIsPath.AuthAPIs.login, payload)
    if (res) {
        const user = {
            id: res.id,
            fullName: res.fullName,
            email: res.email,
            metaToken: res.access_token
        }
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(user));
    }
    return res
}