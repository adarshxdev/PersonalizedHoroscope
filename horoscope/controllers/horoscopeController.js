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

  // Get the latest 7 dates (sorted desc)
  const sortedDates = Object.keys(zodiacData).sort((a, b) => new Date(b) - new Date(a));
  const last7 = sortedDates.slice(0, 7).map(date => ({
    date,
    horoscope: zodiacData[date]
  }));

  res.json({
    zodiac,
    history: last7
  });
}
