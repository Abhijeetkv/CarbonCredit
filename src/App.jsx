import { RecoilRoot } from 'recoil';
import './App.css';
import ConnectWallet from './Pages/ConnectWallet.jsx';
import Auth0ProviderWithHistory from './auth0Provider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Pages/SignUp.jsx';

import ProjectCard from './Components/ProjectCard.jsx';
import TokenPage from './Pages/TokenPage.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import MintToken from './Pages/MintToken.jsx';
import Herosection from './Pages/heroSection.jsx';
import MintTokenComponent from './Components/MintTokenComponent.jsx';
import TransactionPage from './Pages/TransactionPage.jsx';
import ProjectComponent from './Components/ProjectComponent.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';



function App() {
  return (
    <>

      {/* <TokenPage /> */}


      {/* <Portfolio /> */}
      {/* <MintToken /> */}

      {/* <Herosection /> */}

      {/* <ProjectComponent /> */}
     
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<ConnectWallet />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path='/transaction' element={<TransactionPage></TransactionPage>}></Route>
              <Route path='/hero' element={<HeroSection></HeroSection>}></Route>
              <Route path='/mintToken' element={<MintToken></MintToken>}></Route>
            </Routes>
          </RecoilRoot>
        </Auth0ProviderWithHistory>
      </BrowserRouter> 

    </>
  );
}

export default App;
