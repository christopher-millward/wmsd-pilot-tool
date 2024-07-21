import React, { useContext } from 'react';
import './Submit.scss';
import {validateAll} from '../utils/validation/app_validation';
import { ResponseContext } from '../App';
import { useNavigate } from 'react-router-dom';
import {routeData} from '../services/routing';

export default function Submit() {
    const responseContext = useContext(ResponseContext);
    const navigate = useNavigate();

    function handleSubmit(){
        //check that all is good
        const all_good = validateAll(responseContext.allResponses);

        if(all_good.status){
            // send data to server 
            routeData(responseContext.allResponses);

            // wipe all states clean
            responseContext.setAllResponses({})
            localStorage.clear()

            // go to thankyou
            navigate('/thankyou')
        }else if(all_good.reason =='consent'){
            // get consent
            navigate('/consent')
        }
    }

    return (
        <button 
        className='submit-button'
        onClick={()=>handleSubmit()}
        >Submit</button>
    );
}