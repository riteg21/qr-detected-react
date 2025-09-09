import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import s from "./qrCodeGenerator.module.css";

import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("Write to create QR");
  const [result, setShowQRCode] = useState("");

  const QRHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setShowQRCode(value);
    setValue("");
  };

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    setShowQRCode("");
  };
  return (
    <div className={s.container}>
      {result !== "" && (
        <div className={s.qrCode}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}

      <input
        type="text"
        value={value}
        onChange={inputChangeHandler}
        className={s.inputqr}
      />
      <button type="button" onClick={QRHandler} className={s.qrbutton}>
        Сгенерировать QR
      </button>
    </div>
  );
};

export default QrCodeGenerator;
