import "./ContactPage.css"


const ContactsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1 ">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+380676840263">+38 (067) 684-02-63</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Viber</h2>
            <p>
              <a href="tel:+380939036449">+38 (093) 903-64-49</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:TarasMysuira@gmail.com">TarasMysuira@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ContactsPage;
