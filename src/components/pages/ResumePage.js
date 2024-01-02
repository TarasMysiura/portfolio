import "./ResumePage.css";

const ResumePage = () => {
  return (
    <main className="section section-resume">
      <div className="container container-resume" >
        <h1 className="title-1 ">Resume</h1>
        <iframe className="frame-resume" src="https://tarasmysiura.github.io/my_resume/"  title="W3Schools Free Online Web Tutorials"></iframe>
        {/* <div className="container-fluid"> */}
        {/* <div className="main-content-wrapper"> */}
        {/* <div className="container-fluid">
          <div className="top-bar text-center position-relative">
            <div className="top-bar-inner">
              <a
                className="btn btn-primary top-bar-cta"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/risen-free-bootstrap-5-dark-mode-resume-cv-template-for-developers/"
              >
                Download CV
              </a>

              <ul className="social-list list-inline mx-auto">
                <li className="list-inline-item me-0 me-md-1 me-lg-2">
                  <a href="#">
                    <svg
                      className="svg-inline--fa fa-twitter fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item me-0 me-md-1 me-lg-2">
                  <a href="#">
                    <svg
                      className="svg-inline--fa fa-github fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="list-inline-item me-0 me-md-1 me-lg-2">
                  <a href="#">
                    <svg
                      className="svg-inline--fa fa-linkedin-in fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="list-inline-item me-0 me-md-1 me-lg-2">
                  <a href="#">
                    <svg
                      className="svg-inline--fa fa-stack-overflow fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="stack-overflow"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-wrapper mx-auto rounded-2">
            <div className="resume-header px-4 px-lg-5">
              <div className="resume-profile-holder text-center">
                <img
                  className="resume-profile-pic rounded-circle"
                  src="assets/images/Taras_logo.png"
                  alt="image"
                />

                <h2 className="resume-name text-uppercase">Taras Mysiura</h2>
                <div className="resume-role-title text-uppercase">
                  Junior Full-Stack developer
                </div>
                <div className="resume-contact mt-4">
                  <ul className="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
                    <li className="list-inline-item me-md-3 me-lg-5">
                      <i className="resume-contact-icon bi bi-telephone-inbound me-2"></i>{" "}
                      +38 067 684-02-63
                    </li>
                    <li className="list-inline-item me-md-3 me-lg-5">
                      <i className="resume-contact-icon bi bi-envelope me-2"></i>{" "}
                      TarasMysiura@gmail.com
                    </li>
                    <li className="list-inline-item me-lg-5">
                      <i className="resume-contact-icon bi bi-globe me-2"></i>{" "}
                      www.yourwebsite.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default ResumePage;
