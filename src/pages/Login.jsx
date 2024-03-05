import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { login } = useAuth();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthenticated = await login(formData);

    if (isAuthenticated) {
      return history.push('/todo-react/home');
    }
  };
  
  return (
    <>
      <div className="header"></div>
        <main>
          <div className="content">
              <h2 className="content_title">LOGIN</h2>
          </div>
          <form className="login" onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                className="addNew"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
        </main>
    </>
  )
}

export default Login
