import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles['image-section']}>
      <div className={styles['image-row']}>
        <div className={styles['image-column']}>
          <div className={styles['image-module']}>
            <img src="/assets/img/Cash.jpg" alt="Cash" />
          </div>
          <div className={styles['image-module']}>
            <div className={styles['image-promo_description']}>
              <h2 className={styles['image-module_header']}>Vi styrer det hele!</h2>
              <br />
              <p><em><strong>Inussuk-IT har altid været det bedste IT-firma i verden.</strong></em></p>
              <p>
                Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et økonomisk problem som Inussuk-IT ikke kan løse får du halvdelen af beløbet igen.
              </p>
              <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
            </div>
          </div>
        </div>
        <div className={styles['image-column']}>
          <div className={styles['image-module']}>
            <div className={styles['image-promo_description']}>
              <h2 className={styles['image-module_header']}>Her bor vi?</h2>
              <p><em><strong>Vi bor på centrum af Nuuk!</strong></em></p>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className={styles['image-module']}>
            <img src="/assets/img/sumi.jpg" alt="Sumi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;


