class MainServise{
    getData(url1 = 'aapl',dater){
     console.log(dater)
      console.log(url1)
      return  fetch(`https://cloud.iexapis.com/stable/stock/${url1}/chart/${dater}?token=sk_cfa98b58e4a44523bf1fbb3ddc1a1b5b`)
    }
}
export default MainServise;