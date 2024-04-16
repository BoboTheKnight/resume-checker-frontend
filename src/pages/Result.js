import React from 'react';
import useFetch from './useFetch';

function ResultScore() {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('desc', description);
  
      // Now send 'formData' to your server
      sendFormDataToServer(formData);
    };
  
    const sendFormDataToServer = async (formData) => {
      try {
        const response = await fetch('https://api.example.com/upload', {
          method: 'POST',
          body: formData, // Note: FormData is sent directly, without JSON.stringify
          // Don't set Content-Type header for FormData
        });
        const responseData = await response.json();
        console.log(responseData); // Process your server response
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <textarea value={description} onChange={handleDescriptionChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default ResultScore;