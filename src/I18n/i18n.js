import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
i18next
.use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'uz',
    resources: {
        ru: {
            translation: {
                selectHouse:'Выбор квартир',
                threeD:'3D тур',
                bookHouse:'Заказать звонок',
                usefulOffer:'Выгодные предложения',
                pricePersentage:' • При 100% оплате 15% + NRG CLUB CARD',
                comboOffer:"Предложение «Combo»: ",
                parkingSklat:'Паркинг место + кладовое помещение — 196 000 000 сум',
                paymentTerms:'Условия по рассрочке:',
                minimalBadal:'• Минимальный взнос от 25%',
                discount1:'• При 30% оплате скидка 3%',
                discount2:'• При 50% оплате скидка 6%',
                discount3:'• При 70% оплате скидка 9%',
                discount4:'• Остаток до АВВЭ',
                extraWordSlider:'Подробности по телефону <span c style={{color:"red"}}>1060</span>(с мобильного бесплатно) и в офисах продаж NRG.',
                videoHeading:'Добро пожаловать\n в',
                videoInfor:(`НОВЫЙ ЖИЛОЙ КОМПЛЕКС ПРЕМИУМ-\nКЛАССА – NRG VOHA, СТАНЕТ ИДЕАЛЬНЫМ\nВЫБОРОМ ДЛЯ ТЕХ, КТО ИЩЕТ ЛУЧШЕЕ\nСОЧЕТАНИЕ КОМФОРТАБЕЛЬНОГО ЖИЛЬЯ И\nИЗЫСКАННОЙ АТМОСФЕРЫ ДЛЯ СЕБЯ И \n СВОИХ БЛИЗКИХ.`),
                sliderHeading:'Оазис cпокойства',
                sizeOfObject:'ПЛОЩАДЬ ОБЪЕКТА',
                ocherd:'ОЧЕРЕДИ',
                numberOfHouses:'КОЛ-ВО КВАРТИР',
                stories:'ЭТАЖНОСТЬ',
                formHeading:'Получить подробную консультацию',
                formPlaceholdersName:'Ваше имя',
                formPlaceholdersNumber:'Телефон',
                sentWordOfForm:'Отправить',
                userAgreementOfForm:'Я согласен на обработку персональных данных',
                locationHeading:'РАСПОЛОЖЕНИЕ',
                locationText:'Престижный Мирзо-Улугбекский район, ниже улица "Циолковского".Малоэтажная застройка, близкое расположение к транспортным развязкам, при этом отсутствие шума от большого потока транспорта, своеобразный зеленый оазис в сердце городской суеты.'
            }
        },
        uz: {
            translation: {
                selectHouse: "Kvartiralarni tanlash",
                threeD: "3D tur",
                bookHouse: "Qo'ng'iroq qilish",
                usefulOffer: "Foydali takliflar",
                pricePersentage: " • 100% to'lovda 15% + NRG CLUB CARD",
                comboOffer: "«Combo» taklifi:",
                parkingSklat: "Parking joyi + saqlash xonasi — 196 000 000 so'm",
                paymentTerms: "Bo'lib to'lash shartlari:",
                minimalBadal: "• Minimal to'lov 25% dan",
                discount1: "• 30% to'lovda 3% chegirma",
                discount2: "• 50% to'lovda 6% chegirma",
                discount3: "• 70% to'lovda 9% chegirma",
                discount4: "• Qolgan qismi to ABBB",
                extraWordSlider: "Batafsil ma'lumot uchun telefon: 1060 (mobil telefonlardan bepul) va NRG savdo ofislarida.",
                videoHeading: "Xush kelibsiz",
                videoInfor: "YANGI PREMIUM TOIFALI TURAR JOY KOMPLEKSI – NRG VOHA, SIZ VA YAQINLARINGIZ UCHUN QU LAY TURAR JOY VA NAFIS MUHITNING ENG YAXSHI UYG'UNLIGINI IZLAYOTGANLAR UCHUN IDEAL TANLOV BO'LADI.",
                sliderHeading: "Sokinlik go'shasi",
                sizeOfObject: "OBYEKT MAYDONI",
                ocherd: "NAVBATLAR",
                numberOfHouses: "KVARTIRALAR SONI",
                stories: "QAVATLAR SONI",
                formHeading: "Batafsil maslahat olish",
                formPlaceholdersName: "Ismingiz",
                formPlaceholdersNumber: "Telefon",
                sentWordOfForm: "Yuborish",
                userAgreementOfForm: "Men shaxsiy ma'lumotlarni qayta ishlashga roziman",
                locationHeading: "JOYLASHUVI",
                locationText: "Nufuzli Mirzo-Ulug‘bek tumani, “Tsiolkovskiy” ko‘chasining pastki qismida. Ko‘p qavatli binolar, transport bog‘lamalariga yaqin joylashgan, shunga qaramay, transport oqimining katta shovqinisiz, shahar shovqinidan yiroq o‘ziga xos yashil oazis."
            }
        }
    }
},
function(err, t) {
    // initialized and ready to go!
    root.innerHTML = i18next.t('');
  })