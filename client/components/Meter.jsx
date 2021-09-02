import React from "react"
import ReactSpeedometer from "react-d3-speedometer"

function Meter(props) {

  return (
    <div>
      <h1>0% Certified Hipster</h1>
      <h3>Your music taste is pretty basic</h3>
      <ReactSpeedometer
        value={80}
        maxSegmentLabels={0}
        segments={1000}
        needleTransition='easeExpInOut'
        needleTransitionDuration={3000}
        maxValue={100}
      />
    </div>
  )
}

export default Meter
