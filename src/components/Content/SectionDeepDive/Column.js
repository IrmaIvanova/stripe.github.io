import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';

import SubTitles from '../SubTitle';
import './Column.css';
import '../../../css/index.css';

const Container = styled.div`
    width: 1040px;
    height: 667px;
    position: relative;
    top: 0px;
    margin: 0px auto;
    background: #2d2d54;
    transform: skewY(12deg);
`


const Box = styled.div`
 h3{
     text-transform: uppercase;
     width: 139px;
     font-size: 17px;
     margin: 10px;
     text-align: center;
     color: #fff;

 }
`

const Column = styled.div`
position:relative;
z-index: 1;
ul{
      list-style: none;
      text-align: center;
      margin: 10px;
      padding: 4px 0 12px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      line-height: 22px;
      background: #3a3c66;
  }
  a{
    color: #aab7c4;
     font-size: 15px;
     padding: 2px 10px;
  }

  li{
    padding: 4px 12px;
    
         
  }


`


class Table extends React.Component {
  render(){
    return (
        <Container >
            <Box className="Grid">
            <Column>  
                <div className="Accept"><SubTitles title="Accept"/></div>              
                <ul>
                    <li className="groupHeader"><a>Customer interfaces</a></li>
                    <li><a>  Smart payment page    </a> </li>
                    <li><a>  Custom UI toolkit     </a> </li>
                    <li><a>  Clean canvas          </a> </li>
                    <li><a>  In-person payments    </a> </li>
                    <li><a>  Invoicing             </a> </li>
                    <li><a>  Open-source plug-ins  </a> </li>
                    <li className="groupHeader"><a>Customer interfaces</a></li>
                    <li><a>  Smart payment page    </a> </li>
                    <li><a>  Custom UI toolkit     </a> </li>
                    <li><a>  Clean canvas          </a> </li>
                    <li><a>  In-person payments    </a> </li>
                    <li><a>  Invoicing             </a> </li>

                    <li className="groupHeader"><a>Customer interfaces</a></li>
                    <li><a>  Smart payment page    </a> </li>
                    <li><a>  Custom UI toolkit     </a> </li>
                    <li><a>  Clean canvas          </a> </li>
                </ul>
            </Column>

            <Column>  
                <div className="Process"><SubTitles title="Process"/></div>            
            <ul>
            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>


            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>


            </ul>
            </Column>

            <Column>  
                <div className="Settle"><SubTitles title="Settle and Reconcile"/></div>
            <ul>
            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>

            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>
            <li><a>  In-person payments    </a> </li>
            <li><a>  Invoicing             </a> </li>
            <li><a>  Open-source plug-ins  </a> </li>
            </ul>
            </Column>

            <Column>  
                <div className="Manage"><SubTitles title="Manage"/></div>              
            <ul>
            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>

            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>

            <li className="groupHeader"><a>Customer interfaces</a></li>
            <li><a>  Smart payment page    </a> </li>
            <li><a>  Custom UI toolkit     </a> </li>
            <li><a>  Clean canvas          </a> </li>

            </ul>
            </Column>

            </Box>



        </Container>
    );
  }
}
export default Table;