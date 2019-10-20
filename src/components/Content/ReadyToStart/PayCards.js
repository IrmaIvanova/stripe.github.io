import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';
import SubTitles from '../SubTitle';
import Link from '../../Link';
import './PayCards.css';




const CardBox = styled.div`
    width: 1903px;
    display: flex;
    justify-content: center;
    top: -253px;
    position: relative;
    a{
        font-size: 17px;
        text-transform: uppercase;
    }
    p{
        line-height: 25px;
        font-size: 17px;
    }
`

const Card = styled.div`
    width: 430px;
    height: 120px;
    padding:40px 40px 40px 120px;
    margin: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    z-index: 0;
    position: relative;
    background: #fff;

 
    a{
        color: #24b47e;
    }



`

const Item = styled.div`
`

class PayCards extends React.Component{
    render(){
        return(
            <CardBox>
                <Card className="image">
                    <Item className="arrow10"><Link text="explore billing"/></Item>
                    <Paragraf text="Bill one-off or on a recurring basis, manage subscriptions and reduce payment declines with Stripe’s recovery tools."/>
                </Card>
                <Card className="image">
                    <Item className="arrow11"><Link text="payments for plarforms"/></Item>
                    <Paragraf text="Stripe Connect gives platforms and marketplaces the tools to easily support multi-party payments and get sellers in 25 countries paid."/>
                </Card>
            </CardBox>
        );
    }

}

export default PayCards;