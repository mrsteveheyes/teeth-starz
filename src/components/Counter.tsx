import React, { useState, useEffect } from 'react';
import {Animated} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const Counter = (isPlaying:boolean) => (
  <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={120}
    size={120}
    colors={[
      ['#004777', 0.4],
      ['#F7B801', 0.4],
      ['#A30000', 0.2],
    ]}
  >
    {({ remainingTime, animatedColor }) => (
      <Animated.Text style={{ color: animatedColor }}>
        {remainingTime}
      </Animated.Text>
    )}
  </CountdownCircleTimer>
)

export default Counter;
