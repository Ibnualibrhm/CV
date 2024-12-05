import { Card } from "flowbite-react";
import pp from "../assets/asd.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Kartu Profil */}
      <Card className="max-w-3xl mx-auto m-5 shadow-xl rounded-xl bg-white dark:bg-gray-800 p-8">
        <div className="flex justify-center items-center flex-col md:flex-row md:justify-between px-4 pt-4">
          {/* Foto Profil */}
          <div
            className="flex flex-col items-center pb-6 md:pb-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              alt="Foto Profil"
              height="96"
              src={pp}
              width="96"
              className="mb-4 rounded-full shadow-xl border-4 border-blue-500 transform transition duration-500 hover:scale-105"
            />
            <h3 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
              Ibnu Ali Ibrahim
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">Mahasiswa | Web Developer</span>
          </div>

          {/* Informasi Kontak */}
          <div
            className="coloumn py-4 sm:text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaPhoneAlt className="text-blue-500" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">+62 814-5279-2014</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaEnvelope className="text-blue-500" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Odadingburik123@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaGithub className="text-blue-500" />
              <a
                href="https://github.com/ibnualibrhm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600"
              >
                github.com/ibnualibrhm
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-blue-500" />
              <a
                href="https://instagram.com/in/ibnualibrhm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600"
              >
                instagram.com/in/ibnualibrhm
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Bagian Tentang Saya */}
      <div className="mt-8" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Tentang Saya
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Saya adalah mahasiswa yang bersemangat dan calon pengembang web, dengan minat yang mendalam dalam membangun aplikasi web yang indah dan fungsional. Saat ini, saya sedang mempelajari teknologi front-end, prinsip desain, dan berharap bisa membangun aplikasi full-stack di masa depan.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Saya seorang pembelajar cepat dan suka tantangan yang mendorong saya untuk berkembang dan meningkatkan keterampilan. Tujuan saya adalah untuk menciptakan pengalaman digital yang berdampak dan bermanfaat.
        </p>
      </div>

      {/* Bagian Proyek */}
      <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Proyek Saya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Proyek 1 */}
          <div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105"
            data-aos="flip-left"
            data-aos-delay="700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Proyek 1: MarketPlace
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sebuah Situs Yang Menjual Produk Dengan Berbagai Kategori
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Lihat Proyek
            </a>
          </div>

          {/* Proyek 2 */}
          <div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105"
            data-aos="flip-right"
            data-aos-delay="800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Proyek 2: MyLibrary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Platform membaca secara online.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Lihat Proyek
            </a>
          </div>

          {/* Proyek 3 */}
          <div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105"
            data-aos="flip-up"
            data-aos-delay="900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Proyek 3: Peminjam Online
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
             Web yang berbasis peminjam secara online.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
      </div>

      {/* Bagian Kontak */}
      <div
        className="mt-8"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Hubungi Saya
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau ingin berkolaborasi dalam proyek.
        </p>
        <a
          href="mailto:Odadingburik123@gmail.com"
          className="text-blue-500 hover:underline text-xl"
        >
          Kirimkan Email
        </a>
      </div>
    </div>
  );
};

export default Profile;
