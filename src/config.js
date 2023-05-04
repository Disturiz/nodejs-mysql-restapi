import { config } from 'dotenv'

config();

export const PORT = process.env.PORT || 3000; //Este es el puerto del Servidor
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASS = process.env.DB_PASS || 'root'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306  //Este es el puerto de la Base de Datos

