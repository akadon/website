import { axifetch } from "../../components/Helper";

const api = (req: any, res: any) => {
  axifetch("/db.json")
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 0)
    })
}

export default api;
