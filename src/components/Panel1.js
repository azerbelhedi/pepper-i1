import React, { useContext } from "react";
import { StoreContext } from "../App";

export default function Panel1({}) {
  const { store, setStore } = useContext(StoreContext);
  // console.log(store.name)
  return (
    <div>
      <h1>Panel 1</h1>
      <h4>Name : {store.name}</h4>
      <h4>Age : {store.age}</h4>
      <button
        onClick={() => {
          alert("toggle");
          let localStore = {...store, name : "amine"}
          setStore(localStore)
        }}
      >
        toggle
      </button>
      <h4>Names</h4>
      <div>
          {store.names? store.names.map(name => {return <h5>{name}</h5> }) : null }
      </div>
    </div>
  );
}
