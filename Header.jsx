import Image from './assets/img1.png';
import Image1 from './assets/img2.jpg';
import Image2 from './assets/img3.jpg';
import Image3 from './assets/img4.jpg';
import Image4 from './assets/img5.jpg';
import Image5 from './assets/img6.jpg';

function Header() {
  return (
    <>
      <div className='header'>
        <div className="heading">
          <h1>Velafaram</h1>
        </div>

        <div className="buttons">
          <a href="/">Home</a>
          <a href="/contact">Contact Us</a>
          <a href="/login">Login/SignUp</a>
        </div>
      </div>




      <div className="hero">
        <div className="para">
          <h1>Welcome to Velafaram!</h1>
          <h3>Stay Organized, Never Miss An Expiry.</h3>
          <p>Velafaram is your smart reminder companion, helping you keep track of important dates, product expirations, and daily tasks. Get notified before it's too late and stay ahead of your schedule effortlessly.</p>
        </div>

        <div>
          <img className="img1" src={Image} alt='profile pic' />
        </div>
      </div>



      <div>
        <div className="why">
          <h1>Why Velafaram? </h1>
        </div>

        <div className="cards">
          <div className="card1">
            <h1>Expiry Alerts</h1>
            <img className="img2" src={Image1} alt="Expiry Alerts" />
          </div>

          <div className="card2">
            <h1>Smart Notifications</h1>
            <img className="img3" src={Image2} alt="Smart Notifications" />
          </div>

          <div className="card3">
            <h1>User-Friendly Interface</h1>
            <img className="img4" src={Image3} alt="User-Friendly Interface" />
          </div>
        </div>
      </div>



      <div className='hor-cards'>
        <div className='rec-card1'>
          <div className='c1h'>
          <h1>Reliable & Timely</h1>
          <h2>Never forget important dates again.</h2>
          </div>
          
          <div className='img5'>
          <img className="img-5" src={Image4} alt="User-Friendly Interface" />
          </div>
         
        </div>
      
  
        <div className='rec-card2'>
          <div className='img-6'>
          <img className="img6" src={Image5} alt="User-Friendly Interface" />
          </div>
        
        <div className='c2h'>
        <h1> Analytics & Insights</h1>
        <h2>Track your reminder habits with useful insights.</h2>
        </div>
        </div>

        </div>
      



      <div className="ver3">
        <div className="heading3">
          
          <h1>Choose the plan thats right for you.</h1>
        </div>

        <div className="cards3">
          <div className="c1">
            <h1>$7/month</h1>
            <h2>Basic</h2>
            <ul>
              <li>✔️ Track up to 50 reminders</li>
              <li>✔️ Expiry alerts for groceries, medicines & more</li>
              <li>✔️ Custom notifications via email</li>
              <li>✔️ Simple dashboard for managing tasks</li>
              <li>✔️ Limited cloud backup</li>
            </ul>
            <button>Select Plan</button>
          </div>

          <div className="c2">
            <h1>$12/month</h1>
            <h2>Standard</h2>
            <ul>
              <li>✔️ Track up to 250 reminders</li>
              <li>✔️ Smart notifications via email & push alerts</li>
              <li>✔️ Recurring reminders for bills & subscriptions</li>
              <li>✔️ Priority support for quick assistance</li>
              <li>✔️ Full cloud backup & sync across devices</li>
            </ul>
            <button>Select Plan</button>


          </div>

          <div className="c3">
            <h1>$19/month</h1>
            <h2>Premium</h2>
            <ul>
              <li>✔️ Unlimited reminders tracking</li>
              <li>✔️ AI-powered suggestions for setting reminders</li>
              <li>✔️ Integration with Google Calendar & Outlook</li>
              <li>✔️ Advanced analytics & insights on your habits</li>
              <li>✔️ Exclusive early access to new features</li>
              <li>✔️ 24/7 priority customer support</li>
            </ul>
            <button>Select Plan</button>


          </div>
        </div>
      </div>


      
      <section id="footer">
  <div className="column">
    <h4>Contact</h4>
    <p>Address: #17, Eldian Complex, Sector-17, Chandigarh, INDIA</p>
    <p>Phone: +91-6889328XXX</p>
    <p className="sma">+91-9909378XXX</p>
    <p className="sma">+91-7889328XXX</p>
    <p>24*7 Customer Support</p>
  </div>

  <div className="column ptffoot">
    <a href="#" className="follow">Velafaram</a>
    <a href="#"><span>Set Reminder</span></a>
    <a href="#"><span>Manage Reminders</span></a>
    <a href="#"><span>How It Works</span></a>
    <a href="#" className="follow">Follow Us</a>

    <div className="footsma">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter"></i>
    </div>
  </div>

  <div className="column">
    <a href="#" className="follow">Help</a>
    <a href="#"><span>About Us</span></a>
    <a href="#"><span>Contact Us</span></a>
    <a href="#"><span>Privacy Policy</span></a>
    <a href="#"><span>Terms of Service</span></a>

    <br />
    <h6>
      Copyright <i className="far fa-copyright"></i> Velafaram
    </h6>
  </div>
</section>



     
      
      
    </>
  );
}

export default Header;
