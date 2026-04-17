/* //themedevstool/src/components/layoutPreview.jsx */

function LayoutPreview() {
    return (
        <div className="layout-preview">

            <nav className="navbar">
                Theme Dev Tool
            </nav>

            <header className="hero">
                <h1>Welcome</h1>
                <p>THis is a theme page preview</p>
            </header>

            <section className="section">

                <h2>Cards</h2>

                <div className="card-grid">
                    <div className="card">
                        Example Card
                    </div>

                    <div className="card">
                        Example Card
                    </div>

                    <div className="card">
                        Example Card
                    </div>

                </div>

            </section>

            <footer className="footer">
            Footer Content
            </footer>
        </div>
    )
}

export default LayoutPreview