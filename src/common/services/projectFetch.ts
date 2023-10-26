import { retriveData } from "../libs/firebase/service"


export const getDataFirebase = async () => {
    const res = await retriveData('instruments');
    const datas = res
    return datas
}