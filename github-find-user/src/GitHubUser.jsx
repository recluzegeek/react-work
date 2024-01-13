import React from "react";

export default function GitHubUser({ userDetails }) {
  // console.log(userDetails);
  return (
    <div>
      Github users
      <ul>
        {Object.keys(userDetails).map((key) => (
          <li key={key}>
            {key}: {userDetails[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
