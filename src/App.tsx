import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/Home'
import QrCode from './pages/qr-code'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
