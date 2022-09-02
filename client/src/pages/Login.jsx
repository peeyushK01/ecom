import styled from "styled-components"


const Container= styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(224,255,255,0.6),
    rgba(255, 255, 255, 0.1)
  ),
url("https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3898.jpg?w=740&t=st=1660975957~exp=1660976557~hmac=04f2951d58142df1d0da6462869140d81cb8488c85532086fab0365b8eb72707    ") center;
background-size: auto;
background-repeat:no-repeat;
display:flex;
align-items:center;
justify-content:center
`;
const Wrapper= styled.div`
width:25%;
padding:20px;
background-color:#fff0f0c4 
`;    
  
const Title= styled.h1`
font-size:24px;
font-weight:300px

`;
const Form= styled.form`
display:flex;
flex-direction: column;
`;
const Input= styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:20px
`;

const Button= styled.button`
width: 40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link=styled.a`
margin:5px 0px;
font-size:14px;
text-decoration:underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
       <Wrapper>
        <Title> SIGN IN</Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>            
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A ACCOUNT</Link>
        </Form>
        </Wrapper> 
    </Container>
  )
}

export default Login