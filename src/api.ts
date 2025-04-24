import ky from 'ky'
import userManager from './oidc'

const api = ky.create({
  prefixUrl: `http://203.31.40.27:8080`
})

export default api
