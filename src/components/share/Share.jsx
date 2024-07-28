import { VideoLibrary, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./Share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/1.jpg" alt="" className="profileImage" />
          <input placeholder="Whts in Your Mind" className="profileInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoLibrary htmlColor="tomato" className="optionIcon" />
              <span className="optionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="Blue" className="optionIcon" />
              <span className="optionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="Green" className="optionIcon" />
              <span className="optionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="tomato" className="optionIcon" />
              <span className="optionText">Feelings</span>
            </div>
          </div>
          <div className="shareButton">
            <button className="buttonIcon">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
