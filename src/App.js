import { Component } from "react";
import Header from "./Page/Header";
import MenuMakanan from "./Page/MenuMakanan";
import Footer from "./Page/Footer";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";

class App extends Component{
  render() {
    return (
      <div>
        <Header />

        <MenuMakanan />

        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
