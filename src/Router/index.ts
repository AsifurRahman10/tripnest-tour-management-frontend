import { createBrowserRouter } from 'react-router'
import App from '../App'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'

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
  }
])
