import { Helmet } from "react-helmet";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 sm:mt-12 sm:mb-20 px-6 bg-stone-800">
      <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mt-10">
        <a
          href="https://www.buymeacoffee.com/crafty.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <FaCoffee size={24} className="mr-2" />
          <span>Buy me a coffee!</span>
        </a>
      </button>
      <div className="h-10"></div>
      <div className="w-full text-center">
        <script
          async={true}
          data-cfasync={false}
          src="//pl18682527.highrevenuegate.com/1f7742fbe748ab05e9447a065b76cdab/invoke.js"
        ></script>
        <div id="container-1f7742fbe748ab05e9447a065b76cdab"></div>
      </div>
      <div className="mt-8">
        <Helmet>
          <script
            async={true}
            data-cfasync={false}
            src="//pl18682527.highrevenuegate.com/1f7742fbe748ab05e9447a065b76cdab/invoke.js"
          ></script>
        </Helmet>
      </div>
    </div>
  );
};

export default Footer;

```
