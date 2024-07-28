
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import "./home.css"

const Home = (props) => {
  return (
    <>
      <Topbar fun1 = {props.fun}/>
      <div className="bottombars">
          <Sidebar />
          <Feed />
          <Rightbar />
      </div>
    
    </>
  )
}

export default Home
