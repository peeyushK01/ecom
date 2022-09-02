import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Annoncements from "../components/Annoncements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container=styled.div`

`;
const Wrapper=styled.div`
padding:20px;
`;
const Title=styled.h1`
font-weight:300;
text-align:center;

`;
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;  
padding:20px
`;
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type==="filled"&& "none"};
background-color:${(props)=>props.type==="filled"? "black":"transparent"};
color:${(props)=>props.type==="filled"&& "white"};
`;
const Bottom=styled.div`
display:flex;
justify-content: space-between;
`;
const TopTexts=styled.div``;
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;  

const Info=styled.div`
flex:3;
`;
const Summery=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10;
padding:20px ;
height:50vh;
`;

const Product=styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail=styled.div`
flex: 2;
display: flex;
`;
const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center ;
`;
const Image=styled.img`
width:250px;
`;
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName=styled.span``;
const ProductId=styled.span``;
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%; 
border : 1px solid black;

background-color:${ (props)=>props.color}
`;
const ProductSize=styled.span`

`;

const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
`;
const ProductPrice=styled.div`
font-size:30px;
font-weight:300;
`;

const Hr=styled.hr`
background-color:#eee;
h1 
`;
const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button=styled.button`
width:100%;
padding:10px;
background-color: teal;
color:white;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Annoncements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton> CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                    <ProductDetail>
                        <Image src="https://img.freepik.com/free-photo/white-high-top-sneakers-unisex-footwear-fashion_53876-106036.jpg?w=996&t=st=1660985424~exp=1660986024~hmac=a5171a01dfe9c2adee73f505b38b3f47ff29d0a0b3dfe17118e63927a34e365b"/>
                        <Details>
                            <ProductName>
                                <b>Product: </b> BM-BABLU SHOES
                            </ProductName>
                            <ProductId>
                                <b>ID: </b> 51456465165486
                            </ProductId>
                            <ProductColor color="#FAF9F6" />
                            <ProductSize>
                                <b>Size: </b> 36.5
                            </ProductSize>
                        </Details>
                    </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>₹1299</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                    <ProductDetail>
                        <Image src="https://img.freepik.com/free-photo/orange-t-shirt-with-space-print-yellow-background_185193-69952.jpg?w=996&t=st=1661063536~exp=1661064136~hmac=8884c1da33f3a3777d0180cb28f01b58809a963789f1099d647c34d71f16eb7a"/>
                        <Details>
                            <ProductName>
                                <b>Product: </b>t-shirt
                            </ProductName>
                            <ProductId>
                                <b>ID: </b>895478517524564
                            </ProductId>
                            <ProductColor color="#ffcb6b" />
                            <ProductSize>
                                <b>Size: </b>M
                    </ProductSize>
                        </Details>
                       </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>₹999</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summery>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹2298</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shhipping</SummaryItemText>
                        <SummaryItemPrice>₹ 40</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>shipping discount</SummaryItemText>
                        <SummaryItemPrice>₹ -40</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹2298</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summery>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart