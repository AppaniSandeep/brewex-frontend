import React, {useState} from "react"
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const CmsPage = () => {

    const [content,setContent] = useState("");
    const [message,setMessage] = useState("");

    
    const saveHeading = async () => {
        const options = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({content})
        }
        const response = await fetch("https://backend-brewex1.onrender.com/heading",options)

        const data = await response.json();
        if (response.ok){
            setMessage("Heading Saved Successfully")
        }else{
            setMessage(`Error: ${data.error}`)
        }
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4" style={{width:"300px"}}>
                <h2 className="mb-4">Update main heading</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter the heading" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <Link to="/">
                    <button className="btn btn-primary form-control" onClick = {saveHeading}>Save Heading</button>
                </Link>
                {message && <div className="mt-3">{message}</div>}
            </div>
        </div>
    )
}
export default CmsPage