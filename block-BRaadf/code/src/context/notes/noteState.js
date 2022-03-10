import react from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  return (
    <NoteContext.provider value={state}>{props.children}</NoteContext.provider>
  );
};

export default NoteState;
