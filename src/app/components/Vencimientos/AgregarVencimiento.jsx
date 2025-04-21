const AgregarVencimiento = () => {
  return (
    <div className="mb-[30px]">
      <h3 className="title mb-4">Nuevos Vencimientos</h3>
      <form className="flex gap-4">
        <input
          type="text"
          id="titulo"
          className="border border-gray-300 rounded p-2"
          placeholder="Título"
        />
        <input
          type="date"
          id="fecha"
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="number"
          id="importe"
          className="border border-gray-300 rounded p-2"
          placeholder="Importe"
        />
        <input
          type="text"
          id="descripcion"
          className="border border-gray-300 rounded p-2"
          placeholder="Descripción"
        />
        <button type="submit" className="btn">
          Agregar Vencimiento
        </button>
      </form>
    </div>
  );
};

export default AgregarVencimiento;
