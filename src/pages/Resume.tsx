import Img from '../components/Img';
import styles from './../styles/pages/resume.module.scss';
import styles_img from './../styles/components/img.module.scss';
import ResumeText from '../components/Resume_text';
import { dataResume } from '../data/dataResume';
import Media from '../components/Media';
const Resume: React.FC = () => {
  return (
    <section className={styles.resume_section}>
      <div className={styles.resume_top}>
        <div className={styles.resume_top_left}>
          <Img
            width={308}
            height={366}
            urlImg=""
            className={styles_img.resume_img}
            alt="Sviatlana Kapusta"
          />
        </div>
        <div className={styles.resume_top_right}>
          <h1>Sviatlana Kapusta</h1>
          <h3>UX/UI designer</h3>
          <button
            onClick={() => {
              const blod = new Blob([document.documentElement.outerHTML], {
                type: 'text/html',
              });
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blod);
              a.download = 'CV_Sviatlana_Kapusta_UI/UX_Designer.html';
              a.click();
            }}
          >
            Dowland Resume as PDF
          </button>
          <Media />
        </div>
      </div>
      <ResumeText props={dataResume.education} title="Education" />
      <br />
      <ResumeText props={dataResume.experience} title="Experience" />
      <br />
      <ResumeText props={dataResume.skills} title="Skills" />
    </section>
  );
};

export default Resume;
