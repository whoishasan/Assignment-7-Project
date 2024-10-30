import NewsLetter from "./NewsLetter";
import footer from "../assets/footerLogo.png";
export default function Footer() {
  return (
    <div className="bg-black pt-36 relative mt-56">
      <img src={footer} className="h-40 p-8 mx-auto" />
      <div className=" text-white  md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-5 pl-10 md:pl-0">
        <div className="">
          <h6 className="footer-title">About Us</h6>
          <p className="text-sm text-gray-500">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover text-sm text-gray-500">Home</a>
          <br />
          <a className="link link-hover text-sm text-gray-500">Service</a>
          <br />
          <a className="link link-hover text-sm text-gray-500">About</a>
          <br />
          <a className="link link-hover text-sm text-gray-500">Contact</a>
        </div>
        <form className="">
          <h6 className="footer-title">Subscribe</h6>
          <p className="text-sm text-gray-500">
            Subscribe to our Newsletter
            <br /> for the latest news and updates
          </p>
          <fieldset className="py-3">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="join-item border-none outline-none px-4 text-black"
              />
              <button className="btn bg-gradient-to-tr from-purple-500 to-yellow-400 join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="absolute z-50 -top-32 left-[8%] p-4 rounded-3xl border-2 w-10/12 mx-auto">
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
}
