import React from 'react'

function Color({colorValue, hexValue, isDarkText }) {
  return (
    <section className='color'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"
        }}

    >
    <p>{colorValue ? colorValue : "Empty Value"}</p>
    <p>{hexValue ? hexValue : "null"}</p>
    </section>
  )
}


Color.defaultProps = {
    colorValue: "Empty color value"
}

export default Color