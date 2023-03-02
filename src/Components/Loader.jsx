import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <>
    <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="dark" />
    </>
  )
}

export default Loader