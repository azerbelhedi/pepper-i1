import React, { useContext, useState } from "react";
import { StoreContext } from "../App";

export default function Panel2({}) {
  const { store, setStore } = useContext(StoreContext);

  let [nameInput, setNameInput] = useState("null");
  // console.log(nameInput)

  const addHuman = (name) => {
    let localStore = store
    if(!store.names){
        localStore = {...localStore, names : []}
    }
    localStore = { ...localStore, names: [...localStore.names, name] };
    setStore(localStore)
  };

  return (
    <div>
      <h1>Panel 2</h1>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          addHuman(nameInput);
        }}
      >
        Add
      </button>
    </div>
  );
}
