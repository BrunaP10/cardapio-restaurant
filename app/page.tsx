"use client";
import estilos from "./page.module.css";
import { useState } from "react";
import { produtos } from "./data/data_produtos";
import Card from "./componentes/Card";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import { filtrarProdutos } from "./servico";
import Banner from "./componentes/Banner";

export default function Home() {
  const [categoria, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");

  const produtosFiltrados = filtrarProdutos({ produtos, categoria, busca });

  return (
    <>
      <Banner />
      <main className={estilos.container_main}>      
        <Categorias categoria={categoria} setCategoria={setCategoria} />
        <CampoDeBusca busca={busca} setBusca={setBusca} />

        <div className={estilos.container_cards}>
          {produtosFiltrados.map((produto) => (
            <Card
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>

      </main>
    </>
  );
}
   