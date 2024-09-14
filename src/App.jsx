import { RecoilRoot } from 'recoil'
import './App.css'
import ConnectWallet from './Pages/ConnectWallet.jsx'



function App() {
 
  return (
    <>
      <RecoilRoot>
        {/* <SignupForm /> */}
        <ConnectWallet />
      </RecoilRoot>
      
     
    </>
  )
}

export default App
