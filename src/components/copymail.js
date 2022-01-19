import React, { useState, useEffect } from 'react'

const EmailCopy = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState('')
  const [instructions, setInstructions] = useState('')
  const email = ' disorboflorenciaj@gmail.com '

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [copySuccessMessage])

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopySuccessMessage(`Copied to clipboard ! `)
    setInstructions('')
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return
    }
    setInstructions(`Click to copy 🡺  ${email} `)
  }

  function hideInstruction() {
    setInstructions('')
  }

  return (
    <nav className="toolt">
      <p className="tooltip">
        {copySuccessMessage} {instructions}
      </p>
      <img src="../images/logos/60543.png" alt="logoLinkedIn" className="logosFoot" onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}></img>
    </nav>
  )
}

export default EmailCopy