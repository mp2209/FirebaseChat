import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
      {/* <div style={{ height: "10px", borderTop: "1px solid black" }}></div> */}
    </div>
  )
}

export default List