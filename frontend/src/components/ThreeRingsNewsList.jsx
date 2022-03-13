import React, { memo } from "react"
import styled from "styled-components"

const NewsTableContainer = styled.table`
  width: 100%;
  justify-content: center;
`

const NewsTHeadContainer = styled.thead``

const NewsTRowContainer = styled.tr``

const NewsTBodyContainer = styled.tbody``

const NewsHeader = styled.th`
  background-color: #115e67;
  padding: 30px;
  font-family: Varah-Bold;
  font-size: 30px;
  color: white;
  text-align: center;
  justify-content: center;
`

const NewsItemContainer = styled.tr``

const NewsItem = styled.td`
  background-color: lightgrey;
  font-family: Calibri-Regular;
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
  return (
    <NewsTableContainer>
      <NewsTHeadContainer>
        <NewsTRowContainer>
          <NewsHeader>News</NewsHeader>
        </NewsTRowContainer>
      </NewsTHeadContainer>
      <NewsTBodyContainer>
        {props.newsData.map((newsItem) => (
          <NewsItemContainer key={newsItem.id}>
            <NewsItem>
              <NewsItemTitle>{newsItem.title}</NewsItemTitle>
              <NewsItemDetails>
                {/* Next line removes all html tags in newsItem body */}
                <div dangerouslySetInnerHTML={{ __html: newsItem.body }}></div>
              </NewsItemDetails>
              <NewsItemAuthor>
                Posted by: {newsItem.creator.name}
              </NewsItemAuthor>
            </NewsItem>
          </NewsItemContainer>
        ))}
      </NewsTBodyContainer>
    </NewsTableContainer>
  )
}

export default memo(ThreeRingsNewsList)
