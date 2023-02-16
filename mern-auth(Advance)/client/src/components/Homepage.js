import React from 'react'
import { useContext } from 'react'

import { UserContext } from '../App'



const Homepage = () => {

    const userContext = useContext(UserContext);
    return (
    <div>{`Welcome ${userContext.email}`}</div>
  )
}

export default Homepage