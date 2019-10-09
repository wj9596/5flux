import http from "@utils/http";

// 头部导航 https://apim.restful.5lux.com.cn/shop/catalist
export const catalist_api = () => http.get("/lux/shop/catalist");


// 轮播图 https://apim.restful.5lux.com.cn/shop/slide?mtoken=
export const searchCarousel_api = () => http.get("/lux/shop/slide?mtoken=");

// 副导航 https://apim.restful.5lux.com.cn/shop/buttons_info
export const funNav_api = () => http.get("/lux/shop/buttons_info");

// 小轮播 https://apim.restful.5lux.com.cn/shop/get_flagship_recommend
export const searchSmallCarousel_api = () => http.get("/lux/shop/get_flagship_recommend");

// 内容 https://apim.restful.5lux.com.cn/shop/home_all_info
export const  shopContent_api = () => http.get("/lux/shop/home_all_info");

// 副导航的其他内容大图
export const  shopOtherTopImg_api = (cata_id) => http.get("/lux/shop/cata_recommend",{
    cata_id:cata_id
});

// 下面小图
// https://apim.restful.5lux.com.cn/good/cata_goods_list?id=4&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=
export const  shopOtherImg_api = (cata_id) => http.get("/lux/good/cata_goods_list?id="+cata_id+"&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=");