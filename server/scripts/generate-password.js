const bcrypt = require('bcrypt');

async function generateHash() {
  const password = 'password123';
  const saltRounds = 10;
  
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Password:', password);
    console.log('Generated Hash:', hash);
    console.log('Hash Length:', hash.length);
    
    // Verify the hash works
    const isValid = await bcrypt.compare(password, hash);
    console.log('Verification Test:', isValid ? '✅ PASSED' : '❌ FAILED');
    
    return hash;
  } catch (error) {
    console.error('Error generating hash:', error);
  }
}

generateHash();
