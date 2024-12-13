import { AxiosRequestConfig, Method } from "axios";
import axiosInstance from "./intense";
import toast from "react-hot-toast";

const request = async (
    method: Method,
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
) => {
    if (method === 'GET') {
        const response = await axiosInstance.request({
            method,
            url,
            data,
            ...config,
        });
        return { data: response.data.data, meta: response.data.meta };
    }

    // Use toast.promise for other methods
    return await toast.promise(
        axiosInstance.request({
            method,
            url,
            data,
            ...config,
        }),
        {
            loading: 'Loading...',
            success: (response) => {
                const successMessage = response?.data?.meta?.message || 'Request successful!';
                return successMessage;
            },
            error: (err) => {
                const errorMessage = err?.response?.data?.message || 'An unexpected error occurred!';
                return errorMessage;
            },
        }
    ).then((response) => {
        // Return response data directly
        return { data: response.data.data, meta: response.data.meta };
    });
};



// Exported Axios Service functions
export const axiosService = {
    get: (url: string, config?: AxiosRequestConfig) => request('GET', url, undefined, config),
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) => request('POST', url, data, config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) => request('PUT', url, data, config),
    patch: (url: string, data?: unknown, config?: AxiosRequestConfig) => request('PATCH', url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => request('DELETE', url, undefined, config),
};