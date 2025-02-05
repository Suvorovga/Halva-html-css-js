// Задержка для загрузки шрифтов
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("body").style.opacity = "1";
  }, 500);
});

// Анимация для блока промокода
const promoData = [
  {
    id: 1,
    text: 5137,
  },
  {
    id: 2,
    text: 5139,
  },
  {
    id: 3,
    text: 5199,
  },
  {
    id: 4,
    text: 5262,
  },
  {
    id: 5,
    text: 5611,
  },
  {
    id: 6,
    text: 5621,
  },
  {
    id: 7,
    text: 5631,
  },
  {
    id: 8,
    text: 5641,
  },
  {
    id: 9,
    text: 5651,
  },
  {
    id: 10,
    text: 5655,
  },
  {
    id: 11,
    text: 5661,
  },
  {
    id: 12,
    text: 5681,
  },
  {
    id: 13,
    text: 5691,
  },
  {
    id: 14,
    text: 5697,
  },
  {
    id: 15,
    text: 5698,
  },
  {
    id: 16,
    text: 5699,
  },
  {
    id: 17,
    text: 5931,
  },
  {
    id: 18,
    text: 5948,
  },
  {
    id: 19,
    text: 5949,
  },
  {
    id: 20,
    text: 5950,
  },
  {
    id: 21,
    text: 7251,
  },
  {
    id: 22,
    text: 7296,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".promo__link");
  let count = 0;

  setInterval(() => {
    count++;

    if (count > 22) count = 1;

    el.textContent = `${promoData.find((it) => it.id == count).text}`;
  }, 1000);
});

// Добавление класса анимации для элементов при скролле
const animationData = [
  "how__text2",
  "how__link",
  "partners__text3",
  "product__image1",
  "product__image2",
  "product__image3",
  "partners__text5",
  "partners__link",
  "advantages__text2",
  "advantages__text3",
  "advantages__text4",
  "advantages__image",
  "icon1",
  "icon2",
  "icon3",
  "tel",
  "social1",
  "social2",
  "promo__link",
];

animationData.forEach((el) => addAnimation(el));

document.addEventListener("scroll", () => {
  animationData.forEach((el) => addAnimation(el));
});

function addAnimation(className) {
  const element = document.querySelector(`.${className}`);

  if (!element.classList.contains("animation")) {
    const elementPosition = {
      top: window.scrollY + element.getBoundingClientRect().top,
      left: window.scrollX + element.getBoundingClientRect().left,
      right: window.scrollX + element.getBoundingClientRect().right,
      bottom: window.scrollY + element.getBoundingClientRect().bottom,
    };

    const windowPosition = {
      top: window.scrollY,
      left: window.scrollX,
      right: window.scrollX + document.documentElement.clientWidth,
      bottom: window.scrollY + document.documentElement.clientHeight,
    };

    if (
      elementPosition.bottom > windowPosition.top &&
      elementPosition.top < windowPosition.bottom &&
      elementPosition.right > windowPosition.left &&
      elementPosition.left < windowPosition.right
    ) {
      setTimeout(() => {
        element.classList.add("animation");
      }, 1000);
    }
  }
}

// Изменение темы у пользователя

document.querySelector(".theme").addEventListener("click", () => {
  document.querySelector(".main").classList.toggle("dark");
  document.querySelectorAll(".text1").forEach((el) => el.classList.toggle("dark"));
  document.querySelectorAll(".text2").forEach((el) => el.classList.toggle("dark"));
  document.querySelectorAll(".container").forEach((el) => el.classList.toggle("dark"));
  document.querySelector(".dark-theme").classList.toggle("active");
  document.querySelector(".light-theme").classList.toggle("active");
});
