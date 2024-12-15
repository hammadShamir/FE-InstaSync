import { tokenFormValues, uploadPostFormValues } from "../../utils/schemas/Post";
import { axiosService } from "../Axios/axiosRequest"
import { APIsPath } from "./APIsPath"

export const getPosts = async () => {
    const res = await axiosService.get(APIsPath.Posts.getPosts, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return res.data
}

export const uploadToken = async (payload: tokenFormValues) => {
    const res = await axiosService.put(APIsPath.Posts.uploadToken, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    if (res) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            user.metaToken = true;
            localStorage.setItem("user", JSON.stringify(user));
        }
        return res
    }
    return null
}

export const uploadPost = async (payload: uploadPostFormValues) => {
    const res = await axiosService.post(APIsPath.Posts.uploadPost, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    return res;
}