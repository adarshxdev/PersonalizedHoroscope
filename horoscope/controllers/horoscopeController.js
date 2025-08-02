import { horoscopeData } from '../data/horoscopes.js';

export async function getHorosopeToday(req, res) {
  const { zodiac, userId } = req.user;
  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  const zodiacData = horoscopeData[zodiac];

  if (!zodiacData) {
    return res.status(404).json({ error: "Zodiac not found" });
  }

  const todayHoroscope = zodiacData[today];

  if (!todayHoroscope) {
    return res.status(404).json({ error: "No horoscope available for today." });
  }

  res.json({
    date: today,
    zodiac,
    horoscope: todayHoroscope
  });
}


export async function getHoroscopeHistory(req, res) {
  const { zodiac, userId } = req.user;
  const zodiacData = horoscopeData[zodiac];

  if (!zodiacData) {
    return res.status(404).json({ error: "Zodiac not found" });
  }

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Filter dates that are <= current date, then sort desc
  const availableDates = Object.keys(zodiacData)
    .filter(date => date <= currentDate)
    .sort((a, b) => new Date(b) - new Date(a));
  
  // Get the latest 7 dates (or fewer if not available)
  const last7 = availableDates.slice(0, 7).map(date => ({
    date,
    horoscope: zodiacData[date]
  }));

  res.json({
    zodiac,
    history: last7
  });
}
