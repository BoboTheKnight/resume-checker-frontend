import React, {useState} from "react";

function StartUsePage(){
    const [file, setFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    const handleFileChange = (event) => {
        // Validate and set file
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //send data to backend
    };

    return (
        <form>
            <input type="file" onChange={handleFileChange} />
            <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default StartUsePage;