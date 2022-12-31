import React, { useEffect, useState } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

const ContactsPage = ({ contacts, onAdd }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDuplicated, setIsDuplicated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isDuplicated) {
      onAdd(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }
  }

    useEffect(() => {
      let isDuplicateFound = false
      for (const contact of contacts) {
        if (contact.name === name) {
          isDuplicateFound = true
        }
      }
      setIsDuplicated(isDuplicateFound)
    }, [contacts, name])

  return (
    <>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={(newName) => setName(newName)}
          phone={phone}
          setPhone={(newPhone) => setPhone(newPhone)}
          email={email}
          setEmail={(newEmail) => setEmail(newEmail)}
          handleSubmit={handleSubmit}
        />
      </section>
      {contacts.length > 0 && (
        <>
          <hr />
          <section>
            <h2>Contacts</h2>
            <TileList items={contacts} />
          </section>
        </>
      )}
    </>
  )
}

export default ContactsPage
