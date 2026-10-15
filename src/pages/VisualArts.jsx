import { Link } from 'react-router-dom'

import { visualArts } from "../data/visualArts"

export default function VisualArts() {
    return (
        <>
            <h1>
                Visual Arts
            </h1>
            <div className="projectGrid">
                {visualArts.map((category) => (
                    <Link
                        key={category.id}
                        to={category.slug}
                        className="linkButton"
                    >
                        <img 
                            src={`/ciarafeng/visualArts/${category.id}/${category.artworks[0].image}`}
                            style={{ width: "auto", height: "500px" }}
                        />
                        <h2> {category.type} </h2>
                    </Link>
                ))}
            </div>
        </>
    )
}