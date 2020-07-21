import React, { useState } from "react";

function App() {
  const [inputName, setName] = useState({ firstName: "", lastName: "" });
  const [inputGender, setGender] = useState("");
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setName((preName) => {
      return { ...preName, [name]: value };
    });
  }

  function handleGender(event) {
    const { name, value } = event.target;
    setGender({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newContact = [
      inputName.firstName,
      inputName.lastName,
      inputGender.gender,
    ];

    setContactsData((preContacts) => {
      return [...preContacts, newContact];
    });
  }

  console.log(contactsData);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputName.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputName.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Gender"
          name="gender"
          value={inputGender.gender}
          onChange={handleGender}
        />
        <br />
        <button>Add contact</button>
      </form>
      {/*{contacts}*/}
    </>
  );
}

export default App;
