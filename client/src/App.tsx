
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './MainLayout'
import Signup from './auth/Signup'
import Login from './auth/Login'
import ForgetPassword from './auth/ForgetPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/Navbar'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>    // children:[

    //   {
    //     path:"/login"
    //   }
    // ]
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
