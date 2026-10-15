import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/"> Home </Link>
            </nav>
            <nav>
                <Link to="/web-dev"> Web-Dev </Link>
            </nav>
            <nav>
                <Link to="/games"> Games </Link>
            </nav>
            <nav>
                <Link to="/visual-arts"> Visual Arts </Link>
            </nav>
            <nav>
                <Link to="/crochet"> Crochet </Link>
            </nav>
            <nav>
                <Link to="/about"> About Me </Link>
            </nav>
        </header>
    )
}