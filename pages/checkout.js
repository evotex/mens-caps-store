import { useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function CheckoutPage() {
  const [customer, setCustomer] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заказ оформлен!\nИмя: ${customer.name}\nEmail: ${customer.email}\nАдрес: ${customer.address}`);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
        <label className="block mb-2">Имя</label>
        <input type="text" name="name" value={customer.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Email</label>
        <input type="email" name="email" value={customer.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Адрес доставки</label>
        <input type="text" name="address" value={customer.address} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <Button type="submit" className="w-full">Оплатить</Button>
      </form>

      <Link href="/cart">
        <Button className="mt-4">Назад в корзину</Button>
      </Link>
    </div>
  );
}
