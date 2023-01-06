import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import AuthTemplate from "./AuthTemplate";


const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    outline: none;
`

const StyledButton = styled.button`
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    background-color: black;
    cursor: pointer;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 1rem;

`

const FOOTER = styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color: gray;
        &:hover{
            color: black;
        }
    }
`


const Login = () => {
    const [id, setId] = useState("")
    const [pw, setpw] = useState("")
    const navigate = useNavigate();

    const onSubmit = (e) => {
        // id, pw 값 넘겨서 
        // 로컬 스토레이지에서 비교
        e.preventDefault()
        const dataUser = localStorage.getItem("userData")
        const parseDataUser = JSON.parse(dataUser) || []

        if (parseDataUser.find(e => e.id === id && e.pw === pw)) {
            alert("로그인 완료!")
            localStorage.setItem("loginUser", JSON.stringify([{ "id": id, "pw": pw }]));
            navigate("/");
        }
        else {
            alert("로그인 실패!")
        }


    }

    return (
        <AuthTemplate>
            <div>
                <div>
                    <h1>로그인</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <StyledInput value={id || ''} placeholder="아이디" onChange={(e) => (setId(e.target.value))} />
                    </div>
                    <div>
                        <StyledInput value={pw || ''} type="password" placeholder="비밀번호" onChange={(e) => (setpw(e.target.value))} />
                    </div>
                    <StyledButton type="submit">로그인</StyledButton>
                    <FOOTER>
                        <Link to="/signup">회원가입</Link>
                    </FOOTER>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default Login;

