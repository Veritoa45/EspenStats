const AgregarCategoria = () => {
  return (
    <div className="mb-[30px]">
      <h3>Agregar Categoría</h3>
      <form className="flex gap-4">
        <input
          type="text"
          id="titulo"
          className="border border-gray-300 rounded p-2"
          placeholder="Título"
        />
        <select id="tipo" className="border border-gray-300 rounded p-2">
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Egreso</option>
        </select>
        <button type="submit" className="btn">
          Agregar Categoría
        </button>
      </form>
    </div>
  );
};

export default AgregarCategoria;
