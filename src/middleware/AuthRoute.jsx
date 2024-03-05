
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export const AuthRoute = ({ component: Component, ...rest }) => {
  
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('isAuthenticated') === 'true' ? (
          <Component {...props} />
        ) : (
          (() => {
            return history.push('/todo-react/login');
            
          })()
        )
      }
    />
  );
};