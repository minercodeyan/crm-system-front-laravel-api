import { createStore} from "vuex";
import userModule from "@/store-vuex/modules/userModule";

const store = createStore({
    modules:{
        userModule
    }
})

export default store