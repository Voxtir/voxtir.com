import React from "react";
import GithubIcon from "./assets/github-mark.svg";
import backgroundImg from "./assets/background.png";

const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the alpha value for the desired opacity
  };

  return (
    <div className="h-screen" style={containerStyle}>
      <div style={overlayStyle} className="center">
        <div className="z-10 text-center flex flex-col items-center justify-center w-2/4 h-3/4 relative bg-black opacity-80 rounded-3xl	">
          {/* Title */}
          <p className="text-6xl font-semibold text-slate-300">VOXTIR</p>

          {/* Description */}
          <p className="text-lg text-slate-300 mt-4 px-4">
            {" "}
            {/* Added 'px-4' for padding */}
            The speech to text helper of the future. <br />
            Voxtir is a speech to text helper that helps you transcribe your
            files and gain insights from them. The app is built around
            collaboration and sharing transcriptions with others. You can use it
            for free as long as you don't commercialize it. Deploy your own
            instance or use a hosted one. Voxtir is built around a data format
            that can be used to train AI for better performance. You don't have
            to share anything, but we'd appreciate it if you did. Our users love
            giving back, and we'll soon publish the first curated transcription
            dataset. Subscribe to our newsletter to get notified when it's
            ready.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col items-center">
            <button className=" bg-slate-600 text-white px-4 py-2 rounded-2xl mb-2">
              Log in
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
              Contact us
            </button>
          </div>
        </div>

        {/* GitHub icon */}
        <div className="absolute bottom-4 right-4 z-10">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
