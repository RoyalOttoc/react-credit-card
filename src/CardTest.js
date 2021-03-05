import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const CardTest = () => {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [formValues, setFormValues] = useState({ name, number })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = () => {
    console.log(formValues)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmitting(true)
  }

  const validate = (values) => {
    let errors = {}
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.name) {
      errors.name = 'Cannot be blank'
    }
    if (!values.number) {
      errors.number = 'Cannot be blank'
    } else if (values.number.length < 16) {
      errors.number = 'Card number must be 16 numbers'
    }
    return errors
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm()
    }
  }, [formErrors])

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

      <form onSubmit={handleSubmit}>
        <span>Card Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={formValues.number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>Card Name</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>Expiration Date</span>
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY"
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
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  )
}

export default CardTest
