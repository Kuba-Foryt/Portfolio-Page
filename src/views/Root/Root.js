import React from "react";
import AppContext from "../../context.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Preload } from "../Preload/Preload.js";
import Menu from "../../components/Menu/Menu.js";
import "./index.css";
import Homepage from "../Homepage/Homepage.js";
import Checkers from "../Checkers/Checkers.js";
import ImmersiveLighting from "../ImmersiveLighting/ImmersiveLighting.js";
import Investments from "../Investments/Investments.js";
import styles from "./index.css";
import FadeIn from "react-fade-in";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.js";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class Root extends React.Component {
  state = {
    loading: true,
    menuOpened: false,
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ menuOpened: !this.state.menuOpened });
    document.body.classList.toggle("lock-scroll");
  };

  render() {
    const { loading } = this.state;
    const contextElements = {
      menuOpened: this.state.menuOpened,
      toggleMenu: this.toggleMenu,
    };

    if (loading) {
      return <Preload />;
    }
    return (
      // <React.StrictMode>
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <ScrollToTop />
          <Menu menuOpened={this.state.menuOpened} />
          <NavigationBar toggleMenu={this.state.menuOpened} />
          <Routes>
            <Route path="/Portfolio-Page/" element={Homepage()} />
            <Route path="/Portfolio-Page/checkers" element={Checkers()} />
            <Route path="/Portfolio-Page/il" element={ImmersiveLighting()} />
            <Route path="/Portfolio-Page/investments" element={Investments()} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
      // </React.StrictMode>
    );
  }
}

export default Root;
