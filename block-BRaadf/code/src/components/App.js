import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import ErrorBoundary from "./ErrorBoundries";

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
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <ErrorBoundary>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />

          <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
