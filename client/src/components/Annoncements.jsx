import styled from "styled-components"

const Container= styled.div`
 height:30px;
 background-color:teal;
 color :white;
 display: flex;
 align-item: center;
 justify-content: center;
 font-size :14px;
 font-weight:500;

`
const Annoncements = () => {
  return (
   <Container>
    Super deal ! Free shipping on orders over 2000
   </Container>
  )
}

export default Annoncements