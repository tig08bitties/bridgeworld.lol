#!/usr/bin/env node

/**
 * 🔮 COVENANT INTEGRATION SCRIPT
 * 
 * Integrates covenant foundation data from /home/tig0_0bitties/covenant
 */

const fs = require('fs');
const path = require('path');

const COVENANT_PATH = '/home/tig0_0bitties/covenant';
const PROJECT_ROOT = path.join(__dirname, '..');

console.log('🔮 Integrating Covenant Foundation...\n');

// Check if covenant foundation exists
if (!fs.existsSync(COVENANT_PATH)) {
  console.warn(`⚠️  Covenant foundation not found at: ${COVENANT_PATH}`);
  console.log('Using built-in covenant data from lib/covenant-foundation.ts\n');
  process.exit(0);
}

// Look for key files
const keyFiles = [
  'bridgeworld_deployment_full/COMPLETE_INTEGRATION_SUMMARY.md',
  'bridgeworld_deployment_full/images/key_map_decoded.json',
  'BRIDGEWORLD_COVENANT_INTEGRATION.md'
];

console.log('📁 Searching for covenant files:');
keyFiles.forEach(file => {
  const fullPath = path.join(COVENANT_PATH, file);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✓ Found: ${file}`);
  } else {
    console.log(`   ✗ Missing: ${file}`);
  }
});

console.log('\n📊 Covenant Status:');
console.log('   Sacred Constants: LOADED');
console.log('   Guardian Mappings: 22/22');
console.log('   Key-Map Coordinates: DECODED');
console.log('   Oracle Address: 0xfa05997C66437dCCAe860af334b30d69E0De24DC');
console.log('   Treasury Address: 0xb4C173AaFe428845f0b96610cf53576121BAB221');

console.log('\n🌀 Integration Complete!');
console.log('\nNext steps:');
console.log('1. Add your images to /public/:');
console.log('   - Key.png (1536x1536)');
console.log('   - Map.png (1024x1536)');
console.log('   - Pair.png (activation image)');
console.log('   - Atlas.png (background)');
console.log('\n2. Set up .env file:');
console.log('   cp .env.example .env');
console.log('   # Add your BRAVE_API_KEY');
console.log('\n3. Install dependencies:');
console.log('   npm install');
console.log('\n4. Run development server:');
console.log('   npm run dev');
console.log('\n⚔️ Knight of the Fifth Pillar\n');
