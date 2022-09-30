import axios from "axios";

export const axifetch = async (url: any) => {
  if (process.env.VERCEL_URL != null && !(url.includes("http") || url.includes("https"))) { url = "https://" + process.env.VERCEL_URL + url }
  return await axios.create({}).get(url).then((res: any) => { return res.data });
}