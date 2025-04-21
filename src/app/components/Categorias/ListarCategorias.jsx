import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ModalEditarCategoria from "./ModalEditarCategoria";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [categoriaEditar, setCategoriaEditar] = useState(null);

  const fetchCategorias = async () => {
    try {
      const res = await fetch("/api/categorias");
      const data = await res.json();
      console.log(categorias);
      setCategorias(data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleEliminar = async (id) => {
    try {
      const res = await fetch(`/api/categorias/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMensaje("✅ Categoría eliminada correctamente.");
        setCategorias((prev) => prev.filter((cat) => cat.id !== id));
      } else {
        setMensaje("❌ No se pudo eliminar la categoría.");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      setMensaje("❌ Error de red o servidor.");
    }

    setTimeout(() => setMensaje(""), 3000);
  };

  const handleEditar = (categoria) => {
    setCategoriaEditar(categoria);
    setModalOpen(true);
  };

  const handleGuardar = async (updatedCategoria) => {
    const res = await fetch(`/api/categorias/${updatedCategoria.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedCategoria.title,
        type: updatedCategoria.type,
      }),
    });

    if (res.ok) {
      const updated = await res.json();
      setCategorias((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
    } else {
      console.error("Error al actualizar la categoría");
    }
  };

  const handleCancelar = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h3 className="title mb-4">Categorías</h3>
      <table className="table-auto border-collapse border border-violet-400 rounded-xl">
        <thead>
          <tr>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Título
            </th>
            <th className="border border-violet-400 p-4 bg-violet-300">Tipo</th>
            <th className="border border-violet-400 p-4 bg-violet-300">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((c, i) => (
            <tr key={c.id}>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {c.title}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                {c.type === "income" ? "Ingreso" : "Egreso"}
              </td>
              <td className="border border-violet-400 p-4 bg-violet-200 text-center">
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => handleEditar(c)}
                    className="text-green-600 hover:text-blue-800"
                    title="Modificar"
                  >
                    <Icon icon="line-md:pencil" width="24" height="24" />
                  </button>
                  <button
                    onClick={() => handleEliminar(c.id)}
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
      <ModalEditarCategoria
        isOpen={modalOpen}
        onClose={handleCancelar}
        categoria={categoriaEditar}
        onGuardar={handleGuardar}
      />
    </div>
  );
};

export default ListarCategorias;
