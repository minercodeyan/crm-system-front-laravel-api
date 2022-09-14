import indexAPI from "@/services/intial-api/indexAPI";



export default {
    actions: {
        async loginUser(ctx, user) {
            const data= await indexAPI.users.signIn(user)
            ctx.commit('authUser', data.resultData)
        }
    },
    mutations: {
        authUser(state, result) {
            state.user = result.user
        }
    },
    state: {
        user: Object
    },
    getters: {
        authorizedUsername(state) {
            console.log(state)
            return state.user.name
        }
    }
}