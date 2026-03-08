import { useState } from 'react';
import styles from './Home.module.css';
import contactStyles from './Contact.module.css';
import { COMPANY_NAME, COMPANY_TAGLINE } from '../constants';
import cabinet1 from '../assets/cabinet/1.jpg';
import cabinet2 from '../assets/cabinet/2.jpg';
import cabinet3 from '../assets/cabinet/3.jpg';
import cabinet4 from '../assets/cabinet/4.jpg';

const Home = () => {
  const placeholderUrl = 'https://avatars.mds.yandex.net/get-ydo/5490072/2a0000019536a8fe4fac9630c70991fd115e/diploma';
  const cabinetImages = [
    { id: 1, url: cabinet1, thumb: cabinet1 },
    { id: 2, url: cabinet2, thumb: cabinet2 },
    { id: 3, url: cabinet3, thumb: cabinet3 },
    { id: 4, url: cabinet4, thumb: cabinet4 },
  ];

  const [selectedImage, setSelectedImage] = useState(cabinetImages[0]);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Студия ресниц и бровей {COMPANY_NAME}</h1>
        <p className={styles.heroSubtitle}>
          {COMPANY_TAGLINE}. Специализируемся на создании идеальных бровей и ресниц. Подарите себе роскошный взгляд!
        </p>
        <a href="https://t.me/dasham_beauty"
          target="_blank"
          rel="noopener noreferrer">
            <button className={styles.ctaButton}>Записаться на приём</button>
        </a>
      </section>

      <section className={styles.features}>
        <h2>Услуги</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Коррекция бровей</h3>
            <p>Идеальная форма бровей по индивидуальному дизайну с учётом анатомии лица.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Ламинирование бровей</h3>
            <p>Долговременная укладка и насыщение бровей питательными веществами.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Наращивание ресниц</h3>
            <p>Объёмные, естественные или голливудские ресницы с безопасными материалами.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Окрашивание ресниц</h3>
            <p>Стойкое окрашивание ресниц и бровей гипоаллергенной краской.</p>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Галерея</h2>
        <div className={styles.galleryHorizontal}>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 1" />
          </div>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 2" />
          </div>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 3" />
          </div>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 4" />
          </div>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 5" />
          </div>
          <div className={styles.galleryItem}>
            <img src={placeholderUrl} alt="Услуга 6" />
          </div>
        </div>
      </section>

      <section className={styles.cabinet}>
        <h2>Кабинет</h2>
        <div className={styles.cabinetContent}>
          <div className={styles.cabinetPicker}>
            {cabinetImages.map((img) => (
              <div
                key={img.id}
                className={`${styles.cabinetPickerItem} ${selectedImage.id === img.id ? styles.active : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.thumb} alt={`Кабинет ${img.id}`} />
              </div>
            ))}
          </div>
          <div className={styles.cabinetLargeImage}>
            <img src={selectedImage.url} alt="Кабинет" />
          </div>
          <div className={styles.cabinetDescription}>
            <h3>Наш кабинет — это пространство роскоши и комфорта</h3>
            <ul>
              <li>Современное оборудование для процедур бровей и ресниц</li>
              <li>Экологичные материалы и гипоаллергенная косметика</li>
              <li>Индивидуальный подход к каждому клиенту</li>
              <li>Уютная атмосфера с расслабляющей музыкой</li>
              <li>Стерильность и безопасность на первом месте</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>О нашем салоне</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Добро пожаловать в <strong>Дама-Лама</strong> — бутик‑студию, специализирующуюся на бровях и ресницах.
              Основанный в 2010 году, мы посвятили себя созданию идеальных взглядов в расслабляющей и роскошной обстановке.
            </p>
            <p>
              Наша команда сертифицированных бровистов и лашмейкеров следит за последними трендами и техниками, чтобы гарантировать вам высочайшее качество.
              Мы верим, что каждая деталь — от формы бровей до изгиба ресниц — помогает вам чувствовать себя уверенно и неотразимо.
            </p>
            <p>
              Мы используем только премиальные, cruelty‑free материалы, которые бережно относятся к вашей коже и обеспечивают выдающиеся результаты.
            </p>
          </div>
          <div className={styles.aboutImage}></div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <h2>Что говорят наши клиенты</h2>
        <blockquote>
          "Идеальные брови и ресницы! Никогда не думала, что мой взгляд может быть таким выразительным. Спасибо команде Дама-Лама!"
        </blockquote>
        <cite>– Анна К.</cite>
      </section>

      <section id="contacts" className={contactStyles.contact}>
        <h1>Свяжитесь с нами</h1>
        <p className={contactStyles.subtitle}>
          Мы будем рады услышать вас. Свяжитесь с нами, чтобы записаться на приём или задать вопросы.
        </p>

        <div className={contactStyles.content}>
          <div className={contactStyles.info}>
            <h2>Контакты</h2>
            <div className={contactStyles.contactItem}>
              <a
                href="https://t.me/dasham_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className={contactStyles.iconLink}
                aria-label="Telegram"
              >
                <svg className={contactStyles.icon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.05 5.56-5.022c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.652-.64.135-.954l11.57-4.46c.534-.196 1.006.128.832.941z" />
                </svg>
                <span>Telegram</span>
              </a>
            </div>
            <div className={contactStyles.contactItem}>
              <h3>Адрес</h3>
              <p>ул. Красоты, д. 123, офис 100<br />Город, Область 12345</p>
            </div>
            <div className={contactStyles.contactItem}>
              <h3>Телефон</h3>
              <p>+7 (123) 456-78-90</p>
            </div>
            <div className={contactStyles.contactItem}>
              <h3>Часы работы</h3>
              <p>
                Понедельник–Пятница: 9:00–19:00<br />
                Суббота: 10:00–17:00<br />
                Воскресенье: 12:00–16:00
              </p>
            </div>
          </div>

          <div className={contactStyles.mapPlaceholder}>
            <div className={contactStyles.map}>
              <iframe
                title="Yandex Map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b1b4a8f4b9eae7566a025310568102591a0ab39d4ffe6ab2bcb22ee39644982&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;