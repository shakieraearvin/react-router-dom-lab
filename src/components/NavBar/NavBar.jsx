import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/mailboxes'>Mailboxes</Link>
          </li>
          {/* A new link to our pokemon form page */}
          <li>
            <Link to='/new-mailbox'>New Mailboxes</Link>
          </li>
        </ul>
      </nav>
    );

};


export default NavBar;