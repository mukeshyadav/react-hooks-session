import React, { useState } from "react";

const initialFormState = {
  username: "",
  password: "",
  email: ""
};

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [user, setUser] = useState(null);

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };
  return (
    <div className="form-wrapper">
      <form
        style={{
          display: "grid",
          gridGap: "10px",
          alignItems: "center",
          justifyContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        {user && JSON.stringify(user, null, 4)}
      </form>
    </div>
  );
}
