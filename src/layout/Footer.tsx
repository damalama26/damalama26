import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Дама-Лама. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;