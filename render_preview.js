const fs = require('fs');
const path = require('path');
const https = require('https');

const readmePath = path.join(__dirname, 'README.md');
const outputPath = path.join(__dirname, 'README.html');

if (!fs.existsSync(readmePath)) {
  console.error("README.md not found in the current directory!");
  process.exit(1);
}

const readmeText = fs.readFileSync(readmePath, 'utf8');

const requestData = JSON.stringify({
  text: readmeText,
  mode: 'gfm'
});

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/markdown',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(requestData),
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

console.log("Sending README.md to GitHub Markdown API for rendering...");

const req = https.request(options, (res) => {
  let body = '';
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error(`Error rendering markdown: API returned status code ${res.statusCode}`);
      console.error(body);
      process.exit(1);
    }
    
    // Wrap in standard GitHub Markdown styling
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Profile Preview</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-css.min.css">
  <style>
    body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
      background-color: #0d1117; /* GitHub Dark theme background */
      color: #c9d1d9;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    }
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      background-color: #0d1117;
      color: #c9d1d9;
    }
    /* Simple custom style for styling links or details */
    details {
      margin-bottom: 16px;
    }
    @media (max-width: 767px) {
      body {
        padding: 15px;
      }
      .markdown-body {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="markdown-body">
    ${body}
  </div>
</body>
</html>`;

    fs.writeFileSync(outputPath, fullHtml, 'utf8');
    console.log(`Successfully generated preview at: ${outputPath}`);
    console.log("You can open this HTML file directly in your browser to see how your profile looks!");
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(requestData);
req.end();
