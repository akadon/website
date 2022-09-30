const api = (req: any, res: any) => {

  fetch(`/db.json`)
    .then(resp => resp.json())
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 500)
    })
}

export default api;