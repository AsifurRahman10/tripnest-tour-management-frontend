import { createBrowserRouter } from 'react-router'
import App from '../App'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import { VerifyPage } from '../pages/VerifyPage/VerifyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        // Component: App,
        path: '/about'
      }
    ]
  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '/register',
    Component: RegisterPage
  },
  {
    path: '/verify',
    Component: VerifyPage
  }
])
