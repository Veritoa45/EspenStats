export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Saldo total</h3>
        <p className="text-2xl font-semibold text-green-600">$0.00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Ingresos del mes</h3>
        <p className="text-2xl font-semibold text-green-600">$0.00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Gastos del mes</h3>
        <p className="text-2xl font-semibold text-red-600">$0.00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Ingresos vs Egresos</h3>
        <div className="w-full h-3 bg-gray-200 rounded mt-2">
          <div
            className="h-full bg-blue-500 rounded"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Próximos vencimientos</h3>
        <p className="text-2xl font-semibold text-red-600">Ver como lo armo</p>
      </div>
    </div>
  );
}
