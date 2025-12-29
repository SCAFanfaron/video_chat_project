// test-env.mjs - ES Module version
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try loading .env
dotenv.config({ path: resolve(__dirname, '.env') });

console.log('=== Testing Environment Variables ===');
console.log('PORT:', process.env.PORT || 'NOT FOUND');
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
console.log('MONGO_URI length:', process.env.MONGO_URI ? process.env.MONGO_URI.length : 0);
console.log('STREAM_API_KEY exists:', !!process.env.STREAM_API_KEY);
console.log('STREAM_API_SECRET exists:', !!process.env.STREAM_API_SECRET);
console.log('All env keys:', Object.keys(process.env).filter(k => k.includes('STREAM') || k.includes('STEAM') || k.includes('MONGO')));