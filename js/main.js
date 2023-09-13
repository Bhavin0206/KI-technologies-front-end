const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 200; // Adjust the speed as needed

  counterNum.forEach((curNumber) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      const initialNumber = parseInt(curNumber.innerText.replace("+", ""));
      const incrementNumber = Math.ceil(targetNumber / speed);

      if (initialNumber < targetNumber) {
        curNumber.innerText = `${initialNumber + incrementNumber}`;
        setTimeout(updateNumber, 10);
      } else {
        curNumber.innerText = `${targetNumber}`;
      }
    };
    updateNumber();
  });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
  root: null,
  threshold: 0,
});

workSecObserver.observe(workSection);

const workSection2 = document.querySelector(".section-work-data2");

const workSectionObserve2 = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const counterNum = document.querySelectorAll(".counter-numbers2");
  const speed = 200; // Adjust the speed as needed

  counterNum.forEach((curNumber) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      const initialNumber = parseInt(curNumber.innerText.replace("+", ""));
      const incrementNumber = Math.ceil(targetNumber / speed);

      if (initialNumber < targetNumber) {
        curNumber.innerText = `${initialNumber + incrementNumber}`;
        setTimeout(updateNumber, 10);
      } else {
        curNumber.innerText = `${targetNumber}`;
      }
    };
    updateNumber();
  });
};

const workSecObserver2 = new IntersectionObserver(workSectionObserve2, {
  root: null,
  threshold: 0,
});

workSecObserver2.observe(workSection2);
