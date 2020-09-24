import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default StyleSheet.create({
  day: {
    margin: 10,
    color: 'black',
    fontWeight:"bold",
    fontSize:16
  },
  txtHeaderDate: {
    color: 'black',
    fontSize: 18,

  },
  weekdays: {
    margin: 10,
    color: '#666666',
    width: screenWidth / 7 - 8,
    textAlign: 'center'
  },
  warpDay: {
    width: screenWidth / 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    
  },
  icLockRed: {
    width: 13 / 2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1,
  }
})
