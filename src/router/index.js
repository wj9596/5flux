import {
    Home,
    Shopping,
    Arrival,
    Mine,
    Login,
    Cart,
    Search,
    Special,
    Detail
} from "@pages"



export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue680",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/shopping",
        path: "/shopping",
        name: "商城",
        icon: "\ue619",
        component: Shopping,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/arrival",
        path: "/arrival",
        name: "到店",
        icon: "\ue62e",
        component: Arrival,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue505",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: true,
            flag:true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/search",
        path: "/search",
        name: "搜索",
        component: Search,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/cart",
        path: "/cart",
        name: "购物车",
        component: Cart,
        exact: true,
        meta: {
            requireAuth: true
        }
    },
    {
        key: "/special",
        path: "/special/:id",
        name: "特别页",
        component: Special,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/detail",
        path: "/detail/:product_id",
        name: "详情页",
        component: Detail,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);