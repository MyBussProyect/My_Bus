export const changeBorderAt = (event: any, color: `#${string}`) => {
  event.current.style.borderColor = color;
  setTimeout(() => {
    event.current.style.borderColor = 'white';
  }, 1200);
};
