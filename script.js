const keyPressed = document.querySelectorAll('.piano-keys .key');
volumeSlider = document.querySelector('.volume-slider input');

keysCheckbox = document.querySelector('#cb');

let audio = new Audio('tunes/.wav'); //play a.wav for all key press

//play sound on key press
function playTune(key) {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  //   //getting clicked key from keyboard
  //   const clickedKey = document.querySelector(`[data-key='${key}']`);
  //   clickedKey.classList.add('active');
}

const showHideKeys = () => {
  keyPressed.forEach((key) => key.classList.toggle('hide'));
};

//getting pressed key and key value
keyPressed.forEach((key) => {
  key.addEventListener('click', () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  audio.src = `tunes/${e.key}.wav`;
  audio.play();
};

const handleVolume = (e) => {
  audio.volume = e.target.value / 100;
  //passing the range in slider as audio volume
};

document.addEventListener('keydown', pressedKey);

//show keys
keysCheckbox.addEventListener('click', showHideKeys);

//volume slider
volumeSlider.addEventListener('input', handleVolume);
