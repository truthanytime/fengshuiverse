import React, { useState, useEffect } from "react";
import Layout from "@common/Layout";
import ConnectWallet from "@sections/ConnectWallet";
import Introduction from "@sections/Introduction";
import Footer from "@sections/Footer";
import Web3 from "web3";
import PIXIU from "../build/contracts/PIXIU.json";

const IndexPage = () => {
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [pixiucontract, setPixiucontract] =useState(null);
  const [web3, setWeb3] = useState();

  useEffect(() => {
    async function listenMMAccount() {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async function() {
          connectToMetamask();
        });
        window.ethereum.on("chainChanged", async function() {
          connectToMetamask();
        });
      }
    }
    listenMMAccount();
  }, []);
  const connectToMetamask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    const web3 = window.web3;
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length == 0) {
      setMetamaskConnected(false);
    } else {
      const accounts = await web3.eth.getAccounts();
      console.log("connect info:", accounts);
      setAccount(accounts[0]);
      console.log(accounts[0]);
      setMetamaskConnected(true);
      const networkId = await web3.eth.net.getId();
      setNetworkId(networkId);
      console.log("netid", networkId);
        const networkData = PIXIU.networks[networkId];
        console.log("netdata", networkData);
      if (networkData) {
        const pixiucontract =new web3.eth.Contract(
          PIXIU.abi,
          networkData.address
        );
        setPixiucontract(pixiucontract);
      }else{
        window.alert(
          "Wrong Network! Please select avalanche network."
        );
      }
    }
  };

  const mintNft = async () => {
    let price="0.09";
    let tokenAmount = 1; 
    if (account !== "" && pixiucontract) {
    let e;
    try {
        var correctPrice = web3.utils.toBN(
            web3.utils.toWei(price, "ether").toString()
        );
    } catch (u) {
        console.log('err', u);
    }
    try {
        e = await pixiucontract.methods.mint(tokenAmount).estimateGas({
            value: correctPrice * tokenAmount,
            from: account
        })
    } catch (u) {
        console.log('error', u)
    }
    let d = await web3.eth.getGasPrice();
    let c;
    
    try {
        c = await pixiucontract.methods.mint(tokenAmount).send({
            from: account,
            gas: parseInt(e),
            gasPrice: parseInt(1.2 * d),
            value: correctPrice * tokenAmount,
            maxFeePerGas: null,
        })
    } catch (u) {
        console.log('send error', u);
    }

    if(c){
        return c.status;
    }
  } else {window.alert("Please connect with Metamask wallet!");}


  }
  return (
    <Layout>
      <ConnectWallet
        connectToMetamask={connectToMetamask}
        metamaskConnected={metamaskConnected}
        account={account}
      />
      <Introduction mintNft={mintNft} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
