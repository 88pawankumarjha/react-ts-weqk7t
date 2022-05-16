const nightTime = () => {
  let hrs = new Date().getHours();
  if (hrs <= 4 && hrs >= 18) return true;
  else return false;
};

export default nightTime;
