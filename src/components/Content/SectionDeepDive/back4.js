import React from 'react';
import styled from 'styled-components';
import './back4.css';

const BackContainer = styled.div`

`

const BackPlate = styled.div`

`

const BackgroundContainer = styled.div`

`
const Grid = styled.div`
    .blue4{
        
    }
`
const Background = styled.div`

`
const StripeContainer = styled.div`

`


class Back4 extends React.Component {
  render(){
    return (

<BackContainer>
        <BackPlate >
            <BackgroundContainer>
                <Grid>
                <Background >
                </Background>
                </Grid>
            </BackgroundContainer>
            <StripeContainer className="background4 ">
                <Grid className="stripes4 back4">
                    <span className="back4"></span>
                    <div className="stripe4 outline_shift-down"></div>
                    <div className="stripe4 outline_shift-up"></div>
                    <div className="stripe4 outline"></div>
                    <div className="stripe4 state8"></div>
                    <div className="stripe4 state8_4"></div>
                    <div className="stripe4 yellow6"></div>
                    <div className="stripe4 blue4"></div>
                    <div className="stripe4 blue4_4"></div>
                    <div className="stripe4 blue6"></div>

                </Grid>
            </StripeContainer>
        </BackPlate>
</BackContainer>
    );
  }
}
export default Back4;