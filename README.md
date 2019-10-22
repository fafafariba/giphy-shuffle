# Codetalk Coding Challenge

<ol>

### Getting Started

<li>Install homebrew https://brew.sh/

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

<li>

Install node via homebrew

```bash
brew install node
```

Run npm -v to make sure that the version is higher than 6

<li>Create React App: https://facebook.github.io/create-react-app/docs/getting-started

```bash
npm init react-app my-app
cd my-app
npm start
```

Now open `src/App.js` with a code editor

---

### Diving Into HTML/CSS

<li>

Add title to your app using an `<h1>` tag right before the `<img>` tag

```html
<h1>Lizzo's Giphy Shuffle App!</h1>
```

Do you see any changes in your web browser? :eyes:
<br />

<li>

Edit the `<p>` tag to also include your name.

```diff
- <p>Edit <code>src/App.js</code> and save to reload.</p>
+ <p>This app was created by Lizzo</p>
```

<li>Now let's add a button (note: that it doesn't do anything when you click it)

```html
<button>Shuffle!</button>
```

<li>

Open `src/App.css` and see if you can change the background color and/or font color. Here's a good resource on hex/color codes: https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/

<li>Create a variable and store your name in it

```js
const name = "Lizzo";
```

<li>Replace every instance of your name with the variable you just created

```diff
- <h1>Lizzo's Giphy Shuffle App!</h1>
+ <h1>{name}'s page</h1>
```

```diff
- <p>This app was created by Lizzo</p>
+ <p>This app was created by {name}</p>
```

<li>

Search for an image on Google for a fun gif and copy the url (make sure it ends in `.gif`) Replace image `src` tag on line 10 with your selected gif

<li>

Now store the image URL into a variable called `imageUrl`

```js
const imageUrl = "https://media.giphy.com/media/3gVFmYNIY3A2LroFBD/giphy.gif";
```

<li>Replace the img tag's source (src) with the variable name

```js
<img src={imageUrl} className="App-logo" alt="logo" />
```

---

### Let's useState!

<li>Let's add state to your component. Import useState from React in line 1

```js
import React, { useState } from "react";
```

<li> Replace the imageUrl declaration with a useState hook, but initialize imageUrl with the same URL you have

```js
const [imageUrl, setImageUrl] = useState(
  "https://media.giphy.com/media/3gVFmYNIY3A2LroFBD/giphy.gif"
);
```

---

### Enhancing the Button with Functions

<li> Create a function. This function, when called, will send an alert to the web browser.

```js
function handleClick() {
  window.alert("hello!");
}
```

<li>Add an onClick property to your button and have it execute your handleClick function

```diff
- <button>Shuffle!</button>;
+ <button onClick={handleClick}>Shuffle!</button>;
```

<li>

Similar to `handleClick`, create a new function called `fetchImage`. This function is going to call the Giphy API and get us a new image url. For now, let's just log a greeting to the console. To open your console, Press **fn** + **F12**

```js
function fetchImage() {
  console.log("hello again!");
}
```

<li>

Have your button call the `fetchImage` function now

```js
<button onClick={fetchImage}>Shuffle!</button>
```

---

### Call the Giphy API

<li>

Modify the `fetchImage` function to call the Giphy API which will return a bunch of data. We'll modify our console log to show us everything that the Giphy API returns.

- [Giphy Developer Docs](https://developers.giphy.com/docs/)
- [Javascript’s Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- **GIPHY API KEY**: `aHi5kZ49h4esZTalKqyvkBO2llvuHeJr`

Example:

```js
fetch(
  "http://api.giphy.com/v1/gifs/random?api_key=aHi5kZ49h4esZTalKqyvkBO2llvuHeJr&tag=funny"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
```

<li>

Look at the data that is returned in the console, you can see there is a lot returned. We only want to use `myJson.data.images.original.url`. So let's store that in a variable right after the console.log.

```js
console.log(myJson);
const newImageUrl = myJson.data.images.original.url;
```

<li>

Modify your `fetchImage` function to update your app's state

```js
setImageUrl(newImageUrl);
```

More on how setting your app's state here: [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
<br />

<li>Now click the button and see what happens :D

The `fetchImage` function should look like this:

```js
fetch(
  "http://api.giphy.com/v1/gifs/random?api_key=aHi5kZ49h4esZTalKqyvkBO2llvuHeJr&tag=funny"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const newImageUrl = myJson.data.images.original.url;
    setImageUrl(newImageUrl);
  });
```

</ol>

## Extra Challenges:

- Clean up your code! 🧹
  - Store the API URL in a const
  - Store the API key in a const
  - Store the search query in a const
- Style your button 🎨

  ```css
  button {
    background-color: #24a158;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 25px;
    width: 300px;
    height: 50px;
    outline: 0;
  }
  button:hover {
    background-color: #1d8046;
    cursor: pointer;
  }
  ```

- Add a text input to populate the search string

## Q & A 
- Submit your questions [here](https://forms.gle/QfPW1Fe3QCvggg7a7)
