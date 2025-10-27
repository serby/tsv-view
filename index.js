#!/usr/bin/env node
import Table from 'cli-table3';

let data = '';
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => {
  const lines = data.trim().split('\n');
  if (lines.length === 0) return;
  
  const [header, ...rows] = lines.map(line => line.split('\t'));
  
  const table = new Table({ head: header });
  rows.forEach(row => table.push(row));
  
  console.log(table.toString());
});
