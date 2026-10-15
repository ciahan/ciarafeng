import { webDev } from "../data/webDev"
export default function WebDev() {
    return (
        <>
            <h1>
                Web-Dev Projects
            </h1>
            <div className="projectGrid">
                {webDev.map((project) => (
                    <div>
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkButton flex flex-col items-center"
                        >
                            <img 
                                src={`/ciarafeng/webDev/${project.image}`}
                                style={{ width: "500px", height: "auto" }}
                            />
                            <h2> {project.name} </h2>
                        </a>
                        <p> {project.description} </p>
                    </div>
                ))}
            </div>
        </>
    )
}