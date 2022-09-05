import request from "../utils/request";
export function get(params={}){
    return request({
        method: 'GET',
        url:'prefixes',
        params
    })
}
export function getpost(params={}){
    return request({
        method: 'GET',
        url:'/posts',
        params
    })
}
export function getpost2(params={}){
    return request({
        method: 'GET',
        url:'/comments',
        params
    })
}
