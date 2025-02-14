export default function Page({ title, content }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}