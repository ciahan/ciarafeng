import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>
                View my Projects Below:
            </h1>
            <div className="projectGrid">
                <Link
                    to="/web-dev"
                    className="linkButton"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}webDev/CrochetMath Studio.png`}
                        style={{ width: "auto", height: "300px" }}
                    />
                    <h2> Web-Dev </h2>
                </Link>
                <Link
                    to="/games"
                    className="linkButton"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}games/BeatDropThumbnail.png`}
                        style={{ width: "auto", height: "300px" }}
                    />
                    <h2> Games </h2>
                </Link>
                <Link
                    to="/visual-arts"
                    className="linkButton"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}visualArts/drawings/RainyDay.PNG`}
                        style={{ width: "auto", height: "300px" }}
                    />
                    <h2> Visual Arts </h2>
                </Link>
                <Link
                    to="/crochet"
                    className="linkButton"
                >
                    <img 
                        src={`${import.meta.env.BASE_URL}crochet/blankets/PersianTiles.jpg`}
                        style={{ width: "auto", height: "300px" }}
                    />
                    <h2> Crochet </h2>
                </Link>
            </div>
        </>
    )
}