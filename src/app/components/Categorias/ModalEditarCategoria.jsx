import { useState, useEffect } from "react";

const tipoMap = {
  income: "ingreso",
  expense: "egreso",
};

const tipoMapInverso = {
  ingreso: "income",
  egreso: "expense",
};

const ModalEditarCategoria = ({ isOpen, onClose, categoria, onGuardar }) => {
  const [newTitle, setNewTitle] = useState(categoria?.title || "");
  const [newType, setNewType] = useState(categoria?.type || "ingreso");

  useEffect(() => {
    if (categoria) {
      setNewTitle(categoria.title);
      setNewType(tipoMap[categoria.type] || "ingreso");
    }
  }, [categoria]);

  const handleGuardar = () => {
    onGuardar({
      id: categoria.id,
      title: newTitle,
      type: tipoMapInverso[newType], // <-- Esto lo vuelve a transformar
    });
    onClose();
  };

  if (!isOpen) return null;
  console.log("Modal abierto");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl mb-4">Editar Categoría</h3>
        <div>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 w-full mb-4"
          />
        </div>
        <div>
          <select
            id="type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)} // Actualiza el estado con el nuevo tipo
            className="border p-2 w-full mb-4"
          >
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className="fixed inset-0 z-50 flex justify-center items-center bg-red-300 bg-opacity-90"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarCategoria;
