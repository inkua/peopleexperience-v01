import Pagination from "@/components/Pagination"

import AddBtn from "../components/AddBtn/AddBtn"
import Table from "../components/Table/Table"

function Participants() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Participantes</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <AddBtn />
                    <Table />
                    <Pagination />
                </div>

            </main>
        </>
    )
}

export default Participants
