import React, { memo, useRef } from "react"
import moment from "moment"
import styled from "styled-components"

const ShiftsContainer = styled.div`
  width: 100%;
  justify-content: center;
`

const ShiftsHeaderList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 2px 1px;
`

const ShiftsHeader = styled.li`
  background-color: #115e67;
  padding: 30px;
  font-family: Varah-Bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const ShiftsItemList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px 0px;
`

const ShiftItem = styled.li`
  background-color: lightgrey;
  font-family: Calibri-Regular;
  margin: 2px;
  // padding: 5px 0px;
`

const ShiftTimes = styled.div`
  margin: 10px;
  font-weight: bold;
  padding-top: 10px;
`

const ShiftVolunteers = styled.div`
  margin: 10px;
  color: darkblue;
  padding-bottom: 10px;
`

const ThreeRingsShiftsList = (props) => {
  const listRef = useRef()

  return (
    <ShiftsContainer>
      <ShiftsHeaderList>
        <ShiftsHeader>{moment().format("dddd[] Do MMMM YYYY")}</ShiftsHeader>
      </ShiftsHeaderList>

      <ShiftsItemList ref={listRef}>
        {props.shiftsData.map((shift) => (
          <ShiftItem key={shift.id}>
            <ShiftTimes>
              Shift:
              {moment(shift.start_datetime).format(" HH:mm ")}
              to
              {moment(shift.start_datetime)
                .add(shift.duration, "s")
                .format(" HH:mm")}
            </ShiftTimes>
            <ShiftVolunteers>
              {shift.rota}: {shift.nameString}
            </ShiftVolunteers>
          </ShiftItem>
        ))}
      </ShiftsItemList>
    </ShiftsContainer>
  )
}

export default memo(ThreeRingsShiftsList)
