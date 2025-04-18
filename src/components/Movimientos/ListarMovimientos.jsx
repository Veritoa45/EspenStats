import { useState } from "react";
import { Icon } from "@iconify/react";

const ListarMovimientos = () => {
  const [movimientos, setMovimientos] = useState([
    {
      fecha: "12-04-2025",
      titulo: "Ejemplo 1",
      tipo: "Ingreso",
      monto: 2000,
    },
    {
      fecha: "23-04-2025",
      titulo: "Ejemplo 2",
      tipo: "Egreso",
      monto: 5000,
    },
    {
      fecha: "02-04-2025",
      titulo: "Ejemplo 3",
      tipo: "Egreso",
      monto: 1000,
    },
    {
      fecha: "15-04-2025",
      titulo: "Ejemplo 4",
      tipo: "Ingreso",
      monto: 8000,
    },
  ]);

  const handleEditar = (i) => {};

  const handleEliminar = (i) => {};

  return (
    <div>
      <h3 className="title mb-4">Movimientos</h3>
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
          {movimientos.map((m, i) => (
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
