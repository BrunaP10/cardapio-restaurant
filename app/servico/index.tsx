import { Produto } from "../types/Produto";

type FiltroProps = {
  produtos: Produto[];
  categoria: string;
  busca: string;
};

export function filtrarProdutos({ produtos, categoria, busca }: FiltroProps) {
  const termoBusca = busca.trim().toLowerCase();

  return produtos.filter((produto) => {
    const categoriaMatch =
      categoria === "Todos" || produto.categoria === categoria;

    const buscaMatch = produto.nome
      .toLowerCase()
      .includes(termoBusca);

    return categoriaMatch && buscaMatch;
  });
}