import {setupRouter} from "@/router/index";
import {setupStore} from "@/stores/index";

export default {
    install(app) {
        setupRouter(app);
        setupStore(app)
    }
}