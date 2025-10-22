import {Link} from 'react-router';

export default function Nav() {
  return (
    <nav>
        <ul>
        <Link to ="/">Home</Link>
        <Link to ="/education">Education</Link>
        <Link to ="/experience">Experience</Link>
        <Link to ="/interests">Interests</Link>
        <Link to ="/projects">Projects</Link>
        </ul>
  </nav>
  );
}