export default function AdminLayout({ children }) {

    return (
        <div className="d-flex flex-column">
            <main>
                {children}
            </main>
        </div>
    )
}