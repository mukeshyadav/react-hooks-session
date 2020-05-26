import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };

    setUser(userData);
    setUsername("");
    setPassword("");
  };
  return (
    <div className="wrapper-form">
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridGap: "10px"
        }}
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
        {user && JSON.stringify(user, null, 2)}
      </form>
    </div>
  );
}
