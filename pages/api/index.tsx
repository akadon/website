const api = (req: any, res: any) => {

  fetch(`http://akavm.fritz.box/db.json`)
    .then(resp => resp.json())
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 2000)
    })
}

export default api;