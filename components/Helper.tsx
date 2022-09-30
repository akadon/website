import axios from "axios";

export const axifetch = async (url: any) => {
  if (process.env.VERCEL_URL != null && !(url.includes("http") || url.includes("https"))) { url = "https://" + url + process.env.VERCEL_URL; }
  return await axios.create({}).get(url).then((res: any) => { console.log("axi", res); return res.data });
}