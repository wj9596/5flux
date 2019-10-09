import http from "@utils/http";
// 为您推荐
export const searchRecommd_api = () => http.get("/lux/search/recommend_list");


// 搜索内容
export const searchGood_api = (search,pid=2) => http.get("/rpcsearchnew/getkey",{
    pid:pid,
    search:search
});

