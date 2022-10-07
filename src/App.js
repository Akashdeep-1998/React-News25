import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
          height={2}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}  key="all" category="all" />}></Route>
            <Route path="/national" element={<News setProgress={this.setProgress}  key="national" category="national" />}></Route>
            <Route path="/business" element={<News setProgress={this.setProgress}  key="business" category="business" />}></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" />}></Route>
            <Route path="/world" element={<News setProgress={this.setProgress}  key="world" category="world" />}></Route>
            <Route path="/politics" element={<News setProgress={this.setProgress}  key="politics" category="politics" />}></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" category="technology" />}></Route>
            <Route path="/startup" element={<News setProgress={this.setProgress}  key="startup" category="startup" />}></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" />}></Route>
            <Route path="/science" element={<News setProgress={this.setProgress}  key="science" category="science" />}></Route>
            <Route path="/automobile" element={<News setProgress={this.setProgress}  key="automobile" category="automobile" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
