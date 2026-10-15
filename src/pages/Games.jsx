import { Link } from "react-router-dom"

import { games } from "../data/games";

export default function Games() {
    return (
        <>
            <h1>
                Games
            </h1>
            <div className="projectGrid">
                {games.map((game) => (
                    <Link
                        key={game.id}
                        to={game.id}
                        className="linkButton flex flex-col items-center"
                    >
                        <img 
                            src={`/games/${game.img}`}
                            style={{ height: "400px", width: "auto"}}
                        />
                        <h2> {game.name} </h2>
                    </Link>
                ))}
            </div>
        </>
    )
}