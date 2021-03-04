import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const MyCard = () => {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const style = {
    zIndex: '5',
    backgroundColor: 'red',
  }
  return (
    <div className="App">
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        style={style}
      />
      <form>
        <span>Card Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
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
          type="month"
          name="expiry"
          placeholder="MM/YY expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>CVC</span>
        <input
          type="tel"
          name="cvc"
          placeholder="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  )
}

export default MyCard
