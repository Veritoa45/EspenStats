import { useState } from "react";
import { Icon } from "@iconify/react";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState([
    {
      titulo: "Ejemplo 1",
      tipo: "Ingreso",
      estado: "Pendiente",
    },
    {
      titulo: "Ejemplo 2",
      tipo: "Egreso",
      estado: "Pagado",
    },
    {
      titulo: "Ejemplo 3",
      tipo: "Egreso",
      estado: "Pendiente",
    },
    {
      titulo: "Ejemplo 4",
      tipo: "Ingreso",
      estado: "Pendiente",
    },
  ]);

  const handleEditar = (i) => {};

  const handleEliminar = (i) => {};

  return (
    <div>
      <h3 className="title mb-4">Categorías</h3>
      <table className="table-auto border-collapse border border-violet-400 rounded-xl">
        <thead>
          <tr>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Título
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Título
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((v, i) => (
            <tr key={i}>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.titulo}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {v.tipo}
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

export default ListarCategorias;
