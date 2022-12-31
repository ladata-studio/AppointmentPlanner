import React, { useState } from 'react'
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList'

const AppointmentsPage = ({ appointments, contacts, onAdd }) => {
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onAdd(title, contact, date, time)
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
  }

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={(newTitle) => setTitle(newTitle)}
          contact={contact}
          setContact={(newContact) => setContact(newContact)}
          date={date}
          setDate={(newDate) => setDate(newDate)}
          time={time}
          setTime={(newTime) => setTime(newTime)}
          handleSubmit={handleSubmit}
        />
      </section>
      {appointments.length > 0 && (
        <>
          <hr />
          <section>
            <h2>Appointments</h2>
            <TileList items={appointments} />
          </section>
        </>
      )}
    </>
  )
}

export default AppointmentsPage
