Выполненное тестовое задание.
Содержит примеры анимации, валидации и ленивой загрузки с использованием Jquery.
Ссылка на сайт с результатом: https://stasokulov.github.io/jquery-test-task/

Текст задания и инструкция по развертке проекта ниже.

# Requirements

1. Use SCSS
2. Use jQuery, ES6+. Allowed front-end libraries and plugins (don't use any other 3rd party JS libraries or plugins):
   - jQuery
   - https://jqueryvalidation.org
   - lodash
3. Semantically correct HTML
4. Must work in Chrome
5. Use `data-plugin="..."` HTML attribute to initialize plugins on elements as described in example in `main.js`.
   - Custom plugins must NOT be attached to elements by calling a plugin directly on selector `$(selector).plugin()`
   - All JS plugins must be reusable (should work if attached to multiple elements)
6. Responsive / adaptive version is a plus
7. Page layout similar to the attached layout-instructions.jpg
8. Delivered files must NOT include `node_modules` or `public` folders

!!! IMPORTANT !!! 

- Follow the requirements. 
- Do not use any other libraries than listed above. We would like to assess your programming and problem solving skills.
- Test your code against the above requirements prior to delivery. Fail to comply with the requirements decreases your chances for a job.

# How to use bundler / build process

Build process does the following:

1. Copies all files from `src/static/` into `public/` folder
2. Compiles and bundles JS from `src/javascripts/` into `public/javascripts/` folder
3. Compiles SCSS into CSS from `src/stylesheets/` into `public/stylesheets/` folder
4. In development mode runs a static server

## Installing

Make sure NodeJS is installed.
From command line run `npm install`.

## Build files

To build files once run `npm run production`.
To start a server, build files, and rebuild on file changes run `npm run development`. The web server will be available at http://localhost:3000.


# Tasks

## Animations

1. Create reusable animation which will fade-out element: element scales down from 1 to 0.6 and is being hidden from right to left, see attached animation-instructions.jpg
2. Create reusable animation which will fade-in element, animation opposite from fade-out, see animation-instructions.jpg
3. Add fixed positioned button in the right top corner for the screen
4. Add a jQuery plugin which will show that fixed element using `fade-in` animation when user moves cursor into top half of the screen and hide using `fade-out` animation when user moves cursor out of top half of the screen.


## Form

1. Create a form with multiple inputs:
   - One required text field
   - Two phone number fields

2. Add validation using https://jqueryvalidation.org/ library
   - To the required text field add a custom error message
   - To all phone number fields add a custom validation rule which will pass if value consists only of "+" sign and digits with at least 5 characters, error message should be "Invalid phone number".
   - Validation should work if more inputs are added or existing inputs are removed
   - Validation messages must not be hardcoded or compiled inside the .js files

3. If on submit validation passes, then prevent page reload and hide form using `fade-out` animation and show success message using `fade-in`. Make a smooth transition, eg. success message should fade-in at the same time (simultaneously) as form is fading out.


## Image lazy loading

1. Image should start loading when user scrolls to it / it becomes visible to the user.
2. For different resolutions different image should be loaded / shown, use images from `src/images/image-...jpg` (`public/images/image-...jpg`)
3. Image must be outside viewport visible area (below the fold), make sure it works on all resolution. See layout-instructions.jpg


## Text animation

1. Add a text on the right side of the image
2. When user scrolls to the text show it using some animation of your choice


## Styles

Show your ability to write reusable and well structured SCSS.

In `src/stylesheets/` are 2 `.scss` files, each of them during build generate a separate `.css` file.
Only one of the `.css` files will be used on a website at a time, owner of the website can choose to either use `light.css` or `dark.css`

1. `light` and `dark` should look the same, except for:
   - `light.css` - white background, dark text, font 'Arial', line color `#ccc`
   - `dark.css` - dark background, white text, font 'Times New Roman', line color `#333`
2. Source SCSS code must be reused between themes as much as possible.
3. Use `light.css` sceheme in your test assignment, but we will test `dark.css` too
