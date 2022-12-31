import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage'
import ContactsPage from './containers/contactsPage/ContactsPage'
import Navigation from './containers/navigation/Navigation'
import ROUTES from './routes'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    setContacts([...contacts, newContact])
  }

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    setAppointments([...appointments, newAppointment])
  }

  const PAGES = {
    CONTACTS: <ContactsPage contacts={contacts} onAdd={addContact} />,
    APPOINTMENTS: (
      <AppointmentsPage
        appointments={appointments}
        contacts={contacts}
        onAdd={addAppointment}
      />
    )
  }

  const routes = useRoutes([
    { path: ROUTES.CONTACTS, element: PAGES.CONTACTS },
    { path: ROUTES.APPOINTMENTS, element: PAGES.APPOINTMENTS }
  ])
  
  return (
    <>
      <Navigation />
      <main>{routes}</main>
    </>
  )
}

export default App
