import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Container } from "@components/global";
// import {PIXIU} from './PIXIU';
// import

const Image = {
  banner: "banner-office.jpg",
  pixiu: "text-pixiu.png",
  // why: 'text-why.png',
  origin: "text-origin.png",
  pixiuPink: "pixiu-pink.png",
  pixiuCyan: "pixiu-cyan.png",
  pixiuOrange: "pixiu-orange.png",
  pixiuWhite: "pixiu-white.png",
  blessButton: "button-bless.png",
};

const Introduction = (props) => {
  const { mintNft } = props;
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
  `);
  const banner = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.banner
  ).fluid;
  const pixiuText = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.pixiu
  ).fluid;
  // const whyText = allImageSharp.nodes.find(n => n.fluid.originalName === Image.why).fluid
  const originText = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.origin
  ).fluid;
  const pixiuPink = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.pixiuPink
  ).fluid;
  const pixiuCyan = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.pixiuCyan
  ).fluid;
  const pixiuOrange = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.pixiuOrange
  ).fluid;
  const pixiuWhite = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.pixiuWhite
  ).fluid;
  const bless = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === Image.blessButton
  ).fluid;
  const renderEnterButton = () => (
    <button style={{ width: "300px" }} onClick={mintNft}>
      <Img fluid={bless} placeholderStyle={{ visibility: "hidden" }} />
    </button>
  );
  const renderPixiu = () => (
    <PixiuImages>
      <Pixiu>
        <Img
          fluid={pixiuPink}
          style={{ width: "150px" }}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </Pixiu>
      <Pixiu>
        <Img
          fluid={pixiuCyan}
          style={{ width: "150px" }}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </Pixiu>
      <Pixiu>
        <Img
          fluid={pixiuOrange}
          style={{ width: "150px" }}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </Pixiu>
      <Pixiu>
        <Img
          fluid={pixiuWhite}
          style={{ width: "150px" }}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </Pixiu>
    </PixiuImages>
  );
  return (
    <>
      <Banner>
        <Img
          fluid={banner}
          style={{ maxHeight: "550px" }}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </Banner>
      <Container>
        <SpaceDivider />

        <TitleWrapper>
          <Title>What is</Title>
          <TitleHorizontalLine />
        </TitleWrapper>
        <DescriptionContainer>
          <Grid>
            <DescriptionLeft>
              <DescriptionBanner>
                <Img
                  fluid={pixiuText}
                  style={{ width: "140px" }}
                  placeholderStyle={{ visibility: "hidden" }}
                />
              </DescriptionBanner>
              <DescriptionWhat>
                PIXIU is a mythical Chinese creature, a hybrid with a head of a
                dragon and the body of a lion. This male mythical creature is
                known as 'PI' while the female goes by 'XIU'. They are often
                seen together as a pair, hence generally regarded as PIXIU and
                are told apart by their traits, where a male PIXIU flaunts a
                large antler at the back of its head, while a female has two
                smaller antlers.
              </DescriptionWhat>

              <DescriptionHorizontalLineContainer>
                <HorizontalLine />
              </DescriptionHorizontalLineContainer>

              <DescriptionWhy>
                <DescriptionWhyText>
                  The core element to achieving harmony and balance lies on a
                  pillar that is built on a foundation of wealth. PIXIUs are
                  regarded as auspicious creatures of wealth and powerful
                  protectors to their bearer, with their menacing presence that
                  wards off evil.
                  <br />
                  <br />
                  Legend has it that the PIXIU pair was punished by the Jade
                  Emperor for violating the law of the heavens. As punishment,
                  the Jade Emperor sentenced the PIXIUs to an eternity of only
                  being able to consume gold, silver and precious jewels. This
                  Chinese lore has been passed down for 2000 years, and that is
                  why the Chinese believe that displaying PIXIUs at home would
                  attract wealth in Feng Shui.
                </DescriptionWhyText>
                <DescriptionWhyBanner>
                  <Img
                    fluid={originText}
                    style={{ width: "140px" }}
                    placeholderStyle={{ visibility: "hidden" }}
                  />
                </DescriptionWhyBanner>
              </DescriptionWhy>
            </DescriptionLeft>

            <PixiuContainer>{renderPixiu()}</PixiuContainer>
          </Grid>
        </DescriptionContainer>
        <PixiuMobileContainer>{renderPixiu()}</PixiuMobileContainer>
        <HorizontalLine />

        <DescriptionEndContainer>
          <DescriptionEnd>
            Now, 8888 PIXIUs are out and about, awaiting to bring auspicious to
            its owners. However, each PIXIU collected must be in a pair of male
            and female, or else it will lead to it's dissatisfaction and
            turbulent times.
          </DescriptionEnd>
          <EnterButtonContainer>{renderEnterButton()}</EnterButtonContainer>
        </DescriptionEndContainer>
        <EnterButtonMobileContainer>
          {renderEnterButton()}
        </EnterButtonMobileContainer>
        <HorizontalLine />
      </Container>
    </>
  );
};

const Banner = styled.figure`
  width: 100%;
  margin: 0;
`;

const TitleWrapper = styled.h2`
  display: flex;
  position: relative;
`;

const Title = styled.div`
  padding-right: 50px;
`;

const TitleHorizontalLine = styled.hr`
  position: relative;
  top: 10px;
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.color.primary};
`;

const SpaceDivider = styled.div`
  margin-top: 10px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const DescriptionHorizontalLineContainer = styled.div`
  width: 90%;
`;

const Grid = styled.div`
  display: flex;
  text-align: right;
  width: 100%;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const PixiuImages = styled.div`
  flex-grow: 2;
  display: grid;
  padding: 0 0 0 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`;

const DescriptionBanner = styled.figure`
  margin: 0;
  padding-left: 60px;
`;

const DescriptionLeft = styled.div`
  text-align: left;
  width: 100%;
  flex-grow: 3;
`;

const DescriptionWhat = styled.div`
  padding: 10px 0 20px 40px;
`;

const DescriptionWhy = styled.div`
  display: flex;
  padding: 25px 0 0 0;
`;

const DescriptionWhyBanner = styled.figure`
  margin: 0;
  width: 300px;
  padding-left: 10px;
`;

const DescriptionWhyText = styled.div`
  padding-top: 10px;
`;

const DescriptionEndContainer = styled.div`
  display: flex;
  padding: 20px 0;
`;

const DescriptionEnd = styled.div`
  flex-grow: 1;
  padding-right: 100px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding-right: 0;
  }
`;

const PixiuContainer = styled.div`
  display: block;
  padding-left: 50px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: none;
  }
`;

const PixiuMobileContainer = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    padding-bottom: 30px;
  }
`;

const Pixiu = styled.figure`
  width: 150px;
  margin: 0;
`;

const EnterButtonContainer = styled.div`
  display: block;
  width: 400px;

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    display: none;
  }
`;

const EnterButtonMobileContainer = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${(props) => props.theme.color.primary};
`;

export default Introduction;
