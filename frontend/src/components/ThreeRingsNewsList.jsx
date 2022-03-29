import React, { memo, useRef } from "react"
import styled from "styled-components"

const NewsTableContainer = styled.div`
  width: 100%;
  justify-content: center;
`

const NewsHeaderList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 2px 1px;
`

const NewsHeader = styled.li`
  background-color: #115e67;
  padding: 30px;
  font-family: Varah-Bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const NewsItemList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px 0px;
`

const NewsItem = styled.li`
  background-color: lightgrey;
  font-family: Calibri-Regular;
  margin: 2px;
  // padding: 5px 0px;
`

const NewsItemTitle = styled.div`
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
`

const NewsItemDetails = styled.div`
  margin: 10px;
`

const NewsItemAuthor = styled.div`
  margin: 10px;
  color: darkblue;
`

const ThreeRingsNewsList = (props) => {
  const listRef = useRef()

  return (
    <NewsTableContainer>
      <NewsHeaderList>
        <NewsHeader>News</NewsHeader>
      </NewsHeaderList>

      <NewsItemList ref={listRef}>
        {props.newsData.map((newsItem) => (
          // <NewsItemContainer>
          <NewsItem key={newsItem.id}>
            <NewsItemTitle>{newsItem.title}</NewsItemTitle>
            <NewsItemDetails>
              {/* Next line removes all html tags in newsItem body */}
              <div dangerouslySetInnerHTML={{ __html: newsItem.body }}></div>
            </NewsItemDetails>
            <NewsItemAuthor>Posted by: {newsItem.creator.name}</NewsItemAuthor>
          </NewsItem>
          // </NewsItemContainer>
        ))}
      </NewsItemList>
    </NewsTableContainer>
  )
}

export default memo(ThreeRingsNewsList)
