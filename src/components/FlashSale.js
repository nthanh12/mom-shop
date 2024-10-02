import React, { useState } from "react";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";

const FlashSale = () => {
  const [isModalOpen, SetIsModalOpen] = useState(null);
  const handleOpen = (productID) => {
    SetIsModalOpen(productID);
  };
  const handleClose = () => {
    SetIsModalOpen(null);
  };
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-5 gap-3">
          {products.map((item, index) => (
            <div key={index} className="mt-8 border">
              <div className="overflow-hidden relative">
                <div className="image-container relative">
                  <div className="flash_sale_img">
                    <img src={item.img} alt="img"></img>
                  </div>
                  <div className="tag absolute top-0">
                    <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">
                      {item.tag}
                    </p>
                  </div>
                </div>
                <div className="product-details text-center mt-2">
                  <p className="mb-2">{item.short_description}</p>
                  <p className="text-red-600">${item.price}</p>
                </div>

                <div className="bg-rose-300 opacity-65 hover:opacity-100 text-gray-900 py-4 transition-all w-full">
                  <div className="flex align-middle justify-center">
                    <button>
                      <BiCart></BiCart>
                    </button>

                    <button onClick={() => handleOpen(item.id)}>
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        data={products.find((item) => item.id === isModalOpen)}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
};
export default FlashSale;
