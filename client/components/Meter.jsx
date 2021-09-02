import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

function Meter () {


  return (
    <div>
      <ReactSpeedometer 
      maxValue={100}
      value={80}
      segments={1}
      needleTransitionDuration={2000}
      needleTransition="easeExpInOut"
      />
    </div>
  )
}

export default Meter