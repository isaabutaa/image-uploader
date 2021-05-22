import { useState } from 'react';

export default function FileUploader() {
    const [uploadedImage, setUploadedImage] = useState({ image: "" });

    function handleChange(e) {
        const {name, value} = e.target;

        setUploadedImage({
            [name]: value
        });
    }

    return (
        <div>
            <form action="/new-image" method="post" encType="multipart/form-data">
                <input 
                    type="file" 
                    name="image" 
                    value={uploadedImage.image} 
                    onChange={handleChange}
                />
                <button type="submit">Upload Image</button>
            </form>
            {/* <img src={uploadedImage.image} alt="" /> */}

        </div>
    );
};