import Post from "../posts/Post"
import Share from "../share/Share"
import "./feed.css"
import {dummyData} from "../../dummyData"

const Feed = () => {
  return (
    <div className="feed" >
         <div className="feedWrapper">
          <Share />
        {  dummyData.map((p) =>{
           return <Post 
              key={p.id}
              post = {p}
            />
          })}
          
          
         </div>
    </div>
  )
}

export default Feed
