export default function addAuthHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return {Authorization:'Bearer '+ user.token };
    }
    else return {};
}