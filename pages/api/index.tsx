const api = (req: any, res: any) => {

  fetch(`http://akavm.fritz.box/db.json`)
    .then(resp => resp.json())
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 500)
    })
}

export default api;