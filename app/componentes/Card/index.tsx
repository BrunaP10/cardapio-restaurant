import Image from "next/image";
import estilos from "./Card.module.css";
import { Produto } from "../../types/Produto";

type CardProps = {
  produto: Produto;
};

export default function Card({ produto }: CardProps) {
  return (
    <div className={estilos.container_card}>
      <div className={estilos.imagem_container}>
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={estilos.img_card}
        />
      </div>

      <div className={estilos.info}>
        <h2>{produto.nome}</h2>
        <span className={estilos.categoria}>{produto.categoria}</span>
        <p className={estilos.descricao}>{produto.descricao}</p>

        <p className={estilos.preco}>
          R${" "}
          {produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}