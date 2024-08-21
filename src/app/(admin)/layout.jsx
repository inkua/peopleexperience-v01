import AdminNav from "./componets/AdminNav/AdminNav"

function layout({children}) {
    return (
        <body className="min-h-full">
            <AdminNav />

            {children}
        </body>
    )
}

export default layout
