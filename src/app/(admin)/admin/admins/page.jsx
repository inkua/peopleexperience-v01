import Pagination from '@/components/Pagination'
import AddAdminBtn from './components/AddAdminBtn/AddAdminBtn'
import AdminTable from './components/AdminTable/AdminTable'


async function page({ searchParams }) {
    const response = await fetch('http://localhost:3000/api/admin');
    const data = await response.json();

    const currentPage = searchParams.page || "1"

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Administradores</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <AddAdminBtn />
                    <AdminTable admins={data} />
                    <Pagination currentPage={Number(currentPage)} />
                </div>

            </main>
        </>
    )
}

export default page
