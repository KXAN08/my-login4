import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  const [data, setData] = useState<any>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [page, setPage] = useState(0); 

  useEffect(() => {
    api.get(`/products?limit=5&skip=${page * 5}`).then((res) => {
      const titles = res.data.products.map((p: any) => p.title);
      const stocks = res.data.products.map((p: any) => p.stock);

      setData({
        labels: titles,
        datasets: [
          {
            data: stocks,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
            borderWidth: 1,
          },
        ],
      });

      setAnimationKey((prev) => prev + 1);
    });
  }, [page]);

  if (!data) return <div className="text-center p-8 text-gray-500 animate-pulse">Yuklanmoqda...</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 transition transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Statistika (Page: {page + 1})</h2>
        <Doughnut key={animationKey} data={data} options={{ animation: { animateScale: true } }} />
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button onClick={() => setPage(Math.max(page - 1, 0))}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition" >
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"  >
          Next
        </button>
      </div>
    </div>
  );
};

export default Statistic;
