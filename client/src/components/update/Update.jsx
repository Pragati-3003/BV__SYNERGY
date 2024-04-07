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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`/users/${user._id}`, userData);
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
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture" onChange={handleChange} />
        </div>
        <div>
          <label>Cover Picture:</label>
          <input type="file" name="coverPicture" onChange={handleChange} />
        </div>
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
