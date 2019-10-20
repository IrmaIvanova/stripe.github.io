import React from 'react';
import styled from 'styled-components';
import Back4 from './back4';
import Title from '../Title';
import Column from './Column';
import Link from '../../Link';
import '../../Nav/GlobalNav.css';

const Container = styled.div`
    width: 1903px;
    position: relative;

`
const InContainer = styled.div`
    width: 1903px;
    transform: skewY(-12deg);
    height: 1000px;
    background: #32325d;
    position: relative;
    top: 49px;
    h1{
        margin-bottom: 100px;
        color: #fff;
        position: absolute;
        transform: skewY(12deg);
        z-index: 1;
        bottom: 900px;
        right: 285px;
        font-weight: 400;
        }
`

const Item = styled.div`
    width: 204px;
    transform: skewY(12deg);
    margin: 154px 430px 0 auto;
    a{
        color: #fff;
        font-size: 21px;

    }
    a:hover{
        color: #c4f0ff;
    }
`



class DeepDive extends React.Component {
  render(){
    return (
        <Container>
        <Back4/>
            <InContainer>
                <Title title="A deep dive into the Payments stack"/>
                <Column/>
                <Item className="arrow9"><Link className="extraLink" text="SEE ALL FEATURES"/></Item>
            </InContainer>



        </Container>
            

    );
  }
}
export default DeepDive;