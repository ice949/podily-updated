import React from 'react';
import logo from '../../assets/logo.png';
import { MdEmojiEmotions } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";

const Pitchforstudents = () => {

  const data = [
    {
      id: 1,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      id: 2,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      id: 3,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
    },
    {
      id: 4,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you..."
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
      <section className="other-data">
        <section className="templates">
          <div className="template-cards">
          {
          data.map((card, index) => (
            <div key={index} className='card'>
              <div className='card-content'>
                <p>{card.info}</p>
                <button className='btn'>View More</button>
              </div>
            </div>
          ))
        }
          </div>
        </section>
      <section className="main">
        <div className="level">
          <ul>
            <li>Home ></li>
            <li>Sales ></li>
            <li>Education > </li>
            <li>Student ></li>
          </ul>
        </div>
        <div className="content">
          <div className="main-card">
            <div className="main-card-header">
              <p>Edit</p>
              <p>Undo</p>
              <p>Redo</p>
              <p>Copy</p>
            </div>
            <div className="main-card-body">
              <h2>Student</h2>
              <h4>Hook</h4>
              <p> Let's talk about project success. With our software, you can say goodbye to late nights and hello to effective collaboration. Curious how it works? Come chat with us in person and experience the future of project management!"</p>
            </div>
          </div>
          <p>Listen to Script</p>
          <div className="action">
            <audio controls></audio>
          </div>
        </div>
      </section>
      <section className="todo-container">
        <div className="todo">
          <div className="todo-icon">
            <RiUserVoiceFill />
          </div>
          <p>Record your voice and get feedback</p>
          <button className="btn2">Practice</button>
        </div>
        <div className="rate-card">
          <p>Rate the Script</p>
          <div className="rate-icons">
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
          </div>
        </div>
        <div className="rate-card">
          <p>Rate the Audio</p>
          <div className="rate-icons">
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
          </div>
        </div>
        <div className="rate-card">
          <p>Rate your Experience</p>
          <div className="rate-icons">
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
            <div className="rate-icon">
              <MdEmojiEmotions />
            </div>
          </div>
        </div>
      </section>
      </section>
      
    </div>
  );
}

export default Pitchforstudents