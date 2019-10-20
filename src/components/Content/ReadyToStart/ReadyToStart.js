import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

import Button2 from './Button2';
import PayCards from './PayCards';


const Container = styled.div`
    width: 1903px;
    height: 800px;
    position: relative;

    h1{
        font-size: 30px;
        font-weight: 300;
        line-height: 18px;
    }
    h1:first-child{
        color: #6772e5;
    }

`
const InContainer = styled.div`
    width: 1903px;
    height: 400px;
    background: #fff;
    position: relative;
    top: -153px;
    display: flex;
    justify-content: center;
    align-items: center;


`
const TitleBox = styled.div`
    margin-right: 50px;
`



class ReadyToStart extends React.Component {
  render(){
    return (
        <Container>

            <InContainer>
                <TitleBox>
                    <Title title="Ready to get started?"/>
                    <Title title="Get in touch or create an account."/>
                </TitleBox>
                <Button2 btn="CREATE STRIPE ACCOUNT" btn2="CONTACT SALES"/>
            </InContainer>
            <PayCards/>


        </Container>
            

    );
  }
}
export default ReadyToStart;