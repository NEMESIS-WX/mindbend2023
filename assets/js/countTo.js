document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration, k) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = k === true ? `${current}k` : current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("number_1", 0, 500, 7000, true);
  counter("number_2", 0, 25, 5000, false);
  counter("number_3", 0, 10, 2500, true);
});
