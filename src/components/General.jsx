import { useState } from "react";

export default function General(){
    
    const [names,setNames] = useState("");
    const [email,setEmail] = useState("");
    const [company,setCompany] = useState("");
    const [position,setPosition] = useState("");
    const [school,setSchool] = useState("");
    const [study,setStudy] = useState("");

    const handleSubmit=()=>{
       return <h1>help</h1>
        
    }
    return(
        
        <>
        <div>
            <h1>GENERAL</h1>
            <h2>Name:</h2>
            <input type="text" value={names} onChange={(event)=>setNames(event.target.value)} />
            <h2>email:</h2>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} />
            

            <h1>EXPERIENCE</h1>
            <h2>Company Name:</h2>
            {<input type="text" value={company} onChange={(event)=>setCompany(event.target.value)} />}
            
            <h2>position</h2>
            <input type="text" value={position} onChange={(event)=>setPosition(event.target.value)} />
            

            <h1>EDUCATION</h1>
            <h2>School Name:</h2>
            <input type="text" value={school} onChange={(event)=>setSchool(event.target.value)} />
            
            <h2>title of study</h2>
            <input type="text" value={study} onChange={(event)=>setStudy(event.target.value)} />
            
            <button onClick={handleSubmit}>submit</button>
            <h1>{names}</h1>
            
          

        </div>
        </>
    )
    
}