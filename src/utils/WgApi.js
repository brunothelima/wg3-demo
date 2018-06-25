const WgApiCall = ({url, method, ...data}) => new Promise((resolve, reject) => {
  fetch(`http://localhost/wg3-api/${url}`, {
    method: method,
    body: data
  })
  .then(res => res.json())
  .then(data => {
    try {
      resolve(data)
    } catch (err) {
      reject(new Error(err))
    }
  })
  .catch(error => console.error(error))
}) 

export default WgApiCall
