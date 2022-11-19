import { defaultServerOption } from "@/server/const";
import SingleAxios from "@shared/packages/request";
import ovoServerConfig from "../../ovo.config";


const { hostname, port: SERVER_PORT } = ovoServerConfig.server || defaultServerOption

export default SingleAxios.getInstance({
    baseURL: `http://${hostname}:${SERVER_PORT}/api`,
    timeout: 10000
})