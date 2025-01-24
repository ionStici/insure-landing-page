import iconSpappyProcess from "./../imgs/icon-snappy-process.svg";
import iconPrices from "./../imgs/icon-affordable-prices.svg";
import iconPeopleFirst from "./../imgs/icon-people-first.svg";

export const Features = function () {
  return (
    <section className="ft">
      <h2 className="ft__h2">We're different</h2>

      <div className="ft__wrapper">
        <div className="ft__box">
          <img className="ft__icon" src={iconSpappyProcess} alt="" />
          <h3 className="ft__h3">Snappy Process</h3>
          <p className="ft__p">
            Our application process can be completed in minutes, not hours. Don't get stuck filling
            in tedious forms.
          </p>
        </div>

        <div className="ft__box">
          <img className="ft__icon" src={iconPrices} alt="" />
          <h3 className="ft__h3">Affordable Prices</h3>
          <p className="ft__p">
            We don't want you worrying about high monthly costs. Our prices may be low, but we still
            offer the best coverage possible.
          </p>
        </div>

        <div className="ft__box">
          <img className="ft__icon" src={iconPeopleFirst} alt="" />
          <h3 className="ft__h3">People First</h3>
          <p className="ft__p">
            Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're
            covered when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};
