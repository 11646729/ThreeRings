import React, { memo } from "react"
import moment from "moment"
import styled from "styled-components"

const ShiftsTableContainer = styled.table`
  width: 100%;
  justify-content: center;
`

const ShiftsTHeadContainer = styled.thead``

const ShiftsTRowContainer = styled.tr``

const ShiftsBodyContainer = styled.tbody``

const ShiftsHeader = styled.th`
  background-color: #115e67;
  padding: 30px;
  font-family: Varah-Bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const ShiftsItemContainer = styled.tr``

const ShiftItem = styled.td`
  background-color: lightgrey;
  font-family: Calibri-Regular;
`

const ShiftTimes = styled.div`
  margin: 10px;
  font-weight: bold;
`

const ShiftVolunteers = styled.div`
  margin: 10px;
  color: darkblue;
`

const ThreeRingsShiftsTable = (props) => {
  return (
    <ShiftsTableContainer>
      <ShiftsTHeadContainer>
        <ShiftsTRowContainer>
          <ShiftsHeader>{moment().format("dddd[] Do MMMM YYYY")}</ShiftsHeader>
        </ShiftsTRowContainer>
      </ShiftsTHeadContainer>

      <ShiftsBodyContainer>
        {props.shiftsData.map((shift) => (
          <ShiftsItemContainer key={shift.id}>
            <ShiftItem>
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
          </ShiftsItemContainer>
        ))}
      </ShiftsBodyContainer>
    </ShiftsTableContainer>
  )
}

export default memo(ThreeRingsShiftsTable)
