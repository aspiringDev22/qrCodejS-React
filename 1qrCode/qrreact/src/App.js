import React, { useRef, useState } from "react";
import "./app.css";
import QRCode from "qrcode";
import { QrReader } from "react-qr-reader";

const App = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [scanResult, setScanResult] = useState("");
  const qrRef = useRef(null);
  const generateQr = async () => {
    try {
      const response = await QRCode.toDataURL(input);
      // console.log(response);
      console.log(response);
      setImgUrl(response);
    } catch (error) {
      console.log("error");
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const handleScanFile = (result) => {
    if (result) {
      setScanResult(result);
    }
  };

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <div className="app">
      <nav className="header">Generate Download & Scan Qr Code with React</nav>
      <div className="card">
        <div className="cardContent">
          <div className="column">
            <div className="columnItem">
              <h2>Generate Qr</h2>
              <input
                type="text"
                className="generateinp"
                placeholder="Enter text here.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="generatebtn" onClick={() => generateQr()}>
                Generate Qr
              </button>
              <div className="qr-container">
                {imgUrl ? (
                  <a href={imgUrl} download>
                    <img src={imgUrl} alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          {/* <div className="column">
            <div className="columnItem">
              <button className="qrscan" onClick={onScanFile}>
                Scan QR code
              </button>
              <QrReader
                ref={qrRef}
                delay={300}
                onError={handleError}
                onScan={handleScanFile}
                legacyMode
                className="qrreader"
              />
              <h3 className="scan">Scanned Code: {scanResult}</h3>
            </div>
          </div>
          <div className="column">sdsds</div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
