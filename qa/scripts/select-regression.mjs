import { readFileSync } from 'node:fs'

const map = JSON.parse(readFileSync('qa/regression-map.json', 'utf8'))
const changed = readFileSync(0, 'utf8').split('\n').filter(Boolean)

const folders = new Set()
for (const file of changed) {
  for (const folder of map[file] ?? []) folders.add(folder)
}
console.log([...folders].join('\n'))
