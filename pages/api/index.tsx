import { axifetch } from "../../components/Helper";

const api = (req: any, res: any) => {
  axifetch("/db.json")
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 500)
    })
}

export default api;
