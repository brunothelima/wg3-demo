// import 'whatwg-fetch'
// const WgApiCall = ({url, method, ...data}) => new Promise((resolve, reject) => {
//   fetch(`http://localhost/wg3-api/${url}`, {
//     method: method,
//     body: data
//   })
//   .then(res => res.json())
//   .then(data => {
//     try {
//       resolve(data)
//     } catch (err) {
//       reject(new Error(err))
//     }
//   })
//   .catch(error => console.error(error))
// }) 
const mocks = {
  'auth': { 
    'POST': { 
      token: '83n-fmdow2310sskx-ss2' 
    } 
  },
  'user/me': { 
    'GET': { 
      name: 'Bruno Lima', 
      email: 'brunothelima@gmail.com'
    } 
  }
}
const WgApiCall = ({url, method, ...data}) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(mocks[url][method || 'GET'])
    } catch (err) {
      reject(new Error(err))
    }
  }, 200)
}) 

export default WgApiCall
