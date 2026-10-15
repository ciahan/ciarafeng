import { useParams } from "react-router-dom"

import { crochet } from "../data/crochet"

export default function CrochetCategory () {
    const { category } = useParams();
    const selectedCategory = crochet.find(
        (item) => item.slug == category
    )
    return (
        <>
            <h1> {selectedCategory.type} </h1>
            <div className="flex flex-col gap-8">
                {selectedCategory.works.map((work) => (
                    <div
                        key={work.id}
                        className="work items-center"
                    >
                        <div className="flex-1 flex justify-center">
                            <img 
                                src={`/ciarafeng/crochet/${selectedCategory.id}/${work.image}`}
                                style={{ width: "auto", height: "500px" }}
                            />
                        </div>
                        <div className="flex-1 blurb">
                            <div className="p-3">
                                <span className="title"> 
                                    {work.title}
                                </span>
                                <span className="year">
                                    , {work.year}
                                </span>
                            </div>
                            <div className="medium">
                                {work.medium} {work.dimensions}
                            </div>
                            <div className="description p-8">
                                {work.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}