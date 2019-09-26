//路由的懒加载
import Loadable from "react-loadable";
import Loading from "../common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Shopping = Loadable({
    loader:()=>import("./shopping"),
    loading:Loading
})

const Arrival = Loadable({
    loader:()=>import("./arrival"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export {
    Home,
    Shopping,
    Arrival,
    Mine,
    Login
}