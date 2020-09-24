import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {

  Platform,

  StyleSheet,

  Text,

  View,

  ScrollView,

  FlatList,

  TouchableOpacity,

  Image

} from 'react-native'

import CommonFn from './commonFn'

import moment from 'moment'

import styles from './styles/CalendarSelectStyles'

import _ from 'lodash'

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'



function CalendarSelect({...props}) {
  const [viewMode,setViewMode]=('day')
  console.log('object')




  const renderDay=(day)=> {

    const { calendarMonth, date, warpDayStyle, dateSelectedWarpDayStyle,

      renderChildDay, textDayStyle, currentDayStyle, notCurrentDayOfMonthStyle } = props

    const isCurrentMonth = calendarMonth === CommonFn.ym()

    const isCurrent = isCurrentMonth && CommonFn.ymd() === day

    const dateSelected = date && CommonFn.ymd(date) === day

    const notCurrentMonth = day.indexOf(calendarMonth) !== 0

    return (

      <TouchableOpacity onPress={() => selectDate(day)}

        style={[styles.warpDay, warpDayStyle,

        dateSelected ? { backgroundColor: 'white', dateSelectedWarpDayStyle,borderRadius:40 } : {}]}

      >

        <View>

          {renderChildDay(day)}

          <Text style={[styles.day, textDayStyle,

          isCurrent ? { color: 'red', ...currentDayStyle } : {},

          notCurrentMonth ? { color: 'red', ...notCurrentDayOfMonthStyle } : {}]}>

            {day.split('-')[2]}

          </Text>

        </View>

      </TouchableOpacity>

    )

  }



  const selectDate=(date)=> {

    if (isDateEnable(date)) {

      props.selectDate(date)

    }

  }



  const yearMonthChange=(type, unit)=> {

    let { viewMode, currentYear } = state

    if (viewMode === 'day') {

      props.calendarChange(type, unit)

    } else {

     setCurrenYear( currentYear + (type < 0 ? -12 : 12))

    }

  }



  const isDateEnable=(date)=> {

    const { minDate, maxDate } = props

    return date >= minDate && date <= maxDate

  }

  const handleCalendar=(time)=>{

    if(time =='01'){

      return 'January'

    }else if(time =='02'){

      return 'February'

    }else if(time =='03'){

      return 'March'

    }else if(time =='04'){

      return 'April'

    }else if(time =='05'){

      return 'May'

    }else if(time =='06'){

      return 'June'

    }else if(time =='07'){

      return 'July'

    }else if(time =='08'){

      return 'August'

    }else if(time =='09'){

      return 'September'

    }else if(time =='10'){

      return 'October'

    }else if(time =='11'){

      return 'November'

    }

    else{

      return 'December'

    }

  }





    const {

      calendarMonth, renderPrevYearButton, renderPrevMonthButton,

      renderNextYearButton, renderNextMonthButton,

      weekdayStyle, customWeekdays, warpRowWeekdays,

      warpRowControlMonthYear

    } = props

    const weekdays = customWeekdays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']

    const data = CommonFn.calendarArray(calendarMonth)

    var dayOfWeek = []

    _.forEach(weekdays, element => {

      dayOfWeek.push(<Text key={element} style={[styles.weekdays, weekdayStyle]}>{element}</Text>)

    })



    return (

      <View style={styles.container}>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }, warpRowControlMonthYear]}>

          {/* <TouchableOpacity onPress={() => yearMonthChange(-1, 'year')}>

            {renderPrevYearButton ? renderPrevYearButton() : <MCIcons name='chevron-double-left' size={30} color='#ff2121' />}

          </TouchableOpacity> */}

          <TouchableOpacity onPress={() => yearMonthChange(-1, 'month')}>

            {renderPrevMonthButton ? renderPrevMonthButton() : <MCIcons name='chevron-left' size={30} color='black' />}

          </TouchableOpacity>

          <Text style={styles.txtHeaderDate}>{handleCalendar(calendarMonth.split('-')[1]) }  </Text>

          <Text style={styles.txtHeaderDate}>{calendarMonth.split('-')[0]}</Text>

          <TouchableOpacity onPress={() => yearMonthChange(1, 'month')}>

            {renderNextYearButton ? renderNextYearButton() : <MCIcons name='chevron-right' size={30} color='black' />}

          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => yearMonthChange(1, 'year')}>

            {renderNextMonthButton ? renderNextMonthButton() : <MCIcons name='chevron-double-right' size={30} color='#ff2121' />}

          </TouchableOpacity> */}

        </View>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }, warpRowWeekdays]}>

          {dayOfWeek}

        </View>

        <FlatList

          data={data}

          keyExtractor={(item) => item}

          renderItem={({ item }) => renderDay(item)}

          // extraData={state}

          numColumns={7}

        />

      </View>

    )



}



const propTypes = {

  customWeekdays: PropTypes.array,

  renderPrevYearButton: PropTypes.func,

  renderPrevMonthButton: PropTypes.func,

  renderNextYearButton: PropTypes.func,

  renderNextMonthButton: PropTypes.func,

  //style

  warpRowControlMonthYear: PropTypes.object,

  warpRowWeekdays: PropTypes.object,

  weekdayStyle: PropTypes.object,

  textDayStyle: PropTypes.object,

  currentDayStyle: PropTypes.object,

  notCurrentDayOfMonthStyle: PropTypes.object,

  warpDayStyle: PropTypes.object,

  dateSelectedWarpDayStyle: PropTypes.object,



}



const defaultProps = {

  customWeekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']

}



CalendarSelect.propTypes = propTypes

CalendarSelect.defaultProps = defaultProps

export default CalendarSelect;
