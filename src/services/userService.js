import router from "@/router";

export default function (instance) {
    return {
        signUp(user) {
            return instance.post('/registration', user)
                .then(response => {
                    if (response.data.resultData.token) {
                        localStorage.setItem('user', JSON.stringify(response.data.resultData))
                    }
                    router.push({name: 'Home'})
                    return response.data
                })
        },
        signIn(user) {
            return instance.post('/login', user)
                .then(response => {
                    if (response.data.resultData.token) {
                        localStorage.setItem('userData', JSON.stringify(response.data.resultData))
                    }
                    router.push({name: 'Home'})
                    return response.data
                })
        },
        logout() {
            localStorage.removeItem('userData')
            router.push({name: 'Login'})
            return instance.post('/logout')
        },
    }
}