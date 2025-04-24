import ky from 'ky'
import userManager from './oidc'

const api = ky.create({
  prefixUrl: `http://203.31.40.27:8080`,
  hooks: {
    beforeRequest: [
      async (request) => {
        const user = await userManager.getUser()
        const accessToken = user?.access_token
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`)
        }
      },
    ],
  },
})

export default api
