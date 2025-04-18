import { useState } from "react";

const ListarVencimientos = () => {
  const [vencimientos, setVencimientos] = useState([
    {
      fecha: "01-05-2025",
      titulo: "Ejemplo 1",
      importe: 1000,
      descripcion: "Descripción del vencimiento 1",
      estado: "Pendiente",
    },
    {
      fecha: "12-05-2025",
      titulo: "Ejemplo 2",
      importe: 2000,
      descripcion: "Descripción del vencimiento 2",
      estado: "Pagado",
    },
    {
      fecha: "25-05-2025",
      titulo: "Ejemplo 3",
      importe: 5000,
      descripcion: "Descripción del vencimiento 3",
      estado: "Pendiente",
    },
    {
      fecha: "12-06-2025",
      titulo: "Ejemplo 4",
      importe: 3000,
      descripcion: "Descripción del vencimiento 4",
      estado: "Pendiente",
    },
  ]);

  const cambiarEstado = (i) => {
    const nuevos = [...vencimientos];
    nuevos[i].estado =
      nuevos[i].estado === "Pendiente" ? "Pagado" : "Pendiente";
    setVencimientos(nuevos);
  };

  return (
    <div>
      <h3 className="title mb-4">Próximos Vencimientos</h3>
      <table className="table-auto border-collapse border border-violet-400 rounded-xl">
        <thead>
          <tr>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Fecha
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Título
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Importe
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Descripción
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {vencimientos.map((v, i) => (
            <tr key={i}>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.fecha}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.titulo}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.importe}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.descripcion}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                <button
                  onClick={() => cambiarEstado(i)}
                  className={`p-4 rounded-full text-white text-sm font-semibold transition ${
                    v.estado === "Pendiente"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {v.estado}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarVencimientos;
