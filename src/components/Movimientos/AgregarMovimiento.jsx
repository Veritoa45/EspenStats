const AgregarMovimiento = () => {
  return (
    <div className="mb-[30px]">
      <h3 className="title mb-4">Agregar Movimiento</h3>
      <form className="flex gap-4">
        <input
          type="date"
          id="Fecha"
          className="border border-gray-300 rounded p-2"
          placeholder="Fecha"
        />
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
        <input
          type="number"
          id="monto"
          className="border border-gray-300 rounded p-2"
          placeholder="Monto"
        />
        <button type="submit" className="btn">
          Agregar Movimiento
        </button>
      </form>
    </div>
  );
};

export default AgregarMovimiento;
