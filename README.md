# Todo App
Requirements can be understood from the implementation here - https://todomvc.com/examples/javascript-es6/dist/#/

## How this project was set up
- A new repository was created on GitHub. A new folder was created locally, opened in the terminal, and the steps mentioned after creating the repository were followed to tie up the local folder to the remote GitHub repository.
- Add a gitignore file for Node JS based projects like so
```
npx gitignore node
```
- Create a  `package.json`
```
npm init -y
```
- Install `http-server` and `typescript`
```
npm i http-server typescript
```
- Create the TypeScript configuration file `tsconfig.json` by running this command (the slashes below nare assuming a Windows machine. Use forward slashes instead for path on Linux/Mac OS)
```
./node_modules/.bin/tsc --init
```
- Configure the `tsconfig.json`
```json
{
    "compilerOptions": {
        "target": "es2016",
        "module": "ES2015",
        "rootDir": "./public/src",
        "noEmitOnError": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    }
}
```
- Add the build script under `"scripts"` section in `package.json`
```json
"scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- Setup up `public/src` folder with an `index.ts` file. Build and check if the JS file is created in the same folder as the TS file.
```
npm run build:watch
```
- Add a script to start `http-server` and start it
```json
"start": "http-server -c-1 -o ./src/index.js",
```
```
npm start
```
- Check the browser on the served path