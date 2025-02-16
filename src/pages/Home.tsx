import Img from '../components/Img';
import styles from './../styles/pages/home.module.scss';
import styles_img from './../styles/components/img.module.scss';
import Media from '../components/Media';
const Home: React.FC = () => (
  <main className={styles.home_main}>
    <section className={styles.home_section_about_me}>
      <p>
        I'm <span> Sviatlana Kapusta </span>{' '}
        {`,a UX/UI 
        designer specialising in creating sleek,
         user-friendly mobile apps.`}
      </p>
    </section>
    <div className={styles.socialMedia}>
      <Media />
    </div>
    <section className={styles.main_projects_view}>
      <Img
        urlImg=""
        alt="Profile image of Sviatlana Kapusta"
        className={styles_img.main_img}
        width={1192}
        height={764}
      />
      <div className={styles.main_project_info}>
        <p>Project</p>
      </div>
    </section>
    <section className={styles.other_projects_view}>
      <div className={styles.first_project}>
        {' '}
        <Img
          urlImg=""
          alt="Profile image of Sviatlana Kapusta"
          className={styles_img.main_img}
          width={576}
          height={576}
        />
        <div className={styles.main_project_info}>
          <p>Project</p>
        </div>
      </div>{' '}
      <div className={styles.second_project}>
        {' '}
        <Img
          urlImg=""
          alt="Profile image of Sviatlana Kapusta"
          className={styles_img.main_img}
          width={576}
          height={576}
        />
        <div className={styles.main_project_info}>
          <p>Project</p>
        </div>
      </div>
    </section>
  </main>
);
export default Home;
