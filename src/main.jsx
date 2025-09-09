import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// const router = createBrowserRouter([
//   {
//     path: "/", //по умолчанию
//     element: <Layout />,
//   },
//   {
//     path: "/generate",
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: "/scan",
//     element: <QRCodeScanner />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
