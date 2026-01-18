export default function Card({ title, right, children, footer }) {
    return (
        <section className="card">
            <div className="cardHeader">
                <h2>{title}</h2>
                {right ? <div>{right}</div> : null}
            </div>
            <div className="cardBody">
                {children}
            </div>

            <div className="cardFooter">
                {footer ? <div>{footer}</div> : null}
            </div>
        </section>
    )
}