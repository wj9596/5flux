import http from "@utils/http";

// special
export const special_api = (special_id=4996) => http.post("/promote/get_template_info");

// 商品详情 
export const goodsDetail_api = (product_id) => http.get("/lux/good/goodsdetail/?id="+product_id+"&from=&mtoken=",{
    product_id:product_id
})



// 详情页精品推荐，猜你喜欢
export const detail_api = (product_id) => http.get("/lux/good/goodsdetail_recommend/",{
    product_id:product_id
})

// 详情页中间轮播图
// https://apim.restful.5lux.com.cn/good/goodsdetail_bannerads?product_id=6474320&brand_id=9409&cata_id=148
export const detailCarousel_api = (product_id,brand_id,cata_id) => 
http.get("/lux/good/goodsdetail_bannerads?product_id="+product_id+"&brand_id="+brand_id+"&cata_id="+cata_id,{
    product_id:product_id,
    brand_id:brand_id,
    cata_id:cata_id
})

