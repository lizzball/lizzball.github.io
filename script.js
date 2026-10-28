(() => {
  const trigger = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (trigger && nav) {
    trigger.addEventListener('click', () => { const open = nav.classList.toggle('open'); trigger.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');trigger.setAttribute('aria-expanded','false');}));
  }
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {els.forEach(x => x.classList.add('in-view'));return;}
  const io = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target);}});}, {threshold:0.07});
  els.forEach(x => io.observe(x));
})();
