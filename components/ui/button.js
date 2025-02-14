export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
}