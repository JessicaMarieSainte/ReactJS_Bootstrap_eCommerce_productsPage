import "./ProductsCards.css";
import React from "react";

export default function ProductCard() {
  return (
    <div className="col">
      <div className="productCard card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="#" className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}
