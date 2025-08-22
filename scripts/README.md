# Gemini API Test Script

This script helps you test the Google Gemini API integration.

## Setup

1. Make sure you have Node.js installed
2. Install the required dependencies:
   ```bash
   cd scripts
   npm install
   ```
3. Create a `.env` file in the project root with your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Running the Test

To test the Gemini API connection, run:

```bash
node test-gemini.js
```

If everything is set up correctly, you should see a response from Gemini in your console.

## Security Note

⚠️ Never commit your `.env` file or share your API key publicly. Make sure to add `.env` to your `.gitignore` file.
