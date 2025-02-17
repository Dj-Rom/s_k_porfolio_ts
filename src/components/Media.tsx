import { FaBehance } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './../styles/components/media.module.scss';
const Media: React.FC<any> = ({ top }: any) => {
  return (
    <div
      className={styles.socialMedia}
      style={{
        top: top,
      }}
    >
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
          <Link to="email:kapustaaleh@gmail.com">
            <MdOutlineAlternateEmail />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Media;
