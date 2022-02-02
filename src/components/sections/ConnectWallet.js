import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

import Web3 from "web3"

const Image = {
  connectButton: 'button-connect.png',
  backButton: 'button-back.png',
}

const ConnectWallet = (props) => {
  const { metamaskConnected,  account, connectToMetamask } = props;

  // useEffect(() => {
  //   // loadWeb3();
  //   connectToMetamask();
  // }, []);

  // const [metamaskConnected, setMetamaskConnected] = useState(false);
  // const [account, setAccount] = useState();

  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const connectButton = allImageSharp.nodes.find(n => n.fluid.originalName === Image.connectButton).fluid
  const backButton = allImageSharp.nodes.find(n => n.fluid.originalName === Image.backButton).fluid
  return (
    <React.Fragment>
      <StyledContainer>
        <button style={{ width: '28px' }}>
          <Link to='/'>
            <Img fluid={backButton} placeholderStyle={{ visibility: 'hidden' }} />
          </Link>
        </button>
        <HorizontalLine />

        <div style={{ width: '140px', color: '#100841',position:"relative", display:"flex",  fontSize: '14px', fontStyle: 'italic', borderColor: '#3df6d4', borderRadius: '2px !important', backgroundColor: '#3df6d4' }} >
          {/* <Img fluid={connectButton} placeholderStyle={{ visibility: 'hidden' }} /> */}
          {metamaskConnected === true ? (
            <div style={{alignItem:"center", margin:"auto 0", textAlign:"center"}}>
              {account &&
                `${account.substring(0, 6)}...${account.substring(
                  account.length - 6
                )}`}
            </div>
          ) : (
            <a style={{alignItem:"center", margin:"auto 0", textAlign:"center"}} onClick={connectToMetamask}>Connect Wallet</a>
          )}
        </div>
      </StyledContainer>
    </React.Fragment>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 70px;
  padding: 0 30px;
`;

const HorizontalLine = styled.hr`
  flex-grow: 1;
  margin: 35px 25px 0 25px;
  border: 1px solid ${props => props.theme.color.primary};
`

export default ConnectWallet;
