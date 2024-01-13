import React, { useEffect, useState } from "react";
import GitHubUser from "./GitHubUser";

export default function FindUser() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        // Handle the error (e.g., log it, show a user-friendly message)
        console.error("Error fetching data:", error.message);
      }
    };

    if (userName.length > 4) fetchData();

    return () => {
      // Cancel the request before component unmounts
      controller.abort();
    };
  }, [userName]);

  return (
    <>
      <h1>Find Github User</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      {userName ? (
        <GitHubUser userDetails={userData} />
      ) : (
        <p>Start typing to initiate search</p>
      )}
    </>
  );
}
