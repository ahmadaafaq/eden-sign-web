import bgImage from './salon-bg1.jpeg';
import bgHeader from './salon-bg-header.webp';
import './App.css';
import { useEffect } from 'react';

function App() {
  const sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24;

  const end = new Date("Jul 31, 2022 12:00:00").getTime();

  useEffect(() => {
    initTimer();
  });

  const initTimer = () => {
    setInterval(() => {
      const current = new Date().getTime();
      const remaining = end - current;
      document.getElementById("days").innerText = Math.floor(remaining / day);
      document.getElementById("hours").innerText = Math.floor( (remaining % day) / hour );
      document.getElementById("minutes").innerText = Math.floor( (remaining % hour) / min );
      document.getElementById("seconds").innerText = Math.floor( (remaining % min) / sec );   
    }, 1000);
  }

  return (
    <div className="App">
      <header style={{
          backgroundImage: `url(${bgHeader})`,
          backgroundRepeat: 'no-repeat',
      }}>
	      <div className="overlay">
          <h1>Eden Sign</h1>
          <h3>Promote your Salons and Parlours.</h3>
            <br />
            <a target="_blank" href="https://forms.gle/7p8BLAUbEv7gBT6UA">
              <button>Register</button>
            </a>
		    </div>
      </header>
      <main className="site-main" style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '63vh',
          }}>
        <div id="countdown" className='container'>
          <div className='coming-soon-text'>
            <ul class="list-group">
              <li className='list-group-item'><span id="days"></span>Days</li>
              <li className='list-group-item'><span id="hours"></span>Hours</li>
              <li className='list-group-item'><span id="minutes"></span>Minutes</li>
              <li className='list-group-item'><span id="seconds"></span>Seconds</li>
            </ul>   
            <h1>Coming Soon!</h1>   
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">Eden Sign is an initiative  to help the parlours and salon across the country to be listed at one single platform. Helping the customers to easily find the perfect salon as per their needs and requirements.</p>
              </div>
              <div className="col-xs-6 col-md-3">
                  <h6>Services</h6>
                  <ul className="footer-links">
                    <li>Promotion</li>
                    <li>Booking</li>
                    <li>Branding</li>
                  </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Contact Us</h6>
                <p><a href="mailto:sales@edensign.in">sales@edensign.in</a></p>
              </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-6">
                  <span className="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="http://edensign.in"> Eden Sign</a></span>
              </div>
              {/* <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
              </div> */}
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
