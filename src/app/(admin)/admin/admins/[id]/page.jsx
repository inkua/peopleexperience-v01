export default async function AdminDetails({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/admin/${id}`, { cache: "no-store" });
  
  if (!res.ok) {
      return <div>Error cargando la data del admin</div>;
  }
  
  const data = await res.json();

  return (
  <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg" style={{ marginTop: '2rem' }}>
    <div className="relative">
      <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image"/>
    </div>
    <div className="px-6 py-4">
      <div className="text-xl font-semibold text-gray-800">{data.name}</div>
      <p className="text-gray-600">{data.email}</p>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-600">team: {data.team.name}</p>
    </div>
  </div>
  );
}