import "./rightbar.css";
// import { Users } from "../../dummyData";
import { useNavigate } from "react-router";
import Update from "../update/Update";

import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user && user._id) {
          const friendList = await axios.get("/users/friends/" + user._id);
          setFriends(friendList.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    const { user: currentUser } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      const fetchFriends = async () => {
        try {
          const response = await axios.get(`/users/friends/${currentUser._id}`);
          setFriends(response.data);
        } catch (error) {
          console.error("Error fetching friends:", error);
        }
      };

      if (currentUser) {
        fetchFriends();
      }
    }, [currentUser]);
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle"> Friends</h4>
        <ul className="rightbarFriendList">
          {friends.map((friend) => (
            <Online key={friend.id} user={friend} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const navigate = useNavigate();
    const isCurrentUserViewingOwnProfile =
      user.username === currentUser.username;
    const handleMessageClick = async () => {
      try {
        // Check if a conversation exists between currentUser and user
        const conversationResponse = await axios.get(
          `/conversations/find/${currentUser._id}/${user._id}`
        );

        if (conversationResponse.data) {
          // Conversation already exists, navigate to the messaging page
          navigate(`/messenger/`);
        } else {
          // Conversation doesn't exist, create a new conversation
          const newConversationResponse = await axios.post("/conversations/", {
            senderId: currentUser._id,
            receiverId: user._id,
          });

          console.log("Conversation created:", newConversationResponse.data);
          navigate(`/messenger/`);
        }
      } catch (error) {
        console.error("Error handling message click:", error);
      }
    };
    const [showUpdateProfile, setShowUpdateProfile] = useState(false);
    const toggleUpdateProfile = () => {
      setShowUpdateProfile((prevState) => !prevState);
    };

    return (
      <>
        {user.username && (
          <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              {user.username && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Username:</span>
                  <span className="rightbarInfoValue">{user.username}</span>
                </div>
              )}
              {user.email && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Email:</span>
                  <span className="rightbarInfoValue">{user.email}</span>
                </div>
              )}
              {user.desc && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Description:</span>
                  <span className="rightbarInfoValue">{user.desc}</span>
                </div>
              )}
              {user.city && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">{user.city}</span>
                </div>
              )}
              {user.department && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Department:</span>
                  <span className="rightbarInfoValue">{user.department}</span>
                </div>
              )}
              {user.job && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Job:</span>
                  <span className="rightbarInfoValue">{user.job}</span>
                </div>
              )}
              {user.skills && user.skills.length > 0 && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Skills:</span>
                  <span className="rightbarInfoValue">{user.skills.join(', ')}</span>
                </div>
              )}
              {user.interests && user.interests.length > 0 && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Interests:</span>
                  <span className="rightbarInfoValue">{user.interests.join(', ')}</span>
                </div>
              )}
              {user.linkedin && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">LinkedIn:</span>
                  <span className="rightbarInfoValue">{user.linkedin}</span>
                </div>
              )}
              {user.twitter && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Twitter:</span>
                  <span className="rightbarInfoValue">{user.twitter}</span>
                </div>
              )}
              {user.github && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Github:</span>
                  <span className="rightbarInfoValue">{user.github}</span>
                </div>
              )}
              {user.degree && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Degree:</span>
                  <span className="rightbarInfoValue">{user.degree}</span>
                </div>
              )}
              {user.graduationYear && (
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Graduation Year:</span>
                  <span className="rightbarInfoValue">{user.graduationYear}</span>
                </div>
              )}
              {!isCurrentUserViewingOwnProfile && (
                <button onClick={handleMessageClick}>Message</button>
              )}
              {isCurrentUserViewingOwnProfile && (
                <>
                  <button onClick={toggleUpdateProfile}>
                    {showUpdateProfile ? 'Hide Update Profile' : 'Update Profile'}
                  </button>
                  {showUpdateProfile && <Update />}
                </>
              )}
            </div>
          </>
        )}
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
              key={friend._id} // Assuming each friend object has an _id field
            >
              <div className="rightbarFollowing">
                <img
                  src={friend.profilePicture ? friend.profilePicture : 'default-profile-picture.jpg'}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
