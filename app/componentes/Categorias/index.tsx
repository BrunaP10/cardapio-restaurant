import Image from "next/image";
import estilos from "./Categorias.module.css";

type Props = {
  categoria: string;
  setCategoria: (categoria: string) => void;
};

const listaCategorias = [
  { nome: "Todos", imagem: "/entrada.png" },
  { nome: "Entradas", imagem: "/entrada.png" },
  { nome: "Massas", imagem: "/massa.png" },
  { nome: "Carnes", imagem: "/carne.png" },
  { nome: "Bebidas", imagem: "/bebidas.png" },
  { nome: "Saladas", imagem: "/salada.png" },
  { nome: "Sobremesas", imagem: "/sobremesa.png" }
];

export default function Categorias({ categoria, setCategoria }: Props) {
  return (
    <div className={estilos.container}>
      {listaCategorias.map((item) => {
        const ativo = categoria === item.nome;

        return (
          <button
            key={item.nome}
            type="button"
            onClick={() => setCategoria(item.nome)}
            className={`${estilos.botao} ${ativo ? estilos.ativo : ""}`}
          >
            <Image
              src={item.imagem}
              alt={`Ícone da categoria ${item.nome}`}
              width={20}
              height={20}
            />
            <span>{item.nome}</span>
          </button>
        );
      })}
    </div>
  );
}