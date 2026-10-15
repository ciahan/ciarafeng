import { Link } from 'react-router-dom'

import { crochet } from "../data/crochet"

export default function Crochet() {
    return (
        <>
            <h1>
                Crochet
            </h1>
            <div className="projectGrid">
                {crochet.map((category) => (
                    <Link
                        key={category.id}
                        to={category.slug}
                        className="linkButton"
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}crochet/${category.id}/${category.works[0].image}`}
                            style={{ width: "auto", height: "500px" }}
                        />
                        <h2> {category.type} </h2>
                    </Link>
                ))}
            </div>
        </>
    )
}