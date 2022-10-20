import React from 'react'
import { useState } from 'react'
import colorNames from 'colornames'

function Input({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText 
}) {
  return (
    <form className='input' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='Add color name'>Add color name</label>
        <input 
            autoFocus
            required
            type='text'
            role='Add color name'
            placeholder='Add color name'
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            
            }}

        />
        <button
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input