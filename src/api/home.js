import http from "@utils/http";

// 轮播图
export const carsouel_api = () => http.get("/lux/index/index_slider");

// 首页导航
export const funNav_api = () => http.get("/lux/index/index_button")

// 首页四张广告图
export const adv1_api = () => http.get("/lux//index/columu_recommend")

// 首页内容
export const homeCon_api = () => http.get("/lux/index/other_advert");

// 上拉加载更多
export const upLoad_api = (page=1) => http.get("/lux/index/article_list_ads",{
    page:page
})
