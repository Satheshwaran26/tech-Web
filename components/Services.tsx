import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons"; // ✅ Correct import for Android icon
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Solutions() {
  return (
    <div className="max-w-full lg:max-w-[1400px] mx-auto p-6">
     <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm text-orange-400 tracking-wider uppercase bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-light mb-6"
            >
              Transforming Ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-3">
                Digital Reality
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Comprehensive digital solutions tailored for modern businesses
            </motion.p>
          </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl md:text-6xl text-[#d0d0d0] font-extralight text-center md:text-left">
          Build a Solution <br />That&apos;s truly your own.
        </h1>
        <p className="text-[#9e9d9d] text-lg max-w-xl mt-4 md:mt-0 text-center md:text-left">
          We provide top-notch services in app development, web development, and software development to help your business thrive in the digital era.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <Image
            src="/images/asw.png" // Replace with actual image path
            alt="Illustration of app and web development services"
            className="max-w-full rounded-xl shadow-lg"
            width={600}
            height={400}
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6 w-full">
          {/* App Development */}
          <div className="flex items-start gap-4 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <FontAwesomeIcon icon={faAndroid} className="text-green-600 text-3xl p-3" />
            <div>
              <h3 className="text-xl font-extralight pb-2 text-[#d0d0d0]">App Development</h3>
              <p className="text-[#747373]">
                We create high-performing mobile applications tailored to your business needs, ensuring seamless user experiences.
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="flex items-start gap-4 p-5 shadow-sm hover:shadow-md transition">
            <FontAwesomeIcon icon={faGlobe} className="text-purple-600 text-3xl p-3" />
            <div>
              <h3 className="text-xl font-extralight pb-2 text-[#d0d0d0]">Web Development</h3>
              <p className="text-[#747373]">
                From simple websites to complex web applications, we build scalable and responsive web solutions for your business.
              </p>
            </div>
          </div>

          {/* Software Development */}
          <div className="flex items-start gap-4 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <FontAwesomeIcon icon={faCode} className="text-blue-600 text-3xl p-3" />
            <div>
              <h3 className="text-xl font-extralight pb-2 text-[#d0d0d0]">Software Development</h3>
              <p className="text-[#747373]">
                We deliver robust and efficient software solutions tailored to streamline your business operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
