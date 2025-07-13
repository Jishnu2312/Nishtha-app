
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-indigo-600 dark:bg-blue-800 shadow-md">
      <h1 className="text-2xl font-bold text-white">Nishtha</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/timer" className="text-white">Timer</Link>
        <Link to="/leaderboard" className="text-white">Leaderboard</Link>
        <Link to="/challenge" className="text-white">Yudh</Link>
        <Link to="/profile" className="text-white">Profile</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 bg-white text-indigo-600 dark:text-blue-800 px-2 py-1 rounded">
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

const Home = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">🔥 Today's Nishtha</h2>
    <p>📅 Goal: 3h 15m / 5h</p>
    <p>🔥 Tapasya Streak: 12 Days</p>
    <p>🧠 Focus Points: 128 XP</p>
    <div className="mt-4 flex gap-4">
      <Link to="/timer" className="bg-indigo-500 text-white px-4 py-2 rounded">Start Focus Session</Link>
      <Link to="/challenge" className="bg-blue-500 text-white px-4 py-2 rounded">Join Yudh</Link>
    </div>
  </div>
);

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">🧘 Dhyan Mode</h2>
      <p className="text-3xl mb-4">⏱️ {formatTime(seconds)}</p>
      <div className="flex gap-4">
        <button onClick={() => setIsActive(!isActive)} className="bg-indigo-500 text-white px-4 py-2 rounded">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={() => { setIsActive(false); setSeconds(0); }} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

const Leaderboard = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">🏆 Sadhak Rankings</h2>
    <table className="w-full border border-gray-300 dark:border-gray-700">
      <thead>
        <tr>
          <th className="border px-4 py-2">Rank</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">🥇 #1</td><td className="border px-4 py-2">Jishnu</td><td className="border px-4 py-2">5h 42m</td></tr>
        <tr><td className="border px-4 py-2">🥈 #2</td><td className="border px-4 py-2">Riya</td><td className="border px-4 py-2">5h 12m</td></tr>
        <tr><td className="border px-4 py-2">🥉 #3</td><td className="border px-4 py-2">Aarav</td><td className="border px-4 py-2">4h 58m</td></tr>
      </tbody>
    </table>
  </div>
);

const Challenge = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">⚔️ Yudh Challenge</h2>
    <p>🆚 You vs Riya</p>
    <p>🕒 Time Left: 22m</p>
    <p>✅ Your Focus: 41 min</p>
    <p>🔴 Riya's Focus: 37 min</p>
    <div className="mt-4 flex gap-4">
      <button className="bg-indigo-500 text-white px-4 py-2 rounded">Create Challenge</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Join Battle</button>
    </div>
  </div>
);

const Profile = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">🧘 Your Nishtha</h2>
    <p>🔥 Current Streak: 12 Days</p>
    <p>⏳ Total Hours: 182h 20m</p>
    <p>🧠 Focus XP: 1280</p>
    <p>🏅 Titles: Tapasvi, Nishtha Warrior</p>
  </div>
);

export default App;
