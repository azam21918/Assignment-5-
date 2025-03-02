document.getElementById("bg-random-color").addEventListener("click", function () {
    let h = Math.floor(Math.random() * 360);
    let s = Math.ceil(Math.random() * 100);
    let l = Math.ceil(Math.random() * 100);
    let a = Math.random().toFixed(2);
    document.body.style.backgroundColor = `hsla(${h}, ${s}%, ${l}%, ${a})`;
  });
  
 