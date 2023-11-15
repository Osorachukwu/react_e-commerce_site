import React from 'react'

function Button({ myBtnClass, text, logo, alt }) {
  return (

    //instead of passing all these props, simply pass class as a prop and use it to assign className to the instances of 👇👇👇 the component
    <button className={myBtnClass} style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center"
        }}>

        {text}
        <img src={logo} alt={alt} />

    </button>
  )
}

export default Button