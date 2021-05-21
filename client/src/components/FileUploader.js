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
        <form encType="multipart/form-data">
            <input 
                type="file" 
                name="image" 
                value={uploadedImage.image} 
                onChange={handleChange}
            />
        </form>
    )
};