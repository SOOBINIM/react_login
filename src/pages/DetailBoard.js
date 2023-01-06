import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/common/Header';
import { comments } from '../data'


const StyledDetailBlock = styled.div`
    padding: 1rem;
`

const StyledDetailBoard = styled.div`
    margin-bottom: 8rem;
`

const StyledCommentItem = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;

    &:first-child{
        padding-top: 0;
    }

    & + & {
        border-top: 1px solid black;
    }

    h2 {
        margin-top: 0
    }

    h3{
        margin-bottom: 0;
    }

    p{
        margin-bottom: 0;
        margin-top: 0
    }`

const DetailBoard = () => {
    const location = useLocation();
    const article = location.state["article"]
    const boardComments = article["contents"]["commentKey"]
    const comment = comments[boardComments]

    return (
        <>
            <Header />
            <StyledDetailBlock>
                <StyledDetailBoard>
                    <h1>{article["title"]}</h1>
                    <div>{article["contents"]["body"]}</div>
                </StyledDetailBoard>

                {comment ?
                    <>
                        <h2>댓글 ({comment.length}) </h2>
                        {comment.map((comment, index) => (
                            <StyledCommentItem key={index}>
                                <h2>{comment.user}</h2>
                                <h3>{comment.header}</h3>
                                <p>{comment.contents}</p>
                            </StyledCommentItem>
                        ))}</>

                    :
                    <StyledCommentItem>댓글이 없습니다.</StyledCommentItem>}

            </StyledDetailBlock>

        </>
    )
}

export default DetailBoard;

