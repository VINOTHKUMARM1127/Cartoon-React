import { useLoaderData} from "react-router-dom"
import '../Display/Det.css'
const Det = () => {

const jobDetails = useLoaderData()

  return (
    <div className="box">
        <div><img src={jobDetails.image} alt="Image Not Download" /></div>
        <div>
        <p><b>title: </b>{jobDetails.title}</p><hr />
        <p><b>year: </b>{jobDetails.year}</p><hr />
        <p><b>creator: </b>{jobDetails.creator}</p><hr />
        <p><b>rating: </b>{jobDetails.rating}</p><hr />
        <p><b>genre: </b>{jobDetails.genre}</p><hr />
        <p><b>runtime in minutes: </b>{jobDetails.runtime_in_minutes}</p><hr />
        <p><b>episodes: </b>{jobDetails.episodes}</p><hr />
        </div>


    </div>
  )
}

export default Det

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/" + id);
    return res.json();
}