import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { Camera } from 'expo-camera';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(120);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}>
      <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.25,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => setIsPlaying(isPlaying => !isPlaying)}>
            <Text style={{ fontSize: 18, marginBottom: 50, color: 'white' }}> {isPlaying ? `Stop` : `Lets go!`} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.25,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => setKey(prevKey => prevKey + 1)}>
            <Text style={{ fontSize: 18, marginBottom: 50, color: 'white' }}> Restart </Text>
          </TouchableOpacity>
          <View style={{
              flex: 0.5,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}>
              <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={120}
                size={120}
                key={key}
                colors={[
                  ['#F7B801', 0.4],
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
          </View>
        </View>
      </Camera>
    </View>
  );
}
