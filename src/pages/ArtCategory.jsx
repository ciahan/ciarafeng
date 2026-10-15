import { useParams } from "react-router-dom"

import { visualArts } from "../data/visualArts"

export default function ArtCategory () {
    const { category } = useParams();
    const selectedCategory = visualArts.find(
        (item) => item.slug == category
    )

    console.log("BASE_URL:", import.meta.env.BASE_URL);
    console.log("Category:", selectedCategory.id);
    return (
        <>
            <h1> {selectedCategory.type} </h1>
            <div className="flex flex-col gap-8">
                {selectedCategory.artworks.map((artwork) => (
                    <div
                        key={artwork.id}
                        className="flex items-center"
                    >
                        <div className="flex-1 flex justify-center">
                            <img 
                                src={`${import.meta.env.BASE_URL}visualArts/${selectedCategory.id}/${artwork.image}`}
                                style={{ width: "auto", height: "500px" }}
                            />
                        </div>
                        <div className="flex-1 blurb">
                            <div className="p-3">
                                <span className="title"> 
                                    {artwork.title}
                                </span>
                                <span className="year">
                                    , {artwork.year}
                                </span>
                            </div>
                            <div className="medium">
                                {artwork.medium} {artwork.dimensions}
                            </div>
                            <div className="description p-8">
                                {artwork.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}