import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import AuthTemplate from "./AuthTemplate";
import useStore from "../store/auth";


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
    const navigate = useNavigate();
    const { loginUser, setLoginUser, loginSuccess, setLoginSuccess } = useStore(state => state)


    const [inputs, setInputs] = useState({
        id: '',
        pw: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
        // console.log(value)
        // console.log(inputs.id)
    }

    const onSubmit = (e) => {
        // id, pw 값 넘겨서 
        // 로컬 스토레이지에서 비교
        e.preventDefault()
        const dataUser = localStorage.getItem("userData")
        const parseDataUser = JSON.parse(dataUser) || []

        if (parseDataUser.find(e => e.id === inputs.id && e.pw === inputs.pw)) {
            console.log(inputs.id)
            setLoginUser(inputs.id)
        }
        else {
            alert("로그인 실패")
        }
    }

    useEffect(() => {
        if (loginUser) {
            localStorage.setItem("loginUser", JSON.stringify(loginUser));
            console.log("로그인 성공")
            navigate("/");
        }
    }, [loginUser, navigate])

    return (
        <AuthTemplate>
            <div>
                <div>
                    <h1>로그인</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <StyledInput name="id" value={inputs.id || ''} placeholder="아이디" onChange={onChange} />
                    </div>
                    <div>
                        <StyledInput name="pw" value={inputs.pw || ''} type="password" placeholder="비밀번호" onChange={onChange} />
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

