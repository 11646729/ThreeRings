import React, { memo, useRef } from "react"
import moment from "moment"
import styled from "styled-components"

const EventsContainer = styled.div`
  width: 100%;
  justify-content: center;
`

const EventsHeaderList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 2px 1px;
`

const EventsHeader = styled.li`
  background-color: #115e67;
  padding: 30px;
  font-family: Varah-Bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const EventsItemList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px 0px;
`

const EventItem = styled.li`
  background-color: lightgrey;
  font-family: Calibri-Regular;
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
  const listRef = useRef()

  return (
    <EventsContainer>
      <EventsHeaderList>
        <EventsHeader>Coming Events</EventsHeader>
      </EventsHeaderList>

      <EventsItemList ref={listRef}>
        {props.eventsData.map((eventsItem) => (
          <EventItem key={eventsItem.id}>
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
        ))}
      </EventsItemList>
    </EventsContainer>
  )
}

export default memo(ThreeRingsEventsList)
