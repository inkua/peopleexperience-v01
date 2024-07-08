

export default async function Home() {
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    console.log(data);
    
    

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home</h1>

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map(producto => (
                        <div key={producto.id} className="border rounded-lg p-4 shadow-md">
                            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
                            <p className="text-gray-600">Categoría: {producto.categoria}</p>
                            <p className="text-gray-800 font-bold">${producto.precio.toFixed(2)}</p>
                            <p className={`text-sm ${producto.enStock ? 'text-green-500' : 'text-red-500'}`}>
                                {producto.enStock ? 'En stock' : 'Agotado'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
