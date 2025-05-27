const fs = require('fs');
const path = require('path');
const https = require('https');

const icons = {
  // Frontend
  'htmlcss': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'javascript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'react': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'nextjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'tailwind': 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-dark.svg',
  'gsap': 'https://gsap.com/img/gsap-logo.svg',
  
  // Backend
  'php': 'https://www.php.net/images/logos/new-php-logo.svg',
  'sql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'mysql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'sqlserver': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  'supabase': 'https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ce0ed.png&w=256&q=75',
  
  // Tools
  'github': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
  'vscode': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
  'cursor': 'https://cursor.sh/cursor.svg',
  'vercel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
  'trello': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg',
  
  // CMS & Design
  'wordpress': 'https://s.w.org/style/images/about/WordPress-logotype-standard.png',
  'joomla': 'https://www.joomla.org/images/joomla_logo_black.png',
  'canva': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
  'adobe': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg',
  'office': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  
  // Programming Languages
  'cpp': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
  'csharp': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'
};

const downloadIcon = (name, url) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../public/skills', `${name}.svg`);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${name}: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filePath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}.svg`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
};

const downloadAllIcons = async () => {
  // Create skills directory if it doesn't exist
  const skillsDir = path.join(__dirname, '../public/skills');
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
  }

  // Download all icons
  for (const [name, url] of Object.entries(icons)) {
    try {
      await downloadIcon(name, url);
    } catch (error) {
      console.error(`Error downloading ${name}:`, error.message);
    }
  }
};

downloadAllIcons().then(() => {
  console.log('All icons downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading icons:', error);
}); 