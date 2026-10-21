
import estilos from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.conteudo}>
        <h2 className={estilos.nome}>Bistrô da Lenha</h2>

        <p className={estilos.frase}>
          Gastronomia artesanal, sabores que acolhem.
        </p>

        <div className={estilos.divisor} />

        <p className={estilos.agradecimento}>
          Obrigado por conhecer nosso cardápio!
        </p>

        <p className={estilos.direitos}>
          © {new Date().getFullYear()} Bistrô da Lenha.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
