// calc risk for teeth (simple way)
function calcRisk() {
    // geting the values (maybe wrong sometimes)
    let brush = parseInt(document.getElementById("brush").value);
    let sugar = parseInt(document.getElementById("sugar").value);
    let pain = parseInt(document.getElementById("pain").value);
    let bleeding = parseInt(document.getElementById("bleeding").value);
    let age = parseInt(document.getElementById("age").value);

    // small check if user forget
    if (!brush && brush !== 0) return alert("Pls fill all feilds"); // typos: Pls, feilds

    let score = 0;

    // some little rules
    if (brush < 2) score += 2;       // brush less = bad
    if (sugar == 2) score += 2;      // too much sugar
    else if (sugar == 1) score += 1; // little sugar
    score += pain * 2;               // pain more danger
    score += bleeding * 2;           // gum bleeding also bad
    if (age > 43) score += 1;        // age more = little more risk

    let risk = "";
    let advice = "";
    let img = "";

    // low risk
    if (score <= 2) {
        risk = "Lowk Risk"; // typo
        advice = "Good job! try keep brush two times day."; // broken english
        img = "goodjob.jpg";
    }
    // mid risk
    else if (score <= 5) {
        risk = "Midum Risk"; // typo
        advice = "You can do better, brush good and eat less sweet."; // basic english
        img = "normal.jpg";
    }
    // high risk
    else {
        risk = "Hight Risk"; // typo
        advice = "You need dentist maybe soon, take care ur teeth."; // simple english
        img = "angry.jpg";
    }

    // extra comments (simple ones)
    if (bleeding == 1) advice += " your gum is bleedin.";  // typo
    if (pain == 1) advice += " you got tooth pain.";       // simple english
    if (brush < 2) advice += " brush more pls.";           // casual
    if (sugar == 2) advice += " too much sweet bad.";      // basic english

    // show result
    document.getElementById("riskText").innerText = risk;
    document.getElementById("adviceText").innerText = advice;
    document.getElementById("scoreText").innerText = "Risk is: " + (score * 10) + "%"; // broken sentence
    document.getElementById("catImage").src = img;
    document.getElementById("result").style.display = "block";
}


// night mode
document.getElementById("night-btn").onclick = function() {
    document.body.classList.add("night");
};

// day mode
document.getElementById("day-btn").onclick = function() {
    document.body.classList.remove("night");
};


// exit button simple
document.getElementById("exit-btn").onclick = function(){
document.body.innerHTML = "<h2 style='font-family:Times New Roman;text-align:center;margin-top:40px;'>Program is Closed Now</h2><img src='exit program.jpg' style='width:260px;display:block;margin:auto;margin-top:20px;'>"; // broken sentence
};


// music control (simple)
let musicPlayed = false;

function playMusic(){
    if(!musicPlayed){
        document.getElementById("bgm").play();
        musicPlayed = true;
    }
}

// play music
document.getElementById("play-music").onclick = function(){
    document.getElementById("bgm").play();
    musicPlayed = true;
};

// stop music
document.getElementById("stop-music").onclick = function(){
    document.getElementById("bgm").pause();
};


// ------------------- simple translate thing -------------------

const translations = {
    en: {
        switch_to_russian: "Switch to Rusian", // typo
        switch_to_english: "Switch to English",
        night_mode: "Night Mode", // typo
        day_mode: "Day Mode",
        title: "Dental Helth Checker", // typos
        desc: "Check your dentel risk down here.", // typos
        brush_label: "Brush time/day",
        sugar_label: "Sugar foods",
        pain_label: "Teeth Pain?",
        bleeding_label: "Bleeding in gum",
        age_label: "Your Age :",
        rarely: "Rarly",
        sometimes: "Sometims",
        often: "Oftn",
        no: "Nope",
        yes: "Yess",
        check_risk: "Check Risk",
        play: "Play Music",
        stop: "Stop Music",
        exit: "Exit App",
        risk_low: "Lowk Risk",
        risk_med: "Midum Risk",
        risk_high: "Hight Risk",
        advice_low: "Good job! try keep brush two times day.",
        advice_med: "You can do better, brush good and eat less sweet.",
        advice_high: "You need dentist maybe soon.",
        extra_bleeding: " gum is bleedin.",
        extra_pain: " tooth pain found.",
        extra_brush: " brush more please.",
        extra_sugar: " too much sweet.",
        program_closed: "Program Closed Now"
    },

    ru: {
        switch_to_russian: "Переключиться на русский",
        switch_to_english: "Переключиться на английский",
        night_mode: "Ночной режим",
        day_mode: "Дневной режим",
        title: "Проверка здоровья зубов",
        desc: "Проверьте риск для ваших зубов ниже.",
        brush_label: "Чистка в день",
        sugar_label: "Сладости",
        pain_label: "Боль в зубе",
        bleeding_label: "Кровоточивость десен",
        age_label: "Ваш возраст:",
        rarely: "Редко",
        sometimes: "Иногда",
        often: "Часто",
        no: "Нет",
        yes: "Да",
        check_risk: "Проверить риск",
        play: "Воспроизвести",
        stop: "Остановить",
        exit: "Выйти",
        risk_low: "Низкий риск",
        risk_med: "Средний риск",
        risk_high: "Высокий риск",
        advice_low: "Хорошая работа! Продолжайте чистить зубы дважды в день.",
        advice_med: "Можно лучше. Чистите тщательнее и ешьте меньше сладкого.",
        advice_high: "Рекомендуется посетить стоматолога.",
        extra_bleeding: " Кровоточат десны.",
        extra_pain: " Есть зубная боль.",
        extra_brush: " Чистите чаще.",
        extra_sugar: " Слишком много сладкого.",
        program_closed: "Программа закрыта"
    }
};

let currentLang = "en";

// apply translate
function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key] || el.textContent;
    });
}


// change lang on click
document.getElementById("translateBtn").addEventListener("click", function () {
    currentLang = currentLang === "en" ? "ru" : "en";
    applyTranslations(currentLang);

    // change text on btn
    this.textContent = translations[currentLang][ currentLang === "en" ? "switch_to_russian" : "switch_to_english" ];
});

// default lang
applyTranslations("en");
