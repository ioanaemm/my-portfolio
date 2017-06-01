## Steps to see this project:
1. Clone the repository on your local machine
2. In the terminal change the path to it and then type

```bash
$ python -m SimpleHTTPServer 8080
```

3. Open the browser and visit localhost: 8080
4. In order to see its score on PageSpeed Insights, you first need to download and install [ngrok](https://ngrok.com/)
5. After that you need to point the terminal to that folder and then type
``` bash
$ ./ngrok http 8080
```

6. Copy the URL ngrok gives you and paste it on PageSpeed Insight
7. For pizza.html:
	- to access the page, just click on 'Cam’s Pizzeria' link
	- open up Chrome Dev Tools -> Timeline. Press the record button (located on the top left of the page) scroll the page and then stop the record, in order to see the framerate.


--------------

### Optimizations  for index.html :  
- Score for mobile: 90/100 and for desktop: 93/100
- Changed the src of the img tag from a CDN to the local files and optimized the images
- Added the media tag for “print.css”
- Inlined the css from “style.css”
- Added async attribute for “analytics.js” and “perfmatters.js “
- Minified the HTML using Gulp
- Got rid off the Google fonts

--------------

### Optimizations for pizza.html:

  - Inlined the css from “style.css”
  - Using Gulp  I’ve added tasks for compressing and resizing images, minifying HTML, CSS and JS.

--------------

### Optimizations for main.js:

- Taken the var scrollMultiplication outside the loop because it didn't change from one iteration of the loop to another
- Decreased the number of pizzas because they were affecting the website’s performance and not all of them were necesarry;
- Added a fixed number of pizzas on the screen, regardless of screen width
- Added a percentage for the slider’s width
