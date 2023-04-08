import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import "./app.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Banner from "./components/LandingPage/Banner";
import Leadership from "./components/LandingPage/Leadership";
import Counter from "./components/LandingPage/Counter";
import Logos from "./components/LandingPage/Logos";
import Footer from "./components/LandingPage/Footer";
import Discount from "./components/LandingPage/Discount";
import News from "./components/LandingPage/News";
import Testimonial from "./components/LandingPage/Testimonial";
import Course from "./components/Course";
import Table from "./components/LandingPage/Table";

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        {/* <Dashboard /> */}


        <LandingPage />
        <Banner />
        <Table />
        <Leadership />
        <Counter />
        <Logos />
        <Testimonial />
        <News />
        <Discount />
        <Footer />

        {/* <Course /> */}
      </div>
    );
  }
}

