import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { COMPANY_NAME } from '../constants';
import icon256 from '../assets/icon_256x256.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={icon256} alt="Логотип" className={styles.logoIcon} />
            {COMPANY_NAME}
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;