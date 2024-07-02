import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CardList from '../../Components/CardList/CardList'

type Props = {}

const HomePage = (props: Props) => {
  return (

    <div>
      <Navbar/>
      <CardList/>
    </div>
  )
}

export default HomePage



