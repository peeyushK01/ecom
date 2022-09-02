import styled from "styled-components"

const Container= styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(224,255,255,0.6),
    rgba(255, 255, 255, 0.1)
  ),
url("https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=996&t=st=1660969476~exp=1660970076~hmac=11816902f5546b90babc3385ba6d871fa0f8a491712b6b19a4a2c689b38e232d") center;
background-size: cover;
background-repeat:no-repeat;
display:flex;
align-items:center;
justify-content:center
`;
const Wrapper= styled.div`
width:40%;
padding:20px;
background-color:#f0feff6b 

`;
    
  
const Title= styled.h1`
font-size:24px;
font-weight:300px

`;
const Form= styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input= styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:20px
`;
const Agrement= styled.span`
font-weight:12px;
margin:20px 0px;
`;
const Button= styled.button`
width: 40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Registor = () => {
  return (
    <Container>
       <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First name"/>
            <Input placeholder="Last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="Passowrd"/>
            <Input placeholder="confirm Password"/>
            <Agrement>By creating an account,I consent to the processing of my personal data 
                in accordance with the <b>PRIVATE POLICY</b>
            </Agrement>
            <Button>CREATE</Button>
        </Form>
        </Wrapper> 
    </Container>
  )
}

export default Registor