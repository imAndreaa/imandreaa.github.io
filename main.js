let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d198c3;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d198c3;">Estudiante de Tecnología de Software en FIME .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
