import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const MyCard = () => {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  const handleClick = (event) => {
    const errorMessage = (message) => (
      <i className="fas fa-exclamation-circle">&nbsp;{message}</i>
    )
    if (number.length < 13) {
      event.preventDefault()
      setError(errorMessage('Card number must be 13 characters or more'))
    } else if (name === '') {
      event.preventDefault()
      setError(
        errorMessage('Enter the full name as printed on the credit card')
      )
    } else if (expiry === '') {
      event.preventDefault()
      setError(errorMessage('Expiry date is required'))
    } else if (cvc.length < 3) {
      event.preventDefault()
      setError(errorMessage('Card security code must be 3 numbers or more'))
    }
  }
  return (
    <div className="App">
      <div className="card">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      </div>

      <form action="" method="GET">
        <span>Card Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          maxLength="16"
          pattern="[0-9]{13,16}"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>Card Name</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          pattern="^[a-zA-Z ]*$"
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>Expiration Date</span>
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY"
          maxLength="5"
          pattern="\d\d/\d\d"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>CVV</span>

        <input
          type="tel"
          name="cvc"
          placeholder="cvv"
          value={cvc}
          maxLength="4"
          pattern="[0-9]{3,4}"
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input className="submit" type="submit" onClick={handleClick} />
        <span className="error">{error}</span>
      </form>
    </div>
  )
}

export default MyCard
