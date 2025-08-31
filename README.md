# Animated Loader

A sleek, responsive progress indicator built with **HTML**, **CSS**, and **JavaScript**. The bar animates with fluid speed variations and descriptive loading messages until reaching 100%, then celebrates completion with a pulse effect.

## Preview
![loader-preview](https://user-images.githubusercontent.com/000000/placeholder.gif)

## File Structure
```
animated-loader/
├── index.html   # Main page that embeds the loader component
├── style.css    # Modern dark-theme styling & animation rules
├── script.js    # Loader logic controlling progress updates
└── README.md    # Project documentation (this file)
```

## File Details
* **index.html**
  * Links external stylesheet and script.
  * Provides semantic markup (`main`, `role="progressbar"`, ARIA attributes) for accessibility.
* **style.css**
  * Defines CSS variables for easy theme tweaking.
  * Implements gradient progress bar, neon text shadows, pulse animation, and smooth transitions.
* **script.js**
  * Generates pseudo-random speed increments for organic loading feel.
  * Updates ARIA `aria-valuenow` and detail text at milestones.
  * Triggers completion state that hides bar and shows success tick.

## Getting Started
1. Clone or download the repository.
2. Open `index.html` in any modern browser—no build step required!

```
# Example
$ git clone https://github.com/<your-user>/animated-loader.git
$ cd animated-loader
$ start index.html  # Windows
auto-open in browser
```

## Customization
* Tweak colors in `:root` variables of `style.css`.
* Adjust speed by editing `randomSpeed()` in `script.js`.
* Replace strings in `details[]` for custom messages.

## License
MIT © 2025 Your Name
