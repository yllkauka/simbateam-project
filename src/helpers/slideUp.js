const beforeEnter = (el) => {
  el.style.height = '0';
};
const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
};
const beforeLeave = (el) => {
  enter(el);
};
const leave = (el) => {
  beforeEnter(el);
};

export { beforeEnter, enter, beforeLeave, leave };
