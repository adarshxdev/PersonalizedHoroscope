import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/horoscope/today', (req, res) => {
  res.send('Welcome to the Horoscope API : TODAY!');
});

app.get('/horoscope/history', (req, res) =>{
    res.send('Welcome to the Horoscope API : HISTORY!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;