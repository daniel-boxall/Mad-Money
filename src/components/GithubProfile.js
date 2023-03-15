import React, { useState, useEffect } from "react";
import axios from "axios";

function GithubProfile({ username }) {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, [username]);

  if(isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Github User API</h1>
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} alt='github avatar'></img>
      <p>Bio: {userData.bio}</p>
      <p>Location: {userData.location}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Account created at: {userData.created_at}</p>
      <a href={userData.html_url}>Github page link.</a>
    </div>
  )
}

export default GithubProfile;