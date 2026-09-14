/* Mediterrán rendszer — adatok
   Forrás: mediterran-etrend.md + bevasarlolista.md (2026. 09. 13-i átdolgozás) */

export const META = {
  title: 'Mediterrán rendszer',
  subtitle: '75 kg · 170 cm · lassú fogyás, főzés nélkül',
  updated: '2026. 09. 13.',
  targets: { kcal: 2276, protein: 163, carb: 225, fat: 77, fiber: 49, price: 3935 }
};

/* ---------- A három fix napi étkezés ---------- */

const meal1 = {
  id: 'meal-1',
  n: 1,
  kicker: '1. étkezés',
  short: 'Turmix',
  tag: 'minden nap',
  title: 'Erőturmix és cottage cheese-es rántotta',
  titleEn: 'Power smoothie + cottage cheese scrambled eggs',
  time: '7 perc',
  price: 1327,
  ingredients: [
    { name: 'Zabpehely', amount: '35 g', product: 'Bona Vita zabpehely 500 g', pack: '389 Ft / 500 g', price: 27 },
    { name: 'Fagyasztott áfonya', amount: '120 g', product: 'Auchan Kedvenc áfonya, gyorsfagyasztott 450 g', pack: '1 079 Ft / 450 g', price: 288 },
    { name: 'Banán (hámozva, <b>fagyasztva</b>)', amount: '30 g', product: 'Banán lédig', pack: '599 Ft / 1 kg', price: 18 },
    { name: 'Chia mag', amount: '8 g', product: 'Kalifa chia mag 200 g', pack: '969 Ft / 200 g', price: 39 },
    { name: 'Kefir 3,5% (élőflórás)', amount: '350 g', product: 'Auchan Kedvenc kaukázusi kefir 450 g', pack: '379 Ft / 450 g', price: 295 },
    { name: 'Tojás (M, héj nélkül)', amount: '275 g', product: 'Szijártó friss tojás M méret 10 db', pack: '669 Ft / 10 db', price: 335 },
    { name: 'Cottage cheese (zsírszegény)', amount: '100 g', product: 'Cheeseland natúr, zsírszegény cottage cheese 150 g', pack: '459 Ft / 150 g doboz', price: 306 },
    { name: 'Extra szűz olívaolaj', amount: '3 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 19 }
  ],
  steps: [
    { label: 'Turmix · 2 perc', text: 'Tedd a <b>száraz</b> zabpelyhet egyedül a turmixgépbe és daráld porrá kb. 10 másodpercig. Ezután dobj rá mindent: fagyasztott áfonya, <b>fagyasztott banándarab</b>, chia, kefir. Turmixold 45–60 másodpercig, amíg teljesen sima. <b>A fehérjepor és a kreatin nem ide kerül</b> – azok a 3. étkezés shake-jébe mennek.' },
    { label: 'Rántotta · 5 perc', text: 'Üss <b>5 tojást</b> egy tálba. Ha sok szabad folyadék van a cottage cheese dobozának tetején, öntsd le – utána mérj bele <b>100 g-ot</b> (a 150 g-os doboz kétharmadát). Villával verd össze; a rögök maradjanak láthatók, nem kell simára keverni. <b>Még ne sózd</b> – a só vizet húz ki a sajtból.' },
    { text: 'Melegíts fel 3 g olívaolajat tapadásmentes serpenyőben <b>közepesnél alacsonyabb</b> lángon. Öntsd bele a masszát, és 3–4 percig lapáttal húzogasd. A cottage cheese sokkal nedvesebb a túrónál, ezért tovább tart, mint a sima rántotta – hagyd, hogy a fölös víz elpárologjon, de <b>vedd le a tűzről, amikor még fénylik</b>. Magas lángon összeesik és vizet enged.' },
    { text: '<b>Most sózd meg</b>, tekerj rá borsot, és szórj rá egy csipet oregánót vagy chilipelyhet.' }
  ],
  notes: [
    { label: 'Fagyasztott banán – heti 3 perc', text: 'Napi 30 g egy közepes banán negyede, vágva-hűtve pedig 2 nap alatt megbarnulna. Ezért: végy <b>2 banánt</b>, érleld a pulton amíg <b>foltos</b> (ekkor a legédesebb), <b>hámozd meg</b>, vágd <b>4 darabra</b>, terítsd szét egy tányéron úgy, hogy ne érjenek össze, fagyaszd <b>1 órát</b>, és csak utána öntsd zacskóba. A tálcás előfagyasztás nélkül egyetlen tömbbé fagynak össze. 2 banán = 8 adag = 8 nap. <b>Héjastul ne fagyaszd</b> – utána nem tudod meghámozni. A fagyott banán ráadásul sűrűbbre és hidegebbre turmixolja az italt, ami most, a lecsökkentett zabadag mellett kifejezetten jól jön.' }
  ],
  nutrition: { kcal: 977, kcalPct: 43, protein: 66, proteinPct: 40, carb: 61, carbNet: 50, fat: 48, fiber: 11, fiberPct: 22 },
  micros: 'B12 ~3,8 µg (152% NRV) · kolin ~720 mg (5 tojás) · élő probiotikus kultúrák (kefir) · kalcium ~640 mg · ALA omega-3 ~1,5 g (chia) · C-vitamin ~15 mg · szelén ~60 µg'
};

const meal2 = {
  id: 'meal-2',
  n: 2,
  kicker: '2. étkezés',
  short: 'Hummusz',
  tag: 'minden nap',
  title: 'Beluga lencsés hummusz',
  titleEn: 'Beluga lentil hummus',
  time: '1 perc tálalás',
  price: 750,
  ingredients: [
    { name: 'Beluga fekete lencse (száraz)', amount: '130 g', product: 'Beluga fekete lencse 500 g', pack: '949 Ft / 500 g', price: 247 },
    { name: 'Tahini (szezámpaszta)', amount: '12 g', product: 'Libanoni szezámpaszta (7 068 Ft/kg)', pack: '3 209 Ft / ~454 g', price: 85 },
    { name: 'Koktélparadicsom', amount: '120 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 215 },
    { name: 'Kígyóuborka', amount: '120 g', product: 'Kígyóuborka (kb. 400 g/db)', pack: '349 Ft / 1 db', price: 105 },
    { name: 'Extra szűz olívaolaj', amount: '5 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 32 },
    { name: 'Citromlé (frissen facsarva)', amount: '10 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 54 },
    { name: 'Fokhagyma', amount: '1 gerezd (~4 g)', product: 'Fokhagyma 3 db/csomag', pack: '447 Ft / 3 db', price: 12 }
  ],
  steps: [
    { label: 'Vasárnap · a heti lencsekészlet', text: '<b>990 g SZÁRAZ</b> beluga lencsét öblíts át, tedd fel 3-szoros mennyiségű hideg, <b>sózatlan</b> vízzel. Forrástól számítva <b>24–25 perc</b> – ez hosszabb, mint a régi tálas verzióban, mert a pürének puhább szem kell. Szűrd le, öblítsd át hideg vízzel, csepegtesd le jól, és <b>teljesen hidegen</b> tedd zárható dobozba. Ebből lesz <b>kb. 2,5 kg főtt lencse</b>, ami az egész hetet fedi.' },
    { label: 'Turmixolás · heti kétszer, egy adag 3 napra', text: 'Egy turmixolás <b>3 ebédnyi</b>: 3 × 330 g = <b>kb. 1 kg FŐTT lencse</b> a vasárnapi készletből · 36 g tahini · 15 g olívaolaj · 30 g citromlé · 3 gerezd fokhagyma · kb. 90 ml hideg víz · bors, oregánó. Turmixold 60–90 másodpercig, egyszer kaparva le az oldalát. Vízzel hígítsd mártogatós állagúra, kanalanként.' },
    { text: '<b>A sót a legvégén add hozzá, kóstolás után.</b> Mióta nincs benne feta, semmi nem sózza meg helyetted – többet fog kérni, mint gondolnád.' },
    { label: 'Tálalás · 1 perc', text: 'Mérj ki egy adagot, mellé félbevágott koktélparadicsom és <b>vastag uborkacsíkok</b> – ezekkel mártogatod. Kenyér nincs, nem is kell.' }
  ],
  notes: [
    { label: 'Két szám, ne keverd össze őket', text: 'A <b>990 g a SZÁRAZ</b> lencse, amit vasárnap egyszer felteszel az egész hétre – ebből lesz ~2,5 kg <b>főtt</b> lencse. Egy turmixolás ebből a készletből használ fel <b>kb. 1 kg FŐTT</b> lencsét (3 ebédnyit). A kettő véletlenül majdnem ugyanaz a szám, de teljesen mást jelent.' },
    { label: 'Miért hummusz és nem tál?', text: 'Ugyanaz a hozzávaló, ugyanaz a tápérték, de heti <b>két turmixolás</b> kiváltja a napi aprítást. A püré <b>3 napig</b> áll el hűtőben – ennél tovább ne tartsd.' },
    { label: 'A 7. ebéd: szombaton tálként edd', text: 'Két turmixolás 3–3 napot fed, az 6 ebéd – a hetedikre nem jut. Ne told meg a szerdai adagot négy naposra: szombaton <b>hagyd ki a turmixgépet</b>, és edd a régi formában – 330 g egész főtt lencse, rádobva a felkockázott paradicsom és uborka, olívaolaj, citrom, só, bors, oregánó. Ugyanaz a tápérték, ugyanaz az ár, és egy nap a héten nem pürét eszel.' },
    { label: 'Amit tudnod kell a tahiniről', text: 'Ez helyettesíti a kikerült fetát, és majdnem pontosan ugyanazt a zsírt és kalóriát hozza, csak szezámból. Polcon áll el hónapokig, tehát nincs maradékgond: egy ~454 g-os üveg <b>öt hétre</b> elég. Használat előtt <b>keverd át</b> – az olaj kiül a tetejére.' }
  ],
  nutrition: { kcal: 622, kcalPct: 27, protein: 36, proteinPct: 22, carb: 86, carbNet: 68, fat: 13, fiber: 18, fiberPct: 37 },
  micros: 'Folát ~430 µg (215% NRV) · magnézium ~300 mg · vas ~9 mg · kálium ~1 400 mg · likopin · E-vitamin'
};

const meal3 = {
  id: 'meal-3',
  n: 3,
  kicker: '3. étkezés',
  short: 'Shake',
  tag: 'minden nap',
  title: 'Fehérjeshake',
  titleEn: 'Protein shake',
  time: '30 másodperc',
  price: 649,
  ingredients: [
    { name: 'Tejsavó fehérjepor', amount: '45 g', product: 'GymBeam Protein True Whey 1000 g (77% fehérje)', pack: '12 990 Ft / 1 000 g', price: 585 },
    { name: 'Kreatin-monohidrát', amount: '5 g', product: 'GymBeam 100% Mikronizált Kreatin-monohidrát 1000 g', pack: '12 890 Ft / 1 000 g', price: 64 }
  ],
  steps: [
    { text: 'Rázd össze 350 ml hideg vízzel egy shakerben. <b>30 másodperc</b>, nincs turmixgép, nincs mosogatás. Két összetevő: fehérjepor + kreatin.' },
    { text: '<b>Edzésnapon:</b> közvetlenül edzés után. <b>Pihenőnapon:</b> délután, nagyjából félúton az ebéd és a vacsora között.' },
    { text: 'Vízzel keverd, ne tejjel – gyorsabban ürül a gyomorból, és nem visz be felesleges kalóriát.' }
  ],
  notes: [
    { label: 'Miért lett 30 g-ról 45 g?', text: 'Ez a deficit ellensúlya. A tervből kikerült ~330 kcal nagy része zsír és szénhidrát volt; a fehérjét viszont nem engedjük el, mert az tartja meg az izmot fogyás közben. Grammonként a tejsavó a legkalóriahatékonyabb fehérjeforrás a listán (~5 kcal/g fehérje, szemben a tojás ~11-ével) – deficitben pont ez számít.' }
  ],
  nutrition: { kcal: 172, kcalPct: 8, protein: 35, proteinPct: 21, carb: 3, carbNet: 3, fat: 3, fiber: 0, fiberPct: 0 },
  micros: 'Leucin ~3,6 g – bőven a küszöb fölött, ami beindítja az izomfehérje-szintézist · kreatin 5 g a napi telítettséghez'
};

export const FIXED_MEALS = [meal1, meal2, meal3];

/* ---------- Joghurtos öntet (kedd, csütörtök, péntek) ---------- */

export const DRESSING = {
  title: 'Joghurtos öntet',
  time: '30 másodperc',
  price: 169,
  ingredients: [
    { name: 'Natúr joghurt (zsírszegény)', amount: '150 g (1 pohár)', product: 'Nádudvari zsírszegény, élőflórás natúr joghurt 150 g', price: 98 },
    { name: 'Fokhagyma', amount: '1 gerezd (~4 g)', product: 'Fokhagyma 3 db/csomag', price: 12 },
    { name: 'Citromlé', amount: '10 g', product: 'Auchan Kedvenc facsarni való citrom', price: 54 },
    { name: 'Szárított oregánó, só, bors', amount: 'ízlés szerint', product: 'Horváth Rozi', price: 5 }
  ],
  text: 'Dobj mindent a turmixgépbe, <b>20–30 másodperc</b>, és kész. A fokhagymát nem kell előre aprítani – a gép elintézi.',
  note: '<b>Miért pohárban veszed:</b> a 150 g-os kiszerelés pont egy adag. Nem marad felbontott joghurt a hűtőben, és nem kell mérned – kiborítod az egészet. Heti 3 pohár.'
};

/* ---------- A 7 napos vacsorarotáció ---------- */

const dinners = {
  hetfo: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Csicseriborsós-céklás paprikacsónak',
    titleEn: 'Chickpea & beetroot pepper boats',
    time: '6 perc',
    price: 1106,
    dressing: 'citromos',
    ingredients: [
      { name: 'Csicseriborsó konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht csicseriborsó 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Kaliforniai paprika', amount: '150 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 216 },
      { name: 'Koktélparadicsom', amount: '100 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 179 },
      { name: 'Cékla (nyers, reszelve)', amount: '70 g', product: 'Cékla lédig', pack: '499 Ft / 1 kg', price: 35, highlight: true },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Extra szűz olívaolaj', amount: '8 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 50 },
      { name: 'Citromlé (frissen facsarva)', amount: '10 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 54 }
    ],
    steps: [
      { text: 'Vágd félbe hosszában a kaliforniai paprikát, kanállal kapard ki a magházat – ez lesz a „tál”.' },
      { text: 'Öntsd szűrőbe a csicseriborsót, öblítsd át hideg víz alatt, csepegtesd le.' },
      { text: 'Keverd össze a félbevágott koktélparadicsommal, a <b>durvára reszelt nyers céklával</b> és a vékonyra szelt lilahagymával.' },
      { text: 'Olívaolaj, citromlé, oregánó, <b>só</b>, bors – forgasd össze, kanalazd a paprikafelekbe.' }
    ],
    nutrition: { kcal: 520, kcalPct: 23, protein: 22, proteinPct: 13, carb: 78, carbNet: 56, fat: 16, fiber: 22, fiberPct: 45 },
    micros: 'C-vitamin ~250 mg (310% NRV) · folát ~280 µg · vas ~4 mg · kálium ~1 100 mg · nitrát (cékla)'
  },

  kedd: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Fehérbabos-petrezselymes saláta',
    titleEn: 'White bean & parsley salad',
    time: '5 perc',
    price: 1230,
    dressing: 'joghurtos',
    ingredients: [
      { name: 'Fehérbab konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht fehérbab 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Koktélparadicsom', amount: '150 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 268 },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Friss petrezselyemzöld', amount: '25 g', product: 'Petrezselyem csomós XL (kb. 60 g)', pack: '599 Ft / 1 csomó', price: 250 },
      { name: 'Natúr joghurt (zsírszegény)', amount: '150 g', product: 'Nádudvari zsírszegény, élőflórás natúr joghurt 150 g', pack: '98 Ft / 150 g pohár', price: 98 },
      { name: 'Fokhagyma', amount: '4 g', product: 'Fokhagyma 3 db/csomag (kb. 50 g/fej)', pack: '447 Ft / 3 db', price: 12 },
      { name: 'Extra szűz olívaolaj', amount: '5 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 32 }
    ],
    steps: [
      { text: 'Öblítsd át a fehérbabot szűrőben hideg víz alatt, csepegtesd le.' },
      { text: 'Félbevágott koktélparadicsom, vékony lilahagyma-szeletek és <b>egy jó maréknyi (25 g) durvára vágott petrezselyemzöld</b> a tálba.' },
      { text: 'Turmixold össze a <b>joghurtos öntetet</b>, és forgasd bele. Hagyd állni 5 percet, hogy a hagyma megszelídüljön. <b>Kóstold meg, és sózd utána.</b>' }
    ],
    nutrition: { kcal: 452, kcalPct: 20, protein: 27, proteinPct: 17, carb: 69, carbNet: 51, fat: 9, fiber: 18, fiberPct: 37 },
    micros: 'K-vitamin ~190 µg · C-vitamin ~50 mg · folát ~190 µg · kálium ~1 000 mg · vas ~4 mg'
  },

  szerda: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Lencsés-avokádós tál',
    titleEn: 'Lentil & avocado bowl',
    time: '5 perc',
    price: 1051,
    dressing: 'citromos',
    ingredients: [
      { name: 'Beluga fekete lencse (száraz)', amount: '80 g', product: 'Beluga fekete lencse 500 g', pack: '949 Ft / 500 g', price: 152 },
      { name: 'Avokádó (tisztítva)', amount: '120 g', product: 'Szájérett avokádó (kb. 200 g/db, ebből ~140 g hús)', pack: '429 Ft / 1 db', price: 368 },
      { name: 'Koktélparadicsom', amount: '100 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 179 },
      { name: 'Cékla (nyers, reszelve)', amount: '70 g', product: 'Cékla lédig', pack: '499 Ft / 1 kg', price: 35, highlight: true },
      { name: 'Friss salátakeverék', amount: '70 g', product: 'Eisberg Pántlika Mix 190 g', pack: '549 Ft / 190 g', price: 202 },
      { name: 'Lilahagyma', amount: '20 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 15 },
      { name: 'Citromlé (frissen facsarva)', amount: '15 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 81 },
      { name: 'Extra szűz olívaolaj', amount: '3 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 19 }
    ],
    steps: [
      { text: 'Mérj ki <b>200 g főtt beluga lencsét</b> a vasárnapi adagból, és reszelj rá durvára 70 g nyers céklát. <b>A céklát tedd a tál egyik oldalára</b>, ne keverd át azonnal.' },
      { text: 'Vágd félbe az avokádót, kanalazd ki a húsát, kockázd fel – dobd a lencsére.' },
      { text: 'Tedd rá a salátakeveréket, a félbevágott koktélparadicsomot, a vékonyra szelt lilahagymát.' },
      { text: 'Bőven citromlé (ez tartja zölden az avokádót), egy kevés olívaolaj, <b>só</b>, bors. <b>Óvatosan</b> forgasd össze, hogy az avokádó ne kenődjön szét – és hogy a cékla ne fesse rózsaszínre az egészet.' }
    ],
    nutrition: { kcal: 573, kcalPct: 25, protein: 26, proteinPct: 16, carb: 72, carbNet: 50, fat: 22, fiber: 22, fiberPct: 45 },
    micros: 'Egyszeresen telítetlen zsírsavak · kálium ~1 400 mg · folát ~340 µg · E-vitamin · K-vitamin ~110 µg · vas ~5 mg'
  },

  csutortok: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Fehérbabos-kukoricás saláta',
    titleEn: 'White bean & sweetcorn salad',
    time: '5 perc',
    price: 1349,
    dressing: 'joghurtos',
    ingredients: [
      { name: 'Fehérbab konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht fehérbab 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Csemegekukorica konzerv (lecsepegtetve)', amount: '150 g', product: 'Bonduelle Gold morzsolt csemegekukorica 170/150 g', pack: '499 Ft / 150 g lecsepegtetve', price: 499 },
      { name: 'Kaliforniai paprika', amount: '100 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 144 },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Natúr joghurt (zsírszegény)', amount: '150 g', product: 'Nádudvari zsírszegény, élőflórás natúr joghurt 150 g', pack: '98 Ft / 150 g pohár', price: 98 },
      { name: 'Fokhagyma', amount: '4 g', product: 'Fokhagyma 3 db/csomag (kb. 50 g/fej)', pack: '447 Ft / 3 db', price: 12 },
      { name: 'Extra szűz olívaolaj', amount: '4 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 25 }
    ],
    steps: [
      { text: 'Öblítsd át a fehérbabot, csepegtesd le. A kukoricakonzervet szintén – <b>a kis dobozt egészben felhasználod</b>, nem marad nyitott konzerv.' },
      { text: 'Kockázd fel a kaliforniai paprikát, szeleteld vékonyra a lilahagymát.' },
      { text: 'Turmixold össze a <b>joghurtos öntetet</b>, és forgasd bele. A kukorica édessége és a fokhagymás joghurt jól megy egymáshoz. <b>Sózd a végén.</b>' }
    ],
    nutrition: { kcal: 566, kcalPct: 25, protein: 31, proteinPct: 19, carb: 92, carbNet: 71, fat: 10, fiber: 21, fiberPct: 43 },
    micros: 'Folát ~200 µg · C-vitamin ~90 mg · magnézium ~130 mg · kálium ~1 000 mg · lutein'
  },

  pentek: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Vörösbabos-céklás saláta',
    titleEn: 'Kidney bean & beetroot salad',
    time: '6 perc',
    price: 1299,
    dressing: 'joghurtos',
    ingredients: [
      { name: 'Vörös kidney bab konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht vörös kidney bab 400/240 g', pack: '735 Ft / 240 g lecsepegtetve', price: 735 },
      { name: 'Kígyóuborka', amount: '120 g', product: 'Kígyóuborka (kb. 400 g/db)', pack: '349 Ft / 1 db', price: 105 },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Kaliforniai paprika', amount: '80 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 115 },
      { name: 'Cékla (nyers, reszelve)', amount: '70 g', product: 'Cékla lédig', pack: '499 Ft / 1 kg', price: 35, highlight: true },
      { name: 'Friss salátakeverék', amount: '50 g', product: 'Eisberg Pántlika Mix 190 g', pack: '549 Ft / 190 g', price: 144 },
      { name: 'Natúr joghurt (zsírszegény)', amount: '150 g', product: 'Nádudvari zsírszegény, élőflórás natúr joghurt 150 g', pack: '98 Ft / 150 g pohár', price: 98 },
      { name: 'Fokhagyma', amount: '4 g', product: 'Fokhagyma 3 db/csomag (kb. 50 g/fej)', pack: '447 Ft / 3 db', price: 12 },
      { name: 'Extra szűz olívaolaj', amount: '5 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 32 }
    ],
    steps: [
      { text: 'Öblítsd át a kidney babot alaposan (ennek a legerősebb a konzervíze), csepegtesd le.' },
      { text: 'Kockázd fel az uborkát és a kaliforniai paprikát, szeleteld vékonyra a lilahagymát, reszeld durvára a céklát.' },
      { text: 'Tedd mellé a salátakeveréket.' },
      { text: 'Turmixold össze a <b>joghurtos öntetet</b> egy csipet extra oregánóval, és forgasd bele. Hagyd 5 percet állni. <b>Sózd a végén.</b> A cékla és a fokhagymás joghurt klasszikus páros – ez a hét egyik legjobb tála.' }
    ],
    nutrition: { kcal: 527, kcalPct: 23, protein: 31, proteinPct: 19, carb: 84, carbNet: 63, fat: 10, fiber: 21, fiberPct: 43 },
    micros: 'C-vitamin ~110 mg · folát ~300 µg · vas ~4 mg · kálium ~1 200 mg · B6-vitamin · nitrát (cékla)'
  },

  szombat: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Csicseriborsós citromos-zöldfűszeres saláta',
    titleEn: 'Chickpea & lemon-herb salad',
    time: '5 perc',
    price: 1297,
    dressing: 'citromos',
    ingredients: [
      { name: 'Csicseriborsó konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht csicseriborsó 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Friss salátakeverék', amount: '70 g', product: 'Eisberg Pántlika Mix 190 g', pack: '549 Ft / 190 g', price: 202 },
      { name: 'Koktélparadicsom', amount: '100 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 179 },
      { name: 'Cékla (nyers, reszelve)', amount: '70 g', product: 'Cékla lédig', pack: '499 Ft / 1 kg', price: 35, highlight: true },
      { name: 'Friss petrezselyemzöld', amount: '20 g', product: 'Petrezselyem csomós XL (kb. 60 g)', pack: '599 Ft / 1 csomó', price: 200 },
      { name: 'Citromlé (frissen facsarva)', amount: '15 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 81 },
      { name: 'Extra szűz olívaolaj', amount: '8 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 50 }
    ],
    steps: [
      { text: 'Öblítsd át a csicseriborsót, csepegtesd le.' },
      { text: 'Salátakeverék + félbevágott koktélparadicsom + <b>reszelt nyers cékla</b> + a maradék petrezselyemzöld a tálba.' },
      { text: 'Öntet: <b>bőven citromlé</b> + olívaolaj + oregánó + fokhagymabors + <b>só</b>. Ez a hét legfrissebb, legsavasabb tála – a citrom viszi, és a cékla földes ízét is ez töri meg.' }
    ],
    nutrition: { kcal: 483, kcalPct: 21, protein: 22, proteinPct: 13, carb: 70, carbNet: 50, fat: 15, fiber: 20, fiberPct: 41 },
    micros: 'Folát ~310 µg · K-vitamin ~200 µg · C-vitamin ~60 mg · vas ~4 mg · nitrát (cékla)'
  },

  vasarnap: {
    id: 'meal-4',
    n: 4,
    kicker: '4. étkezés · vacsora',
    title: 'Citromos-fokhagymás fehérbabkrém',
    titleEn: 'Lemon-garlic white bean mash',
    time: '5 perc',
    price: 1134,
    dressing: 'citromos',
    ingredients: [
      { name: 'Fehérbab konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht fehérbab 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Extra szűz olívaolaj', amount: '8 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 50 },
      { name: 'Citromlé (frissen facsarva)', amount: '15 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 81 },
      { name: 'Friss petrezselyemzöld', amount: '15 g', product: 'Petrezselyem csomós XL (kb. 60 g)', pack: '599 Ft / 1 csomó', price: 150 },
      { name: 'Kígyóuborka', amount: '150 g', product: 'Kígyóuborka (kb. 400 g/db)', pack: '349 Ft / 1 db', price: 131 },
      { name: 'Kaliforniai paprika', amount: '120 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 173 }
    ],
    steps: [
      { text: 'Öblítsd át és csepegtesd le a fehérbabot, tedd egy tálba.' },
      { text: 'Törd össze villával – <b>ne teljesen simára</b>, hagyj benne egész szemeket, attól lesz krém és nem pép.' },
      { text: 'Keverd bele az olívaolajat, a citromlevet, fokhagymaport, <b>sót</b>, borsot és az utolsó 15 g apróra vágott petrezselyemzöldet. Ha túl sűrű, 1–2 evőkanál hideg víz.' },
      { text: 'Vágj vastag uborkakarikákat és paprikacsíkokat – ezekkel mártogasd.' }
    ],
    notes: [
      { label: 'Ez a hét legkényesebb tála', text: 'Sajt nélkül nincs benne semmi sós – fehérbab, olaj, citrom, fokhagyma, petrezselyem. <b>Sózd meg rendesen</b>, tekerj rá bőven fokhagymaborsot, és ne sajnáld a citromot. Ha ízetlennek érzed, majdnem biztosan a só hiányzik.' }
    ],
    nutrition: { kcal: 414, kcalPct: 18, protein: 21, proteinPct: 13, carb: 61, carbNet: 43, fat: 10, fiber: 18, fiberPct: 37 },
    micros: 'C-vitamin ~180 mg · folát ~190 µg · kálium ~1 100 mg · E-vitamin · K-vitamin ~90 µg'
  }
};

export const DAYS = [
  { key: 'hetfo', name: 'Hétfő', short: 'H', dinner: dinners.hetfo },
  { key: 'kedd', name: 'Kedd', short: 'K', dinner: dinners.kedd },
  { key: 'szerda', name: 'Szerda', short: 'Sze', dinner: dinners.szerda },
  { key: 'csutortok', name: 'Csütörtök', short: 'Cs', dinner: dinners.csutortok },
  { key: 'pentek', name: 'Péntek', short: 'P', dinner: dinners.pentek },
  { key: 'szombat', name: 'Szombat', short: 'Szo', dinner: dinners.szombat },
  { key: 'vasarnap', name: 'Vasárnap', short: 'V', dinner: dinners.vasarnap }
];

/* ---------- Heti előkészítés ---------- */

export const PREP = [
  { when: 'Vasárnap · 25 perc', title: 'Lencse (ebből 24 perc passzív)', text: 'Tegyél fel <b>990 g SZÁRAZ</b> beluga lencsét bő, <b>sózatlan</b> hideg vízben. Forrástól <b>24–25 perc</b>. Szűrd le, öblítsd át hideg vízzel, csepegtesd le jól, és <b>teljesen kihűlve</b> tedd a hűtőbe. Ebből <b>kb. 2,5 kg főtt</b> lencse lesz – ez fedi mind a 7 ebédet (napi 330 g) <b>és</b> a szerdai vacsorát (200 g).' },
  { when: 'Vasárnap + szerda · 2 × 2 perc', title: 'Hummusz', text: 'Turmixolj be <b>3 ebédnyit</b> (kb. 1 kg <b>főtt</b> lencse a készletből) a 2. étkezésnél leírt arányok szerint. A vasárnapi adag fedi vasárnap–keddet, a szerdai szerda–pénteket. <b>Szombaton nincs turmixolás</b> – aznap tálként eszed, egész lencsével.' },
  { when: 'Heti egyszer · 3 perc', title: 'Banán', text: '2 érett banán meghámozva, negyedelve, tányéron 1 órát fagyasztva, utána zacskóba. 8 adag.' }
];

export const PREP_NOTES = [
  'A 990 g szárazból kb. <b>2,5 kg főtt lencse</b> lesz – ehhez egy nagy, 3 literes doboz kell. Ha <b>két kisebb dobozba</b> osztod, csak az egyiket nyitogatod, a másik érintetlenül vár.',
  'A főtt lencse hűtőben <b>5–7 napig</b> jó; a belőle turmixolt <b>hummusz csak 3 napig</b>. Ezért van két turmixolás, ezért nem turmixolsz be egyszerre egy hétre valót, és ezért marad a szombati ebéd tálas – így egyetlen adag hummusz sem lesz 3 napnál idősebb. A szombati lencse 6 napos lesz: még belefér, de ez a hét legszűkebb pontja. Ha zavar, főzz kétszer (vasárnap és csütörtök) feleakkora adagot.'
];

/* ---------- Bevásárlólista ---------- */

const A = 'https://auchan.hu/shop/';

export const SHOPPING = {
  summary: {
    monthly: 124646,
    food: 100002,
    supplements: 24115,
    spices: 529,
    daily: 4100,
    perMeal: 1025
  },
  rhythm: [
    { name: 'Heti', when: 'hetente', items: 16, once: 19063, monthly: 82924 },
    { name: 'Kétheti', when: 'kéthetente', items: 3, once: 5371, monthly: 11655 },
    { name: 'Havi', when: 'havonta', items: 5, once: 6893, monthly: 6893 },
    { name: 'Ritka', when: 'kb. 2,5 havonta', items: 1, once: 5799, monthly: 2320 },
    { name: 'Fűszer / só', when: 'alkalomszerűen', items: 3, once: null, monthly: 529 },
    { name: 'Kiegészítők', when: 'külön ritmus', items: 5, once: null, monthly: 24115 }
  ],
  practice: 'A hónap 4 hetéből 2-ben csak a heti listát veszed meg (~19 063 Ft), egyszer a heti + kétheti (~24 434 Ft), egyszer a heti + kétheti + havi (~31 327 Ft).',
  lists: [
    {
      id: 'heti',
      title: 'Heti lista',
      cadence: 'minden héten',
      total: 19063,
      intro: 'Ez a törzslista. Friss és gyorsan fogyó tételek.',
      items: [
        { name: 'Paradicsom fürtöskoktél 500 g', url: A + 'paradicsom-furtoskoktel-500-g.p-765618', qty: '3 doboz', unit: '894 Ft', price: 2682, aisle: 'Zöldség – gyümölcs' },
        { name: 'Cheeseland natúr, zsírszegény cottage cheese 150 g', url: A + 'cheeseland-natur-zsirszegeny-cottage-cheese-150-g.p-896238', qty: '5 doboz', unit: '459 Ft', price: 2295, aisle: 'Tejtermék › Túró, tejszín' },
        { name: 'Auchan Kedvenc kaukázusi kefir 450 g', url: A + 'auchan-kedvenc-kaukazusi-kefir-450-g.p-310723', qty: '6 pohár', unit: '379 Ft', price: 2274, aisle: 'Tejtermék › Tejföl, kefir', flag: 'A kefir 4-ről 6 pohárra ment fel – napi 350 g kell.' },
        { name: 'Auchan Kedvenc áfonya, gyorsfagyasztott 450 g', url: A + 'auchan-kedvenc-afonya-gyorsfagyasztott-450-g.p-735731', qty: '2 zacskó', unit: '1 079 Ft', price: 2158, aisle: 'Fagyasztott gyümölcs' },
        { name: 'Beluga fekete lencse 500 g', url: A + 'beluga-fekete-lencse-500-g.p-657119', qty: '2 zacskó', unit: '949 Ft', price: 1898, aisle: 'Szárított alapanyag' },
        { name: 'Happy Frucht fehérbab 400 g', url: A + 'happy-frucht-feherbab-400-g.p-478553', qty: '3 konzerv', unit: '549 Ft', price: 1647, aisle: 'Konzervek' },
        { name: 'Happy Frucht csicseriborsó 400 g', url: A + 'happy-frucht-csicseriborso-400-g.p-276157', qty: '2 konzerv', unit: '549 Ft', price: 1098, aisle: 'Konzervek' },
        { name: 'Kígyóuborka', url: A + 'kigyouborka-ft-db.p-500104', qty: '3 db', unit: '349 Ft', price: 1047, aisle: 'Zöldség – gyümölcs' },
        { name: 'Happy Frucht vörös kidney bab 400 g', url: A + 'happy-frucht-voros-kidney-bab-400-g.p-66354', qty: '1 konzerv', unit: '735 Ft', price: 735, aisle: 'Konzervek' },
        { name: 'Trikolor kaliforniai paprika 3 db', url: A + 'trikolor-kaliforniai-paprika-3-db.p-177746', qty: '1 csomag', unit: '649 Ft', price: 649, aisle: 'Zöldség – gyümölcs' },
        { name: 'Petrezselyem csomós XL', url: A + 'petrezselyem-csomos-xl.p-412690', qty: '1 csomó', unit: '599 Ft', price: 599, aisle: 'Fűszernövény' },
        { name: 'Eisberg Pántlika Mix saláta 190 g', url: A + 'eisberg-pantlika-mix-friss-salata-es-zoldsegkeverek-190-g.p-675566', qty: '1 zacskó', unit: '549 Ft', price: 549, aisle: 'Előrecsomagolt saláta' },
        { name: 'Bonduelle Gold morzsolt csemegekukorica 170 g', url: A + 'bonduelle-gold-morzsolt-csemegekukorica-170-g.p-599212', qty: '1 kis konzerv', unit: '499 Ft', price: 499, aisle: 'Konzervek' },
        { name: 'Szájérett avokádó', url: A + 'szajerett-avokado-ft-db.p-2909', qty: '1 db', unit: '429 Ft', price: 429, aisle: 'Zöldség – gyümölcs' },
        { name: 'Nádudvari zsírszegény natúr joghurt 150 g', url: A + 'nadudvari-zsirszegeny-elofloras-natur-joghurt-150-g.p-929375', qty: '3 pohár', unit: '98 Ft', price: 294, aisle: 'Joghurtok' },
        { name: 'Banán lédig', url: A + 'banan-ledig.p-7123', qty: '2 db (~350 g héjastul)', unit: '599 Ft/kg', price: 210, aisle: 'Zöldség – gyümölcs', flag: 'Ne edd meg frissen: érleld foltosra, hámozd, negyedeld, fagyaszd le. 2 banán = 8 adag.' }
      ],
      outro: '<b>Marad a hét végén:</b> kb. 50 g cottage cheese, ~250 g kefir, 60 g fagyasztott áfonya, ~200 g koktélparadicsom és 1 adag fagyasztott banán – ezek mind átgörgetnek a következő hétre.'
    },
    {
      id: 'ketheti',
      title: 'Kétheti lista',
      cadence: 'minden második héten',
      total: 5371,
      intro: 'Ezek a kiszerelések nem osztódnak kerekre egy hétre, ezért kétheti ritmusban veszed őket.',
      items: [
        { name: 'Szijártó friss tojás M méret 10 db', url: A + 'szijarto-friss-tojas-m-meret-10-db.p-59504', qty: '7 doboz (70 db)', unit: '669 Ft', price: 4683, aisle: 'Tojás' },
        { name: 'Bona Vita zabpehely 500 g', url: A + 'bona-vita-zabpehely-500-g.p-493809', qty: '1 zacskó', unit: '389 Ft', price: 389, aisle: 'Müzli, gabonapehely' },
        { name: 'Cékla lédig', url: A + 'cekla-ledig.p-6948', qty: '~600 g (1 nagy vagy 2 kisebb gumó)', unit: '499 Ft/kg', price: 299, aisle: 'Zöldség – gyümölcs', flag: 'Nyerset vegyél, súlyra. Ha van rajta zöld szár, vágd le rögtön otthon.' }
      ],
      outro: '<b>Miért pont ennyi:</b> a tojásból naponta 5 db kell (heti 35) → 2 hét = 70 db = pontosan 7 doboz. A zabból napi 35 g fogy, az 500 g-os zacskó pontosan 2 hét. A céklából heti 280 g kell (4 vacsora × 70 g) → 2 hét = 560 g.'
    },
    {
      id: 'havi',
      title: 'Havi lista',
      cadence: 'havonta egyszer',
      total: 6893,
      intro: 'Hosszan eltartható friss tételek, a tahini és a chia.',
      items: [
        { name: 'Libanoni szezámpaszta (tahini) ~454 g', url: 'https://auchan.hu/en/shop/sesampasta.p-811311', qty: '1 üveg', unit: '7 068 Ft/kg', price: 3209, aisle: 'Világkonyha', flag: 'Ezt vedd, ne a Makedoniki 300 g-ost (10 563 Ft/kg). Használat előtt keverd át.' },
        { name: 'Auchan Kedvenc facsarni való citrom 1 kg', url: A + 'auchan-kedvenc-facsarni-valo-citrom-1-kg.p-675024', qty: '1 kg', unit: '1 899 Ft', price: 1899, aisle: 'Zöldség – gyümölcs' },
        { name: 'Kalifa chia mag 200 g', url: A + 'kalifa-chia-mag-200-g.p-660034', qty: '1 doboz', unit: '969 Ft', price: 969, aisle: 'Szárított alapanyag' },
        { name: 'Fokhagyma 3 db/csomag', url: A + 'fokhagyma-3-db-csomag.p-129424', qty: '1 csomag (3 fej)', unit: '447 Ft', price: 447, aisle: 'Zöldség – gyümölcs' },
        { name: 'Lilahagyma 500 g', url: A + 'lilahagyma-500-g.p-158024', qty: '1 csomag', unit: '369 Ft', price: 369, aisle: 'Zöldség – gyümölcs' }
      ],
      outro: '<b>Eltarthatóság:</b> tahini polcon hónapokig (5 hétre elég), citrom 3–4 hét a hűtőben, chia 3,5 hét, fokhagyma 3,5 hét, lilahagyma hónapok sötét száraz helyen.'
    },
    {
      id: 'ritka',
      title: 'Ritkán',
      cadence: 'kb. 2,5 havonta',
      total: 5799,
      intro: 'Az olívaolaj korábban havi tétel volt (heti 188 g). A fogyás miatt heti 97 g-ra esett, így egy liter kb. 9,5 hétre elég.',
      items: [
        { name: 'Auchan Kedvenc Extra szűz olívaolaj 1 l PET', url: A + 'auchan-kedvenc-extra-szuz-olivaolaj-1-l-pet.p-521821', qty: '1 üveg (1 l)', unit: '5 799 Ft', price: 5799, aisle: 'Olaj, ecet', flag: 'Az 1 literes PET olcsóbb literre. Sötét helyen tárold, ne a tűzhely mellett.' }
      ]
    },
    {
      id: 'fuszer',
      title: 'Fűszer és só',
      cadence: 'alkalomszerűen · havi 529 Ft',
      total: 529,
      isMonthly: true,
      items: [
        { name: 'Horváth Rozi jódozott só 1 kg', url: A + 'horvath-rozi-jodozott-so-1-kg.p-435891', qty: '1 kg · kb. félévente', unit: '295 Ft', price: 49, aisle: 'havi 49 Ft', flag: 'Csak ezzel sózz – hal és alga nélkül ez az egyetlen jódforrásod.' },
        { name: 'Horváth Rozi morzsolt oregánó 5 g', url: A + 'horvath-rozi-morzsolt-oregano-5-g.p-262383', qty: '1–2 tégely · havonta', unit: '145 Ft', price: 290, aisle: 'havi 290 Ft', flag: 'Szinte minden tálban szerepel.' },
        { name: 'Horváth Rozi fokhagymabors fűszerkeverék', url: A + 'horvath-rozi-fokhagymabors-fuszerkeverek.p-856126', qty: '1 tégely · kb. 2 havonta', unit: '379 Ft', price: 190, aisle: 'havi 190 Ft', flag: 'A vasárnapi babkrémhez és az öntetekhez.' }
      ],
      outro: 'Feketebors: bármelyik őrölt vagy darálós, ~500 Ft, évekig kitart – nem szerepel a költségmodellben.'
    },
    {
      id: 'kiegeszitok',
      title: 'Táplálékkiegészítők',
      cadence: 'saját ritmus · havi 24 115 Ft',
      total: 24115,
      isMonthly: true,
      items: [
        { name: 'GymBeam Protein True Whey 1000 g (77% fehérje)', url: 'https://gymbeam.hu/true-whey-gymbeam.html', qty: '45 g/nap · kb. 22 napra', unit: '12 990 Ft', price: 17770, aisle: 'havi 17 770 Ft', flag: 'A 3. étkezés shake-je. 30-ról 45 g-ra emelve – deficitben a fehérje tartja meg az izmot.' },
        { name: 'GymBeam 100% Mikronizált Kreatin-monohidrát 1000 g', url: 'https://gymbeam.hu/100-kreatin-monohidrat-gymbeam.html', qty: '5 g/nap · kb. 7 hónapra', unit: '12 890 Ft', price: 1959, aisle: 'havi 1 959 Ft', flag: 'Ugyanabba a shakerbe. 1 kg = 200 nap.' },
        { name: 'GymBeam Omega-3 Forte 90 kapszula', url: 'https://gymbeam.hu/omega-3-forte-gymbeam.html', qty: '2 kapszula/nap · kb. 6 hétre', unit: '3 690 Ft', price: 2497, aisle: 'havi 2 497 Ft', flag: '2 kapszula = 1 100 mg EPA+DHA. Étkezéshez vedd be.' },
        { name: 'Naturland Premium D3-vitamin 4000 NE forte 120 db', url: A + 'naturland-premium-d3-vitamin-4000-ne-forte-etrend-kiegeszito-tabletta-120-db-22-02-g.p-270038', qty: '1 tabletta/nap · kb. 4 hónapra', unit: '2 949 Ft', price: 748, aisle: 'havi 748 Ft', flag: 'Zsíros étkezéshez. Szeptembertől áprilisig kötelező.' },
        { name: 'Damona Cink 20 mg 60 db', url: A + 'damona-cink-20-mg-etrend-kiegeszito-tabletta-60-db-15-g.p-82230', qty: '1 tabletta/nap · kb. 2 hónapra', unit: '2 249 Ft', price: 1141, aisle: 'havi 1 141 Ft', flag: 'Este, üres gyomorra – ne a vasdús étkezéssel együtt.' }
      ],
      outro: '<b>Amit NEM kell venned:</b> multivitamin, B12, vas, kollagén. A zöldség- és hüvelyesmennyiség, a tojás, a cottage cheese, a kefir és a fehérjepor együtt lefedik ezeket.'
    }
  ],
  firstShop: {
    rows: [
      { name: 'Heti lista', price: 19063 },
      { name: 'Kétheti lista', price: 5371 },
      { name: 'Havi lista', price: 6893 },
      { name: 'Ritka (olívaolaj)', price: 5799 },
      { name: 'Fűszer, só', price: 819 },
      { name: 'D3 + cink (Auchan)', price: 5198 },
      { name: 'Auchan összesen', price: 43143, strong: true },
      { name: 'GymBeam: fehérjepor + kreatin + omega-3', price: 29570 },
      { name: 'Első bevásárlás mindösszesen', price: 72713, strong: true, total: true }
    ],
    note: 'A <b>2. héttől</b> ez lezuhan: a legtöbb héten csak a heti lista kell, ~19 063 Ft.'
  },
  tips: [
    { name: 'Tahini', text: 'A <b>libanoni, 7 068 Ft/kg</b>-os a jó, ne a Makedoniki 300 g-ost vedd (10 563 Ft/kg). Az összetevők közt csak szezámmag legyen. Használat előtt keverd át – az olaj kiül a tetejére.' },
    { name: 'Cékla', text: '<b>Nyerset vegyél, lédig</b> – nem főttet, nem ecetest. Az Auchan nem forgalmaz sima előfőzött céklát: amit „cékla” néven a polcon találsz, az ecetes savanyúság vagy fermentált, tormás-fokhagymás változat. Egyik sem jó ide. A nyers gumó a zöldségosztályon van, kilóra.' },
    { name: 'Cottage cheese', text: 'Az Auchan egyetlen valódi cottage cheese-t forgalmaz – ez az. <b>Ne túrót vegyél helyette</b>, a kettő nem ugyanaz (a túró száraz és morzsás, 17 g fehérje/100 g; a cottage cheese nedves rögök, 12 g).' },
    { name: 'Kefir', text: 'Most <b>6 poharat</b> veszel, nem 4-et. Ellenőrizd a szavatosságot – a hatodik pohár a hét végén, sőt a következő hét elején kerül sorra.' },
    { name: 'Banán', text: 'Vegyél <b>inkább zöldebbet</b>, és érleld otthon. A fagyasztáshoz foltos, teljesen érett banán kell – akkor a legédesebb, és a fagyasztás ott rögzíti.' },
    { name: 'Konzerv hüvelyesek', text: 'A recept a <b>lecsepegtetett</b> tömeggel számol (240 g), nem a bruttóval (400 g). Mindig öblítsd át – ettől lesz tiszta íze és kevésbé puffasztó.' },
    { name: 'Koktélparadicsom', text: 'Ez a lista legdrágább zöldsége (1 788 Ft/kg). Sima lédig paradicsommal 810 Ft/kg lenne, napi –180 Ft – de tudjuk, hogy azt nem szereted.' },
    { name: 'Fagyasztott áfonya', text: '<b>Fagyottan</b> megy a turmixba, nem kell kiolvasztani.' },
    { name: 'Avokádó', text: 'A „szájérett” jelzésű a lényeg – az aznap ehető. Ha keményet veszel, 2–3 nap a konyhapulton.' },
    { name: 'Olívaolaj', text: 'Az 1 literes PET olcsóbb literre (5 799 vs 5 998 Ft/l). Sötét helyen tárold. Most 9,5 hétre elég, tehát sokáig áll – ezért számít a tárolás.' },
    { name: 'Jódozott só', text: 'Ellenőrizd a csomagoláson, hogy tényleg jódozott. Hal és tengeri alga nélkül ez az egyetlen jódforrásod.' }
  ],
  savings: [
    { step: 'Fehérjepor 45 → 30 g', save: '–5 900 Ft/hó', cost: 'A fehérje 163-ról ~151 g-ra esne (2,01 g/ttkg). <b>Deficitben ez pont a rossz irány</b> – ez tartja meg az izmot. Ez a legnagyobb mozdítható tétel, és mégis ehhez nyúlnék utoljára.' },
    { step: 'Koktélparadicsom → sima paradicsom', save: '–5 500 Ft/hó', cost: 'Nem szereted a sima paradicsomot.' },
    { step: 'Kefir → UHT tej (239 Ft/l)', save: '–4 600 Ft/hó', cost: 'Elveszíted a napi élő kultúrákat, és a kalcium ~880-ról ~700 mg alá esne.' },
    { step: 'Cottage cheese → félzsíros túró', save: '–4 200 Ft/hó', cost: 'Nem az, amit kértél.' },
    { step: 'Tahini → semmi, csak olívaolaj', save: '–2 300 Ft/hó', cost: 'A hummusz elveszíti a jellegét, és kiesik egy növényfaj. A kalóriát olajjal pótolnád, ami ugyanannyi.' }
  ],
  storage: {
    fridge: 'salátakeverék, petrezselyem, paprika, uborka, koktélparadicsom, cottage cheese, tojás, citrom, joghurt, kefir, cékla, a főtt lencse és a kész hummusz',
    pantry: 'zab, lencse, konzervek, olívaolaj, tahini, lilahagyma, fokhagyma, fehérjepor, kreatin, chia',
    freezer: 'a bogyós gyümölcs és a banán – mindkettő fagyottan megy a turmixba, egyiket sem kell kiolvasztani',
    counter: 'az avokádó, amíg meg nem érik; a banán, amíg foltos nem lesz – utána az avokádó hűtőbe, a banán fagyasztóba'
  },
  footer: 'Az árak 2026. 09. 12–13-án érvényes online árak (auchan.hu, gymbeam.hu). Az Auchan áruházi árai eltérhetnek az online áraktól. A GymBeam árai listaárak, előfizetéssel jellemzően 5%-kal olcsóbbak.'
};
