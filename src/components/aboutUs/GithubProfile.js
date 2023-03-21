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
      <img src={userData.avatar_url} alt='github avatar'></img>
      <h2>{userData.name}</h2>
      <div className='card-info'>
        <p>{userData.bio}</p>
        <p>{userData.location}</p>
      </div>
    </div>
  )
}

export default GithubProfile;