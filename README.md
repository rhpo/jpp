
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Linkedin][linkedin-shield]][linkedin-url]
[![Discord][discord-shield]][discord-url]
 
# ODromo &nbsp;&horbar;&nbsp; JavaScript++
<div align="center">
<br>
   <!--img src="https://i.ibb.co/Fwk65L4/LIFE.png" width="95"-->   
   <img src="https://cdn.discordapp.com/attachments/811247975111065630/1016331484921085952/o.png" width="140">
   <h3 align="center">ODromo &nbsp;&bull;&nbsp; JavaScript++</h3>

  <p align="center">
    <strong>ODromo</strong> is a <i>weakly typed Programming language</i> written in NodeJS itself in <u>2022</u>.
    <br />
    <a href="https://github.com/rhpo/ODromo/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rhpo.github.io/ODromo/demo/mario-game/">View Demo</a>
    ·
    <a href="https://github.com/rhpo/ODromo/issues">Report Bug</a>
    ·
    <a href="mailto:lifejs@ramey.ml">Request Feature</a>
  </p>
   
</div>

</center> 

# I WILL EDIT THE README LATER... I COPIED IT FROM MY LAST REPOSITORY ( LIFE.JS )...

# CODE EXAMPLE FOR ODROMO:
```js

// Hello World:

require sys;

void Main(argv=[]) {
    Console.WriteLine("Hello, World!")
}

// Anonymous function
// the lambda keyword is the equivalent of "()=>" in JavaScript...

(lambda Console.WriteLine("Hello JPP!"))();

// The ["require", "load"] statements do the same thing... which is to load native JPP modules from the interpreter;

// if the argument is a string, load the string, and if it contains a comma, load all modules separated...
// else if it's a variable "in code terms..." load it normally.

// "load sys" equals "require sys", same statement
require sys;
require "sys";

require "sys, fs, controls";

// The void keyword is used as a function keyword in ODromo...

void sayHello(name) {
    return Console.WriteLine("Hello " + name + "!");
}

// There are some predefined voids and functions...

let obj = {x: 0, foo: "bar"}
Console.WriteLine(x);                // ReferenceError: x is not defiend.

extract(obj);
Console.WriteLine(x);              //   0

// EX2:

if (!defined("someVar")) Console.WriteLine("someVar is not defined!")


// MATH SYNTAX IN ODROMO...
load math;

Console.WriteLine( 1pi );     // Works! and returns: # 3.14...
                    ^^  
//    1pi           =>   1 * Math.PI
//    expo(X)       =>   Math.exp(X)
//    180.54deg     =>   180.54 * Math.PI / 180
//    1rad          =>  ......


// Getting input from user with sys::Console::ReadLine :

Console.ReadLine("prompt? ");   // THIS IS SYNCRONOUS

// Sleeping:
sleep(ms);    // THIS IS SYNCRONOUS TOO! NO MORE AWAIT STATEMENTS...

exit(0);   //  BYE!!

```

<details>
  <summary>Table of Contents</summary>
  <ol>
     <li>
      <a href="#news">📰 News</a>
    </li>
    <li>
      <a href="#about-the-project">🔍 About The Project</a>
    </li>
    <li><a href="#why-choose">🤔 Why LifeJS?</a></li>
    <li>
      <a href="#getting-started">🛠️ Getting Started</a>
      <ul>
        <li><a href="#nodejs">🌿 NodeJS</a></li>
        <li><a href="#web">🌐 Web Browsers (VanillaJS)</a></li>
      </ul>
    </li>
    <li><a href="#usage">✋ Usage</a></li>
    <li><a href="#cdn">📕 CDN</a></li>
    <li><a href="#exaples">🕹️ Code Examples</a></li>
    <li><a href="#docs">📖 Documentation</a></li>
    <li><a href="#api">📚 API</a></li>
    <li><a href="#license">📜 License</a></li>
    <li><a href="#contact">👋 Contact</a></li>
     <li><a href="#about-author">👤 About the Author</a></li>
  </ol>
</details>


<hr>

<br>
<h2 name="news">&bull; 📰 News</h2>

+ ✅ Added the new <u>GameLoop</u> class, instead of ``setInterval`` or ``requestAnimationFrame``, you can use it for cross-browser compatibility, easier use and customizable FPS.
+ ✅ Added full mouse control.
+ ✅ Added Exported Constants like ``Shapes, Cursors, Patterns, Events``.
+ ✅ Fixed some Intellisense issues.
+ ✅ Added Event emitters, and listeners to objects that are similar to DOM Events.
+ ✅ V1.1.0: Fixed World Limits
+ ✅ Added <a href="https://rhpo.github.io/ODromo/playground">Playground!</a> 🎮
<br>

+ ~~⛔ Temporarily disabled Shape Object rotation due to some visual issues, it will be fixed asap.~~
+ ✅ Fixed Shape Object Rotation.

+ ~~⛔ Temporarily disabled Shape Flipping due to some visual issues, it will be fixed asap.~~
+ ✅ Fixed Shape Flipping at different axis.

<br>
<h2 name="about-the-project">&bull; 🔍 About The Project</h2>

**LifeJS** is a JavaScript Library to make 2D Animated Browser games with a 
highly flexible __API__.

+ It works by creating instances of pre-given classes and saving their geopositions, dimensions in the object class itself. Then calling a function that draws the shape for each registered shape in the previously created <u>world instance</u>.

+ It was written by a 17 years old developer from Algeria 🇩🇿 for web game developement purpose., his name is *Ramy Hadid*.

+ It's creation story, was that the developer was looking for developing a small browser game, he was then looking for game engines and libraries... Then noticed that all libraries have a complex to use API, he decided to make his own small Idea for making small 2D games, after a long time, this idea turned to be LifeJS.

<h2 name="why-choose">&bull; 🤔 Why LifeJS?</h2>

**Most developers choose us because of the <u>Following Reasons:</u>**
+ Maximum-minimalist code.
+ Full Cross-Browser support.
+ Flexible & Full featured **GEF** *(Game Engine Framework)*.
+ Processing Speed and Organization.

<br>
<h1 name="getting-started">&bull; 🛠️ Getting Started</h1>
<strong name="nodejs">
&nbsp;&nbsp;🌿 NodeJS <i>(for intellisence)</i> :
</strong>
<br><br>

 ```bash
npm install -g ODromo   #  COMING SOON...
```

<strong name="web">
&nbsp;&nbsp;🌐 Web 
    <strong>&bull; JavaScript</strong>
</strong>
<br><br>

 ```js
import { World, Shape } from 'path/to/ODromo';
var world = new World ({ ... });  
```
<br>
<h1 name="usage">&bull; ✋ Usage :</h1>

```js
const { World, Shape } = require('ODromo'); // ESM
import { World as Level, Shape } from 'ODromo' // TS 
```
<br>
<h1 name="cdn">&bull; 📕 CDN</h1>

[Life.min.js &nbsp;&horbar;&nbsp; Minimal Version](https://gitcdn.link/cdn/rhpo/ODromo/main/src/life.min.js?) &nbsp;&bull;&nbsp; 17kb

[ODromo &nbsp;&horbar;&nbsp; Classic Version (Not minimized)](https://gitcdn.link/cdn/rhpo/ODromo/main/src/ODromo?) &nbsp;&bull;&nbsp; 33kb

<br>
<h1 name="examples">&bull; 🕹️ Code Examples</h1>

```js
import { World, Shape, GameLoop } from 'path/to/ODromo'

// Rotating Centered Square...
const world = new World();
const square = new Shape({
   type: 'rectangle',
   width: 80,
   height: 80,
   pattern: 'color',
   background: 'cyan'
});

world.center(square) // • Make the square centered in the Screen.

const FPS = 60;

function main() {
   world.update();    // • Update The World on each Frame.
   square.rotate(1); //  • Rotate the Square.
}
const game = new GameLoop(main, FPS);
game.start();
```

See? As simple as that.
<br><br><br>

<h1 name="docs">📖 Documentation</h1>

You can check **LifeJS** documentation [here (GitHub)](https://github.com/rhpo/ODromo/tree/main/docs). 

<br>
<h1 name="api">📚 API</h1>

You can check **LifeJS** *Application Programming Interface* (API) [here (GitHub)](https://github.com/rhpo/ODromo/tree/main/api). 

<br>
<h1 name="license">📜 Licence (MIT)</h1>

*Copyright (c) 2022 LifeJS (https://www.github.com/rhpo/ODromo) Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

```THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.```

<br>
<h1 name="contact">👋 Contact:</h1>
    <p>&bull; Email &nbsp;&horbar;&nbsp; <a href="mailto:lifejs@ramey.ml">lifejs@ramey.ml</a></p>
    <p>&bull; Phone Number &nbsp;&horbar;&nbsp; <a href="tel:+213553238410">+213 553 23 84 10</a></p>
    <p>&bull; Discord &nbsp;&horbar;&nbsp; <a href="https://discord.gg/XXa7PpnMbq">(ODromo  ―  Gaming in JavaScript)</a></p>
<br>
<h1 name="about-author">👤 About the author:</h1>
<ul>
    <p>&bull; Name &nbsp;&horbar;&nbsp; Ramy Hadid.</p>
    <p>&bull; Age &nbsp;&horbar;&nbsp; 17 Years old.</p>
    <p>&bull; Nationality &nbsp;&horbar;&nbsp; 🇩🇿 Algeria.</p>
    <p>&bull; Linkedin &nbsp;&horbar;&nbsp; <a href="https://www.linkedin.com/in/ramy-hadid-15aa70243/">(Ramy Hadid)</a></p>
    <p>&bull; Instagram &nbsp;&horbar;&nbsp; <a href="https://www.linkedin.com/in/ramy-hadid-15aa70243/">@ramyhadid</a></p>
        <p>&bull; Discord &nbsp;&horbar;&nbsp; <a href="https://discord.com/users/751901651622690927">ramy#1539</a></p>
    <p>&bull; GitHub &nbsp;&horbar;&nbsp; <a href="https://www.github.com/rhpo">@rhpo</a></p>
    <p>&bull; Email &nbsp;&horbar;&nbsp; <a href="mailto:me@ramey.ml">me@ramey.ml</a></p>
    <p>&bull; Programming Languages &nbsp;&horbar;&nbsp; C# &bull; Ruby &bull; NodeJS &bull; Julia.</p>
</ul>

<br>

> Written by <a href="https://www.github.com/rhpo">@rhpo</a> with ❤️.

[contributors-shield]: https://img.shields.io/github/contributors/rhpo/ODromo?style=for-the-badge
[contributors-url]: https://github.com/rhpo/ODromo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rhpo/ODromo?style=for-the-badge
[forks-url]: https://github.com/rhpo/ODromo/network/members
[stars-shield]: https://img.shields.io/github/stars/rhpo/ODromo?style=for-the-badge
[stars-url]: https://github.com/rhpo/ODromo/stargazers
[issues-shield]: https://img.shields.io/github/issues/rhpo/ODromo?style=for-the-badge
[issues-url]: https://github.com/rhpo/ODromo/issues
[license-shield]: https://img.shields.io/github/license/rhpo/ODromo?style=for-the-badge
[license-url]: https://github.com/rhpo/ODromo/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[discord-shield]: https://img.shields.io/discord/1006994262174478377?color=7289da&label=Discord&logo=discord&logoColor=white&style=for-the-badge
[discord-url]: https://discord.gg/XXa7PpnMbq
[linkedin-url]: https://www.linkedin.com/in/ramy-hadid-15aa70243/

