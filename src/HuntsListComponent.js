import React, { useState, useEffect  } from 'react'; 
import HuntsListSingleItem from './HuntsListSingleItem'
import { listHunts } from './graphql/queries'; 
import { API  } from 'aws-amplify';
import "./HuntList.css";
import HuntCreate from './HuntCreate';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
import { Hunt } from './models';

function HuntsListComponent() { 
        const [hunts, setHunts] = useState([]); 

        useEffect(() => {
            fetchHunts();
        }, []); 
     
        async function fetchHunts() {
            const apiData = await API.graphql({ query: listHunts }); 
            setHunts(apiData.data.listHunts.items);
        }
     
        async function deleteHunt({ id }) {
            const newHuntsArray = hunts.filter(Hunt => Hunt.id !== id);
            setHunts(newHuntsArray);

            const modelToDelete = await DataStore.query(Hunt, id);
            DataStore.delete(modelToDelete); 
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">

                <div id="HuntListContainer">
                    <ul>
                        {
                        hunts.map(hunt => (
                            <HuntsListSingleItem key={hunt.id || hunt.name} hunt={hunt} deleteFunction={deleteHunt} /> 
                    ))
                        }
                                </ul>
                                <Link to="/create" className="btn btn-primary">Create Hunt</Link> 
                            </div>
                        </Route>
                        <Route path="/create">
                            <HuntCreate />
                            <Link to="/" className="btn btn-primary">Cancel</Link> 
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
export default HuntsListComponent
