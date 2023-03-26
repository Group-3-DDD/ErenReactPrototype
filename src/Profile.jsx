import React, { useState } from "react";

function EditProfileForm() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the updated profile information
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditProfileForm;

