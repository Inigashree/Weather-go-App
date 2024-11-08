// pages/Description.tsx
// pages/Description.tsx
// pages/Description.tsx
import Link from "next/link";
import { MailIcon, CloudIcon, SunIcon, GlobeIcon, AdjustmentsIcon, UserIcon } from "@heroicons/react/outline";
import { CloudIcon as MainCloudIcon } from "@heroicons/react/solid";

export default function Description() {
  return (
    <main className= "flex flex-col items-center justify-center min-h-screen bg-[url('/cloud.jpg')] bg-cover bg-center text-white">
      <div className="text-center px-8 py-12 max-w-4xl bg-black bg-opacity-60 rounded-lg shadow-lg">
        
        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-6">
          <MainCloudIcon className="w-10 h-10 text-blue-300 mr-2" />
          <h1 className="text-5xl font-extrabold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
            WeatherGo
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl font-light mb-8 tracking-wider leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
          WeatherGo is a comprehensive weather application that provides real-time data on temperature, air quality, wind, UV index, and more. Navigate to any city to receive accurate, up-to-date information on weather conditions.
        </p>
        <p className="text-xl font-light mb-8 tracking-wider leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Enjoy easy access to detailed forecasts, including a five-day outlook and helpful insights on your chosen location. The app’s dynamic background, smooth navigation, and user-friendly interface enhance the overall experience.
        </p>

        {/* Key Features - Horizontal Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center p-6 bg-opacity-60 bg-white rounded-xl shadow-md">
            <CloudIcon className="w-10 h-10 mb-2 text-blue-500" />
            <p className="text-lg text-gray-900 font-semibold text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              Real-time updates on temperature, air quality, wind speed, and UV index.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-opacity-60 bg-white rounded-xl shadow-md">
            <SunIcon className="w-10 h-10 mb-2 text-yellow-500" />
            <p className="text-lg text-gray-900 font-semibold text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              Five-day forecast with daily weather insights.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-opacity-60 bg-white rounded-xl shadow-md">
            <GlobeIcon className="w-10 h-10 mb-2 text-green-500" />
            <p className="text-lg text-gray-900 font-semibold text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              Easy navigation to check weather in any city around the world.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-opacity-60 bg-white rounded-xl shadow-md">
            <AdjustmentsIcon className="w-10 h-10 mb-2 text-purple-500" />
            <p className="text-lg text-gray-900 font-semibold text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              Dynamic and customizable background themes.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-opacity-60 bg-white rounded-xl shadow-md">
            <UserIcon className="w-10 h-10 mb-2 text-pink-500" />
            <p className="text-lg text-gray-900 font-semibold text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              User-friendly interface for quick and accessible information.
            </p>
          </div>
        </div>

        {/* Feedback Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="mailto:inigashreens.22cse@kongu.edu">
            <button className="flex items-center px-8 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <MailIcon className="w-6 h-6 mr-2" />
              Send Feedback
            </button>
          </Link>
          <Link href="/">
            <button className="px-8 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Back to Weather Dashboard
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
