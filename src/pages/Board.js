import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
import { bbs, boardId } from '../data'

const BBS_HEADER = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 1rem;
    font-weight: bold;

`

const BBS = styled.div`
    width: 100%;
    padding: 1rem;
`

const BBS_ITEM = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    flex: 1;

    &:first-child{
        padding-top: 0;
    }

    & + & {
        border-top: 1px solid black;
    }

    h2{
        margin-bottom: 0;
        margin-top: 0;

        &:hover{
            color : gray
        }
    }

    p{
        margin-top: 1.5rem;
    }
`

const BBS_FOOTER = styled.footer`
 padding: 1rem;
    font-weight: bold;
`


const Board = () => {
    const params = useParams();
    const tag = params.tag

    const header = boardId[params.tag].header
    const footer = boardId[params.tag].footer
    const bbsArticles = bbs["articles"]

    return (
        <div>
            <Header />
            <BBS_HEADER>
                {header}
            </BBS_HEADER>
            <h2>{tag} 게시판</h2>
            <BBS>
                {bbsArticles.filter((articleFilter) => articleFilter.key === tag).map((article, index) =>
                    <BBS_ITEM key={index}>
                        <Link to={`/board/${tag}/${index}`} state={{ article }}><h2>{article.title}</h2></Link>
                        <div className='bbs_contents'>
                            <div className='bbs_contents_body'>
                                <p>{article.contents["body"]}</p>
                            </div>
                        </div>
                    </BBS_ITEM>
                )
                }
            </BBS>
            <BBS_FOOTER>
                {footer}
            </BBS_FOOTER>
        </div>
    )
}

export default Board;