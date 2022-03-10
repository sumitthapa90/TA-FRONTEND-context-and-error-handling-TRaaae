import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { userContext } from "./userContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;

    return (
      <>
        <userContext.Provider value={isDarkMode}>
          <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
            <Header />
            <Main isDarkMode={isDarkMode} />
            <SwitchButton
              isDarkMode={isDarkMode}
              changeMode={this.changeMode}
            />
          </div>
        </userContext.Provider>
      </>
    );
  }
}

export default App;
