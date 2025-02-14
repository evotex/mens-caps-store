import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

const products = [
  { id: 1, name: "Кепка Classic Black", price: "899₴", image: "/cap1.jpg" },
  { id: 2, name: "Кепка Streetwear Gray", price: "999₴", image: "/cap2.jpg" },
  { id: 3, name: "Кепка Urban Blue", price: "949₴", image: "/cap3.jpg" },
  { id: 4, name: "Кепка Sport Red", price: "979₴", image: "/cap4.jpg" },
  { id: 5, name: "Кепка Casual White", price: "899₴", image: "/cap5.jpg" },
  { id: 6, name: "Кепка Limited Edition", price: "1299₴", image: "/cap6.jpg" },
];

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=GTM-K8PL38NH";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "GTM-K8PL38NH");
    };
  }, []);

  return (
    <div className="container mx-auto py-10 text-center">
      <img src="/logo.png" alt="Логотип магазина" className="w-32 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-6">Магазин мужских кепок</h1>
      
      <nav className="mb-6">
        <Link href="/shipping" className="mr-4 text-blue-500 hover:underline">Доставка</Link>
        <Link href="/return" className="text-blue-500 hover:underline">Возврат</Link>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <CardContent className="mt-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <Button className="mt-2 w-full">Купить</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
