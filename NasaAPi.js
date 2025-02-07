import { useState, useEffect } from "react";

export default function NasaApi() {
    const [mars, setmars] = useState({ photos: [] });
    

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then((response) => response.json())
            .then((data) => {
                setmars(data);
            });
    }, []);

    return (
        <div className="container">
            <h2>Mars photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>

                <tbody>
                    {mars.photos.map((photo) => (
                        <tr key={photo.id}>
                            <td>{photo.id}</td>
                            <td>{photo.camera.full_name}</td>
                            <td>{photo.rover.name}</td>
                            <td><img src={photo.img_src} alt="Mars" style={{ width: "100px", height:"100px" }}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
