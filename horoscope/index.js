import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import horoscopeRoutes from './routes/horoscopeRoutes.js'

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/v1/horoscope', horoscopeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;