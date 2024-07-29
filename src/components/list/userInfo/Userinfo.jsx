import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { useChatStore } from "../../../lib/chatStore";
import { auth } from "../../../lib/firebase";

const Userinfo = () => {
  const { resetChat } = useChatStore();
  const { currentUser } = useUserStore();

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>

      {/* <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div> */}
    </div>
  )
}

export default Userinfo