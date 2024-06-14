import http from "@/utils/request"

class AuthAPI {
    /**
     * 登录
     */
    static login(data) {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        return http({
            url: "/auth/login",
            method: "post",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}

export default AuthAPI;