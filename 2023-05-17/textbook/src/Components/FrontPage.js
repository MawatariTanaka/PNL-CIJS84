import React, { Component } from "react";
import Card from "./Card";

class FrontPage extends Component {
  render() {
    const products = [
      {
        badge: null,
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Fancy Product",
        rating: null,
        oldPrice: null,
        newPrice: "$40.00 - $80.00",
        buttonText: "View options",
      },
      {
        badge: "Sale",
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Special Item",
        rating: 5,
        oldPrice: "$20.00",
        newPrice: "$18.00",
        buttonText: "Add to cart",
      },
      {
        badge: "Sale",
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Sale Item",
        rating: null,
        oldPrice: "$50.00",
        newPrice: "$25.00",
        buttonText: "Add to cart",
      },
      {
        badge: null,
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Popular Item",
        rating: 4,
        oldPrice: null,
        newPrice: "$40.00",
        buttonText: "Add to cart",
      },
      {
        badge: null,
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Sale Item",
        rating: null,
        oldPrice: "$50.00",
        newPrice: "$25.00",
        buttonText: "Add to cart",
      },
      {
        badge: null,
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Fancy Item",
        rating: null,
        oldPrice: null,
        newPrice: "$120.00",
        buttonText: "View options",
      },
      {
        badge: "Sale",
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Special Item",
        rating: 5,
        oldPrice: "$20.00",
        newPrice: "$18.00",
        buttonText: "Add to cart",
      },
      {
        badge: null,
        imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        altText: "...",
        productName: "Popular Item",
        rating: 4,
        oldPrice: null,
        newPrice: "$40.00",
        buttonText: "Add to cart",
      },
    ];
    return (
      <>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {products.map((product, index) => (
                <Card key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FrontPage;
