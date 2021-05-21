
import axios from 'axios'
import { Message } from 'element-ui';


axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '' : ''
axios.defaults.headers['x-rapidapi-key'] = '354651ce5emsh14b1bdce4a54986p1a157cjsnb87ca2bc5d07'
axios.defaults.headers['x-rapidapi-host'] = 'hotels4.p.rapidapi.com'
axios.defaults.headers.post['useQueryString'] = true
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Message({
      showClose: true,
      message: 'servers error！',
      type: 'error'
    })
    return Promise.reject(res)
  }

  console.log(res)

  return res.data
})

export default axios
