import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorView = () => {
  return (
    <>
      <Hero text='Oops! Something went wrong :('/>
      <div className='errorPage container'>
        <div className='row'>
          <div className='col-md-4'>
          <FontAwesomeIcon className='errorQuestion' icon={faQuestionCircle} size="6x" />
          </div>

          <div className='col-md-8'>
            <div className='errorWapper'>
              <div className='errorLine1'>404</div>
              <div className='errorLine2'>error</div>
              <div className='errorLine3'>Page not found</div>
            <p className='errorLine4'>This is not the page you were looking for, is it?  You found the 404 page instead.  Aren't you Lucky.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorView;
