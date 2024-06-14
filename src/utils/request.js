import axios from "axios";
import {toLogin} from "@/router";

const TOKEN_KEY = "accessToken";
const baseUrl = "/demo";

const service = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {"Content-Type": "application/json;charset=utf-8"},
})


// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(TOKEN_KEY);
        if (accessToken) {
            config.headers.Authorization = accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
        if (response.config.responseType === "blob" ||
            response.config.responseType === "arraybuffer") {
            return response;
        }

        const {code, data, msg} = response.data;
        if (code === 200) {
            return data;
        }
        ElMessage.error(msg || "系统出错");
        return Promise.reject(new Error(msg || "Error"));
    },
    (error) => {
        // 异常处理
        if (error.response.data) {
            const {code, msg} = error.response.data;
            if (code === 401) {
                ElMessageBox.confirm("当前页面已失效，请重新登录", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(() => {
                    new Promise((resolve) => {
                        localStorage.setItem(TOKEN_KEY, "");
                        toLogin();
                        resolve();
                    }).then(() => {
                        location.reload();
                    });
                });
            } else {
                ElMessage.error(msg || "系统出错");
            }
        }
        return Promise.reject(error.message);
    }
);

// 导出 axios 实例
export default service;