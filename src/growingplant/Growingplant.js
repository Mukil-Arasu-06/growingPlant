import React,{useState,useEffect} from 'react'

import './Growingplant.scss'
const defaultData = {
  name1: "no name",
  logo: "no logo",
  size: 10
}

function Growingplant({ plantData = defaultData }) {
  // const plantName = "Rose"
  // const size = 10

  // const { plantData = defaultData } = props
  let { name1, logo, size, aboutme } = plantData
  const [dynamicSize,setDynamicSize] = useState(size)

  // function func1 (){
  //   if(dynamicSize > 100){
  //     alert("plant is fully growing")
  //   }

  // }

  useEffect(() =>{
    const interval = setInterval(() => {
      if(dynamicSize<100)setDynamicSize(dynamicSize + 10)
    },1000);
    return () => clearInterval(interval)
  },[dynamicSize])
  
  const handleClick = () => {
    setDynamicSize(dynamicSize + 10)
    // size=size+10
    // console.log('clicked',size)
  }
  const handleClick1 = () => {
    setDynamicSize(dynamicSize - 10)
    // size=size+10
    // console.log('clicked',size)
  }

  return (
    <div className='plant'>
      <div className='text'>I am a {name1},I am growing</div>

      <div className='logo'><span style={{ fontSize: `${dynamicSize}px` }}>{logo}</span>
        {
          (name1 === 'rose') ?
            <span>✨</span> : ""
        }
      </div>
      <button onClick={handleClick}>Give water</button>
      <button onClick={handleClick1}>No Water</button>

      {aboutme.map((data, index) => <p key={index}>{index + 1}. {data}</p>)}


    </div>

  )
}

export default Growingplant