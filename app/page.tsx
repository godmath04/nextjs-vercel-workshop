import Image from "next/image";
import ProductTable from "@/app/components/ProductTable"; // O la ruta relativa si prefieres

export default function Home() {
  return (
    <main>
      Hello There
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHEybUyNDF4OHdvYTYwaXh2eW9wOTBpemExZmthemk4NTh4Y3ljZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif"
        alt="Hello There"
      />
      
      {/* Aquí insertamos la tabla */}
      <ProductTable /> 
    </main>
  );
}