# Todo App
Requirements can be understood from the implementation here - https://todomvc.com/examples/javascript-es6/dist/#/

## How this project was set up
- A new repository was created on GitHub. A new folder was created locally, opened in the terminal, and the steps mentioned after creating the repository were followed to tie up the local folder to the remote GitHub repository.
- Add a gitignore file for Node JS based projects like so
```
npx gitignore node
```
**Note**: If you are running npx for the first time on 
- Add this to the generated `.gitignore` file for Git to ignore JS files from being pushed (they can be re-generated from the TS files bu running the build script which is added in a later step).
```
public/src/**/*.js
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

## Points to ponder
- To include a script which use `import`/`export` (i.e. a module), we need to use `script` tag with `type="module"` in the HTML file.
- Every todo may need a unique id. You can maintain an integer for it and increment when adding a todo. Or you can use a library like `nanoid` / `uuid` that generates unique strings. You can find `nanoid` for examples here - `https://cdnjs.com/libraries/nanoid`. Note that it is a module and needs to be included using `script` with `type="module"`.
- How can focus be automatically set on an input when the page loads?
- Handling `keypress` or `keyup` event can be helpful to determine the key that is pressed in the input. This and the `event` object can help you find out when Enter key is pressed (in order to add the todo). 
- What **fields** would be part of a Todo? How would you represent a Todo's data type?
- How would you clear the todo input element after adding a new todo? Note that an input's `value` property can be read as well as set.
