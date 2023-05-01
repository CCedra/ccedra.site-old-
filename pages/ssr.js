// ./ssr.js
import Success from './pages/success.vue'
import ErrorPage from './pages/error.vue'

export const ssrRender = {
  Success: Success.ssrRender,
  ErrorPage: ErrorPage.ssrRender
}
