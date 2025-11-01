const buttons = document.querySelectorAll('.fluent-glow');

buttons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--mouse-x', `${x}px`);
    btn.style.setProperty('--mouse-y', `${y}px`);
  });

  btn.addEventListener('mouseenter', () => btn.classList.add('is-hovering'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('is-hovering'));
});
