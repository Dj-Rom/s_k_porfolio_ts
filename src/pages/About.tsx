import Img from '../components/Img';
import styles from './../styles/pages/about.module.scss';
import styles_img from './../styles/components/img.module.scss';
import Media from '../components/Media';
const About: React.FC = () => (
  <section className={styles.about_section}>
    <h1>Who I am</h1>
    <Img
      urlImg=""
      alt="Profile image of Sviatlana Kapusta"
      className={styles_img.about_img}
      width={422}
      height={440}
    />
    <div className={styles.about_text}>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae cursus tristique nisi
        nulla imperdiet. At pretium condimentum sit faucibus risus. Amet
        scelerisque ultricies lacus quis at porttitor. Pulvinar habitant
        bibendum rhoncus rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae cursus tristique nisi
        nulla imperdiet. At pretium condimentum sit faucibus risus. Amet
        scelerisque ultricies lacus quis at porttitor. Pulvinar habitant
        bibendum rhoncus rutrum.
      </p>
    </div>
    <div className={styles.socialMedia}>
      <Media />
    </div>
  </section>
);
export default About;
