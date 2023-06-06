import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Other from "../pages/Other"

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <Other />
  }
], {
  basename: "/jadwal-dokter"
})