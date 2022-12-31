import React from 'react'
import { ContactPicker } from '../../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  const handleTitleChange = ({ target }) => {
    setTitle(target.value)
  }

  const handleDateChange = ({ target }) => {
    setDate(target.value)
  }

  const handleTimeChange = ({ target }) => {
    setTime(target.value)
  }

  const handleContactChange = ({ target }) => {
    setContact(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={handleDateChange}
          required
        />
      </p>
      <p>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          required
        />
      </p>
      <p>
        <label htmlFor="contact">Contact</label>
        <ContactPicker
          contacts={contacts}
          id="contact"
          value={contact}
          onChange={handleContactChange}
          required
        />
      </p>
      <p>
        <input type="submit" value="Done" />
      </p>
    </form>
  )
}
