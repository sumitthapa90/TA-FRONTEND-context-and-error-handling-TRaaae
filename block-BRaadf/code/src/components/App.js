import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import NoteState from "../context/notes/noteState";

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
        <NoteState>
          <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
            <Header isDarkMode={isDarkMode} />
            <Main isDarkMode={isDarkMode} />
            <SwitchButton
              isDarkMode={isDarkMode}
              changeMode={this.changeMode}
            />
          </div>
        </NoteState>
      </>
    );
  }
}

export default App;
