import '../Display/Jobs.css'
import { Link, useLoaderData } from "react-router-dom"

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className="explore-cartoon">
        {jobsData.map((job)=>{
          return (
          <>
          <div className="list-item">
          <Link to={job.id.toString()} key={job.id}>
          <img src={job.image} alt="Image Not Opened" />
          <h4>{job.title}</h4>
          <h6>({job.year})</h6>
          </Link>
          </div>
          </>
          )
        })}
    </div>
    
  )
}

export default Jobs

export const JobsLoader = async ()=>{
  const res = await fetch('https://api.sampleapis.com/cartoons/cartoons2D')
  return res.json();
}
