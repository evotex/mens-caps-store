import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Кепка Classic Black", price: "899₴", image: "/cap1.jpg" },
  { id: 2, name: "Кепка Streetwear Gray", price: "999₴", image: "/cap2.jpg" },
  { id: 3, name: "Кепка Urban Blue", price: "949₴", image: "/cap3.jpg" },
  { id: 4, name: "Кепка Sport Red", price: "979₴", image: "/cap4.jpg" },
  { id: 5, name: "Кепка Casual White", price: "899₴", image: "/cap5.jpg" },
  { id: 6, name: "Кепка Limited Edition", price: "1299₴", image: "/cap6.jpg" },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-center text-gray-600">Товар не найден</p>;

  return (
    <div className="container mx-auto py-10 text-center">
      <img src={product.image} alt={product.name} className="w-64 mx-auto mb-6 rounded-lg" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{product.price}</p>
      <Button className="mt-2 w-40">Купить</Button>
    </div>
  );
}
