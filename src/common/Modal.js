import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlide";
import { Link } from "react-router-dom";

const Modal = ({ isModalOpen, handleClose, data }) => {
  const [qty, setQty] = useState(1);
  const [addedItemToCart, setAddItemToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddItemToCart(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("model-open");
    } else {
      setQty(1);
      setAddItemToCart(false);
      document.body.classList.remove("model-open");
    }
  }, [isModalOpen]);

  const increaseQuantity = (itemID, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemID, quantity: newQty }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-2/3 relative bg-white overflow-auto">
            <span
              className="absolute top-0 right-0 p-4"
              onClick={() => handleClose()}
            >
              <FaTimes></FaTimes>
            </span>
            <div className="flex">
              <div className="relative">
                <div className="flash_sale_img">
                  <img src={data.img} alt="img"></img>
                </div>
                <div className="tag absolute top-0">
                  <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">
                    {data.tag}
                  </p>
                </div>
              </div>

              <div className="modal-info ml-6">
                <p className="mb-2">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="mt-2">${data.description}</p>

                <div className="flex items-center">
                  <p className="font-semibold mr-2">Shades:</p>
                  <select
                    name="shades"
                    id="shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="options">Choose an Options</option>
                    <option value="options">1 Choose an Options</option>
                    <option value="options">2 Choose an Options</option>
                    <option value="options">3 Choose an Options</option>
                    <option value="options">4 Choose an Options</option>
                  </select>
                </div>
                <p className="text-green-700">In Stock 400 Items</p>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus></PiMinus>
                    </button>
                    <span className="border mt-4 py-3 px-6 count">{qty}</span>
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus></PiPlus>
                    </button>
                  </div>
                  <div className="addtocart mr-3">
                    {addedItemToCart ? (
                      <button className="mt-4 px-6 py-3 text-white">
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => addItemToCart(data)}
                        className="mt-4 px-6 py-3 text-white"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
