import {defineStore} from "pinia";
import { store } from "@/stores";

// 定义Store
const userStore = defineStore('user', ()=>{
    // state
    const user = ref({
        name: '张三',
        age: 18,
        sex: '男'
    });

    // getters
    const changeAge = computed(()=>{
        return user.value.age + 1;
    });

    // actions
    function changeName(val){
        user.value.name = val;
    }

    return {
        user,
        changeAge,
        changeName
    }
});

export function useUserStore(){
    return userStore(store);
}