import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBasedePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBasedePagina
      titulo="Página Inicial"
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca />}
    >
      ...testando
    </LayoutBasedePagina>
  );
};
