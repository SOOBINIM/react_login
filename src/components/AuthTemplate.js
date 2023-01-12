import styled from "styled-components";


const StlyedTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`;


const StlyedWhiteBox = styled.div`
    width: 300px;
    height: 400px;
    background-color: white;
    border-color: black;
    padding: 2rem;
    border-radius: 2rem;
`;

const AuthTemplate = ({ children }) => {

    return (
        <StlyedTemplateBlock>
            <StlyedWhiteBox>
                {children}
            </StlyedWhiteBox>
        </StlyedTemplateBlock>
    );
};

export default AuthTemplate;

