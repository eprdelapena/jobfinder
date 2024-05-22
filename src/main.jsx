import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 
import './index.css' 
import {RouterProvider, createBrowserRouter} from 'react-router-dom' 
import MainLayout from './layout/MainLayout.jsx'
import ErrorPage from './layout/ErrorPage.jsx'
import Homepage from './layout/Homepage.jsx'
import Jobpage from './layout/Jobpage.jsx'
import SingleJobPage from './layout/SingleJobPage.jsx'
import AddJobPage from './layout/AddJobPage.jsx'
import EditJobPage from './layout/EditJobPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/homepage',
        element: <Homepage />
      },
      {
        path: '/jobs',
        element: <Jobpage />
      },
      {
        path: '/addjobs',
        element: <AddJobPage />
      },
      {
        path: '/jobs/:profileID',
        element: <SingleJobPage />
      },
      {
        path: '/editjob/:profileID',
        element: <EditJobPage/>
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>, 
)
