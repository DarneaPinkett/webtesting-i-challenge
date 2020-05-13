module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability >= 0 && item.durability <100 && item.enhancement >= 0 && item.enhancement <= 20) {
    return {...item, durability: 100};
  } else {
  return { ...item };
  }
}

function get(item) {
  return { ...item };
}
