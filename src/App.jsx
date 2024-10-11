
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import JobsLayout from "./components/Display/JobsLayout"
import Jobs, { JobsLoader } from "./components/Display/Jobs"
import Det, { jobDetailsLoader } from "./components/Display/Det"
import RootLayout from "./layout/RootLayout"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route path="/" element={<JobsLayout/>}>
          <Route index element={<Jobs/>} loader={JobsLoader}/>
          <Route path =':id' element={<Det/>} loader={jobDetailsLoader}/>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App