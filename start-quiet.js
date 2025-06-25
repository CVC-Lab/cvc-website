#!/usr/bin/env node

// Custom start script that filters out webpack cache warnings
const { spawn } = require('child_process');

const gatsby = spawn('gatsby', ['develop'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true
});

// Filter stdout
gatsby.stdout.on('data', (data) => {
  const output = data.toString();
  // Skip webpack cache warnings
  if (!output.includes('[webpack.cache.PackFileCacheStrategy]') && 
      !output.includes('Serializing big strings')) {
    process.stdout.write(output);
  }
});

// Pass through stderr
gatsby.stderr.on('data', (data) => {
  process.stderr.write(data);
});

gatsby.on('close', (code) => {
  process.exit(code);
});