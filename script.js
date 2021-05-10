const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

replay.addEventListener('click', () => resetDOM());

runAnimation();

function resetDOM() {
  // Reset DOM
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  // Reset classes
  nums.forEach((num) => (num.classList.value = ''));

  // Add in class for animation on 3
  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, index) => {
    const nextToLast = nums.length - 1;

    // Replace In animation with out animation class
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && index !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}
