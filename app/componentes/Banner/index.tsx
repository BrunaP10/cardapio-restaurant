import Image from "next/image";
import estilos from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={estilos.banner}>
      <Image
        src="/banner.png"
        alt="Banner do restaurante"
        fill
        priority
        className={estilos.imagem}
      />

      <div className={estilos.overlay}></div>

      <div className={estilos.conteudo}>
        <h1 className={estilos.titulo}>RESTAURANT</h1>
        <p className={estilos.paragrafo}>
          De pratos clássicos a criações surpreendentes, nosso cardápio
          é um requinte de sabores refinados.
        </p>
      </div>
    </div>
  );
}