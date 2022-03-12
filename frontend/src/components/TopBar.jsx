import React from "react"
import styled from "styled-components"
// import { NotificationsNone, Language, Settings } from "@material-ui/icons"

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #115e67;
  position: sticky;
  top: 0;
  z-index: 999;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const TopBarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 140px;
  height: 100px;
  // border-radius: 50%;
  cursor: pointer;
`

const TopRight = styled.div`
  display: flex;
  align-items: center;
`

const ITSupportName = styled.div`
  color: white;
`

const TopBarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  // color: #555;
`

// const TopIconBadge = styled.div`
//   height: 15px;
//   width: 15px;
//   position: absolute;
//   top: -5px;
//   right: 0px;
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 10px;
// `

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export default function TopBar() {
  return (
    <Container>
      <TopBarWrapper>
        {/* <div className="topLeft"> */}
        <Logo src="/static/images/Samaritans.png" alt="" />
        {/* </div> */}
        <TopRight>
          <ITSupportName>
            IT Support: Brian Smith Tel: 07714 599070
          </ITSupportName>
          <TopBarIconContainer>
            {/* <NotificationsNone /> */}
            {/* <TopIconBadge>1</TopIconBadge> */}
          </TopBarIconContainer>
          <TopBarIconContainer>
            {/* <Language /> */}
            {/* <TopIconBadge>2</TopIconBadge> */}
          </TopBarIconContainer>
          <TopBarIconContainer>{/* <Settings /> */}</TopBarIconContainer>
          <TopAvatar src="/static/images/brian.jpeg" alt="" />
        </TopRight>
      </TopBarWrapper>
    </Container>
  )
}
