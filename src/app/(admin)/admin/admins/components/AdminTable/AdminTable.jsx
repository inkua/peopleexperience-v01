import AdminItemTable from '../AdminItemTable/AdminItemTable'

const headers = [
    { id: 1, title: "Name" },
    { id: 2, title: "Id" },
    { id: 3, title: "email" },
    { id: 4, title: "team" },
    { id: 5, title: "options" },
]

function AdminTable({admins}) {
    return (
        <section className="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-scroll">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-scroll">
                        {/* Table */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    {
                                        headers.map((item) =>
                                            <th scope="col" key={item.id}
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {item.title}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                {/* Item List */}
                                {
                                    admins?.map((item, index) => <AdminItemTable key={item.id} admin={item}></AdminItemTable>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminTable
