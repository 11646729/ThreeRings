import React, { memo } from "react"
import moment from "moment"
import styled from "styled-components"

const ShiftsTableContainer = styled.table`
  width: 100%;
  justify-content: center;
`

const ShiftsTHeadContainer = styled.thead``

const ShiftsTRowContainer = styled.tr``

const ShiftsHeader = styled.th`
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
  return (
    <ShiftsTableContainer>
      {/* <ShiftsTHeadContainer>
        <ShiftsTRowContainer>
          <ShiftsHeader>{moment().format("dddd[] Do MMMM YYYY")}</ShiftsHeader>
        </ShiftsTRowContainer>
      </ShiftsTHeadContainer> */}

      <ShiftsItemList>
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
    </ShiftsTableContainer>
  )
}

export default memo(ThreeRingsShiftsList)
