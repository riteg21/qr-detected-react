import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import s from "./QRCodeScanner.module.css";

import { SCAN_DATA } from "../../constants";

const QRCodeScanner = () => {
  const [qrData, setQrData] = useState(null);

  const scanHandler = (result) => {
    setQrData(result[0].rawValue);
    console.log(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"); //получаем из локал сторедж предыдущие данные - по умолчанию пустой массив

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    ); //записываем в локал сторедж в виде массива(обернукли в квадратные скобки)
  };

  const settings = {
    audio: false,
    finder: false,
  };

  const stylesSettings = {
    container: { width: 600 },
  };

  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={stylesSettings}
      />
      <p className={s.result}>{qrData}</p>
    </div>
  );
};
export default QRCodeScanner;
