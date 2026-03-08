import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Свяжитесь с нами</h1>
      <p className={styles.subtitle}>
        Мы будем рады услышать вас. Свяжитесь с нами, чтобы записаться на приём или задать вопросы.
      </p>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Связь с нами</h2>
          <div className={styles.contactItem}>
            <h3>Telegram</h3>
            <a
              href="https://t.me/beautysalon_example"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="Telegram"
            >
              <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.05 5.56-5.022c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.652-.64.135-.954l11.57-4.46c.534-.196 1.006.128.832.941z" />
              </svg>
              <span>@beautysalon_example</span>
            </a>
          </div>
          <div className={styles.contactItem}>
            <h3>Адрес</h3>
            <p>ул. Красоты, д. 123, офис 100<br />Город, Область 12345</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Телефон</h3>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Электронная почта</h3>
            <p>info@salonkrasoty.example.com</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Часы работы</h3>
            <p>
              Понедельник–Пятница: 9:00–19:00<br />
              Суббота: 10:00–17:00<br />
              Воскресенье: 12:00–16:00
            </p>
          </div>
        </div>

        <div className={styles.mapPlaceholder}>
          <h2>Как нас найти</h2>
          <div className={styles.map}>
            <iframe
              title="Yandex Map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;