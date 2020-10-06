import React, { useState } from 'react';

export default function ResumeUpload() {
  const [resumeFile, setResumeFile] = useState('Choose file');

  return (
    <div className="UploadResumeFile">

      <input type="file" name="resumeFile" onChange={(e) => setResumeFile(e.target.value)} />
      <button type="submit">Submit</button>

      <h3>{resumeFile.name}</h3>

    </div>
  );
}
