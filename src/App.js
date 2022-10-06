import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="all" category="all" />}></Route>
            <Route path="/national" element={<News key="national" category="national" />}></Route>
            <Route path="/business" element={<News key="business" category="business" />}></Route>
            <Route path="/sports" element={<News key="sports" category="sports" />}></Route>
            <Route path="/world" element={<News key="world" category="world" />}></Route>
            <Route path="/politics" element={<News key="politics" category="politics" />}></Route>
            <Route path="/technology" element={<News key="technology" category="technology" />}></Route>
            <Route path="/startup" element={<News key="startup" category="startup" />}></Route>
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />}></Route>
            <Route path="/science" element={<News key="science" category="science" />}></Route>
            <Route path="/automobile" element={<News key="automobile" category="automobile" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
