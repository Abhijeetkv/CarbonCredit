import { RecoilRoot } from 'recoil';
import './App.css';
import ConnectWallet from './Pages/ConnectWallet.jsx';
import Auth0ProviderWithHistory from './auth0Provider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Pages/SignUp.jsx';
<<<<<<< HEAD
import ProjectCard from './Components/ProjectCard.jsx';
import TokenPage from './Pages/TokenPage.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import MintToken from './Pages/MintToken.jsx';
import Herosection from './Pages/heroSection.jsx';
import MintTokenComponent from './Components/MintTokenComponent.jsx';
=======
import TransactionPage from './Pages/TransactionPage.jsx';
import HeroSection from './Pages/HeroSection.jsx';
>>>>>>> b828a32fdb38f79b5f4c0eae7205b99741b42afe


function App() {
  return (
    <>



      {/* <TokenPage /> */}
      {/* <MintTokenComponent /> */}
      <MintToken />

      {/* <Portfolio /> */}
      {/* <MintToken /> */}

      {/* <Herosection /> */}
     
      {/* <BrowserRouter>
        <Auth0ProviderWithHistory>
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<ConnectWallet />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path='/transaction' element={<TransactionPage></TransactionPage>}></Route>
              <Route path='/hero' element={<HeroSection></HeroSection>}></Route>
            </Routes>
          </RecoilRoot>
        </Auth0ProviderWithHistory>
      </BrowserRouter> */}

    </>
  );
}

export default App;
