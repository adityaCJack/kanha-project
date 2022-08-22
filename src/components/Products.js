import React from "react";
import ProductsExtra from "./ProductsExtra";

//Products contains one ProductsExtra component

function Products() {
  return (
    <>
      <div className="main py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9  px-2">
              <h4 className="text-white bg-primary p-2 ps-4">
                Featured Products
              </h4>
              <div className="row ">
                <div className="col-lg-6 px-4 mt-3 products-id">
                  <div className="row bg-white shadow py-3">
                    <div className="col-lg-5">
                      <div className="bg-warning h100"></div>
                    </div>
                    <div className="col-lg-7">
                      <h3>Product Title</h3>
                      <h3>SKU</h3>
                      <p>
                        Lorem ipsum dolor sit amel consectetur adipiscing eit
                      </p>
                      <button className="btn btn-success">
                        More Info {">>"}{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 px-4 mt-3 products-id">
                  <div className="row bg-white shadow py-3">
                    <div className="col-lg-5">
                      <div className="bg-warning h100"></div>
                    </div>
                    <div className="col-lg-7">
                      <h3>Product Title</h3>
                      <h3>SKU</h3>
                      <p>
                        Lorem ipsum dolor sit amel consectetur adipiscing eit
                      </p>
                      <button className="btn btn-success">
                        More Info {">>"}{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 px-4 mt-3 products-id">
                  <div className="row bg-white shadow py-3">
                    <div className="col-lg-5">
                      <div className="bg-warning h100"></div>
                    </div>
                    <div className="col-lg-7">
                      <h3>Product Title</h3>
                      <h3>SKU</h3>
                      <p>
                        Lorem ipsum dolor sit amel consectetur adipiscing eit
                      </p>
                      <button className="btn btn-success">
                        More Info {">>"}{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 px-4 mt-3 products-id">
                  <div className="row bg-white shadow py-3">
                    <div className="col-lg-5">
                      <div className="bg-warning h100"></div>
                    </div>
                    <div className="col-lg-7">
                      <h3>Product Title</h3>
                      <h3>SKU</h3>
                      <p>
                        Lorem ipsum dolor sit amel consectetur adipiscing eit
                      </p>
                      <button className="btn btn-success">
                        More Info {">>"}{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductsExtra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
