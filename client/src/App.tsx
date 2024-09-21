
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
import RestaurantDetail from './components/RestaurantDetail'
import Cart from './components/Cart'
import Restaurant from './admin/Restaurant'
import AddMenu from './admin/AddMenu'
import Orders from './admin/Orders'
import Success from './components/Success'

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
      {
        path:"/search/:text",
        element:<SearchPage/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetail/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/order/status",
        element:<Success/>
      },
      // Admin services...
      {
        path:"/admin/restaurant",
        element:<Restaurant/>
      },
      {
        path:"/admin/menu",
        element:<AddMenu/>
      },
      {
        path:"/admin/orders",
        element:<Orders/>
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
