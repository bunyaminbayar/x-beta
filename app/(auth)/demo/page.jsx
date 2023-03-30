"use client"; // this is a client componentimport React from 'react';


import { useState, useEffect } from "react";

export default function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserData = {
      ...userData,
      firstName: firstName,
      lastName: lastName,
    };

    localStorage.setItem("userData", JSON.stringify(newUserData));

    setUserData(newUserData);
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          İsim:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Soyisim:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Kaydet</button>
      {Object.keys(userData).length > 0 && (
        <div>
          <h2>Kaydedilmiş Veri:</h2>
          <p>
            İsim: {userData.firstName} Soyisim: {userData.lastName}
          </p>
        </div>
      )}
    </form>
  );
}
