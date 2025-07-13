import React, { useEffect, useState } from "react";
import api from "../api/api";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api.get(`/products?limit=6&skip=${page * 6}`).then((res) => {
      setProducts(res.data.products);
    });
  }, [page]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
            <div className="h-60 w-full bg-gray-100 flex items-center justify-center rounded mb-4">
              <img  src={p.thumbnail}  alt={p.title}
                className="max-h-52 object-contain"/>
            </div>
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-2">{p.description.substring(0, 60)}...</p>
            <p className="font-bold text-blue-600">Omborda: {p.stock} dona</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button onClick={() => setPage(Math.max(page - 1, 0))}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition" >
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default React.memo(Home);
