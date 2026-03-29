import Image from "next/image";
import estilos from "./CampoDeBusca.module.css";

type Props = {
  busca: string;
  setBusca: (busca: string) => void;
};

export default function CampoDeBusca({ busca, setBusca }: Props) {
  return (
    <div className={estilos.container}>
      <div className={estilos.icone}>
        <Image
          src="/lupa.png"
          alt=""
          width={20}
          height={20}
        />
      </div>

      <input
        type="text"
        placeholder="Pesquise um prato do nosso cardápio"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        aria-label="Campo de busca de pratos"
      />
    </div>
  );
}