import { useState, useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId, changeChat } = useChatStore();
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      await fetchUserInfo(user?.uid);

      if (user) {
        const userChatsRef = doc(db, "userchats", user.uid);
        const userChatsSnap = await getDoc(userChatsRef);
        const lastChatId = userChatsSnap.data()?.lastChatId;

        if (lastChatId) {
          const chatIndex = userChatsSnap.data().chats.findIndex(chat => chat.chatId === lastChatId);
          const receiverId = userChatsSnap.data().chats[chatIndex]?.receiverId;
          
          if (receiverId) {
            const userDocRef = doc(db, "users", receiverId);
            const userDocSnap = await getDoc(userDocRef);
            const user = userDocSnap.data();
            changeChat(lastChatId, user);
          }
        }
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo, changeChat]);

  const handleShowDetail = () => {
    setShowDetail((prev) => !prev);
  };

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat onShowDetail={handleShowDetail} showDetail={showDetail} />}
          {showDetail && <Detail onClose={handleShowDetail} />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;