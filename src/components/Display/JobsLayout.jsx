import { Outlet } from "react-router-dom"
import '../Display/Jobs.css'

const JobsLayout = () => {
  return (
    <div className="head">
      <h2>CARTOON LIST</h2>
      <p>Here the Some Cartoons</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout