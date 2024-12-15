export const checkAuth = () => {
    return localStorage.getItem('token');
}

export const getUser = ()=>{
    return localStorage.getItem('user');
}