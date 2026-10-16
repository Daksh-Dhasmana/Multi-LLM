import axios from 'axios';
import { useState } from 'react';

const baseUrl='http://localhost:3001/prompts';


const pushPrompt=(promptData)=>{
    axios.post(baseUrl,promptData)
        .then(response=>{
            console.log("Success: ",response.data);
            
            return "Success"
        })
        .catch(error=>{
            return "Error Occurred"
        })
}

export default pushPrompt
