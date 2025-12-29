// debug-env.mjs
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('=== DEBUG ENV LOADING ===');
console.log('Current directory:', __dirname);

// Check different possible .env locations
const possiblePaths = [
  '.env',
  './.env',
  resolve(__dirname, '.env'),
  'C:\\Users\\DELL\\OneDrive\\Desktop\\Новая папка\\streamify-video-calls\\backend\\.env'
];

for (const path of possiblePaths) {
  console.log(`\nChecking: ${path}`);
  console.log(`Exists: ${existsSync(path)}`);
  if (existsSync(path)) {
    try {
      const content = readFileSync(path, 'utf8');
      console.log(`First 100 chars: ${content.substring(0, 100)}`);
    } catch (err) {
      console.log(`Read error: ${err.message}`);
    }
  }
}

// Now test dotenv loading
console.log('\n=== TESTING DOTENV ===');
import dotenv from 'dotenv';

// Try different loading methods
console.log('\nMethod 1: dotenv.config()');
dotenv.config();
console.log('PORT:', process.env.PORT);

console.log('\nMethod 2: dotenv.config({ path: ".env" })');
dotenv.config({ path: '.env' });
console.log('PORT:', process.env.PORT);

console.log('\nMethod 3: With absolute path');
const absPath = resolve(__dirname, '.env');
dotenv.config({ path: absPath });
console.log('PORT:', process.env.PORT);

console.log('\nAll process.env keys starting with MONGO, STREAM, PORT, JWT:');
for (const key in process.env) {
  if (key.includes('MONGO') || key.includes('STREAM') || key.includes('PORT') || key.includes('JWT')) {
    console.log(`  ${key}: ${process.env[key] ? 'SET' : 'empty'}`);
  }
}