import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './config/db.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();


const app = express();
const PORT = 3000;
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;