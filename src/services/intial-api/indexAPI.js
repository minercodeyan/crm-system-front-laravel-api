import userService from "@/services/userService";
import instance from "@/services/intial-api/instance";


export default {
    users: userService(instance)
}