import React from "react";
import styled from "styled-components";
import "./section.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Section({title, desc,topBtn,buttomBtn,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{desc}</p>
      </ItemText>
      <Button>
            <ButtonGroup>
                <TopButtom>{topBtn}</TopButtom>

                {buttomBtn && 
                <ButtomButton>
                  {buttomBtn}
                  </ButtomButton>
                }
            </ButtonGroup>
            <ArrowDownwardIcon/>
     </Button>
    </Wrap>
  );
}

export default Section;

const ItemText = styled.div`
  padding-top: 15vh;
  texxt-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-buttom: 30px;
  @media (max-width: 768px){
    flex-direction:column;
  }

`;
const TopButtom = styled.div`
  background-color: rgba(23, 26, 2, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  cursor:pointer;
  margin:8px
`;
const ButtomButton = styled(TopButtom)`
  background-color: white;
  opacity: 0.65;
  color:black;
`;



const Button = styled.div`
    
`


const Wrap = styled.div`
width:100vw;
height:100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url('/images/${props.bgImage}')`};


`