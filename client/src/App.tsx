
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './MainLayout'
import Signup from './auth/Signup'
import Login from './auth/login'
import ForgetPassword from './auth/ForgetPassword'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    // children:[
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
  },{
    path:"/forgot-password",
    element:<ForgetPassword/>
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
