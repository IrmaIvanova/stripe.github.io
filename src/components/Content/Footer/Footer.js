import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';

import SubTitles from '../SubTitle';
import './Footer.css';


const Container = styled.div`
    width: 1903px;
    position: relative;
    top: -250px;


`


const Box = styled.div`
display:flex;
width: 1040px;

margin: 0 auto;
 h3{
     text-transform: uppercase;
     width: 139px;
     font-size: 17px;
     margin: 10px auto;
     text-align: center;
     color: #8898AA;

 }
`

const Column = styled.div`
position:relative;
z-index: 1;
padding: 4px 20px 12px;

ul{
      list-style: none;
      text-align: center;
      margin: 10px;
      padding: 4px 0 12px;
      line-height: 22px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 355px;

  }
  a{
    color: #8898AA;
     font-size: 15px;

  }

  li{
    padding: 4px 0 8px;


  }


`


class Footer extends React.Component {
  render(){
    return (
        <Container className="footer">
            <Box >
            <Column>  
            <div >
            <ul className="MetaNav">
                    <li className=" select_country "><a>  Unated States    </a> </li>
                    <li className=" select_language"><a>  English         </a> </li>
                    <li className=" space "> </li>
                    <li className=" copyright ">       <a> © Stripe        </a> </li>

            </ul>
            </div>
        </Column>
            <Column>  
                <div ><SubTitles title="products"/></div>
                <div className="Products">
                <ul >
                    
                    <li><a> Payments    </a> </li>
                    <li><a>  Billing     </a> </li>
                    <li><a>  Connect         </a> </li>
                    <li><a>  Payouts    </a> </li>
                    <li><a>  Atlas            </a> </li>
                    <li><a>  Radar  </a> </li>
                    <li><a>  Issuing    </a> </li>
                    <li><a>  Terminal     </a> </li>
                    <li><a>  Corporate Card         </a> </li>
                    <li><a>   Capital   </a> </li>
                </ul>
                <ul>
                    <li><a>   Platforms           </a> </li>
                    <li><a>  Marketplaces    </a> </li>
                    <li><a>  Pricing     </a> </li>
                    <li><a>  Global         </a> </li>
                    <li><a>  Guides         </a> </li>

                    </ul>
                </div>
            </Column>

            <Column>  
                <div className="Developers"><SubTitles title="Developers"/></div>            
            <ul>

                <li><a>  Documentation   </a> </li>
                <li><a>  API reference    </a> </li>
                <li><a>  API status    </a> </li>
                <li><a>  Open source          </a> </li>

            </ul>
            </Column>

            <Column>  
                <div className="Company"><SubTitles title="Company"/></div>
            <ul>
                <li><a>  About    </a> </li>
                <li><a>  Enterprise     </a> </li>
                <li><a>  Customers         </a> </li>
                <li><a>  Partners    </a> </li>
                <li><a>  Jobs     </a> </li>
                <li><a>  Blog          </a> </li>
                <li><a>  Newsroom    </a> </li>
                <li><a>  Invoicing             </a> </li>
                <li><a>  Environment  </a> </li>
            </ul>
            </Column>

            <Column>  
                <div className="Resources"><SubTitles title="Resources"/></div>              
            <ul>
                <li><a>              Support    </a> </li>
                <li><a>   Contact     </a> </li>
                <li><a>  Privacy & terms         </a> </li>
                <li><a>   Sitemap   </a> </li>
            </ul>
            </Column>
            </Box>



        </Container>
    );
  }
}
export default Footer;