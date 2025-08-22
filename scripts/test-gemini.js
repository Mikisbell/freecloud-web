import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the current module's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the project root .env file
dotenv.config({ path: resolve(__dirname, '..', '.env') });

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not defined in .env file');
    }
    
    console.log("🚀 Testing Gemini API connection...");
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Generate content
    const result = await model.generateContent("Hola Gemini, ¿puedes confirmar que estás funcionando?");
    const response = await result.response;
    const text = response.text();
    
    console.log("✅ Gemini response:");
    console.log(text);
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.response) {
      console.error("API Response:", error.response);
    }
  }
}

testGemini();
