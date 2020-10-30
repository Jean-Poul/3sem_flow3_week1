### Form
Answer the following questions before you continue In a Controlled Component React state is made the "Single source of truth", so how:

1) Do we ensure that input controls like text, textarea or select always present the value found in the components state?
We ensure the inputs are shown correctly by using the following code:
```javascript
const handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setPerson({ ...person, [id]: value })
    }
 ```   
and by having a value to our input fields:

```javascript
 <form onSubmit={handleSubmit} onChange={handleInput}>
                <input id="name" type="text" value={person.name} placeholder="name" />
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <p>{JSON.stringify(person)}</p>
```

The controlled input is when the React component that renders a form also controls what happens in that form on subsequent user input. This means that, as form value changes, the component that renders the form saves the value in its state.



2) Do we ensure that a controls’ state, always matches the value found in an input control?
Look at the code above and also by using the method ex -> setCount.

The goal is that each time the input changes, the method changeHandler is called and will store the input state. Hence the component always has the current value of the input without needing to ask for it. This means that the form component can respond to input changes immediately.


3) What is the purpose of doing event.preventDefault() in an event handler?
So we don't reload the page and reestablish connection to the server. By using preventDefault we ensure that our application is a single page application.


4) What would be the effect of NOT doing event.preventDefault in a submit handler?
The effect would be that we would reload the page and have to reestablish our connection to the server (slower performance).


5) Why don't we want to submit the traditional way, in a single page application?
As mentioned in the two earlier questions. We don't want to submit the traditional way because that would destroy the whole purpose of having a single page application.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
