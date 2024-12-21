import PropTypes from "prop-types";
import "./Root1.css";

const Root1 = ({ className = "" }) => {
  return (
    <div className={`root ${className}`}>
      <section className="group-section">
        <div className="frame-child20" />
        <div className="email" />
        <div className="frame-wrapper7">
          <div className="frame-parent13">
            <div className="verification-wrapper">
              <div className="verification">Verification</div>
            </div>
            <div className="thank-you">Thank you</div>
          </div>
        </div>
        <div className="vector-wrapper">
          <img
            className="vector-icon2"
            loading="lazy"
            alt=""
            src="/vector31.svg"
          />
        </div>
        <div className="button-login">
          <div className="login1">Login</div>
        </div>
      </section>
    </div>
  );
};

Root1.propTypes = {
  className: PropTypes.string,
};

export default Root1;
