import axios from "axios";

export const axifetch = async (url: any) => {
  return await axios.create({}).get(url).then((res: any) => { console.log("axi", res); return res.data });
}