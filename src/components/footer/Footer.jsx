import useAuthentication from "../../hooks/useAuthentication";

const Footer = () => {
  const { logout } = useAuthentication();
  return (
    <>
      <footer className="attribution">
        <p className="author">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/baironbernal" target="_blank">@baironbernal</a>.
          <p>
            <a href="" onClick={logout}>Log out </a>
          </p>
        </p>
      </footer>
    </>
  )
}

export default Footer
