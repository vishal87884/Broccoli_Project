import bgRightImage from "../assets/images/Righ-back-ground_image.jpg";

function FirstComponent() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgRightImage})`,
      }}
    >
      {/* Your centered content here */}
    </div>
  );
}

export default FirstComponent;
