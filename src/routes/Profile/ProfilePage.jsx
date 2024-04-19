import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./ProfilePage.scss";
import apiRequest from "../../lib/ApiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  console.log(currentUser.userInfo.username);
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img src={currentUser.userInfo.avatar || "/favicon.png"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.userInfo.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.userInfo.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
