// App.js
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import ContactUs from "./routes/ContactUs";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
