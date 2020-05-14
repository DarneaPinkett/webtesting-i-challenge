module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const {enhancement} = item;
    if (item.enhancement >= 0 && item.enhancement < 20 ) {
      const newItem = enhancement + 1;
      return{...item, enhancement: newItem};
    } else if (item.enhancement === 20) {
      return {...item, enhancement: item.enhancement}
    } else {
    return { ...item };
  }
}

function fail(item) {
  let itemE = item.enhancement;
  let itemD = item.durability;
  if( item.enhancement > 0 && item.enhancement < 15 ) {
    itemD = item.durability - 5;
    return {...item, durability: itemD};
  } else if (item.enhancement > 15 && item.enhancement < 20) {
    if (item.enhancement > 16) {
      itemD = item.durability - 10;
      return {...item, durability: itemD};
    } else {
      itemD = item.durability - 10;
      itemE = item.enhancement - 1;
    } return {...item, durability: itemD, enhancement: itemE,};
  }
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
