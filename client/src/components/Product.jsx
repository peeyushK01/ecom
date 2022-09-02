import styled from "styled-components"
import{FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@material-ui/icons'

const Info = styled.div`
opacity:0;
width: 100px;
height: 100px;
position: absolute;
background-color: rbga(0,0,0,0.2);
z-index:3;  
display: flex;
align-items: center;
justify-content: center;
`;

const Container=styled.div`
flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color:LightCyan;
  position: relative;

  &:hover ${Info}{
    opacity:1;
  }
  `;
const Circle = styled.div`
width:200px;
height:250px;
border-radius: 50%;
background-color:white;
position:absolute;
`;
const Image = styled.img`
    height:75%;
    z-index: 2;
`;

const Icon = styled.div`
width:40%;
height:auto;
border-radius: 50%;
background-color:Honeydew;
display:flex;
align-item:center;
justify-content:center;
margin:10px;
padding:10px 14px;
&:hover{
  background-color:white;
  transform:scale(1.1);
}
`;

const Product = ({item}) => {
  return (
    <Container>
       <Circle/>
       <Image src={item.img}/>
       <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
        </Info> 
    </Container>
  )
}

export default Product