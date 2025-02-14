import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Корзина пуста</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-32 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Button className="mt-2 bg-red-500" onClick={() => removeFromCart(index)}>Удалить</Button>
          </div>
        ))
      )}
      <Link href="/checkout">
        <Button className="mt-4 w-40">Оформить заказ</Button>
      </Link>
    </div>
  );
}
