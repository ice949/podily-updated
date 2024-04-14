import './App.css';
import logo from './assets/logo.png';
import img from './assets/Croods The Feedback.png';

function App() {

  const industries = ['Education', 'Finance', 'Agriculture', 'Food', 'Clean Energy', 'Productivity', 'Logistics']
  const cards = [
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      person: "Student",
      content: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
  ]
  return (
    <div className="App">
      <header className="header">
        <div className='topnav'>
          <p>Enjoy 5% Friends Discount using your Referral Link. </p>
          <button className='btn'>Copy link</button>
        </div>
        <div className='secondnav'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='btnlinks'>
            <button className='btn'>Sign in</button>
            <button className='btn2'>Sign up</button>
          </div>
        </div>
      </header>
      <section className='first-section'>
        <div className='industries'>
          <div className='industries-list'>
            {industries.map((industry, index) => (
              <button key={index} className='btn'>{industry}</button>
            ))}
          </div>
        </div>
      <div className='first-card'>
        <div className='card-text'>
          <h2>Pitch like a pro</h2>
          <p>You only have one chance to make a lasting impression</p>
          <button className='btn'>Practice Now</button>
        </div>
        <div className='card-img'>
          <img src={img} alt='' />
        </div>
      </div>

      <div className='cards'>
        {
          cards.map((card, index) => (
            <div key={index} className='card'>
              <div className='card-header'>
                <h3>{card.person}</h3>
              </div>
              <div className='card-content'>
                <p>{card.content}</p>
                <button className='btn'>View More</button>
              </div>
            </div>
          ))
        }
      </div>
      </section>
      
    </div>
  );
}

export default App;
