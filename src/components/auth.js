  
export const isAuthenticated = () => {
    if (window.sessionStorage.getItem('login')){
        return true
    } else {
        return false
    }
}
