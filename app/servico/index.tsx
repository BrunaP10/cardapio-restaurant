
import { Produto } from "../types/Produto";

type FiltroProps = {
  produtos: Produto[];
  categoria: string;
  busca: string;
};

const ordemCategorias = [
  "Entradas",
  "Massas",
  "Carnes",
  "Bebidas",
  "Saladas",
  "Sobremesas",
];

export function filtrarProdutos({
  produtos,
  categoria,
  busca,
}: FiltroProps) {
  const termoBusca = busca.trim().toLowerCase();

  return produtos
    .filter((produto) => {
      const categoriaMatch =
        categoria === "Todos" ||
        produto.categoria === categoria;

      const buscaMatch = produto.nome
        .toLowerCase()
        .includes(termoBusca);

      return categoriaMatch && buscaMatch;
    })
    .sort((a, b) => {
      const ordemA = ordemCategorias.indexOf(a.categoria);
      const ordemB = ordemCategorias.indexOf(b.categoria);

      return ordemA - ordemB;
    });
}
