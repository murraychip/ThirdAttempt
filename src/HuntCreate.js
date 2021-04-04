import React, { useReducer, useState } from 'react';
import { useHistory } from "react-router-dom";
import { createHunt as createHuntMutation  } from './graphql/mutations';
import { API  } from 'aws-amplify';

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            description: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
} 
async function _create(objData) { 
    await API.graphql({ query: createHuntMutation, variables: { input: objData  } });
}
function HuntCreate( ) {
    const [submitting, setSubmitting] = useState(false); 
    const [formData, setFormData] = useReducer(formReducer, { 
    });
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true); 
        _create(formData);
        //sethunts([...hunts, formData]); 
        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
            history.push("./#/hunts");
        }, 3000);
    }
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
     

    return (
        <div className="wrapper">
            <h1>How About Them Apples</h1>
            {submitting &&
                <div>Submtting Form...</div>
            }
        <form onSubmit={handleSubmit}>  
                <fieldset>
                <div>
                <label>
                    <span>Name</span>
                        <input name="name" onChange={handleChange} value={formData.name || ''}
                        placeholder="Hunt name" />
                </label> 
                    </div>
                    <div>
            <label>
                    <span>Description</span>
                        <textarea name="description" onChange={handleChange} value={formData.description || ''}
                        placeholder="Hunt description" /> 
                        </label> 
                        </div>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>
    )
} 
export default HuntCreate
