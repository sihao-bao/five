import code from "../utils/conde";
export function codeTopics(params={}){
    return code({
        method: 'GET',
        url:'/topics',
        params
    })
}

export function codeTopicId(params={}){
    return code({
        method: 'GET',
        url:'/topic',
        params
    })
}
