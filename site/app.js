import { META, FIXED_MEALS, DRESSING, DAYS, PREP, PREP_NOTES, SHOPPING } from './data.js';

/* ============================ helpers ============================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ft = (n) => n.toLocaleString('hu-HU') + ' Ft';
const num = (n) => n.toLocaleString('hu-HU');

const el = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const ICON = {
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.2l2.5 12.4a1.6 1.6 0 0 0 1.6 1.3h8.9a1.6 1.6 0 0 0 1.6-1.2L21 7H5.1"/></svg>',
  sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>'
};

/* ============================ chrome ============================ */

function renderChrome(active) {
  const topbar = $('.topbar');
  if (topbar) {
    topbar.innerHTML = `
      <a class="brand" href="index.html">
        <span class="brand__mark">Mediterrán</span>
        <span class="brand__sub">${META.subtitle}</span>
      </a>
      <span class="topbar__spacer"></span>
      <button class="icon-btn theme-toggle" type="button" aria-label="Világos / sötét téma">
        ${ICON.sun}${ICON.moon}
      </button>`;
  }

  const tabbar = $('.tabbar');
  if (tabbar) {
    const tab = (href, key, icon, label) => `
      <a class="tab" href="${href}" ${active === key ? 'aria-current="page"' : ''}>
        ${icon}<span>${label}</span>
      </a>`;
    tabbar.innerHTML =
      tab('index.html', 'recipes', ICON.book, 'Receptek') +
      tab('bevasarlolista.html', 'shopping', ICON.cart, 'Bevásárlólista');
  }

  initTheme();
}

function initTheme() {
  const KEY = 'mp-theme';
  const saved = localStorage.getItem(KEY);
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;

  $('.theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(KEY, next);
  });
}

/* ============================ recipe rendering ============================ */

function ingredientList(meal) {
  const rows = meal.ingredients.map((i) => `
    <li class="ing__item${i.highlight ? ' ing__item--hl' : ''}">
      <span class="ing__name">${i.name}</span>
      <span class="ing__amount">${i.amount}</span>
      <span class="ing__meta"><span>${i.product}</span><span>${ft(i.price)}</span></span>
    </li>`).join('');

  return `
    <ul class="ing">${rows}</ul>
    <div class="ing__total"><span>Adag összesen</span><b>${ft(meal.price)}</b></div>`;
}

function stepList(meal) {
  return `<ol class="steps">${meal.steps.map((s) => `
    <li class="steps__item">
      ${s.label ? `<span class="steps__label">${s.label}</span>` : ''}${s.text}
    </li>`).join('')}</ol>`;
}

function noteBlocks(meal) {
  if (!meal.notes?.length) return '';
  return meal.notes.map((n) => `
    <div class="note">
      ${n.label ? `<span class="note__label">${n.label}</span>` : ''}
      <p>${n.text}</p>
    </div>`).join('');
}

function nutritionGrid(meal) {
  const n = meal.nutrition;
  const tile = (val, key, pct, lead) => `
    <div class="nutri__tile${lead ? ' nutri__tile--lead' : ''}">
      <span class="nutri__val">${val}</span>
      <span class="nutri__key">${key}</span>
      ${pct != null ? `<span class="nutri__pct">${pct}% / nap</span>` : ''}
    </div>`;

  return `
    <div class="nutri">
      ${tile(num(n.kcal), 'kcal', n.kcalPct, true)}
      ${tile(n.protein + ' g', 'fehérje', n.proteinPct)}
      ${tile(n.carb + ' g', 'szénhidrát', null)}
      ${tile(n.fat + ' g', 'zsír', null)}
      ${tile(n.fiber + ' g', 'rost', n.fiberPct)}
    </div>
    <p class="micros"><b>Kiemelt mikrotápanyagok</b>${meal.micros}</p>`;
}

function mealCard(meal, dayKey) {
  const isDinner = meal.n === 4;
  const dressingChip = meal.dressing
    ? `<span class="chip ${meal.dressing === 'joghurtos' ? 'chip--olive' : 'chip--terra'}">${meal.dressing === 'joghurtos' ? 'joghurtos öntet' : 'citromos öntet'}</span>`
    : '';

  return `
    <article class="meal${isDinner ? ' meal--dinner' : ''}" id="${dayKey}-${meal.id}">
      <header class="meal__head">
        <div class="meal__kickerrow">
          <span class="kicker"><span class="kicker__num">${meal.n}</span>${meal.kicker.replace(/^\d+\.\s*/, '')}</span>
          ${meal.tag ? `<span class="chip">${meal.tag}</span>` : ''}
        </div>
        <h2 class="meal__title">${meal.title}</h2>
        <p class="meal__title-en">${meal.titleEn}</p>
        <div class="meal__facts">
          <span class="chip">⏱ ${meal.time}</span>
          <span class="chip">${ft(meal.price)}</span>
          <span class="chip">${num(meal.nutrition.kcal)} kcal</span>
          <span class="chip">${meal.nutrition.protein} g fehérje</span>
          ${dressingChip}
        </div>
      </header>

      <section class="sec">
        <h3 class="sec__title">Hozzávalók <span>${meal.ingredients.length} tétel</span></h3>
        ${ingredientList(meal)}
      </section>

      <section class="sec">
        <h3 class="sec__title">Elkészítés <span>${meal.time}</span></h3>
        ${stepList(meal)}
        ${noteBlocks(meal)}
      </section>

      <section class="sec">
        <h3 class="sec__title">Tápanyag</h3>
        ${nutritionGrid(meal)}
      </section>
    </article>`;
}

function dressingCard() {
  const rows = DRESSING.ingredients.map((i) =>
    `<li><span>${i.name}</span><b>${i.amount}</b></li>`).join('');
  return `
    <div class="dressing">
      <h3 class="dressing__title">${DRESSING.title}</h3>
      <p class="dressing__sub">${DRESSING.time} · ${ft(DRESSING.price)} · turmixgép</p>
      <ul class="dressing__list">${rows}</ul>
      <p>${DRESSING.text}</p>
      <p class="prep__note">${DRESSING.note}</p>
    </div>`;
}

function dayTotals(day) {
  const all = [...FIXED_MEALS, day.dinner];
  const sum = (fn) => all.reduce((a, m) => a + fn(m), 0);
  return {
    kcal: sum((m) => m.nutrition.kcal),
    protein: sum((m) => m.nutrition.protein),
    carb: sum((m) => m.nutrition.carb),
    fat: sum((m) => m.nutrition.fat),
    fiber: sum((m) => m.nutrition.fiber),
    price: sum((m) => m.price)
  };
}

function daySlide(day, index) {
  const t = dayTotals(day);
  const meals = [...FIXED_MEALS, day.dinner];

  const navBtns = meals.map((m) => `
    <button class="mealnav__btn" type="button" data-target="${day.key}-${m.id}">
      <span class="mealnav__n">${m.n}</span>${m.short || 'Vacsora'}
    </button>`).join('');

  const cards = meals.map((m) => {
    const card = mealCard(m, day.key);
    // the yoghurt dressing is used by three dinners — show the recipe with them
    return m.n === 4 && m.dressing === 'joghurtos' ? dressingCard() + card : card;
  }).join('');

  return `
    <section class="slide" id="day-${day.key}" data-day="${day.key}" role="tabpanel" aria-label="${day.name}" tabindex="0">
      <div class="slide__inner">
        <header class="dayhead">
          <h1 class="dayhead__name">${day.name}</h1>
          <p class="dayhead__count">${index + 1} / ${DAYS.length} nap</p>
        </header>

        <nav class="mealnav" aria-label="Étkezések">${navBtns}</nav>

        <div class="daytotal">
          <p class="daytotal__title">A nap összesen — 4 étkezés</p>
          <div class="daytotal__grid">
            <div class="daytotal__cell"><span class="daytotal__val">${num(t.kcal)}</span><span class="daytotal__key">kcal</span></div>
            <div class="daytotal__cell"><span class="daytotal__val">${t.protein} g</span><span class="daytotal__key">fehérje</span></div>
            <div class="daytotal__cell"><span class="daytotal__val">${t.carb} g</span><span class="daytotal__key">szénhidrát</span></div>
            <div class="daytotal__cell"><span class="daytotal__val">${t.fat} g</span><span class="daytotal__key">zsír</span></div>
            <div class="daytotal__cell"><span class="daytotal__val">${t.fiber} g</span><span class="daytotal__key">rost</span></div>
            <div class="daytotal__cell"><span class="daytotal__val">${num(t.price)}</span><span class="daytotal__key">Ft</span></div>
          </div>
          <p class="daytotal__note">Cél: 2 200–2 300 kcal · 160–175 g fehérje. Deficit ~274 kcal/nap → heti ~0,25 kg.</p>
        </div>

        ${cards}

        <div class="slidefoot">
          <p class="slidefoot__title">Heti előkészítés — 3 perc</p>
          <ul class="prep">
            ${PREP.map((p) => `
              <li>
                <span class="prep__when">${p.when}</span>
                <div class="prep__title">${p.title}</div>
                <div class="prep__text">${p.text}</div>
              </li>`).join('')}
          </ul>
          ${PREP_NOTES.map((n) => `<p class="prep__note">${n}</p>`).join('')}
        </div>
      </div>
    </section>`;
}

/* ============================ carousel ============================ */

function initRecipes() {
  const track = $('.track');
  const pillbox = $('.daypills');

  track.innerHTML = DAYS.map(daySlide).join('');

  pillbox.innerHTML = DAYS.map((d, i) => `
    <button class="daypill" type="button" role="tab" data-index="${i}"
            aria-selected="${i === 0}" aria-controls="day-${d.key}">
      <span class="pill-long">${d.name}</span><span class="pill-short">${d.short}</span>
    </button>`).join('');

  const prev = $('.daynav--prev');
  const next = $('.daynav--next');
  const pills = $$('.daypill', pillbox);
  const slides = $$('.slide', track);

  let index = 0;

  const goTo = (i, smooth = true) => {
    i = Math.max(0, Math.min(DAYS.length - 1, i));
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  };

  const setActive = (i) => {
    if (i === index) return;
    index = i;
    pills.forEach((p, n) => p.setAttribute('aria-selected', String(n === i)));
    prev.disabled = i === 0;
    next.disabled = i === DAYS.length - 1;
    updateStats(i);
    pills[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    history.replaceState(null, '', '#' + DAYS[i].key);
    document.title = `${DAYS[i].name} — Receptek · Mediterrán rendszer`;
  };

  const updateStats = (i) => {
    const t = dayTotals(DAYS[i]);
    $('.daybar__meta').innerHTML = `
      <span class="stat"><b>${num(t.kcal)}</b> kcal</span><span class="stat__dot">·</span>
      <span class="stat"><b>${t.protein} g</b> fehérje</span><span class="stat__dot">·</span>
      <span class="stat"><b>${t.fiber} g</b> rost</span><span class="stat__dot">·</span>
      <span class="stat stat--accent"><b>${num(t.price)} Ft</b></span>`;
  };

  // scroll → active index
  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const w = track.clientWidth;
      if (w) setActive(Math.round(track.scrollLeft / w));
      ticking = false;
    });
  }, { passive: true });

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  pills.forEach((p) => p.addEventListener('click', () => goTo(Number(p.dataset.index))));

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '')) return;
    if (e.key === 'ArrowLeft') { goTo(index - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { goTo(index + 1); e.preventDefault(); }
  });

  // meal quick-nav + scroll spy, per slide
  slides.forEach((slide) => {
    const nav = $('.mealnav', slide);
    const btns = $$('.mealnav__btn', nav);
    const targets = btns.map((b) => $('#' + CSS.escape(b.dataset.target), slide));

    btns.forEach((b, i) => b.addEventListener('click', () => {
      const top = targets[i].offsetTop - nav.offsetHeight - 8;
      slide.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }));

    let spying = false;
    slide.addEventListener('scroll', () => {
      if (spying) return;
      spying = true;
      requestAnimationFrame(() => {
        nav.classList.toggle('is-stuck', slide.scrollTop > nav.offsetTop);
        const line = slide.scrollTop + nav.offsetHeight + 40;
        let current = 0;
        targets.forEach((t, i) => { if (t.offsetTop <= line) current = i; });
        btns.forEach((b, i) => b.setAttribute('aria-current', String(i === current)));
        spying = false;
      });
    }, { passive: true });

    btns[0].setAttribute('aria-current', 'true');
  });

  // opening day: URL hash, else today
  const hash = location.hash.replace('#', '');
  const fromHash = DAYS.findIndex((d) => d.key === hash);
  const today = (new Date().getDay() + 6) % 7;
  const start = fromHash >= 0 ? fromHash : today;

  requestAnimationFrame(() => {
    goTo(start, false);
    index = -1;
    setActive(start);
  });

  addEventListener('resize', () => goTo(index, false));
}

/* ============================ shopping list ============================ */

const STORE_KEY = 'mp-checked-v1';
const loadChecked = () => {
  try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY) || '[]')); }
  catch { return new Set(); }
};
const saveChecked = (set) => localStorage.setItem(STORE_KEY, JSON.stringify([...set]));

function initShopping() {
  const root = $('.page__inner');
  const s = SHOPPING;
  const checked = loadChecked();

  const hero = `
    <div class="hero">
      <div class="hero__tile hero__tile--lead">
        <span class="hero__val">${num(s.summary.monthly)} Ft</span>
        <span class="hero__key">Havi teljes költség</span>
      </div>
      <div class="hero__tile"><span class="hero__val">${num(s.summary.daily)}</span><span class="hero__key">Ft / nap</span></div>
      <div class="hero__tile"><span class="hero__val">${num(s.summary.perMeal)}</span><span class="hero__key">Ft / étkezés</span></div>
      <div class="hero__tile"><span class="hero__val">${num(s.summary.food)}</span><span class="hero__key">Ft élelmiszer</span></div>
      <div class="hero__tile"><span class="hero__val">${num(s.summary.supplements)}</span><span class="hero__key">Ft kiegészítő</span></div>
    </div>`;

  const rhythm = `
    <section class="section">
      <div class="section__head">
        <h2 class="section__title">Vásárlási ritmus<span class="section__cadence">Négy ritmus — a legtöbb hét csak a heti lista</span></h2>
      </div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Ritmus</th><th class="hide-sm">Mikor</th><th class="num hide-sm">Tétel</th><th class="num">Egy alkalom</th><th class="num">Havi</th></tr></thead>
          <tbody>${s.rhythm.map((r) => `
            <tr><td><b>${r.name}</b><span class="hide-sm-inline"> · ${r.items} tétel</span></td><td class="hide-sm">${r.when}</td><td class="num hide-sm">${r.items}</td>
            <td class="num">${r.once ? ft(r.once) : '–'}</td><td class="num">${ft(r.monthly)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p class="section__outro">${s.practice}</p>
    </section>`;

  const listSection = (list) => {
    const items = list.items.map((it, i) => {
      const id = `${list.id}-${i}`;
      const on = checked.has(id);
      return `
        <li class="item${on ? ' is-done' : ''}" data-price="${it.price}" data-id="${id}">
          <label class="item__label">
            <input class="item__check" type="checkbox" ${on ? 'checked' : ''} aria-label="${it.name.replace(/"/g, '&quot;')}">
            <span class="item__name">${it.name}</span>
            <span class="item__price">${ft(it.price)}</span>
            <span class="item__meta"><span class="item__qty">${it.qty}</span><span>${it.unit}${it.aisle ? ' · ' + it.aisle : ''}</span></span>
            ${it.flag ? `<span class="item__flag">${it.flag}</span>` : ''}
          </label>
          ${it.url ? `<a class="item__link" href="${it.url}" target="_blank" rel="noopener">Termékoldal ${ICON.ext}</a>` : ''}
        </li>`;
    }).join('');

    return `
      <section class="section" data-list="${list.id}">
        <div class="section__head">
          <h2 class="section__title">${list.title}<span class="section__cadence">${list.cadence}</span></h2>
          <span class="section__total">${ft(list.total)}</span>
        </div>
        ${list.intro ? `<p class="section__intro">${list.intro}</p>` : ''}
        <div class="progress">
          <div class="progress__bar"><div class="progress__fill"></div></div>
          <span class="progress__label"></span>
        </div>
        <ul class="list">${items}</ul>
        ${list.outro ? `<p class="section__outro">${list.outro}</p>` : ''}
      </section>`;
  };

  const firstShop = `
    <section class="section">
      <div class="section__head">
        <h2 class="section__title">Az első bevásárlás<span class="section__cadence">Mind a négy ritmus egyszerre</span></h2>
      </div>
      <div class="table-wrap">
        <table class="data">
          <tbody>${s.firstShop.rows.map((r) => `
            <tr class="${r.total ? 'is-total' : r.strong ? 'is-strong' : ''}">
              <td>${r.name}</td><td class="num">${ft(r.price)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p class="section__outro">${s.firstShop.note}</p>
    </section>`;

  const tips = `
    <section class="section">
      <div class="section__head">
        <h2 class="section__title">Mire figyelj<span class="section__cadence">Vásárlás közben</span></h2>
      </div>
      ${s.tips.map((t) => `
        <details class="fold">
          <summary>${t.name}</summary>
          <div class="fold__body">${t.text}</div>
        </details>`).join('')}
    </section>`;

  const savings = `
    <section class="section">
      <div class="section__head">
        <h2 class="section__title">Hol lehet még spórolni<span class="section__cadence">Egyiket sem építettem be</span></h2>
      </div>
      <div class="section__outro" style="padding:14px 16px">
        <ul class="deflist">
          ${s.savings.map((x) => `
            <li>
              <span class="deflist__save">${x.save}</span>
              <b class="deflist__term">${x.step}</b>
              ${x.cost}
            </li>`).join('')}
        </ul>
      </div>
    </section>`;

  const storage = `
    <section class="section">
      <div class="section__head">
        <h2 class="section__title">Hova kerül<span class="section__cadence">Tárolás</span></h2>
      </div>
      <div class="storage">
        <div class="storage__row"><span class="storage__where">Hűtő</span><span>${s.storage.fridge}</span></div>
        <div class="storage__row"><span class="storage__where">Kamra</span><span>${s.storage.pantry}</span></div>
        <div class="storage__row"><span class="storage__where">Fagyasztó</span><span>${s.storage.freezer}</span></div>
        <div class="storage__row"><span class="storage__where">Konyhapult</span><span>${s.storage.counter}</span></div>
      </div>
    </section>`;

  root.innerHTML = `
    <header class="pagehead">
      <h1 class="pagehead__title">Bevásárlólista</h1>
      <p class="pagehead__sub">Mediterrán rendszer, lassú fogyás · átdolgozva ${META.updated}<br>Minden terméknév linkel az Auchan vagy GymBeam termékoldalra.</p>
    </header>
    ${hero}
    ${rhythm}
    ${s.lists.map(listSection).join('')}
    <div class="resetbar"><button class="btn-ghost" type="button" id="reset">Pipák törlése</button></div>
    ${firstShop}
    ${tips}
    ${savings}
    ${storage}
    <p class="pagefoot">${s.footer}</p>`;

  const refresh = (section) => {
    const items = $$('.item', section);
    const done = items.filter((i) => i.classList.contains('is-done'));
    const total = items.reduce((a, i) => a + Number(i.dataset.price), 0);
    const left = items.filter((i) => !i.classList.contains('is-done'))
      .reduce((a, i) => a + Number(i.dataset.price), 0);
    const ratio = items.length ? done.length / items.length : 0;
    $('.progress__fill', section).style.transform = `scaleX(${ratio})`;
    $('.progress__label', section).textContent =
      done.length === items.length
        ? `Kész · ${ft(total)}`
        : `${done.length}/${items.length} · még ${ft(left)}`;
  };

  $$('.section[data-list]').forEach(refresh);

  root.addEventListener('change', (e) => {
    const box = e.target.closest('.item__check');
    if (!box) return;
    const item = box.closest('.item');
    item.classList.toggle('is-done', box.checked);
    if (box.checked) checked.add(item.dataset.id); else checked.delete(item.dataset.id);
    saveChecked(checked);
    refresh(item.closest('.section'));
  });

  $('#reset').addEventListener('click', () => {
    checked.clear();
    saveChecked(checked);
    $$('.item__check').forEach((b) => { b.checked = false; b.closest('.item').classList.remove('is-done'); });
    $$('.section[data-list]').forEach(refresh);
  });
}

/* ============================ boot ============================ */

const page = document.body.dataset.page;
renderChrome(page);
if (page === 'recipes') initRecipes();
if (page === 'shopping') initShopping();
