export const WgApiGet = ({url, ...filters}) => new Promise((resolve, reject) => {
  fetch(`http://10.153.200.178/wg3-api/${url}`, {
    method: 'GET',
    body: filters
  })
  .then(resp => resp.json())
  .then(resp => {
    try {
      resolve(resp)
    } catch (err) {
      reject(new Error(err))
    }
  })
}) 

export const WgApiPost = ({url, ...data}) => new Promise((resolve, reject) => {
  fetch(`http://10.153.200.178/wg3-api/${url}`, {
    method: 'POST',
    body: data
  })
  .then(resp => resp.json())
  .then(resp => {
    try {
      resolve(resp)
    } catch (err) {
      reject(new Error(err))
    }
  })
}) 