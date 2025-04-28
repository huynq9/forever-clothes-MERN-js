import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-sans text-xl text-gray-600">Our Strore</p>
          <p className="text-gray-500">
            Hong Do, Phu Do <br /> Tu Liem, Ha Noi
          </p>
          <p className="text-gray-500">
            Tel: 032-908-JQKA <br />
            Email: {"nguyenquanghuyx8@gmail.com"}
          </p>
          <p className="font-sans text-xl text-gray-600">Careers At Forever</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
