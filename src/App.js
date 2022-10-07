import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const [progress, setProgress]=useState(0);

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="all" category="all" />}></Route>
            <Route path="/national" element={<News setProgress={setProgress} key="national" category="national" />}></Route>
            <Route path="/business" element={<News setProgress={setProgress} key="business" category="business" />}></Route>
            <Route path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />}></Route>
            <Route path="/world" element={<News setProgress={setProgress} key="world" category="world" />}></Route>
            <Route path="/politics" element={<News setProgress={setProgress} key="politics" category="politics" />}></Route>
            <Route path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />}></Route>
            <Route path="/startup" element={<News setProgress={setProgress} key="startup" category="startup" />}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />}></Route>
            <Route path="/science" element={<News setProgress={setProgress} key="science" category="science" />}></Route>
            <Route path="/automobile" element={<News setProgress={setProgress} key="automobile" category="automobile" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
