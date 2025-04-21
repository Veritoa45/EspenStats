import { useState } from "react";
import { Icon } from "@iconify/react";

const ListarMovimientos = () => {
  const [filtroCategoriaInput, setFiltroCategoriaInput] = useState("Todas");
  const [filtroTipoInput, setFiltroTipoInput] = useState("Todos");
  const [filtroFechaInput, setFiltroFechaInput] = useState("");

  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroFecha, setFiltroFecha] = useState("");
  const [movimientos, setMovimientos] = useState([
    {
      fecha: "2025/04/12",
      titulo: "Ejemplo 1",
      tipo: "Ingreso",
      categoria: "Alimentación",
      monto: 2000,
    },
    {
      fecha: "23/04/2025",
      titulo: "Ejemplo 2",
      tipo: "Egreso",
      categoria: "Transporte",
      monto: 5000,
    },
    {
      fecha: "02/04/2025",
      titulo: "Ejemplo 3",
      tipo: "Egreso",
      categoria: "Entretenimiento",
      monto: 1000,
    },
    {
      fecha: "15/04/2025",
      titulo: "Ejemplo 4",
      tipo: "Ingreso",
      categoria: "Alimentación",
      monto: 8000,
    },
  ]);

  const handleEditar = (i) => {};

  const handleEliminar = (i) => {};

  const movimientosFiltrados = movimientos.filter((m) => {
    const coincideCategoria =
      filtroCategoria === "Todas" || m.categoria === filtroCategoria;
    const coincideTipo = filtroTipo === "Todos" || m.tipo === filtroTipo;
    const coincideFecha = filtroFecha === "" || m.fecha === filtroFecha;

    return coincideCategoria && coincideTipo && coincideFecha;
  });

  return (
    <div>
      <h3 className="title mb-4">Movimientos</h3>
      <div className="flex items-end gap-4 mb-4">
        {/* Filtro categoría */}
        <select
          value={filtroCategoriaInput}
          onChange={(e) => setFiltroCategoriaInput(e.target.value)}
          className="p-2 border border-violet-400 rounded"
        >
          <option value="Todas">Todas las categorías</option>
          {Array.from(new Set(movimientos.map((m) => m.categoria))).map(
            (cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            )
          )}
        </select>

        {/* Filtro tipo */}
        <select
          value={filtroTipoInput}
          onChange={(e) => setFiltroTipoInput(e.target.value)}
          className="p-2 border border-violet-400 rounded"
        >
          <option value="Todos">Todos</option>
          <option value="Ingreso">Ingreso</option>
          <option value="Egreso">Egreso</option>
        </select>

        {/* Filtro fecha */}
        <input
          type="date"
          value={filtroFechaInput}
          onChange={(e) => setFiltroFechaInput(e.target.value)}
          className="p-2 border border-violet-400 rounded"
        />

        {/* Botón buscar */}
        <button
          onClick={() => {
            setFiltroCategoria(filtroCategoriaInput);
            setFiltroTipo(filtroTipoInput);
            setFiltroFecha(filtroFechaInput);
          }}
          className="px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600 flex items-center gap-2"
        >
          <Icon icon="wpf:search" width="26" height="26" />
          Buscar
        </button>
      </div>
      <table className="table-auto border-collapse border border-violet-400 rounded-xl">
        <thead>
          <tr>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Fecha
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Título
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">Debe</th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Haber
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {movimientosFiltrados.map((m, i) => (
            <tr key={i}>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {m.fecha}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {m.titulo}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {/* Debe */}
                {m.tipo === "Ingreso" ? (
                  <span className="text-green-600 font-semibold">
                    ${m.monto}
                  </span>
                ) : (
                  "-"
                )}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {/* Haber */}
                {m.tipo === "Egreso" ? (
                  <span className="text-red-600 font-semibold">${m.monto}</span>
                ) : (
                  "-"
                )}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => handleEditar(i)}
                    className="text-green-600 hover:text-blue-800"
                    title="Modificar"
                  >
                    <Icon icon="line-md:pencil" width="24" height="24" />
                  </button>
                  <button
                    onClick={() => handleEliminar(i)}
                    className="text-red-600 hover:text-red-800"
                    title="Eliminar"
                  >
                    <Icon icon="f7:trash" width="24" height="24" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarMovimientos;
