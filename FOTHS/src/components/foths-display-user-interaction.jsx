import React from "react";
// import { handleChange } from './foths-user-interaction'

const DisplayUserInteraction = (data) => {



      
        //   const [formData, setFormData] = useState({
        //       name: "",
        //       email: "",
        //       feedback: ""
        //   });
      
        //   const [characterCount, setCharacterCount] = useState(0);
        //   const maxLength = 200;
      
        //   const handleChange = (e) => {
        //       const { name, value } = e.target;
        //       console.log(`Updating ${name}:`, value);
        //       setFormData((prevData) => ({...prevData, [name]: value,}));
        //       setCharacterCount(event.target.value.length);
        //      };

    return (

    //     <pre id="preview">
    //     <h2>Preview</h2>
    //       <p>Name: {formData.name}</p>
    //       <p>Email: {formData.email}</p>
    //       <p>Feedback: {formData.feedback}</p>
    //   </pre>

    <div>
        {data.goalInput}  
    </div>
    )
}

export default DisplayUserInteraction;