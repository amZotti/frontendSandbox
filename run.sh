babel --plugins transform-react-jsx main.jsx > test.js
browserify test.js > bundle.js
rm test.js
