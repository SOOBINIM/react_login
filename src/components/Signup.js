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


const Signup = () => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        const dataUser = localStorage.getItem("userData")
        const parseDataUser = JSON.parse(dataUser) || []
        console.log(parseDataUser)

        parseDataUser.push({ id, pw })
        localStorage.setItem("userData", JSON.stringify(parseDataUser))
        alert("가입완료!")
        navigate("/login");
    }

    return (
        <AuthTemplate>
            <div>
                <div>
                    <h1>회원가입</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <StyledInput type="text" name="id" value={id || ''} onChange={(e) => { setId(e.target.value) }} placeholder="아이디" />
                    </div>
                    <div>
                        <StyledInput type="password" name="pw" value={pw || ''} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호" />
                    </div>
                    <StyledButton type="submit">회원가입</StyledButton>
                    <FOOTER>
                        <Link to="/login">로그인</Link>
                    </FOOTER>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default Signup;

