



import { RecoilRoot } from 'recoil';
import './App.css';
import ConnectWallet from './Pages/ConnectWallet.jsx';
import Auth0ProviderWithHistory from './auth0Provider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Pages/SignUp.jsx';
import TransactionPage from './Pages/TransactionPage.jsx';
import HeroSection from './Pages/HeroSection.jsx';


function App() {
  return (
    <>



      
     

      <BrowserRouter>
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
      </BrowserRouter>

    </>
  );
}

export default App;
