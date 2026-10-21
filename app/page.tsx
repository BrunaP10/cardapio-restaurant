"use client";

import { useEffect, useState } from "react";
import estilos from "./page.module.css";
import { produtos } from "./data/data_produtos";
import Card from "./componentes/Card";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import { filtrarProdutos } from "./servico";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";

type Tema = "claro" | "escuro";

export default function Home() {
  const [categoria, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [tema, setTema] = useState<Tema>("claro");
  const [temaCarregado, setTemaCarregado] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema-cardapio");

    if (temaSalvo === "claro" || temaSalvo === "escuro") {
      setTema(temaSalvo);
    }

    setTemaCarregado(true);
  }, []);

  if (!temaCarregado) {
    return null;
  }

  function alternarTema() {
    const novoTema = tema === "claro" ? "escuro" : "claro";

    setTema(novoTema);
    localStorage.setItem("tema-cardapio", novoTema);
  }

  const produtosFiltrados = filtrarProdutos({
    produtos,
    categoria,
    busca,
  });

  return (
    <div
      className={
        tema === "claro"
          ? estilos.tema_claro
          : estilos.tema_escuro
      }
    >
      <div className={estilos.barra_tema}>
        <button
          type="button"
          className={estilos.botao_tema}
          onClick={alternarTema}
          aria-label={
            tema === "claro"
              ? "Ativar modo escuro"
              : "Ativar modo claro"
          }
        >
          {tema === "claro" ? "🌙 " : "☀️"}
        </button>
      </div>

      <Banner />

      <main className={estilos.container_main}>
        <Categorias
          categoria={categoria}
          setCategoria={setCategoria}
        />

        <CampoDeBusca
          busca={busca}
          setBusca={setBusca}
        />

        <div className={estilos.container_cards}>
          {produtosFiltrados.map((produto) => (
            <Card key={produto.id} produto={produto} />
          ))}
        </div>
      </main>
      
      <Footer />

    </div>
  );
}

   