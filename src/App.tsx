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
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Opacity for the background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle: React.CSSProperties = {
    // Style for the content within the overlay
    background: "rgba(0, 0, 0, 0.8)", // Adjust opacity as needed
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  return (
    <div className="h-screen" style={containerStyle}>
      <div style={overlayStyle}>
        {/* Centered div */}
        <div
          style={contentStyle}
          className="text-center text-slate-300 w-2/4 rounded-lg"
        >
          {/* Title */}
          <p className="text-4xl font-semibold">VOXTIR</p>

          {/* Description */}
          <p className="text-lg mt-4 px-4">
            Your Future Speech-to-Text Sidekick! 🚀 <br />
            <br />
            Voxtir: the ultimate speech-to-text tool that turns your files into
            golden transcripts! It's all about teamwork and sharing – transcribe
            with friends and colleagues. <br /> You can launch your own instance
            using our public source code or hitch a ride on our hosted service.
            <br />
            Voxtir's data format can supercharge AI training! Each trancsription
            you edit will improve your private model. No pressure to share, but
            it'd make our day 🌟
            <br />
            Our awesome users give back, and soon, we'll drop a top-notch
            transcript dataset. Subscribe to our newsletter for the scoop!
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <div className="flex flex-col space-y-2 items-center">
              <button className="bg-slate-600 text-white hover:bg-slate-700 w-32 h-12 rounded-2xl">
                Log in
              </button>
              <div className="flex flex-col items-center">
                <label htmlFor="email" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white text-black w-32 h-12 rounded-2xl px-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>
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
