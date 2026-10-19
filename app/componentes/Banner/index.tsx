
import Image from "next/image";
import estilos from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={estilos.banner}>
      <Image
        src="/banner-novo.png"
        alt="Ambiente gastronômico do Bistrô da Lenha"
        fill
        priority
        className={estilos.imagem}
      />

      <div className={estilos.overlay}></div>

      <div className={estilos.conteudo}>
        <h1 className={estilos.titulo}>
          BISTRÔ DA LENHA
        </h1>

        <p className={estilos.paragrafo}>
          Gastronomia artesanal, sabores que acolhem.
        </p>
      </div>
    </div>
  );
}
