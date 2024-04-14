import React, { useState, useContext } from 'react';
import axios from 'axios';
import './update.css';
import { AuthContext } from '../../context/AuthContext';

const Update = () => {
  const { user, dispatch } = useContext(AuthContext);
  const initialUserData = user || {
    username: '',
    email: '',
    profilePicture: '',
    coverPicture: '',
    desc: '',
    city: '',
    department: '',
    job: '',
    skills: '',
    interests: '',
    linkedin: '',
    twitter: '',
    github: '',
    degree: '',
    graduationYear: '',
  };
  
  const [userData, setUserData] = useState(initialUserData);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
    console.log(profilePicture);
  };

  const handleCoverPictureChange = (e) => {
    setCoverPicture(e.target.files[0]);
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('email', userData.email);
      formData.append('desc', userData.desc);
      formData.append('city', userData.city);
      formData.append('job', userData.job);
      formData.append('skills', userData.skills);
      formData.append('interests', userData.interests);
      formData.append('linkedin', userData.linkedin);
      formData.append('twitter', userData.twitter);
      formData.append('github', userData.github);
      formData.append('degree', userData.degree);
      formData.append('graduationYear', userData.graduationYear);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }
      if (coverPicture) {
        formData.append('coverPicture', coverPicture);
      }

      const response = await axios.put(`/users/${user._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data); // Assuming the backend returns the updated user data
      // You can dispatch an action to update the user context with the updated data if necessary
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form>
        {/* Other input fields */}
        {/* <div>
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture" onChange={handleProfilePictureChange} />
        </div>
        <div>
          <label>Cover Picture:</label>
          <input type="file" name="coverPicture" onChange={handleCoverPictureChange} />
        </div> */}
        <div>
          <label>Job:</label>
          <input type="text" name="job" value={userData.job} onChange={handleChange} />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={userData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Interests:</label>
          <input type="text" name="interests" value={userData.interests} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="desc" value={userData.desc} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={userData.city} onChange={handleChange} />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input type="text" name="linkedin" value={userData.linkedin} onChange={handleChange} />
        </div>
        <div>
          <label>Twitter:</label>
          <input type="text" name="twitter" value={userData.twitter} onChange={handleChange} />
        </div>
        <div>
          <label>Github:</label>
          <input type="text" name="github" value={userData.github} onChange={handleChange} />
        </div>
        <div>
          <label>Degree:</label>
          <input type="text" name="degree" value={userData.degree} onChange={handleChange} />
        </div>
        <div>
          <label>Graduation Year:</label>
          <input type="text" name="graduationYear" value={userData.graduationYear} onChange={handleChange} />
        </div>
      </form>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default Update;
