import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Кепка Classic Black", price: "899₴", image: "/cap1.jpg" },
  { id: 2, name: "Кепка Streetwear Gray", price: "999₴", image: "/cap2.jpg" },
  { id: 3, name: "Кепка Urban Blue", price: "949₴", image: "/cap3.jpg" },
  { id: 4, name: "Кепка Sport Red", price: "979₴", image: "/cap4.jpg" },
  { id: 5, name: "Кепка Casual White", price: "899₴", image: "/cap5.jpg" },
  { id: 6, name: "Кепка Limited Edition", price: "1299₴", image: "/cap6.jpg" },
];

export function XMLFeed() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
    <channel>
      <title>Магазин мужских кепок</title>
      <link>https://yourshop.com</link>
      <description>Лучшие мужские кепки</description>
      ${products.map(product => `
        <item>
          <g:id>${product.id}</g:id>
          <g:title>${product.name}</g:title>
          <g:price>${product.price}</g:price>
          <g:image_link>https://yourshop.com${product.image}</g:image_link>
          <g:link>https://yourshop.com/product/${product.id}</g:link>
        </item>
      `).join('')}
    </channel>
  </rss>`;

  return <pre>{xmlContent}</pre>;
}

function Page({ title, content }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

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
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Магазин мужских кепок</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <CardContent className="mt-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <Button className="mt-2 w-full">Купить</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function ReturnPolicy() {
  return <Page title="Политика возврата" content="Вы можете вернуть товар в течение 14 дней после покупки." />;
}

export function ShippingInfo() {
  return <Page title="Информация о доставке" content="Доставка осуществляется по всей Украине в течение 2-5 рабочих дней." />;
}

export function ContactUs() {
  return <Page title="Контакты" content="Свяжитесь с нами по email: support@yourshop.com или по телефону: +380 123 456 789." />;
}
