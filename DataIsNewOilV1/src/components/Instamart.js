import React, { useState } from "react";
// import About from "./About";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="bg-pink-50 rounded-sm p-2 m-2 border border-black">
      <div className="flex justify-between">
        <h1 className="  text-xl font-bold ">{title}</h1>
        <button
          className="px-2 py-1 text-xs bg-gray border border-b-red-100 border-t-0 border-r-0 border-l-0 border-b-dotted   rounded-lg"
          onClick={setIsVisible}
        >
          {isVisible ? "Hide Desc.." : "Show Desc.."}
        </button>
      </div>
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

function Instamart() {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showGuide: false,
  });

  return (
    <div>
      <Section
        title="About Instamart"
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showGuide: false,
          });
        }}
      />
      <Section
        title="About Team"
        isVisible={sectionConfig.showTeam}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showGuide: false,
          });
        }}
      />
      <Section
        isVisible={sectionConfig.showGuide}
        title="Guide Instamart"
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        etIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showGuide: true,
          });
        }}
        
      />
    </div>
  );
}

export default Instamart;
