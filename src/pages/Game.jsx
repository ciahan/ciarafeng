import { useParams } from "react-router-dom"

import { games } from "../data/games"

export default function Game() {
    const { game } = useParams();
    const selectedGame = games.find(
        (item) => item.id == game
    );
    return (
        <>
            <h1> {selectedGame.name} </h1>
            <p> {selectedGame.description} </p>
            <div className="flex items-center gap-4">
                <div className="flex-1 flex flex-col items-center">
                    <h2> Demo: </h2>
                    <iframe
                        width="500"
                        height="300"
                        src={selectedGame.demo}
                        title="TESTING"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <h2> Synopsis: </h2>
                    <p> {selectedGame.synopsis} </p>
                </div>
            </div>
        </>
    )
}