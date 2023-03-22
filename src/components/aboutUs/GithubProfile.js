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
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 figure">
      <img className="w-24 h-24 md:w-48 md:h-auto rounded-2xl rounded-full mx-auto p-2 " src={userData.avatar_url} alt="" width="384" height="512"/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400 text-xl text-center">
            {userData.name}
          </div>
          <div className="text-slate-700 dark:text-slate-500 text-lg text-center">
            {userData.bio}<br></br>
            {userData.location}   
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default GithubProfile;