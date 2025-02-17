import styles from './../styles/components/resumeText.module.scss';
interface ArrayValue {
  props: [
    {
      position: string;
      company: string;
      date: string;
      text: string;
    }
  ];
  title: string;
}

const ResumeText: React.FC<any> = ({ props, title }: ArrayValue) => {
  console.log(props);

  return (
    <div className={styles.resume_text_block}>
      <div className={styles.resume_text_block_left}>
        <h3>{title}</h3>
      </div>
      <div className={styles.resume_text_block_right}>
        {props.map((e) => {
          return (
            <>
              <h2>
                {e.position} <span>{e.company}</span>
              </h2>
              <h6>{e.date}</h6>
              <p>{e.text}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ResumeText;
