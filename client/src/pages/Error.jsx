import { useNavigate, useRouteError } from "react-router-dom";
import './Error.scss';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  return (
    <div id="error-page">
        <div id='error-text'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
                {error.statusText=='Not Found'?<i> (86 this page)</i>:null}
            </p>
                

            <button onClick={()=>navigate('/')}>Back to Main</button>
        </div>
        
        <p id='contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>

    </div>
  );
}