import React from 'react'

export const ContactPicker = ({ contacts, onChange, value, required }) => {
  return (
    <select id="contact" onChange={onChange} required={required} value={value}>
      <option disabled hidden value="">
        Select a contact
      </option>
      {contacts.map((contact, index) => {
        const { name, phone, email } = contact
        return (
          <option key={index} value={name}>
            {name}, {phone} ({email})
          </option>
        )
      })}
    </select>
  )
}
