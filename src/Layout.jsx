import { Routes, Route } from "react-router-dom";
import QrCodeGenerator from "./components/Generator/QrCodeGenerator";
import QRCodeScanner from "./components/Scan/QRCodeScanner";
import Navigation from "./components/Navigation/Navigation";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />

      {/* <QrCodeGenerator />

      <QRCodeScanner /> */}

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/scan-history" element={<ScanHistory />} />
        <Route path="/generate-history" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
