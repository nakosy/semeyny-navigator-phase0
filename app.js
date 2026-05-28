const STORAGE_KEY = "semeynyNavigatorPhase0";

const zones = [
  {
    id: "Z1",
    title: "Коммуникация и умение слышать",
    strength: "Вы умеете слышать друг друга и говорить о важном",
    problem: "вам бывает трудно по-настоящему услышать друг друга",
    artifact: "вы соберёте правила трудного разговора без крика и молчания"
  },
  {
    id: "Z2",
    title: "Конфликты и примирение",
    strength: "Вы умеете ссориться, не разрушая связь, и мириться",
    problem: "ссоры часто идут по кругу и не приводят к решению",
    artifact: "вы составите протокол ссоры: как остановиться, вернуться и договориться"
  },
  {
    id: "Z3",
    title: "Быт, роли и нагрузка",
    strength: "Распределение нагрузки и быта вас в целом устраивает",
    problem: "распределение быта и нагрузки ощущается несправедливым",
    artifact: "вы пересоберёте бытовые роли и договорённости о деньгах"
  },
  {
    id: "Z4",
    title: "Близость и секс",
    strength: "В физической близости вы чувствуете контакт и открытость",
    problem: "в близости накопилось напряжение или недосказанность",
    artifact: "вы начнёте разговор о близости без давления и взаимных обвинений",
    sensitive: true
  },
  {
    id: "Z5",
    title: "Эмоциональный контакт и поддержка",
    strength: "Вы чувствуете эмоциональную опору друг в друге",
    problem: "вам стало не хватать тепла и ощущения, что вы команда",
    artifact: "вы вернёте короткие ритуалы контакта и поддержки"
  },
  {
    id: "Z6",
    title: "Доверие и надёжность",
    strength: "Между вами есть доверие и ощущение надёжности",
    problem: "доверие или ощущение безопасности ослабли",
    artifact: "вы определите, какие обещания и границы нужно восстановить",
    sensitive: true
  },
  {
    id: "Z7",
    title: "Ценности, ожидания и будущее",
    strength: "Вы похоже смотрите на главное и на будущее",
    problem: "вы по-разному представляете, куда движетесь",
    artifact: "вы сверите ожидания о семье, деньгах, детях и ближайших годах"
  }
];

const items = [
  ["Z1-1", "Z1", "Когда я делюсь чем-то важным, я чувствую, что партнёр действительно слушает."],
  ["Z1-2", "Z1", "Мы можем говорить о трудных темах, не уходя в молчание или крик."],
  ["Z1-3", "Z1", "Я часто не понимаю, что партнёр имеет в виду на самом деле.", true],
  ["Z1-4", "Z1", "Партнёр замечает, когда мне плохо, даже если я не говорю об этом прямо."],
  ["Z1-5", "Z1", "Повседневные дела мы обсуждаем спокойно и по делу."],
  ["Z2-1", "Z2", "После ссоры мы умеем помириться и вернуться к нормальному общению."],
  ["Z2-2", "Z2", "Наши ссоры часто идут по одному кругу и ничем не заканчиваются.", true],
  ["Z2-3", "Z2", "В споре я могу сказать, что чувствую, без обвинений."],
  ["Z2-4", "Z2", "В ссоре кто-то из нас переходит на личности или припоминает старое.", true],
  ["Z2-5", "Z2", "Даже когда мы злимся друг на друга, я не сомневаюсь, что мы на одной стороне."],
  ["Z3-1", "Z3", "Распределение домашних дел и обязанностей кажется мне справедливым."],
  ["Z3-2", "Z3", "Я чувствую, что несу на себе больше партнёра, и это меня тяготит.", true],
  ["Z3-3", "Z3", "Мы можем спокойно переобсудить, кто за что отвечает, если что-то перестало работать."],
  ["Z3-4", "Z3", "Решения о деньгах мы принимаем способом, который устраивает нас обоих."],
  ["Z3-5", "Z3", "Бытовые вопросы регулярно становятся поводом для напряжения.", true],
  ["Z4-1", "Z4", "Меня устраивает то, как складывается наша физическая близость."],
  ["Z4-2", "Z4", "Мне трудно говорить с партнёром о том, чего я хочу в интимной жизни.", true],
  ["Z4-3", "Z4", "Я чувствую, что желанна/желанен для партнёра."],
  ["Z4-4", "Z4", "В последнее время близость стала источником напряжения или избегания.", true],
  ["Z4-5", "Z4", "О сексе мы можем говорить открыто, без неловкости и обид."],
  ["Z5-1", "Z5", "Когда мне тяжело, я знаю, что могу опереться на партнёра."],
  ["Z5-2", "Z5", "Рядом с партнёром я всё чаще чувствую себя одиноко.", true],
  ["Z5-3", "Z5", "Мы находим время побыть вдвоём, а не только решать дела."],
  ["Z5-4", "Z5", "Партнёр радуется моим успехам как своим."],
  ["Z5-5", "Z5", "Я чувствую, что меня принимают таким/такой, какой/какая я есть."],
  ["Z6-1", "Z6", "Я доверяю партнёру и не сомневаюсь в его/её верности."],
  ["Z6-2", "Z6", "Я иногда проверяю партнёра или ищу подтверждений, что мне не лгут.", true],
  ["Z6-3", "Z6", "Если партнёр что-то пообещал, я могу на это рассчитывать."],
  ["Z6-4", "Z6", "Есть темы, которые я скрываю от партнёра, опасаясь реакции.", true],
  ["Z6-5", "Z6", "Открываясь партнёру, я чувствую себя в безопасности."],
  ["Z7-1", "Z7", "Мы примерно одинаково представляем нашу жизнь через несколько лет."],
  ["Z7-2", "Z7", "Я всё чаще чувствую, что мы хотим от жизни разного.", true],
  ["Z7-3", "Z7", "В главных вопросах — деньги, дети, семья, приоритеты — мы сходимся."],
  ["Z7-4", "Z7", "У нас есть общие цели, к которым мы движемся вместе."],
  ["Z7-5", "Z7", "Я не уверен/уверена, что наши ожидания от брака совпадают.", true]
].map(([id, zone, text, reverse = false]) => ({ id, zone, text, reverse }));

const safetyItems = [
  {
    id: "S1",
    text: "Бывает, что я меняю своё поведение из страха перед реакцией партнёра.",
    triggers: (value) => value >= 4
  },
  {
    id: "S2",
    text: "Рядом с партнёром я чувствую себя в физической безопасности.",
    triggers: (value) => value <= 2
  },
  {
    id: "S3",
    text: "Партнёр контролирует, с кем я общаюсь, куда хожу или как трачу деньги.",
    triggers: (value) => value >= 4
  }
];

const app = {
  step: "intro",
  activePartner: "A",
  partnerA: {},
  partnerB: {},
  contact: {},
  currentItemIndex: 0,
  events: loadStore().events || []
};

const els = {
  diagnosticApp: document.getElementById("diagnosticApp"),
  diagnosticContent: document.getElementById("diagnosticContent"),
  stepEyebrow: document.getElementById("stepEyebrow"),
  stepTitle: document.getElementById("stepTitle"),
  progressBar: document.getElementById("progressBar")
};

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveStore(patch) {
  const next = { ...loadStore(), ...patch };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

function track(type, detail = {}) {
  app.events.push({ type, detail, createdAt: new Date().toISOString() });
  saveStore({ events: app.events });
}

function setHeader(eyebrow, title, progress) {
  els.stepEyebrow.textContent = eyebrow;
  els.stepTitle.textContent = title;
  els.progressBar.style.width = `${progress}%`;
}

function openDiagnostic() {
  els.diagnosticApp.hidden = false;
  document.body.classList.add("modal-open");
  app.step = "intro";
  track("diagnostic_start");
  render();
}

function closeDiagnostic() {
  els.diagnosticApp.hidden = true;
  document.body.classList.remove("modal-open");
}

function getPartnerAnswers(partner) {
  return partner === "A" ? app.partnerA : app.partnerB;
}

function setPartnerAnswers(partner, answers) {
  if (partner === "A") {
    app.partnerA = answers;
  } else {
    app.partnerB = answers;
  }
}

function renderIntro() {
  setHeader("Карта отношений", "С чего начать? С того, чтобы увидеть, где вы на самом деле.", 5);
  els.diagnosticContent.innerHTML = `
    <div class="copy-stack">
      <p>Большинство пар спорят не о посуде и не о деньгах. Они спорят о том, что стоит за посудой и деньгами — об ожиданиях, о которых ни разу не договорились вслух.</p>
      <p>«Карта отношений» — это диагностика, которую вы и партнёр проходите по отдельности. Каждый отвечает честно, не подстраиваясь под другого. Потом вы получаете общий отчёт: где вы совпадаете, где расходитесь и какие три зоны стоит разобрать в первую очередь.</p>
    </div>
    <div class="form-panel">
      <label>Ваше имя или инициалы
        <input id="leadName" type="text" autocomplete="name" placeholder="Например, Анна" />
      </label>
      <label>Email для отчёта
        <input id="leadEmail" type="email" autocomplete="email" placeholder="name@example.com" />
      </label>
      <label>Телефон
        <input id="leadPhone" type="tel" autocomplete="tel" placeholder="+7..." />
      </label>
    </div>
    <div class="cta-row">
      <button class="primary-button" data-action="save-contact">Начать диагностику</button>
      <span class="small-copy">15 минут · бесплатно · отвечаете отдельно друг от друга</span>
    </div>
  `;
}

function renderPrivacy() {
  setHeader("Перед началом", "Это останется между вами", 12);
  els.diagnosticContent.innerHTML = `
    <div class="copy-stack">
      <p>Ваши ответы видите только вы. Партнёр не получает доступ к вашим конкретным ответам — только к общему сравнению в итоговом отчёте, и наоборот.</p>
      <p>Данные диагностики используются только для формирования отчёта и связи с вами. Мы не передаём ответы третьим лицам и не используем их для рекламы.</p>
    </div>
    <div class="cta-row">
      <button class="secondary-button" data-action="back-intro">Назад</button>
      <button class="primary-button" data-action="begin-partner" data-partner="A">Партнёр A отвечает</button>
    </div>
  `;
}

function renderQuestion() {
  const answers = getPartnerAnswers(app.activePartner);
  const questionList = [...items, ...safetyItems];
  const question = questionList[app.currentItemIndex];
  const total = questionList.length;
  const savedValue = answers[question.id] || "";
  const progress = 15 + Math.round((app.currentItemIndex / total) * 62);

  setHeader(
    `Партнёр ${app.activePartner} · вопрос ${app.currentItemIndex + 1} из ${total}`,
    question.zone ? zoneById(question.zone).title : "Вопрос безопасности",
    progress
  );

  els.diagnosticContent.innerHTML = `
    <fieldset class="scale-panel">
      <legend>${question.text}</legend>
      <div class="scale-grid">
        ${[1, 2, 3, 4, 5]
          .map(
            (value) => `
              <label class="scale-option ${Number(savedValue) === value ? "selected" : ""}">
                <input type="radio" name="answer" value="${value}" ${Number(savedValue) === value ? "checked" : ""} />
                <span>${value}</span>
                <small>${scaleLabel(value)}</small>
              </label>
            `
          )
          .join("")}
      </div>
    </fieldset>
    <div class="cta-row">
      <button class="secondary-button" data-action="previous-question" ${app.currentItemIndex === 0 ? "disabled" : ""}>Назад</button>
      <button class="primary-button" data-action="next-question">${app.currentItemIndex === total - 1 ? "Завершить" : "Дальше"}</button>
    </div>
  `;
}

function renderPartnerSwitch() {
  setHeader("Партнёр A готов", "Теперь партнёр B отвечает отдельно", 50);
  els.diagnosticContent.innerHTML = `
    <div class="copy-stack">
      <p>Спасибо. Теперь передайте устройство партнёру или отправьте ему ссылку на эту страницу. В реальном запуске здесь будет отдельная персональная ссылка.</p>
      <p>Конкретные ответы Партнёра A не будут показаны Партнёру B.</p>
    </div>
    <button class="primary-button" data-action="begin-partner" data-partner="B">Партнёр B отвечает</button>
  `;
}

function renderSafetyReferral(triggeredBy) {
  setHeader("Спасибо за честные ответы", "Сейчас может быть важна не программа, а поддержка и безопасность", 100);
  els.diagnosticContent.innerHTML = `
    <div class="referral-block">
      <p>Судя по ответам, мы не хотим предлагать курс там, где нужнее живой человек, который выслушает и поможет. Это не диагноз и не вывод о ваших отношениях.</p>
      <ul>
        <li><strong>112</strong> — единый номер экстренных служб.</li>
        <li><strong>8 800 7000 600</strong> — телефон доверия для женщин, пострадавших от домашнего насилия.</li>
        <li><strong>8 (499) 977-20-10</strong> — ГБУ «Кризисный центр помощи женщинам и детям» в Москве.</li>
        <li><strong>051 / 8 (495) 051</strong> — Московская служба психологической помощи.</li>
      </ul>
      <p class="small-copy">Если вам нужна не экстренная помощь, а просто с кем-то поговорить о том, что происходит, напишите нам на hello@semeyny-navigator.ru.</p>
    </div>
    <button class="secondary-button" data-action="close-diagnostic">Закрыть</button>
  `;
}

function renderReport() {
  const report = buildReport();
  track("diagnostic_completion_both", { topZones: report.priorities.map((zone) => zone.id) });
  saveStore({ lastReport: report, lastContact: app.contact });
  setHeader("Ваша карта готова", "Вот что показала диагностика отношений", 100);

  const strengths = report.zones.filter((zone) => zone.quadrant === "support");
  const divergences = report.zones.filter((zone) => zone.quadrant === "divergence" || zone.quadrant === "hidden");

  els.diagnosticContent.innerHTML = `
    <div class="report-grid">
      <section class="report-section">
        <h3>Что это значит</h3>
        <p>Это карта, а не диагноз. Все выводы основаны только на ваших ответах и помогают понять, с каких разговоров стоит начать.</p>
      </section>
      <section class="report-section">
        <h3>На что вы можете опираться</h3>
        ${strengths.length ? strengths.map(renderReportLine).join("") : "<p>Сейчас явных зон опоры по порогам не выделилось. Это не значит, что их нет — просто напряжение распределено шире.</p>"}
      </section>
      <section class="report-section">
        <h3>Где вы смотрите по-разному</h3>
        ${divergences.length ? divergences.map(renderReportLine).join("") : "<p>Сильных расхождений по зонам не видно. Главный фокус — общие зоны роста.</p>"}
      </section>
      <section class="report-section priority-section">
        <h3>Три зоны, с которых стоит начать</h3>
        ${report.priorities.map((zone, index) => `
          <article class="priority-card">
            <span>${index + 1}</span>
            <div>
              <h4>${zone.title}</h4>
              <p>${zone.artifact}.</p>
            </div>
          </article>
        `).join("")}
        ${report.teachingNote ? `<p class="small-copy">${report.teachingNote}</p>` : ""}
      </section>
      <section class="report-section next-step">
        <h3>Что дальше</h3>
        <p>Карта показывает, где вы. Программа «Перезагрузка брака» — это как пройти путь от напряжения к договорённостям, по неделе на каждую зону.</p>
        <button class="primary-button" data-action="reach-deposit">Узнать о программе и внести депозит</button>
      </section>
    </div>
  `;
}

function renderDeposit() {
  track("deposit_page_reach");
  setHeader("Первая группа", "Возвратный депозит фиксирует место", 100);
  els.diagnosticContent.innerHTML = `
    <div class="deposit-layout">
      <div class="price-card">
        <span class="metric-label">Депозит</span>
        <strong>2 500 ₽</strong>
        <p>Возвращается по запросу до старта группы. Полная цена тестового предложения: 29 900 ₽ за пару.</p>
      </div>
      <form class="form-panel" id="depositForm">
        <label>Имя
          <input name="name" required value="${escapeHtml(app.contact.name || "")}" />
        </label>
        <label>Email
          <input name="email" type="email" required value="${escapeHtml(app.contact.email || "")}" />
        </label>
        <label>Телефон
          <input name="phone" required value="${escapeHtml(app.contact.phone || "")}" />
        </label>
        <button class="primary-button" type="submit">Зафиксировать намерение оплатить</button>
        <p class="small-copy">После отправки заявки мы пришлём безопасную ссылку на оплату депозита и условия возврата.</p>
      </form>
    </div>
  `;
}

function renderThanks() {
  setHeader("Заявка сохранена", "Мы пришлём ссылку на оплату депозита", 100);
  els.diagnosticContent.innerHTML = `
    <div class="copy-stack">
      <p>Спасибо. Мы свяжемся с вами, чтобы подтвердить место в первой группе и отправить ссылку на оплату возвратного депозита.</p>
      <button class="primary-button" data-action="close-diagnostic">Вернуться на страницу</button>
    </div>
  `;
}

function render() {
  const renderers = {
    intro: renderIntro,
    privacy: renderPrivacy,
    question: renderQuestion,
    partnerSwitch: renderPartnerSwitch,
    report: renderReport,
    deposit: renderDeposit,
    thanks: renderThanks
  };
  renderers[app.step]();
}

function scaleLabel(value) {
  return ["совсем нет", "скорее нет", "частично", "скорее да", "полностью"][value - 1];
}

function zoneById(id) {
  return zones.find((zone) => zone.id === id);
}

function adjustedAnswer(item, answers) {
  const value = Number(answers[item.id]);
  return item.reverse ? 6 - value : value;
}

function zoneScore(zoneId, answers) {
  const zoneItems = items.filter((item) => item.zone === zoneId);
  const mean = zoneItems.reduce((sum, item) => sum + adjustedAnswer(item, answers), 0) / zoneItems.length;
  return ((mean - 1) / 4) * 100;
}

function zoneGap(zoneId) {
  const zoneItems = items.filter((item) => item.zone === zoneId);
  const rawMeanDiff =
    zoneItems.reduce((sum, item) => {
      const a = adjustedAnswer(item, app.partnerA);
      const b = adjustedAnswer(item, app.partnerB);
      return sum + Math.abs(a - b);
    }, 0) / zoneItems.length;
  return (rawMeanDiff / 4) * 100;
}

function classify(level, gap) {
  if (level >= 70 && gap < 15) return "support";
  if (level < 50 && gap < 15) return "sharedGrowth";
  if (level < 50 && gap >= 25) return "divergence";
  if (level >= 70 && gap >= 25) return "hidden";
  if (gap >= 25) return "divergence";
  if (level >= 70) return "support";
  return "sharedGrowth";
}

function buildReport() {
  const scoredZones = zones.map((zone) => {
    const partnerAScore = zoneScore(zone.id, app.partnerA);
    const partnerBScore = zoneScore(zone.id, app.partnerB);
    const level = (partnerAScore + partnerBScore) / 2;
    const gap = zoneGap(zone.id);
    const priority = 0.6 * (100 - level) + 0.4 * gap;
    const quadrant = classify(level, gap);
    return { ...zone, partnerAScore, partnerBScore, level, gap, priority, quadrant };
  });

  let priorities = scoredZones
    .filter((zone) => zone.quadrant !== "support")
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 3);

  if (!priorities.length) {
    priorities = scoredZones.sort((a, b) => b.priority - a.priority).slice(0, 3);
  }

  const hasSensitiveFirst = priorities[0] && priorities[0].sensitive;
  const sharedGrowth = priorities.find((zone) => zone.quadrant === "sharedGrowth" && !zone.sensitive);
  let teachingNote = "";

  if (hasSensitiveFirst && sharedGrowth) {
    priorities = [sharedGrowth, ...priorities.filter((zone) => zone.id !== sharedGrowth.id)];
    teachingNote =
      "Мы сознательно начинаем не с самой болезненной зоны, а с той, где результат придёт быстрее. Так у пары появляется опора перед более трудным разговором.";
  }

  return { zones: scoredZones, priorities, teachingNote };
}

function renderReportLine(zone) {
  const templates = {
    support: `${zone.strength}. Здесь вы оба чувствуете опору — и это ресурс для более трудных зон.`,
    sharedGrowth: `Вы оба отметили, что ${zone.problem}. Хорошая новость в том, что вы видите это похоже.`,
    divergence: "Эту зону вы оцениваете по-разному. Это не значит, что кто-то прав, а кто-то нет — чаще всего именно такие расхождения и становятся источником повторяющихся ссор.",
    hidden: "На первый взгляд в этой зоне многое в порядке, но ответы заметно расходятся. На это стоит обратить внимание, пока напряжение не накопилось."
  };

  return `
    <article class="zone-result">
      <div>
        <h4>${zone.title}</h4>
        <p>${templates[zone.quadrant]}</p>
      </div>
      <span>${Math.round(zone.level)} / ${Math.round(zone.gap)}</span>
    </article>
  `;
}

function safetyTriggered() {
  for (const partner of ["A", "B"]) {
    const answers = getPartnerAnswers(partner);
    const fired = safetyItems.some((item) => item.triggers(Number(answers[item.id])));
    if (fired) return partner;
  }
  return null;
}

function saveCurrentAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return false;
  const question = [...items, ...safetyItems][app.currentItemIndex];
  const answers = { ...getPartnerAnswers(app.activePartner), [question.id]: Number(selected.value) };
  setPartnerAnswers(app.activePartner, answers);
  return true;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "start-diagnostic") openDiagnostic();
  if (action === "close-diagnostic") closeDiagnostic();
  if (action === "save-contact") {
    app.contact = {
      name: document.getElementById("leadName").value.trim(),
      email: document.getElementById("leadEmail").value.trim(),
      phone: document.getElementById("leadPhone").value.trim()
    };
    app.step = "privacy";
    render();
  }
  if (action === "back-intro") {
    app.step = "intro";
    render();
  }
  if (action === "begin-partner") {
    app.activePartner = target.dataset.partner;
    app.currentItemIndex = 0;
    app.step = "question";
    render();
  }
  if (action === "next-question") {
    if (!saveCurrentAnswer()) return;
    const total = items.length + safetyItems.length;
    if (app.currentItemIndex < total - 1) {
      app.currentItemIndex += 1;
      render();
      return;
    }
    if (app.activePartner === "A") {
      app.step = "partnerSwitch";
      render();
      return;
    }
    const triggeredBy = safetyTriggered();
    if (triggeredBy) {
      track("safety_gate", { partner: triggeredBy });
      renderSafetyReferral(triggeredBy);
    } else {
      app.step = "report";
      render();
    }
  }
  if (action === "previous-question") {
    saveCurrentAnswer();
    app.currentItemIndex = Math.max(0, app.currentItemIndex - 1);
    render();
  }
  if (action === "reach-deposit") {
    app.step = "deposit";
    render();
  }
  if (action === "show-inside-step") {
    const selectedStep = target.dataset.step;
    document.querySelectorAll(".step-tab").forEach((tab) => {
      const isActive = tab.dataset.step === selectedStep;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
    document.querySelectorAll("[data-step-panel]").forEach((panel) => {
      const isActive = panel.dataset.stepPanel === selectedStep;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  }
});

document.addEventListener("change", (event) => {
  if (!event.target.matches('input[name="answer"]')) return;
  document.querySelectorAll(".scale-option").forEach((option) => option.classList.remove("selected"));
  event.target.closest(".scale-option").classList.add("selected");
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "depositForm") {
    event.preventDefault();
    const formData = new FormData(event.target);
    track("deposit_intent", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone")
    });
    app.step = "thanks";
    render();
  }

  if (event.target.id === "checklistForm") {
    event.preventDefault();
    const formData = new FormData(event.target);
    track("checklist_email_capture", { email: formData.get("email") });
    const status = document.getElementById("checklistStatus");
    status.textContent = "Готово. Мы отправим чек-лист на указанный email.";
    event.target.reset();
  }
});
