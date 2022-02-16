
import React, { useState } from 'react';

export default function AddItem(props) {
    let [nameInput, setNameInput] = useState("");
    let [priceInput, setPriceInput] = useState(0);
  return (
    <div>
      <form className="row mb-5" onSubmit={(e)=>{
            e.preventDefault()
            props.addItem(nameInput,Number(priceInput))
        }}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            onChange={(e)=>{
                setNameInput(e.currentTarget.value)
            }}
            value={nameInput}
          />
          
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={(e)=>{
                setPriceInput(Number(e.currentTarget.value))
            }}
            value={priceInput}
          />
        </div>

        <button type="submit" className="btn btn-primary col-4" >
          Add
        </button>
      </form>
    </div>
  );
}
