import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  return (
    <div className={s.container}>
      {data.map((text) => (
        <div key={text} className={s.content}>
          <p>{text}</p>
          <QRCodeSVG value={text} size={100} />
        </div>
      ))}
    </div>
  );
};
