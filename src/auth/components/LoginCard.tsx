import { useForm } from '../../ui/hooks/useForm';
import '../styles/LoginCard.css';


export const LoginCard = ({ onLogin }: { onLogin: CallableFunction }) => {

  const { username, onInputChange, onResetForm, } = useForm({ username: '' });

  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    onLogin( username )
  }

  return (
    <>
      <h1 className="login-title">Login Page</h1>

      <form onSubmit={ onSubmit } className="login-form">
        <label className='login-label' htmlFor="login-input">User</label>
        <input 
          type="text" 
          name="username"
          onChange={ onInputChange }
          onReset={ onResetForm } 
          value={ username }
          className="login-input" 
          placeholder="Username" 
          required/>
        <br />
        
        <button 
          className="login-button" 
          type="submit" 
          value='Login'>
        Login
        </button>
      
      </form>
    </>
  )
}
