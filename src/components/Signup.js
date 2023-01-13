import { useCallback, useState } from "react";
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

const StlyedForm = styled.form`
`

const StyledFormBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    .message{
        font-weight: 500px;
        font-size: 0.25rem;
        margin-top: 0.25rem;
        &.success {
            color : green;
        }

        &.error {
            color: red;
        }
    }

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
    // 아이디, 비밀번호, 비밀번호 체크
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [pwCheck, setPwCheck] = useState("")

    // 오류메세지
    const [idMessage, setIdMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("")
    const [pwCheckMessage, setPwCheckMessage] = useState("")

    // 유효성 검사
    const [isId, setIsId] = useState(false)
    const [isPw, setIsPw] = useState(false)
    const [isPwCheck, setIsPwCheck] = useState(false)


    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        const dataUser = localStorage.getItem("userData")
        // string을 object 형태로 바꿔줌
        // 없으면 빈값을 넣기 
        const parseDataUser = JSON.parse(dataUser) || []
        if (isPw && isId && isPwCheck) {
            parseDataUser.push({ id, pw })
            localStorage.setItem("userData", JSON.stringify(parseDataUser))
            alert("가입완료!")
            navigate("/login");
        } else {
            alert("입력정보를 확인해주세요.")
            setId("")
            setPw("")
            setPwCheck("")
        }
    }

    const onChangeId = useCallback((e) => {
        const { value } = e.target
        const onlyNumber = value.replace(/[^a-z0-9]/g, '')
        setId(onlyNumber)

        if (value.length < 5 || value.length > 19) {
            setIdMessage('5자리 이상 19자리 이하의 값만 입력해주세요.')
            setIsId(false)
        } else {
            setIdMessage('좋아요 :D')
            setIsId(true)
        }
    }, [])

    const onChangePw = useCallback((e) => {
        const { value } = e.target
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setPw(value)

        if (!passwordRegex.test(value)) {
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true)
        }

    }, [])

    const onchangePwCheck = useCallback((e) => {
        const { value } = e.target
        setPwCheck(value)

        if (pw === value) {
            setPwCheckMessage('비밀번호를 똑같이 입력했어요 : )')
            setIsPwCheck(true)
        } else {
            setPwCheckMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
            setIsPwCheck(false)
        }
    }, [pw])

    return (
        <AuthTemplate>
            <div>
                <div>
                    <h1>회원가입</h1>
                </div>
                <StlyedForm onSubmit={onSubmit}>
                    <StyledFormBox>
                        <StyledInput type="text" name="id" value={id || ''} onChange={onChangeId} placeholder="아이디" />
                        {id.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
                    </StyledFormBox>
                    <StyledFormBox>
                        <StyledInput type="password" name="pw" value={pw || ''} onChange={onChangePw} placeholder="비밀번호" />
                        {pw.length > 0 && <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>}
                    </StyledFormBox>
                    <StyledFormBox>
                        <StyledInput type="password" name="pwCheck" value={pwCheck || ''} onChange={onchangePwCheck} placeholder="비밀번호 확인" />
                        {pwCheck.length > 0 && <span className={`message ${isPwCheck ? 'success' : 'error'}`}>{pwCheckMessage}</span>}
                    </StyledFormBox>
                    <StyledButton type="submit">회원가입</StyledButton>
                    <FOOTER>
                        <Link to="/login">로그인</Link>
                    </FOOTER>
                </StlyedForm>
            </div>
        </AuthTemplate>
    )
}

export default Signup;

