import { FaBehance } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Media: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="@sd">
          <FaBehance />
        </Link>
      </li>
      <li>
        <Link to="@sd">
          <FaLinkedinIn />
        </Link>
      </li>{' '}
      <li>
        <Link to="@sd">
          <FaFacebookF />
        </Link>
      </li>{' '}
      <li>
        <Link to="email:kapustaaleh@gmail.com">
          <MdOutlineAlternateEmail />
        </Link>
      </li>
    </ul>
  );
};
export default Media;
