import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      price={emojiTerm.price}
      stock={emojiTerm.stock}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Medical Store</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
