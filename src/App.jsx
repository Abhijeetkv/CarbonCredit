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
            </Routes>
          </RecoilRoot>
        </Auth0ProviderWithHistory>
      </BrowserRouter> */}

    </>
  );
}

export default App;
