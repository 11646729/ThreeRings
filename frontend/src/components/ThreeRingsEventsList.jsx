import React, { memo } from "react"
import moment from "moment"
import styled from "styled-components"

const EventsTableContainer = styled.table`
  width: 100%;
  justify-content: center;
`

const EventsTHeadContainer = styled.thead``

const EventsTRowContainer = styled.tr``

const EventsTBodyContainer = styled.tbody``

const EventsHeader = styled.th`
  background-color: #115e67;
  padding: 30px;
  font-weight: bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const EventsItemContainer = styled.tr``

const EventItem = styled.td`
  background-color: lightgrey;
  text-align: center;
  justify-content: center;
`

const EventItemDate = styled.div`
  margin: 10px;
  font-weight: bold;
`

const EventItemTitle = styled.div`
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
`

const EventItemDetails = styled.div`
  margin: 10px;
`

const EventItemAuthor = styled.div`
  margin: 10px;
  color: darkblue;
`

const ThreeRingsEventsList = (props) => {
  return (
    <EventsTableContainer>
      <EventsTHeadContainer>
        <EventsTRowContainer>
          <EventsHeader>Coming Events</EventsHeader>
        </EventsTRowContainer>
      </EventsTHeadContainer>
      <EventsTBodyContainer>
        {props.eventsData.map((eventsItem) => (
          <EventsItemContainer key={eventsItem.id}>
            <EventItem>
              <EventItemDate>
                {moment(eventsItem.date).utc().format("dddd[] Do MMMM YYYY")}
              </EventItemDate>
              <EventItemTitle>{eventsItem.name}</EventItemTitle>
              <EventItemDetails>
                Description: {eventsItem.description}
              </EventItemDetails>
              <EventItemAuthor>
                Posted by: {eventsItem.creator.name}
              </EventItemAuthor>
            </EventItem>
          </EventsItemContainer>
        ))}
      </EventsTBodyContainer>
    </EventsTableContainer>
  )
}

export default memo(ThreeRingsEventsList)
