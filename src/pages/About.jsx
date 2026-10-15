import Header from "../components/Header"

export default function About() {
    return (
        <>
            <h1>
                About Me
            </h1>
            <div
                className="flex flex-col gap-12"
            >
                <div
                    className="flex gap-1"
                >
                    <div
                        className="flex-1 flex flex-col items-center"
                    >
                        <img 
                            src="headshot.jpeg"
                            style={{ width: "auto", height: "600px" }}
                        />
                    </div>
                    <div
                        className="flex-1 flex flex-col gap-4"
                    >
                        <p>
                            Hi, I'm Ciara Feng! I'm currently a Senior in the STEM Magnet Program at
                            Montgomery Blair High School (MBHS).
                        </p>
                        <p>
                            In school, I am a co-president of the MBHS Generations in Tune chapter,
                            where students create hand-made letters during weekly card-making sessions
                            to be distributed to senior centers. I am also an art-editor of SilverQuest,
                            the Magnet Magazine.
                        </p>
                        <p>
                            Ouside of school, I have developed a variety of web-apps, such as CrochetMath
                            Studio, which supports pattern development in crochet using technology. I also
                            co-founded KeyToFive, which is a non-profit organization that aims to make
                            study resources accessible through the sharing of peer-notes.
                        </p>
                        <p>
                            My primary interests include Computer Science and Art, and I hope to study
                            a combination of the two throughout my higher education.
                        </p>
                        <p>
                            In my spare time, I like to crochet, sing, learn new crafts, and hang out with
                            my friends.
                        </p>
                        <p>
                            A fun fact about me is that I legally changed my name in the fourth grade, and
                            took the liberty of giving myself an additional middle name, "CATina", to
                            profess the unconditional love I hold for my cats, Pumpkin and Melon. See a
                            picture of them below!
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center"
                >
                    <img 
                        src="pumpkinAndMelon.jpeg"
                        style={{ width: "auto", height: "200px" }}
                    />
                </div>
            </div>
        </>
    )
}