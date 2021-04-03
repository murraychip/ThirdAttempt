import React, { useState, useEffect  } from 'react'; 
import HuntsListSingleItem from './HuntsListSingleItem'
import { listHunts } from './graphql/queries';
import { createHunt as createHuntMutation, deleteHunt as deleteHuntMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';

function HuntsListComponent() {
        const initialFormState = { name: '', description: '' }
        const [hunts, setHunts] = useState([]);
        const [formData, setFormData] = useState(initialFormState);

        useEffect(() => {
            fetchHunts();
        }, []); 

        async function onChange(e) {
            if (!e.target.files[0]) return
            const file = e.target.files[0];
            setFormData({ ...formData, image: file.name });
            await Storage.put(file.name, file);
            fetchHunts();
        }
     
        async function fetchHunts() {
            const apiData = await API.graphql({ query: listHunts });
            const huntsFromAPI = apiData.data.listHunts.items;
            await Promise.all(huntsFromAPI.map(async hunt => {
                if (hunt.image) {
                    const image = await Storage.get(hunt.image);
                    hunt.image = image;
                }
                return hunt;
            }))
            setHunts(apiData.data.listHunts.items);
        }

        async function createHunt() {
            if (!formData.name || !formData.description) return;
            await API.graphql({ query: createHuntMutation, variables: { input: formData } });
            if (formData.image) {
                const image = await Storage.get(formData.image);
                formData.image = image;
            }  
            setHunts([...hunts, formData]);
            setFormData(initialFormState);
        }

        async function deleteHunt({ id }) {
            const newHuntsArray = hunts.filter(Hunt => Hunt.id !== id);
            setHunts(newHuntsArray);
            await API.graphql({ query: deleteHuntMutation, variables: { input: { id } } });
        }

        return (
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                    placeholder="Hunt name"
                value={formData.name}
              />
              <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                    placeholder="Hunt description"
                value={formData.description}
                />
                <input
                    type="file"
                    onChange={onChange}
                />
              <button onClick={createHunt}>Create Hunt</button>
                <table>
                    <tbody>
                        {
                        hunts.map(hunt => (
                            <HuntsListSingleItem key={hunt.id || hunt.name} hunt={hunt} deleteFunction={deleteHunt} /> 
                    ))
                        } 
                    </tbody>
                </table>
            </div>
        )
    }
export default HuntsListComponent
