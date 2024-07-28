import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { users } from "../../dummyData";
import { useState } from "react";

const Post = ({post}) => {
  const [likeCount,setLikeCount] = useState(0);
  const [isLike,setisLike] = useState(false);

  function handleClick(){
      isLike?setLikeCount(likeCount-1):setLikeCount(likeCount+1);
      setisLike(!isLike);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img src={users.filter(u=>u.userid === post.id)[0].profilePicAdd} alt="" className="postImage" />
            <span className="postName">{users.filter(u=>u.userid === post.id)[0].userName}</span>
            <span className="postTime">{post.durationofpost}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCentre">
          <span className="textForpost">{post.description}</span>
          <img src={post.photoadd} alt="" className="textPostImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
               <img onClick={handleClick} src="/assets/like.jpg" alt="" className="likeImgs" />
               <img onClick={handleClick} src="/assets/heart1.jpg" alt="" className="likeImgs" />
               <span className="likeCounter">{likeCount + post.likes} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="commentText">{post.comments} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
