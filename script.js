document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("checkButton");
  const resetButton = document.getElementById("resetButton");
  const mainContainer = document.getElementById("main-container");
  const resultContainer = document.getElementById("result-container");

  checkButton.addEventListener("click", checkJodoh);
  resetButton.addEventListener("click", resetForm);

  function checkJodoh() {
    const maleNames = [
      "BUDI",
      "DONI",
      "FAJAR",
      "HADI",
      "INDRA",
      "JOKO",
      "KIKI",
      "OKA",
      "SANDI",
      "UDIN",
      "WAWAN",
      "ZAKI",
      "ANDI",
      "BAGUS",
      "CAHYO",
      "DEDI",
      "EKO",
      "FAISAL",
      "GALIH",
      "HENDRA",
      "IMAM",
      "JONI",
      "KAMAL",
      "LUTFI",
      "MAHDI",
      "NAUFAL",
      "IBAD",
      "PANDU",
      "QOMAR",
      "RIZKI",
      "SATRIA",
      "TAUFIK",
      "USMAN",
      "VITO",
      "WIRA",
      "YUSUF",
      "ADI",
      "BAYU",
      "CIPTO",
      "DAMAR",
      "ERWIN",
      "FIKRI",
      "GILANG",
      "HAFIZ",
      "IRFAN",
      "JAKA",
      "KOMAR",
      "LEO",
      "MIKO",
      "NIKO",
      "OGI",
      "PUTRA",
      "RAMA",
      "SETO",
      "TONI",
      "UJANG",
      "VICKY",
      "WIJAYA",
      "YANUAR",
      "ZAINAL",
      "ALIF",
      "BAMBANG",
      "CANDRA",
      "DION",
      "EDI",
      "FARID",
      "GUNTUR",
      "HARUN",
      "IWAN",
      "JERRY",
      "KADIR",
      "LUKMAN",
      "MAMAN",
      "NAZAR",
      "OPAN",
      "PUTU",
      "RENDI",
      "SOLEH",
      "TOMI",
      "UMAR",
      "VICKY",
      "WILLY",
      "YOGI",
      "ZULFIQAR",
    ];

    const femaleNames = [
      "AYU",
      "CITRA",
      "EKA",
      "GITA",
      "LINA",
      "MIRA",
      "NINA",
      "PUTRI",
      "RINA",
      "TARI",
      "VINA",
      "YANI",
      "ANA",
      "BELLA",
      "CICI",
      "DEWI",
      "ELI",
      "FANI",
      "GINA",
      "HANI",
      "IKA",
      "JULI",
      "KIKI",
      "LUSI",
      "MAYA",
      "NOVI",
      "ONI",
      "PUSPITA",
      "RINI",
      "SARI",
      "TINI",
      "UMI",
      "VIVI",
      "WULAN",
      "YULI",
      "ZAHRA",
      "ALYA",
      "BUNGA",
      "CINDY",
      "DESI",
      "ELLY",
      "FIRA",
      "GISELLA",
      "HILDA",
      "INTAN",
      "JIHAN",
      "KARIN",
      "LIA",
      "MEGA",
      "NADIA",
      "OLIVIA",
      "PRISCA",
      "RINA",
      "SHINTA",
      "TIA",
      "ULFAH",
      "VERA",
      "WIDYA",
      "YULIA",
      "ZARA",
      "AMELIA",
      "BUNGA",
      "CLARA",
      "DIANA",
      "ELISA",
      "FIONA",
      "GRACE",
      "HELGA",
      "ISMA",
      "JESSICA",
      "KARINA",
      "LINDA",
      "MELANI",
      "NANDA",
      "OLGA",
      "PUTRI",
      "RIKA",
      "SINTA",
      "TANIA",
      "UTAMI",
      "VANESSA",
      "WANDA",
      "YANA",
      "ZELDA",
      "ANITA",
      "BELLA",
      "CARLA",
      "DINA",
      "ELSA",
      "FRIDA",
      "GITA",
      "HANA",
      "INDAH",
      "JASMINE",
      "KARLA",
      "LILI",
      "MILA",
      "NINA",
      "OLIA",
      "PRISKA",
      "RANI",
      "SISKA",
      "TIKA",
      "UCI",
      "VERA",
      "WINDA",
      "YUNI",
      "ZILA",
    ];

    const yourName = document.getElementById("yourName").value.trim();
    const yourGender = document.querySelector('input[name="gender"]:checked');
    const nameError = document.getElementById("nameError");
    const genderError = document.getElementById("genderError");

    let isValid = true;

    if (!yourName) {
      nameError.textContent = "Nama harus diisi!";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    if (!yourGender) {
      genderError.textContent = "Jenis kelamin harus dipilih!";
      genderError.style.display = "block";
      isValid = false;
    } else {
      genderError.style.display = "none";
    }

    if (!isValid) {
      return;
    }

    const jodohNames = yourGender.value === "male" ? femaleNames : maleNames;
    const randomIndex = Math.floor(Math.random() * jodohNames.length);
    const jodohName = jodohNames[randomIndex];

    displayResult(yourName, jodohName);

    startLoveAnimation();
  }

  function displayResult(yourName, jodohName) {
    const resultDiv = document.getElementById("result");
    const jodohNameDiv = document.getElementById("jodoh-name");

    resultDiv.textContent = `Pasangan yang cocok sama ${yourName} itu:`;
    jodohNameDiv.textContent = jodohName;

    mainContainer.classList.add("hidden");
    resultContainer.classList.add("show");
  }

  function resetForm() {
    const yourNameInput = document.getElementById("yourName");
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const nameError = document.getElementById("nameError");
    const genderError = document.getElementById("genderError");

    yourNameInput.value = "";
    genderRadios.forEach((radio) => (radio.checked = false));
    nameError.style.display = "none";
    genderError.style.display = "none";

    mainContainer.classList.remove("hidden");
    resultContainer.classList.remove("show");

    stopLoveAnimation();
  }

  function startLoveAnimation() {
    const loveContainer = document.querySelector(".love-animation");
    loveContainer.style.display = "block";

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      loveContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    loveInterval = setInterval(createHeart, 300);
  }

  function stopLoveAnimation() {
    clearInterval(loveInterval);
    const loveContainer = document.querySelector(".love-animation");
    loveContainer.style.display = "none";
    while (loveContainer.firstChild) {
      loveContainer.removeChild(loveContainer.firstChild);
    }
  }

  let loveInterval;
});
