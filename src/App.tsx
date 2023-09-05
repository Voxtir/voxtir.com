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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0.8)",
    padding: "2rem",
    borderRadius: "0.5rem",
    maxWidth: "90%", // Adjust the maximum width
    maxHeight: "90vh", // Adjust the maximum height
    overflowY: "auto", // Add vertical scrolling
  };

  return (
    <div className="h-screen overflow-x-hidden" style={containerStyle}>
      <div style={overlayStyle}>
        <div
          style={contentStyle}
          className="text-center text-slate-300 w-full md:w-2/4 rounded-lg"
        >
          <p className="text-4xl font-semibold">VOXTIR</p>
          <p className="text-lg mt-4 px-4">
            Your Future Speech-to-Text Sidekick! 🚀 <br />
            <br />
            The speech-to-text tool that turns your files into golden
            transcripts! It's built around about teamwork and sharing, so you
            easily can get the finished version in the right hands. <br />
            <br />
            The Voxtir transcription service provides speaker annotations and
            deep links from the transcript to the audio along with a host of
            other features in the pipeline such as: a suite of AI-tools to help
            you get eliminate manual work and find the important insights from
            your audio. <br />
            <br />
            Voxtir's data format can supercharge AI training! Each transcription
            you edit can improve your private model 🌟 Our awesome users give
            back to the community, by submitting their finished transcription
            for the public to see and use. Soon, we'll drop a top-notch
            transcript dataset. Keep an eye on our Github for it! 🤩
            <br />
            <br />
            Voxtir is often used for academic research and we're happy to help.
            Please reach out through our Github if you have any questions or
            requests.
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <div className="flex flex-col space-y-2 items-center">
              <a
                href="https://app.staging.voxtir.com"
                className="bg-blue-800 text-white hover:bg-blue-600 w-32 h-12 rounded-2xl block text-center pt-3"
              >
                Beta access
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <a
            href="https://github.com/Voxtir/voxtir"
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
