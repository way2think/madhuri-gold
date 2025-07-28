'use client';

import classes from './AboutUsContent.module.css';

const AboutUsContent = () => {
  return (
    <section className="bg-gray-50 py-8 px-5 md:px-12 lg:px-24 text-gray-800">
      <h2 className={`${classes.mainHeading}`}>40 Years of </h2>
      <span className={`${classes.legacyTrust} `}>Legacy and Trust</span>
      <p
        className={`${classes.paragraph} mb-1 text-sm md:text-base leading-relaxed`}
      >
        Our story began in 1984 when T. Sudhakar founded &quot;Madhuri Silver
        Palace&quot;. Taken the legacy from T. Ramanaiah (Prop: Ramana
        Jewelers). After the death of Sri. Sudhakar his only son made necessary
        expansion of its retail outlet, Madhuri Silver Palace converted into a
        &quot;Madhuri Jewellery House&quot; and then &quot;New Madhuri Gold
        Palace A/c&quot; for the growing customer base. Now it turned as
        &quot;Madhuri Gold&quot; on May 2nd, 2019. A bigger showroom in
        Srikalahasti town to give a great shopping experience to customers. We
        are proud to be a part of every family gold investment with Madhuri Gold
        Saving Schemes in Srikalahasti.
      </p>
      <p
        className={`${classes.paragraph} mb-1 text-sm md:text-base leading-relaxed`}
      >
        Our unique collections make us different from other jewellery stores,
        our lightweight jewellery concept is unbeatable. We have been at the
        forefront in creating traditional as well as contemporary designs.
      </p>
      <p
        className={`${classes.paragraph} mb-1 text-sm md:text-base leading-relaxed`}
      >
        Gold quality is the strength to us, every piece comes with Hallmark and
        Huid. Our Diamond Jewellery comes with IGI certification, buy-back
        guaranteed.
      </p>
      <p className="text-sm md:text-base">
        <strong className={`${classes.mission}`}>Our Mission:</strong>{' '}
        <span className="text-yellow-600 italic">
          <span className={`${classes.madhuri}`}>&quot;Madhuri Gold&quot;</span>{' '}
          Want to become a{' '}
          <span className={`${classes.first}`}>first choice</span>
        </span>{' '}
        to every household for Gold investments, Good Designs.
      </p>
      <p className="text-sm md:text-base">
        <strong className={`${classes.mission}`}>Our Vision:</strong> Reach More
        Gold High.
      </p>
    </section>
  );
};

export default AboutUsContent;
