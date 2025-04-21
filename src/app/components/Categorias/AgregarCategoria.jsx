import { useState } from "react";

const AgregarCategoria = () => {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("ingreso");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo) {
      setMensaje("El título no puede estar vacío.");
      return;
    }

    try {
      const res = await fetch("/api/categorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titulo,
          type: tipo === "ingreso" ? "income" : "expense",
        }),
      });

      if (res.ok) {
        setMensaje("✅ Categoría agregada correctamente.");
        setTitulo("");
        setTipo("ingreso");
        setTimeout(() => {
          setMensaje("");
        }, 3000);
      } else {
        const data = await res.json();
        setMensaje(
          `❌ Error: ${data.error || "No se pudo agregar la categoría"}`
        );
        setTimeout(() => {
          setMensaje("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setMensaje("❌ Error de red o servidor.");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    }
  };

  return (
    <div className="mb-[30px]">
      <h3 className="title mb-4">Agregar Categoría</h3>

      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border border-gray-300 rounded p-2"
          placeholder="Título"
        />

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Egreso</option>
        </select>

        <button type="submit" className="btn">
          Agregar Categoría
        </button>
      </form>

      {mensaje && <p className="mt-2 text-sm text-gray-700">{mensaje}</p>}
    </div>
  );
};

export default AgregarCategoria;
