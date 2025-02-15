import styles from './../styles/pages/home.module.scss';
const Home: React.FC = () => (
  <main className={styles.home_main}>
    <section className={styles.home_section_about_me}>
      <p>
       I'm <span> Sviatlana Kapusta </span> {`,a UX/UI 
        designer specialising in creating sleek,
         user-friendly mobile apps.`}
      </p>
    </section>
  </main>
);
export default Home;
