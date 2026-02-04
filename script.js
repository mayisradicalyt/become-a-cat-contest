const MAX_OPTIONS = 10;

const state = {
  head: 0,
  face: 0,
  neck: 0,
  torso: 0,
  waist: 0,
  tail: 0
};

function update(part) {
  const img = document.getElementById(part);
  const value = state[part];

  if (value === 0) {
    img.classList.add("hidden");
  } else {
    img.src = `images/${part}_${value}.png`;
    img.classList.remove("hidden");
  }
}

function next(part) {
  state[part] = (state[part] + 1) % (MAX_OPTIONS + 1);
  update(part);
}

function prev(part) {
  state[part] = (state[part] - 1 + MAX_OPTIONS + 1) % (MAX_OPTIONS + 1);
  update(part);
}