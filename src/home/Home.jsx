import React from 'react'
import Growingplant from '../growingplant/Growingplant'


function Home() {

  const plantData1 = {
    name1:"rose",
    logo:'🌹',
    size:30,
    aboutme:[
      "this is red",
      "single hate the rose",
      "love"
    ]
  }
   const plantData2= {
    name1:"sunflower",
    logo:'🌻',
    size:30,
    aboutme: [
      "3","hello","hi"

    ]
  }
    const plantData3 = {
      name1:"rose",
      logo:'🌹',
      emoje:'🍟',
      size:30,
      aboutme:[
        "this is red",
        "single hate the rose",
        "love"
      ]
    }

  
  return (
    <div>
        <h1>Wellcome</h1>
        <Growingplant plantData = {plantData1}/>
        <Growingplant plantData = {plantData2}/>
        <Growingplant plantData = {plantData3}/>    
        </div>
  )
  }

export default Home