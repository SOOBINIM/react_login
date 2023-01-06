import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    /* background-color: beige; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* justify-content: flex-start; */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

    .nav_user_name{
        padding-left: 0.5rem;

        button{
            border: none;
            text-align: right;
            border-radius: 0.5rem;
            font-weight: bold;
            padding: 0.25rem 0.5rem;
            color: white;
            background-color: black;
            cursor: pointer;
            margin-left: 3rem;

            &:hover{
                color: white;
                background-color: red;
                font-weight: bold;

            }
        }
    }
    
    .nav_category{
        /* display: flex; */
        /* justify-items: flex-start; */

        ul{
            display: flex;
            list-style: none;

            li + li {
                margin-left: 30px;
            }

            a{
                &:hover{
                    color: gray;
                }
            }
        }



    }

`

const Space = styled.div`
    height: 3.3rem;
`


const Header = () => {
    const [userName, setUsername] = useState("")
    // const [type, setType] = useState("co")
    const navigate = useNavigate();

    useEffect(() => {
        const loginUser = localStorage.getItem("loginUser")
        if (loginUser) {
            const parseLoginUser = JSON.parse(loginUser) || []
            setUsername(Object.values(Object.values(parseLoginUser)[0])[0])
        }
        else {
            alert("로그인이 필요해요!")
            navigate("/login")
        }
    }, [userName, navigate])

    const logout = () => {
        localStorage.removeItem('loginUser')
        setUsername("")
    }


    return (
        <div>
            <StyledHeader>
                <div className="nav_category">
                    <ul>
                        <li>
                            <Link to="/board/cosmic">cosmic</Link>
                        </li>
                        <li>
                            <Link to="/board/notice">notice</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav_user_name">{userName}님 반갑습니다.
                    <button onClick={logout}>로그아웃</button>
                </div>

            </StyledHeader >
            <Space />

            {/* <Board type="cosmic" /> */}
            {/* <Board type="notice" /> */}
        </div >
    )
}

export default Header;

