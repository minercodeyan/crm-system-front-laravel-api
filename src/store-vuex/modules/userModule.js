import indexAPI from "@/services/intial-api/indexAPI";



export default {
    actions: {
        async loginUser(ctx, user) {
            await indexAPI.users.signIn(user)
                .catch(error=>ctx.commit('loginErrorData', error.response.data))
        },
        async registerUser(ctx, user) {
            await indexAPI.users.signUp(user)
                .catch(error=>ctx.commit('registerErrorData', error.response.data))
        },
        logoutUser() {
            indexAPI.users.logout()
        }
    },
    mutations: {
        loginErrorData(state,errorData){
            state.errors=errorData
        },
        registerErrorData(state,errorData){
            state.errors=errorData
        }
    },
    state: {
        user: {},
        errors:{}
    },
    getters: {
        errors(state){
            return state.errors
        },
        authorizedUsername(state) {
            if(localStorage.getItem('userData')){
            state.user = JSON.parse(localStorage.getItem('userData')).user
            }
            return state.user.name
        }
    }
}