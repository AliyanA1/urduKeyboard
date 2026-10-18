import { standardUrduKeyboard } from "./keyboard";

export const practiceWords = [
	"نام", "ولدیت", "والدہ", "پتہ", "مستقل", "عارضی", "ضلع", "تحصیل", "صوبہ", "شہر",
	"گاؤں", "محلہ", "سڑک", "مکان", "فون", "موبائل", "شناخت", "رجسٹریشن", "درخواست", "تصدیق",
	"اندراج", "ریکارڈ", "فائل", "دفتر", "محکمہ", "شعبہ", "عہدہ", "ملازمت", "تجربہ", "قابلیت",
	"تعلیم", "تقرری", "تبادلہ", "تعیناتی", "ترقی", "ریٹائرمنٹ", "حاضری", "چھٹی", "تنخواہ", "پینشن",
	"وصولی", "رسید", "دستخط", "مہر", "اجازت", "منظوری", "رپورٹ", "نوٹس", "اعلان", "کارروائی",
	"اجلاس", "کمیٹی", "شکایت", "جواب", "مراسلہ", "خط", "تاریخ", "وقت", "دن", "مہینہ",
	"سال", "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر",
	"اکتوبر", "نومبر", "دسمبر", "ڈاکٹر", "انجینئر", "استاد", "لیکچرار", "رجسٹرار", "تحصیلدار", "نائب تحصیلدار",
	"انسپکٹر", "سب انسپکٹر", "اکاؤنٹنٹ", "اسسٹنٹ", "ڈائریکٹر", "کمشنر", "سیکرٹری", "افسر", "ملازم", "درخواست گزار",
	"محمد", "احمد", "علی", "حسن", "حسین", "عائشہ", "فاطمہ", "مریم", "زینب", "سارہ",
	"عمران", "عثمان", "بلال", "حمزہ", "سلمان", "ارسلان", "یوسف", "زاہد", "نادیہ", "صبا",
	"پنجاب", "سندھ", "بلوچستان", "خیبر پختونخوا", "اسلام آباد", "لاہور", "کراچی", "پشاور", "کوئٹہ", "ملتان",
	"راولپنڈی", "فیصل آباد", "گوجرانوالہ", "بہاولپور", "مظفرگڑھ", "سکھر", "حیدرآباد", "مردان", "سوات", "خوشاب",
	"بیان", "حلف", "شناختی کارڈ نمبر", "پیدائش", "ازدواجی حیثیت", "قومی زبان", "ای میل", "پتہ نمبر", "کھاتہ", "بجٹ",
	"سرکاری", "حکومت", "وزارت", "ادارہ", "سیکرٹریٹ", "کمشنری", "ڈویژن", "یونین کونسل", "بلدیہ", "میونسپل کمیٹی", "ضلعی انتظامیہ", "ڈپٹی کمشنر", "اسسٹنٹ کمشنر", "مختارکار", "پٹواری", "گرداور", "نائب تحصیلدار",
	"نادرا", "شناختی کارڈ", "ب فارم", "شہریت", "خاندانی رجسٹری", "تجدید", "ترمیم", "بائیومیٹرک", "انگوٹھا", "تصویر", "دستاویز", "اصل", "نقل", "مصدقہ",
	"ڈومیسائل", "رہائش", "مستقل پتہ", "عارضی پتہ", "پیدائش سرٹیفکیٹ", "وفات سرٹیفکیٹ", "نکاح نامہ", "طلاق نامہ", "وراثت", "جانشینی", "سرپرست",
	"زمین", "جائیداد", "خسرہ", "نمبر", "فرد", "انتقال", "رجسٹری", "بیع", "فروخت", "خرید", "ملکیت", "حصہ", "رہن", "نقشہ", "حدود", "پیمائش", "موقع", "معائنہ",
	"مالیات", "خزانہ", "اکاؤنٹ", "اکاؤنٹس", "آمدن", "خرچ", "رقم", "ادائیگی", "چالان", "بل", "واؤچر", "پنشن", "الاؤنس", "فنڈ", "گرانٹ", "ٹیکس", "محصول", "آڈٹ", "اعتراض", "حساب",
	"سروس", "سنیارٹی", "تربیت", "انکوائری", "وضاحت", "سزا", "پنشنر", "رجسٹر", "ڈائری", "نوٹیفکیشن", "حکم", "ہدایت", "ایجنڈا", "منٹس", "پیش رفت", "لائسنس", "پروانہ", "آن لائن", "پورٹل", "نظام", "پاس ورڈ",
];

export const practiceLines = [
	"نام ولدیت اور ضلع درج کریں",
	"درخواست کا ریکارڈ مکمل کریں",
	"شناختی کارڈ نمبر اور پتہ درج کریں",
	"اسسٹنٹ ڈائریکٹر نے ریکارڈ کی تصدیق کی",
	"ملازمت کا تجربہ اور قابلیت درج کریں",
	"درخواست رجسٹریشن کے بعد دفتر میں جمع کریں",
	"درخواست گزار نے فارم پر دستخط کر دیے ہیں",
	"محکمہ نے نئی تعیناتی کا نوٹیفکیشن جاری کیا",
	"ضلع کی تمام تحصیلوں کا ریکارڈ محفوظ کریں",
	"مستقل پتہ اور عارضی پتہ واضح طور پر لکھیں",
	"تاریخ پیدائش شناختی دستاویز کے مطابق درج کریں",
	"اسسٹنٹ کمشنر نے اجلاس کی صدارت کی",
	"ڈپٹی کمشنر نے رپورٹ طلب کی ہے",
	"سیکشن آفیسر نے فائل آگے بھیج دی",
	"اکاؤنٹس آفیسر نے بجٹ کی منظوری دی",
	"رجسٹرار نے تصدیق کے بعد سند جاری کی",
	"تحصیلدار نے وصولی کا ریکارڈ چیک کیا",
	"درخواست کے ساتھ ضروری دستاویزات منسلک کریں",
	"ہر اندراج کے بعد فارم دوبارہ پڑھیں",
	"نام اور ولدیت میں املا کی غلطی درست کریں",
	"ملازم کی حاضری روزانہ درج کی جائے",
	"چھٹی کی درخواست متعلقہ افسر کو بھیجیں",
	"تبادلے کا حکم دفتر کے ریکارڈ میں محفوظ کریں",
	"ترقی کے لیے تجربہ اور قابلیت ضروری ہے",
	"ریٹائرمنٹ کی تاریخ ریکارڈ میں درج کریں",
	"وصولی کی رسید درخواست گزار کو دیں",
	"مہر اور دستخط کے بغیر فائل مکمل نہیں ہے",
	"کمیٹی نے شکایت کا جائزہ لیا",
	"رپورٹ کی ایک نقل دفتر میں جمع کریں",
	"آج کی تاریخ اور وقت فارم پر لکھیں",
	"پنجاب کے تمام اضلاع کی فہرست تیار کریں",
	"صوبہ سندھ کے محکموں کا ریکارڈ دیکھیں",
	"بلوچستان کی تحصیلوں کے نام درج کریں",
	"خیبر پختونخوا میں نئی بھرتی کا اعلان ہوا",
	"محمد احمد کی درخواست دفتر میں موصول ہوئی",
	"فاطمہ بی بی نے تصدیقی بیان جمع کرایا",
	"ملازمت کے لیے تعلیمی قابلیت مکمل ہونی چاہیے",
	"سرکاری خط کا جواب مقررہ تاریخ تک دیں",
	"فائل نمبر اور مراسلہ نمبر درست لکھیں",
	"تمام معلومات واضح اور قابل مطالعہ ہونی چاہئیں",
	"غلط اندراج کو درست طریقے سے تبدیل کریں",
	"حتمی رپورٹ افسر کو پیش کی جائے",
	"ریکارڈ کی ایک محفوظ نقل تیار کریں",
	"درخواست کی وصولی کا اندراج رجسٹر میں کریں",
	"دفتر کے اوقات صبح آٹھ بجے سے ہیں",
	"ضروری معلومات مکمل ہونے کے بعد جمع کریں",
	"ہر فیلڈ میں درست اردو املا استعمال کریں",
	"شناختی کارڈ کی مدت ختم نہیں ہونی چاہیے",
	"نام اور پتے کو اصل دستاویز سے ملائیں",
	"سرکاری ریکارڈ میں ذاتی معلومات محفوظ رکھیں",
	"نادرا مرکز میں شناختی کارڈ کی تجدید کی درخواست جمع کریں",
	"درخواست گزار بائیومیٹرک تصدیق کے لیے دفتر آئے",
	"ڈپٹی کمشنر نے ضلعی انتظامیہ کا اجلاس طلب کیا",
	"اسسٹنٹ کمشنر نے تحصیل کا دورہ کیا",
	"یونین کونسل سے پیدائش کا سرٹیفکیٹ حاصل کریں",
	"وفات کا اندراج متعلقہ دفتر کے رجسٹر میں کریں",
	"ڈومیسائل کے لیے اصل دستاویزات ساتھ لائیں",
	"خاندانی رجسٹری میں تمام افراد کا اندراج کریں",
	"درخواست کے ساتھ مصدقہ نقل منسلک کریں",
	"پٹواری نے زمین کے کھاتے کا ریکارڈ پیش کیا",
	"فرد اور انتقال کی نقل دفتر سے حاصل کریں",
	"جائیداد کی ملکیت کی تصدیق ریکارڈ سے کریں",
	"زمین کی حدود کا نقشہ درخواست کے ساتھ لگائیں",
	"رجسٹری کے لیے خریدار اور فروخت کنندہ حاضر ہوں",
	"خزانہ دفتر نے ادائیگی کا واؤچر منظور کیا",
	"اکاؤنٹس برانچ نے بجٹ کا حساب مکمل کیا",
	"چالان جمع کرنے کے بعد رسید محفوظ رکھیں",
	"آڈٹ افسر نے مالی ریکارڈ کا معائنہ کیا",
	"پنشن کی درخواست متعلقہ شعبے کو بھیجیں",
	"ملازم نے سالانہ چھٹی کی درخواست جمع کرائی",
	"سنیارٹی فہرست تمام ملازمین کو دکھائی جائے",
	"نئی تعیناتی کا حکم سرکاری ریکارڈ میں درج کریں",
	"تبادلے کے بعد ملازم نے نئی جگہ رپورٹ کی",
	"بھرتی کے لیے تعلیمی قابلیت کی تصدیق ضروری ہے",
	"انکوائری افسر نے وضاحت طلب کی ہے",
	"شکایت پر مقررہ وقت میں کارروائی کی جائے",
	"ڈائری نمبر کے بغیر مراسلہ مکمل نہیں ہوتا",
	"موصولہ خط کو رجسٹر میں درج کر کے فائل کریں",
	"نوٹیفکیشن کی ایک نقل تمام متعلقہ دفاتر کو بھیجیں",
	"اجلاس کے ایجنڈے میں بجٹ اور ترقی شامل ہے",
	"اجلاس کی کارروائی پر افسر کے دستخط لیں",
	"منظوری کے بعد سرٹیفکیٹ درخواست گزار کو دیں",
	"لائسنس کی مدت ختم ہونے سے پہلے تجدید کریں",
	"آن لائن پورٹل پر درخواست کی پیش رفت دیکھیں",
	"پاس ورڈ کسی غیر متعلقہ شخص کو نہ بتائیں",
	"محفوظ ریکارڈ کی بیک اپ نقل تیار کریں",
	"سرکاری دفتر میں شہریوں سے خوش اخلاقی سے پیش آئیں",
	"ہر درخواست کو متعلقہ شعبے تک بروقت پہنچائیں",
	"فائل پر کارروائی کی تاریخ اور دستخط ضرور کریں",
	"حتمی رپورٹ سیکرٹری کو منظوری کے لیے بھیجیں",
	"شعبہ نے ماہانہ پیش رفت رپورٹ تیار کی",
	"محکمہ نے نئی ہدایات تمام اضلاع کو جاری کیں",
	"ضلعی افسر نے ریکارڈ محفوظ رکھنے کی ہدایت کی",
	"دفتر کے اوقات میں عوامی درخواستیں وصول کی جائیں",
	"معلومات کی تصدیق کے بغیر کوئی سرٹیفکیٹ جاری نہ کریں",
	"درخواست کا نمبر محفوظ کر کے دوبارہ دفتر نہ آئیں",
];

export const durationOptions = [30, 60, 120, 180, 300] as const;

export type LessonStage = "middle" | "upper" | "lower" | "shift-middle" | "shift-upper" | "shift-lower" | "full";
export type Lesson = { number: number; title: string; stage: LessonStage; description: string; kind: "words" | "lines" | "mixed" };

const stageDetails: Record<LessonStage, { title: string; description: string }> = {
	middle: { title: "Home row", description: "Build control with the middle row." },
	upper: { title: "Upper row", description: "Add the upper row while keeping home-row control." },
	lower: { title: "Lower row", description: "Reach the lower row without losing rhythm." },
	"shift-middle": { title: "Shift + home", description: "Unlock the shifted middle-row characters." },
	"shift-upper": { title: "Shift + upper", description: "Blend shifted upper-row characters into words." },
	"shift-lower": { title: "Shift + lower", description: "Finish the shifted lower-row set." },
	full: { title: "Full keyboard", description: "Use every row in realistic Urdu lines." },
};

export const lessons: Lesson[] = Array.from({ length: 40 }, (_, index) => {
	const number = index + 1;
	const stage: LessonStage = number <= 5 ? "middle" : number <= 10 ? "upper" : number <= 15 ? "lower" : number <= 20 ? "shift-middle" : number <= 25 ? "shift-upper" : number <= 30 ? "shift-lower" : "full";
	const kind = number <= 2 ? "words" : number <= 5 || number >= 31 ? "lines" : "mixed";
	return { number, title: `Lesson ${number}`, stage, description: stageDetails[stage].description, kind };
});

const stageDrills: Record<LessonStage, string[]> = {
	middle: ["نام", "مکان", "کار", "کلام", "مار", "رام", "ما", "من", "مال", "اور", "وہ", "نام و نام", "مکان کا کام"],
	upper: ["پت", "جت", "دب", "ٹپ", "بج", "حج", "صحت", "تح", "پج", "صحت بتا", "جت پج"],
	lower: ["سف", "فش", "غش", "قش", "فے", "سے", "شے", "قے", "سف شے", "فش قے"],
	"shift-middle": ["ژ", "زڑ", "گڑ", "آں", "ژاں", "ڑاں", "گڑ", "آں زڑ"],
	"shift-upper": ["ظ", "ض", "ذ", "ڈ", "ث", "چ", "خ", "ظ ڈ", "ض خ", "ث چ"],
	"shift-lower": ["ؤ", "ئ", "ۓ", "ؤ ئ", "ئ ۓ", "ؤ ۓ"],
	full: [],
};

function lessonCharacters(lesson: Lesson): Set<string> {
	const baseRowCodes = lesson.number <= 5
		? ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"]
		: lesson.number <= 10
			? ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"]
			: lesson.number <= 15
				? ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"]
				: ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"];
	const shiftRowCodes = lesson.number <= 20
		? ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"]
		: lesson.number <= 25
			? ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"]
			: baseRowCodes;
	const characters = new Set<string>([" "]);
	standardUrduKeyboard.filter((key) => baseRowCodes.includes(key.code)).forEach((key) => {
		if (key.output) characters.add(key.output);
	});
	if (lesson.number >= 16) standardUrduKeyboard.filter((key) => shiftRowCodes.includes(key.code)).forEach((key) => {
		if (key.shifted) characters.add(key.shifted);
	});
	return characters;
}

function canType(value: string, characters: Set<string>): boolean {
	return Array.from(value.normalize("NFC")).every((character) => characters.has(character) || character === "\u200c" || character === "\u200d");
}

export function getLessonContent(lessonNumber: number, seed: number): string[] {
	const lesson = lessons[Math.min(Math.max(lessonNumber, 1), lessons.length) - 1];
	if (lesson.stage === "full") return shuffleContent(practiceLines, seed).slice(0, 10);
	const characters = lessonCharacters(lesson);
	const source = [...stageDrills[lesson.stage], ...practiceWords, ...(lesson.kind === "lines" ? practiceLines : [])];
	const content = [...new Set(source.filter((item) => canType(item, characters)))];
	return shuffleContent(content.length ? content : stageDrills[lesson.stage], seed).slice(0, lesson.kind === "lines" ? 8 : 10);
}

function shuffleContent(source: string[], seed: number): string[] {
	const content = [...new Set(source)];
	let state = Math.abs(seed) || 1;
	for (let index = content.length - 1; index > 0; index -= 1) {
		state = (state * 1664525 + 1013904223) >>> 0;
		const swapIndex = state % (index + 1);
		[content[index], content[swapIndex]] = [content[swapIndex], content[index]];
	}
	return content;
}

export function shuffledPracticeContent(seed: number): string[] {
	const content = [...new Set([...practiceWords, ...practiceLines])];
	let state = Math.abs(seed) || 1;
	for (let index = content.length - 1; index > 0; index -= 1) {
		state = (state * 1664525 + 1013904223) >>> 0;
		const swapIndex = state % (index + 1);
		[content[index], content[swapIndex]] = [content[swapIndex], content[index]];
	}
	return content;
}
