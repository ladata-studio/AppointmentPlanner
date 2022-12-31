import React from 'react'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = ({target}) => {
    setName(target.value)
  }

  const handlePhoneChange = ({target}) => {
    setPhone(target.value)
  }

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </p>

      <p>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </p>

      <p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </p>

      <p>
        <input type="submit" value="Done" />
      </p>
    </form>
  )
}
