export default function (instance) {
    return {
        signUp(user) {
            return instance.post('/auth/signup', user)
        },
        signIn(user) {
            return instance.post('/auth/signin', user)
                .then(response => {
                    if (response.data.token) {
                        localStorage.setItem('user', JSON.stringify(response.data))
                    }
                    return response.data
                })
        },
        logout() {
            localStorage.removeItem('user')
        },
        getAll(){
            return instance.get('/students')
        }
    }
}