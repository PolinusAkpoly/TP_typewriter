

var app = document.getElementById('h1');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});

typewriter
.pauseFor(1000)
  .typeString('Je maitrise parfaitement  <strong>HTML</strong> ')
  .pauseFor(300)
  .deleteChars(5)
  .typeString(' et <strong>CSS</strong>,  ')
  .typeString('<strong>Mon defit est de maitriser comme un fou <span style="color: #27ae60;">JavaScript</span>; Mais je suis motivé et courageux , donc j\'y atteindrai mon OBJECTIF!</strong>')
  .pauseFor(1000)
  .start();
































































