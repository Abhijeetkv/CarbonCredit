import './App.css'
import HeroSection from './Pages/heroSection.jsx'
import Navbar from './Components/Navbar'
import TransactionTable from './Components/TransactionTable.jsx'
import SignupForm from './Pages/SignUp.jsx'
import Web3Modal from 'web3modal'
import {ethers} from 'ethers'

const providerOptions = {
   
}

function App() {
  async function connectWallet() {
     try {
      let web3modal = new Web3Modal({
        cacheProvider: false,
        providerOptions
      })
      const web3ModalInstance = await web3modal.connect()
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
      console.log(web3ModalProvider)
     } catch(err) {
      console.log(err)
     }
  }

  return (
    <>
      {/* <HeroSection /> */}
      {/* <SignupForm /> */}
      <button onClick={connectWallet}>connect wallet</button>
    </>
  )
}

export default App
