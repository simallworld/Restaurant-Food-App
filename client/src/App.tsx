
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'
import ForgetPassword from './auth/ForgetPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import HeroSection from './components/HeroSection'
import MainLayout from './layout/MainLayout'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,  
    children:[
      {
        path:"/",
        element:<HeroSection />
      },
      {
        path:"/profile",
        element:<Profile />
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element:<ForgetPassword/>
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element:<VerifyEmail/>
  },
  {
    path:"/search/:id",
    element:<SearchPage/>
  },
])

function App() {
  return (
    <main>
    <RouterProvider router={appRouter}>

    </RouterProvider>
    </main>
  )
}

export default App
