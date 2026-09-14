/* Mediterrán rendszer — adatok
   Forrás: mediterran-etrend.md + bevasarlolista.md (2026. 09. 14-i átdolgozás) */

export const META = {
  title: 'Mediterrán rendszer',
  subtitle: '75 kg · 170 cm · lassú fogyás, főzés nélkül',
  updated: '2026. 09. 14.',
  targets: { kcal: 2184, protein: 155, carb: 195, fat: 80, fiber: 51, price: 4411 }
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
    { name: 'Zabpehely', amount: '60 g', product: 'Bona Vita zabpehely 500 g', pack: '389 Ft / 500 g', price: 47 },
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
    { label: 'Fagyasztott banán – heti 3 perc', text: 'Napi 30 g egy közepes banán negyede, vágva-hűtve pedig 2 nap alatt megbarnulna. Ezért: végy <b>2 banánt</b>, érleld a pulton amíg <b>foltos</b> (ekkor a legédesebb), <b>hámozd meg</b>, vágd <b>4 darabra</b>, terítsd szét egy tányéron úgy, hogy ne érjenek össze, fagyaszd <b>1 órát</b>, és csak utána öntsd zacskóba. A tálcás előfagyasztás nélkül egyetlen tömbbé fagynak össze. 2 banán = 8 adag = 8 nap. <b>Héjastul ne fagyaszd</b> – utána nem tudod meghámozni. A fagyott banán ráadásul sűrűbbre és hidegebbre turmixolja az italt.' }
  ],
  nutrition: { kcal: 1072, kcalPct: 49, protein: 69, proteinPct: 44, carb: 76, carbNet: 62, fat: 50, fiber: 14, fiberPct: 27 },
  micros: 'B12 ~3,8 µg (152% NRV) · kolin ~720 mg (5 tojás) · élő probiotikus kultúrák (kefir) · kalcium ~640 mg · ALA omega-3 ~1,5 g (chia) · C-vitamin ~15 mg · szelén ~60 µg'
};

const meal2 = {
  id: 'meal-2',
  n: 2,
  kicker: '2. étkezés',
  short: 'Hummusz',
  tag: 'minden nap',
  title: 'Lencsés hummusz',
  titleEn: 'Lentil hummus',
  time: '2 perc, naponta',
  price: 1102,
  ingredients: [
    { name: 'Párolt lencse konzerv', amount: '1 doboz (310 g)', product: 'Globus párolt lencse 310 g', pack: '599 Ft / 310 g', price: 599 },
    { name: 'Tahini (szezámpaszta)', amount: '12 g', product: 'Libanoni szezámpaszta (7 068 Ft/kg)', pack: '3 209 Ft / ~454 g', price: 85 },
    { name: 'Koktélparadicsom', amount: '120 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 215 },
    { name: 'Kígyóuborka', amount: '120 g', product: 'Kígyóuborka (kb. 400 g/db)', pack: '349 Ft / 1 db', price: 105 },
    { name: 'Extra szűz olívaolaj', amount: '5 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 32 },
    { name: 'Citromlé (frissen facsarva)', amount: '10 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 54 },
    { name: 'Fokhagyma', amount: '1 gerezd (~4 g)', product: 'Fokhagyma 3 db/csomag', pack: '447 Ft / 3 db', price: 12 }
  ],
  steps: [
    { label: 'Konzervnyitás · 30 mp', text: 'Nyisd ki a dobozt, öntsd szűrőbe, <b>öblítsd át hideg vízzel</b>. Az öblítés a sót mossa le – a konzerv 0,64 g sót tartalmaz 100 grammonként, ami dobozonként ~2 g.' },
    { label: 'Turmixolás · 90 mp', text: 'A lencse 12 g tahinivel, 5 g olívaolajjal, 10 g citromlével, 1 gerezd fokhagymával, borssal és oregánóval. <b>60–90 másodperc</b>, egyszer kaparva le az oldalát. Vizet általában nem kell – ha nagyon sűrű, kanalanként.' },
    { text: '<b>Ne sózd meg.</b> Ez az egyetlen étkezés a tervben, ahol nem kell – a konzerv hozza a sót. Kóstold meg, mielőtt bármit hozzáadnál.' },
    { label: 'Tálalás', text: 'Félbevágott koktélparadicsom és <b>vastag uborkacsíkok</b> mellé – ezekkel mártogatod. Kenyér nincs, nem is kell.' }
  ],
  notes: [
    { label: 'Csináld a reggeli turmix után, ugyanabban a kancsóban', text: 'Öntsd ki a turmixot, öblítsd ki a kancsót, és jöhet a hummusz. Egy mosogatás kettő helyett, és az egész napi rutinhoz két percet ad hozzá.' },
    { label: 'Miért konzerv és nem száraz lencse?', text: 'Így a tervben <b>egyáltalán nincs főzés</b> a reggeli rántottán kívül – nincs vasárnapi 25 perces lencsefőzés, nincs 2,5 kg főtt lencse a hűtőben, nincs eltarthatósági határidő. Cserébe drága: a konzerv lencse <b>~31 800 Ft/kg fehérje</b>, a száraz 7 600 – ez a terv legdrágább fehérjeforrása lett. Napi ~416 Ft-ot fizetsz azért, hogy ne kelljen főznöd.' },
    { label: 'Egy doboz = egy adag, és ez kevesebb, mint a főtt lencse volt', text: 'A 310 g konzerv 22 g fehérjét és 279 kcal-t ad, szemben a korábbi 330 g főtt beluga 32,5 g / 455 kcal-jával. Ezt a kiesést hozza vissza a reggeli megemelt zabadagja (35 → 60 g). <b>A címkét ellenőrizd</b> – ha a dobozon lecsepegtetett tömeg is szerepel, a tápértékek eltérhetnek az itt számolttól.' },
    { label: 'Amit tudnod kell a tahiniről', text: 'Ez helyettesíti a kikerült fetát, és majdnem pontosan ugyanazt a zsírt és kalóriát hozza, csak szezámból. Polcon áll el hónapokig, tehát nincs maradékgond: egy ~454 g-os üveg <b>öt hétre</b> elég. Használat előtt <b>keverd át</b> – az olaj kiül a tetejére.' }
  ],
  nutrition: { kcal: 446, kcalPct: 20, protein: 26, proteinPct: 17, carb: 45, carbNet: 28, fat: 14, fiber: 17, fiberPct: 33 },
  micros: 'Folát ~250 µg · magnézium ~130 mg · vas ~6 mg · kálium ~800 mg · likopin · E-vitamin · <b>só ~2 g dobozonként</b> (öblítés után kb. a fele marad)'
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
    title: 'Csicseriborsós-retkes paprikacsónak',
    titleEn: 'Chickpea & radish pepper boats',
    time: '6 perc',
    price: 1106,
    dressing: 'citromos',
    ingredients: [
      { name: 'Csicseriborsó konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht csicseriborsó 400/240 g', pack: '549 Ft / 240 g lecsepegtetve', price: 549 },
      { name: 'Kaliforniai paprika', amount: '150 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 216 },
      { name: 'Koktélparadicsom', amount: '100 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 179 },
      { name: 'Hónapos retek (szeletelve)', amount: '70 g (~5–6 db)', product: 'Hónapos retek 300 g', pack: '449 Ft / 300 g', price: 105, highlight: true },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Extra szűz olívaolaj', amount: '8 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 50 },
      { name: 'Citromlé (frissen facsarva)', amount: '10 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 54 }
    ],
    steps: [
      { text: 'Vágd félbe hosszában a kaliforniai paprikát, kanállal kapard ki a magházat – ez lesz a „tál”.' },
      { text: 'Öntsd szűrőbe a csicseriborsót, öblítsd át hideg víz alatt, csepegtesd le.' },
      { text: 'Keverd össze a félbevágott koktélparadicsommal, a <b>vékonyra szelt hónapos retekkel</b> és a vékonyra szelt lilahagymával.' },
      { text: 'Olívaolaj, citromlé, oregánó, <b>só</b>, bors – forgasd össze, kanalazd a paprikafelekbe.' }
    ],
    nutrition: { kcal: 501, kcalPct: 23, protein: 21, proteinPct: 14, carb: 74, carbNet: 53, fat: 16, fiber: 21, fiberPct: 41 },
    micros: 'C-vitamin ~250 mg (310% NRV) · folát ~230 µg · vas ~4 mg · kálium ~1 050 mg'
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
      { name: 'Párolt lencse konzerv', amount: '1 doboz (310 g)', product: 'Globus párolt lencse 310 g', pack: '599 Ft / 310 g', price: 599 },
      { name: 'Avokádó (tisztítva)', amount: '120 g', product: 'Szájérett avokádó (kb. 200 g/db, ebből ~140 g hús)', pack: '429 Ft / 1 db', price: 368 },
      { name: 'Koktélparadicsom', amount: '100 g', product: 'Paradicsom fürtöskoktél 500 g', pack: '894 Ft / 500 g', price: 179 },
      { name: 'Hónapos retek (szeletelve)', amount: '70 g (~5–6 db)', product: 'Hónapos retek 300 g', pack: '449 Ft / 300 g', price: 105, highlight: true },
      { name: 'Friss salátakeverék', amount: '70 g', product: 'Eisberg Pántlika Mix 190 g', pack: '549 Ft / 190 g', price: 202 },
      { name: 'Lilahagyma', amount: '20 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 15 },
      { name: 'Citromlé (frissen facsarva)', amount: '15 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 81 },
      { name: 'Extra szűz olívaolaj', amount: '3 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 19 }
    ],
    steps: [
      { text: 'Öblítsd át egy doboz párolt lencsét szűrőben hideg víz alatt, csepegtesd le, tedd a tálba. Szeletelj rá vékonyra 70 g hónapos retket. <b>Ez a hét második konzerve</b> – szerdán kettőt nyitsz, egyet ebédre, egyet ide. <b>A céklát tedd a tál egyik oldalára</b>, ne keverd át azonnal.' },
      { text: 'Vágd félbe az avokádót, kanalazd ki a húsát, kockázd fel – dobd a lencsére.' },
      { text: 'Tedd rá a salátakeveréket, a félbevágott koktélparadicsomot, a vékonyra szelt lilahagymát.' },
      { text: 'Bőven citromlé (ez tartja zölden az avokádót), egy kevés olívaolaj, <b>só</b>, bors. <b>Óvatosan</b> forgasd össze, hogy az avokádó ne kenődjön szét.' }
    ],
    nutrition: { kcal: 553, kcalPct: 25, protein: 27, proteinPct: 17, carb: 57, carbNet: 31, fat: 23, fiber: 26, fiberPct: 51 },
    micros: 'Egyszeresen telítetlen zsírsavak · kálium ~1 300 mg · folát ~290 µg · E-vitamin · K-vitamin ~110 µg · vas ~5 mg'
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
    title: 'Vörösbabos-retkes saláta',
    titleEn: 'Kidney bean & radish salad',
    time: '6 perc',
    price: 1299,
    dressing: 'joghurtos',
    ingredients: [
      { name: 'Vörös kidney bab konzerv (lecsepegtetve)', amount: '240 g', product: 'Happy Frucht vörös kidney bab 400/240 g', pack: '735 Ft / 240 g lecsepegtetve', price: 735 },
      { name: 'Kígyóuborka', amount: '120 g', product: 'Kígyóuborka (kb. 400 g/db)', pack: '349 Ft / 1 db', price: 105 },
      { name: 'Lilahagyma', amount: '30 g', product: 'Lilahagyma 500 g', pack: '369 Ft / 500 g', price: 22 },
      { name: 'Kaliforniai paprika', amount: '80 g', product: 'Trikolor kaliforniai paprika 3 db (kb. 150 g/db)', pack: '649 Ft / 3 db', price: 115 },
      { name: 'Hónapos retek (szeletelve)', amount: '70 g (~5–6 db)', product: 'Hónapos retek 300 g', pack: '449 Ft / 300 g', price: 105, highlight: true },
      { name: 'Friss salátakeverék', amount: '50 g', product: 'Eisberg Pántlika Mix 190 g', pack: '549 Ft / 190 g', price: 144 },
      { name: 'Natúr joghurt (zsírszegény)', amount: '150 g', product: 'Nádudvari zsírszegény, élőflórás natúr joghurt 150 g', pack: '98 Ft / 150 g pohár', price: 98 },
      { name: 'Fokhagyma', amount: '4 g', product: 'Fokhagyma 3 db/csomag (kb. 50 g/fej)', pack: '447 Ft / 3 db', price: 12 },
      { name: 'Extra szűz olívaolaj', amount: '5 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 32 }
    ],
    steps: [
      { text: 'Öblítsd át a kidney babot alaposan (ennek a legerősebb a konzervíze), csepegtesd le.' },
      { text: 'Kockázd fel az uborkát és a kaliforniai paprikát, szeleteld vékonyra a lilahagymát és a retket.' },
      { text: 'Tedd mellé a salátakeveréket.' },
      { text: 'Turmixold össze a <b>joghurtos öntetet</b> egy csipet extra oregánóval, és forgasd bele. Hagyd 5 percet állni. <b>Sózd a végén.</b> A retek borsos élét a fokhagymás joghurt szelídíti – ez a hét egyik legjobb tála.' }
    ],
    nutrition: { kcal: 508, kcalPct: 23, protein: 30, proteinPct: 19, carb: 80, carbNet: 60, fat: 10, fiber: 20, fiberPct: 39 },
    micros: 'C-vitamin ~115 mg · folát ~250 µg · vas ~4 mg · kálium ~1 100 mg · B6-vitamin'
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
      { name: 'Hónapos retek (szeletelve)', amount: '70 g (~5–6 db)', product: 'Hónapos retek 300 g', pack: '449 Ft / 300 g', price: 105, highlight: true },
      { name: 'Friss petrezselyemzöld', amount: '20 g', product: 'Petrezselyem csomós XL (kb. 60 g)', pack: '599 Ft / 1 csomó', price: 200 },
      { name: 'Citromlé (frissen facsarva)', amount: '15 g', product: 'Auchan Kedvenc facsarni való citrom 1 kg', pack: '1 899 Ft / 1 kg ≈ 350 ml lé', price: 81 },
      { name: 'Extra szűz olívaolaj', amount: '8 g', product: 'Auchan Kedvenc extra szűz olívaolaj 1 l PET', pack: '5 799 Ft / 1 l ≈ 920 g', price: 50 }
    ],
    steps: [
      { text: 'Öblítsd át a csicseriborsót, csepegtesd le.' },
      { text: 'Salátakeverék + félbevágott koktélparadicsom + <b>vékonyra szelt retek</b> + a maradék petrezselyemzöld a tálba.' },
      { text: 'Öntet: <b>bőven citromlé</b> + olívaolaj + oregánó + fokhagymabors + <b>só</b>. Ez a hét legfrissebb, legsavasabb tála – a citrom viszi, a retek pedig ropogást ad hozzá.' }
    ],
    nutrition: { kcal: 464, kcalPct: 21, protein: 21, proteinPct: 14, carb: 66, carbNet: 47, fat: 15, fiber: 19, fiberPct: 37 },
    micros: 'Folát ~260 µg · K-vitamin ~200 µg · C-vitamin ~65 mg · vas ~4 mg'
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
  { when: 'Heti egyszer · 3 perc', title: 'Banán — és ennyi', text: '2 érett (foltos) banán meghámozva, negyedelve, tányéron 1 órát fagyasztva, utána zacskóba. 8 adag, 8 napra. <b>Ez az egyetlen heti előkészítés.</b>' }
];

export const PREP_NOTES = [
  '<b>Nincs vasárnapi lencsefőzés</b>, nincs adagolás, nincs semmi előre elkészítve. A 2. étkezés naponta készül, 2 perc: konzervnyitás, öblítés, turmixolás – csináld a reggeli turmix után, ugyanabban a kancsóban.',
  'A 7 vacsora mindegyike 3–6 perc, aznap: konzervnyitás, öblítés, vágás, összeforgatás. Ezzel a tervben <b>egyetlen főzési művelet maradt</b>: a reggeli rántotta.',
  '<b>Amit ezzel elveszítettél:</b> a száraz lencse a terv legolcsóbb fehérjéje volt (7 600 Ft/kg fehérje a konzerv 31 800-ával szemben). A napi ~416 Ft-os felár ára ez a szakasz – ami korábban 30 perc volt, most 3.'
];

/* ---------- Bevásárlólista ---------- */

const A = 'https://auchan.hu/shop/';

export const SHOPPING = {
  summary: {
    monthly: 139123,
    food: 114479,
    supplements: 24115,
    spices: 529,
    daily: 4576,
    perMeal: 1144
  },
  rhythm: [
    { name: 'Heti', when: 'hetente', items: 18, once: 22795, monthly: 99158 },
    { name: 'Kétheti', when: 'kéthetente', items: 1, once: 4683, monthly: 10162 },
    { name: 'Havi', when: 'havonta', items: 5, once: 6893, monthly: 6893 },
    { name: 'Ritka', when: 'kb. 2,5 havonta', items: 1, once: 5799, monthly: 2320 },
    { name: 'Fűszer / só', when: 'alkalomszerűen', items: 3, once: null, monthly: 529 },
    { name: 'Kiegészítők', when: 'külön ritmus', items: 5, once: null, monthly: 24115 }
  ],
  practice: 'A hónap 4 hetéből 2-ben csak a heti listát veszed meg (~22 795 Ft), egyszer a heti + kétheti (~27 478 Ft), egyszer a heti + kétheti + havi (~34 371 Ft).',
  lists: [
    {
      id: 'heti',
      title: 'Heti lista',
      cadence: 'minden héten',
      total: 22795,
      intro: 'Ez a törzslista. Friss és gyorsan fogyó tételek.',
      items: [
        { name: 'Paradicsom fürtöskoktél 500 g', url: A + 'paradicsom-furtoskoktel-500-g.p-765618', qty: '3 doboz', unit: '894 Ft', price: 2682, aisle: 'Zöldség – gyümölcs' },
        { name: 'Cheeseland natúr, zsírszegény cottage cheese 150 g', url: A + 'cheeseland-natur-zsirszegeny-cottage-cheese-150-g.p-896238', qty: '5 doboz', unit: '459 Ft', price: 2295, aisle: 'Tejtermék › Túró, tejszín' },
        { name: 'Auchan Kedvenc kaukázusi kefir 450 g', url: A + 'auchan-kedvenc-kaukazusi-kefir-450-g.p-310723', qty: '6 pohár', unit: '379 Ft', price: 2274, aisle: 'Tejtermék › Tejföl, kefir', flag: 'A kefir 4-ről 6 pohárra ment fel – napi 350 g kell.' },
        { name: 'Auchan Kedvenc áfonya, gyorsfagyasztott 450 g', url: A + 'auchan-kedvenc-afonya-gyorsfagyasztott-450-g.p-735731', qty: '2 zacskó', unit: '1 079 Ft', price: 2158, aisle: 'Fagyasztott gyümölcs' },
        { name: 'Globus párolt lencse 310 g', url: A + 'globus-parolt-lencse-310-g.p-459223', qty: '8 doboz', unit: '599 Ft', price: 4792, aisle: 'Konzervek', flag: 'A lista legnagyobb egyedi tétele. Napi 1 doboz ebédre, plusz 1 extra szerdán a vacsorához. Összetevő csak lencse, ivóvíz, étkezési só legyen.' },
        { name: 'Bona Vita zabpehely 500 g', url: A + 'bona-vita-zabpehely-500-g.p-493809', qty: '1 zacskó', unit: '389 Ft', price: 389, aisle: 'Müzli, gabonapehely', flag: 'Átkerült a heti listára: a napi adag 35 → 60 g, így heti 420 g fogy.' },
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
      total: 4683,
      intro: 'Ezek a kiszerelések nem osztódnak kerekre egy hétre, ezért kétheti ritmusban veszed őket.',
      items: [
        { name: 'Szijártó friss tojás M méret 10 db', url: A + 'szijarto-friss-tojas-m-meret-10-db.p-59504', qty: '7 doboz (70 db)', unit: '669 Ft', price: 4683, aisle: 'Tojás' },
        { name: 'Hónapos retek 300 g', url: A + 'honapos-retek-300-g.p-168734', qty: '1 zacskó', unit: '449 Ft', price: 449, aisle: 'Zöldség – gyümölcs', flag: 'Nem kell hámozni és reszelni – mosás, végeket levágni, karikákra szeletelni. A 300 g-os zacskó pontosan 4 adag. Súlyra. Ha van rajta zöld szár, vágd le rögtön otthon.' }
      ],
      outro: '<b>Miért pont ennyi:</b> a tojásból naponta 5 db kell (heti 35) → 2 hét = 70 db = pontosan 7 doboz. A céklából heti 280 g kell (4 vacsora × 70 g) → 2 hét = 560 g.'
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
      { name: 'Heti lista', price: 22795 },
      { name: 'Kétheti lista', price: 4683 },
      { name: 'Havi lista', price: 6893 },
      { name: 'Ritka (olívaolaj)', price: 5799 },
      { name: 'Fűszer, só', price: 819 },
      { name: 'D3 + cink (Auchan)', price: 5198 },
      { name: 'Auchan összesen', price: 46187, strong: true },
      { name: 'GymBeam: fehérjepor + kreatin + omega-3', price: 29570 },
      { name: 'Első bevásárlás mindösszesen', price: 75757, strong: true, total: true }
    ],
    note: 'A <b>2. héttől</b> ez lezuhan: a legtöbb héten csak a heti lista kell, ~22 795 Ft.'
  },
  tips: [
    { name: 'Tahini', text: 'A <b>libanoni, 7 068 Ft/kg</b>-os a jó, ne a Makedoniki 300 g-ost vedd (10 563 Ft/kg). Az összetevők közt csak szezámmag legyen. Használat előtt keverd át – az olaj kiül a tetejére.' },
    { name: 'Hónapos retek', text: 'Nem kell hámozni és nem kell reszelni – mosás, két végét levágni, vékony karikákra szeletelni. A 300 g-os zacskó <b>pontosan 4 adag</b>. Ha leveles csomót veszel, a zöldjét vágd le rögtön otthon. <i>(A korábbi cékla azért esett ki, mert naponta hámozni-reszelni túl sok macera volt.)</i>' },
    { name: 'Cékla – már nem szerepel', text: 'Ha mégis visszatennéd: <b>nyerset vegyél, lédig</b> – nem főttet, nem ecetest. Az Auchan nem forgalmaz sima előfőzött céklát: amit „cékla” néven a polcon találsz, az ecetes savanyúság vagy fermentált, tormás-fokhagymás változat. Egyik sem jó ide. A nyers gumó a zöldségosztályon van, kilóra.' },
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
    { step: 'Konzerv lencse → száraz beluga lencse', save: '–12 600 Ft/hó', cost: 'Visszajön a vasárnapi 25 perces főzés és a 2,5 kg főtt lencse a hűtőben. A messze legnagyobb megtakarítás – és pontosan az a kényelem, amit szándékosan megvettél.' },
    { step: 'Fehérjepor 45 → 30 g', save: '–5 900 Ft/hó', cost: 'A fehérje 155-ról ~143 g-ra esne (1,92 g/ttkg). <b>Deficitben ez pont a rossz irány</b> – ez tartja meg az izmot. Ez a legnagyobb mozdítható tétel, és mégis ehhez nyúlnék utoljára.' },
    { step: 'Koktélparadicsom → sima paradicsom', save: '–5 500 Ft/hó', cost: 'Nem szereted a sima paradicsomot.' },
    { step: 'Kefir → UHT tej (239 Ft/l)', save: '–4 600 Ft/hó', cost: 'Elveszíted a napi élő kultúrákat, és a kalcium ~880-ról ~700 mg alá esne.' },
    { step: 'Cottage cheese → félzsíros túró', save: '–4 200 Ft/hó', cost: 'Nem az, amit kértél.' },
    { step: 'Tahini → semmi, csak olívaolaj', save: '–2 300 Ft/hó', cost: 'A hummusz elveszíti a jellegét, és kiesik egy növényfaj. A kalóriát olajjal pótolnád, ami ugyanannyi.' }
  ],
  storage: {
    fridge: 'salátakeverék, petrezselyem, paprika, uborka, koktélparadicsom, cottage cheese, tojás, citrom, joghurt, kefir, hónapos retek',
    pantry: 'zab, lencse, konzervek, olívaolaj, tahini, lilahagyma, fokhagyma, fehérjepor, kreatin, chia',
    freezer: 'a bogyós gyümölcs és a banán – mindkettő fagyottan megy a turmixba, egyiket sem kell kiolvasztani',
    counter: 'az avokádó, amíg meg nem érik; a banán, amíg foltos nem lesz – utána az avokádó hűtőbe, a banán fagyasztóba'
  },
  footer: 'Az árak 2026. 09. 12–13-án érvényes online árak (auchan.hu, gymbeam.hu). Az Auchan áruházi árai eltérhetnek az online áraktól. A GymBeam árai listaárak, előfizetéssel jellemzően 5%-kal olcsóbbak.'
};
