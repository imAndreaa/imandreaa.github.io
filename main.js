let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #800961;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #800961;">Estudiante de Tecnología de Software en FIME .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
