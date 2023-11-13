import { retriveData } from "../libs/firebase/service"
import { retriveBlog } from "../libs/firebase/service";

export const getDataFirebase = async () => {
    const res = await retriveData('instruments');
    const datas = res
    return datas
}

export const getDataBlog = async () => {
    const res = await retriveBlog('blog');
    const data = res;
    return data
}