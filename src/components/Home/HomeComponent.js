import { SalonSlider } from "../Slider/Slider.component";
import { sliderConfigFeatured, sliderConfig } from "../Slider/sliderConfig";

import bgImage from "../../salon-bg1.jpeg";

const HomeComponent = () => {
  return (
    <>
      <main
        className="site-main"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="slider" className="container">
          <div className="slider-title">
            <h3>Featured</h3>
          </div>
          <SalonSlider salons={sliderConfigFeatured} />
        </div>
        <div id="slider" className="container">
          <div className="slider-title">
            <h3>Salons</h3>
          </div>
          <SalonSlider salons={sliderConfig} />
        </div>
      </main>
    </>
  );
};

export default HomeComponent;
