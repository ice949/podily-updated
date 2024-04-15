import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { MdEmojiEmotions } from "react-icons/md";
import { BsSoundwave } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import ReactDOM from "react-dom/client";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const Action = ({
  status,
  addAudioElement,
  recorderControls,
  startRecording,
  stopRecording,
}) => {
  const { recordingBlob, isRecording, isPaused, recordingTime, mediaRecorder } =
    useAudioRecorder();

  if (status === "start") {
    return (
      <>
        <p>Click to Speak</p>
        <div className="action">
          <div
            className="action-icon"
            onClick={(e) => {
              startRecording();
            }}
          >
            <FaMicrophone />
          </div>
        </div>
      </>
    );
  } else if (status === "stop") {
    return (
      <>
        <p>Click to Stop</p>
        <div className="action">
          <div
            className="action-icon"
            onClick={(e) => {
              stopRecording();
            }}
          >
            <BsSoundwave />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Click to play audio</p>
        <div className="action" id="act">
          <div className="action-icon">
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
          </div>
        </div>
      </>
    );
  }
};

const Practicehub = () => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    const container = document.getElementById("act");
    container.appendChild(audio);
  };
  const [status, setStatus] = useState("start");

  const startRecording = () => {
    console.log("Recording Started");
    setStatus("stop");
    recorderControls.startRecording();
  };

  const stopRecording = () => {
    setStatus("play");
    recorderControls.stopRecording();
  };

  const [searchText, setSearchText] = useState("");
  const data = [
    {
      id: 1,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you...",
    },
    {
      id: 2,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you...",
    },
    {
      id: 3,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you...",
    },
    {
      id: 4,
      info: "Are you tired of struggling to finish your projects on time? We have the right solution for you...",
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="topnav">
          <p>Enjoy 5% Friends Discount using your Referral Link. </p>
          <button className="btn">Copy link</button>
        </div>
        <div className="secondnav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="btnlinks">
            <button className="btn">Sign in</button>
            <button className="btn2">Sign up</button>
          </div>
        </div>
      </header>
      <section className="other-data">
        <section className="templates">
          <select name="lev" id="lev">
            <option value="Education">Education</option>
          </select>
          <input
            type="text"
            value={searchText}
            placeholder="Search by keyword"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="template-cards">
            {data.map((card, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <p>{card.info}</p>
                  <button className="btn">View More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="main">
          <div className="level">
            <ul>
              <li>Home ></li>
              <li>Sales ></li>
              <li>Education > </li>
              <li>Student ></li>
              <li>Practice</li>
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
                <div className="dat">
                  <h3>Hook</h3>
                  <p>Let's talk about project success. </p>
                </div>

                <div className="dat">
                  <h3>The value proposition</h3>
                  <p>
                    With our software, you can say goodbye to late nights and
                    hello to effective collaboration.
                  </p>
                </div>

                <div className="dat">
                  <h3>The Differentiator</h3>
                  <p>Curious how it works?</p>
                </div>

                <div className="dat">
                  <h3>The Call to action</h3>
                  <p>
                    Come chat with us in person and experience the future of
                    project management!"
                  </p>
                </div>
              </div>
            </div>
            <Action
              status={status}
              addAudioElement={addAudioElement}
              recorderControls={recorderControls}
              startRecording={startRecording}
              stopRecording={stopRecording}
            />
          </div>
        </section>
        <section className="todo-container">
          <div className="todo">
            <p>Your confidence score will be estimated using these metrics:</p>
            <ol>
              <li>Pace</li>
              <li>Volume</li>
              <li>Emphasis</li>
              <li>Clarity</li>
            </ol>
            <button
              disabled={status === "play" ? false : true}
              className={`btn ${status === "play" ? "" : "disabled"}`}
            >
              See Results
            </button>
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
};

export default Practicehub;
