import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              aliquid adipisci minus repellat iure soluta unde. Vitae
              dignissimos alias sint officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aperiam omnis debitis odit velit qui ipsa nobis, minima, harum id
              eum quod quisquam! Est ratione officia
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Our Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas minus reiciendis aliquid odio culpa? Est optio nihil quo
              rerum laborum, praesentium asperiores vitae ipsam nulla odio dolor
              exceptur
            </p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-gray-600">Quantity Assurance:</b>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur sint vero eos provident, dolores commodi obcaecati
              natus?
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-gray-600">Convenience:</b>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur sint vero eos provident, dolores commodi obcaecati
              natus?
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="text-gray-600">Exeptional Customer Service:</b>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur sint vero eos provident, dolores commodi obcaecati
              natus?
            </p>
          </div>
        </div>
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
