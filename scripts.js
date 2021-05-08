// let regExp = new RegExp('выражение', 'флаги');

// let regExp = /regexp/flags;

/**
 * Флаги
 * i - поиск без учета регистра
 * g - множественный поиск
 * m - многострочный поиск
 */

// let str = 'Язык JavaScript называется так из-за популярности языка Java';
// let regExp = new RegExp('java', 'i');

/**
 * search
 * -1 если совпадений не найдено
 * возвращает индекс первого совпадения
 */
// console.log(str.search(regExp));


/**
 * match
 * возвращает null если нет совпадений
 * i - возвращает массив-объект с подробной информацией при нахождении вхождения
 * g - возвращает массив найденных совпадений
 */
// console.log(str.match(/называется/ig));

/**
 * replace
 *
 */
// console.log('+7 (000)000-00-00'.replace('-', ':')); // => - на :
// console.log('+7 (000)000-00-00'.replace(/-/g, ':')); // => - на :

// let namePerson = 'Snow, John';
// console.log(namePerson.replace(/([a-z]+), ([a-z]+)/i, '$2 $1'));

/**
 * Классы
 * \d => [0123456789] => [0-9]
 * \D => [^0123456789] => [^0-9]
 * \w => [a-z0-9_]
 * \W => [^a-z0-9_]
 * \s - space, tab, \n
 * \S
 * \b - граница слова
 * \B не граница слова
 */

// [a-zA-Zа-яА-ЯёЁ] - для поиска русских и латинских букв

/**
 * Квантификаторы
 * {m} - строго m раз
 * {m,n} - от m до n раз
 * {m,} - от m до бесконечности
 * {,n} - от 0 до n раз
 */

/**
 * Сокрощения
 * + - {1,}
 * * - {0}
 * ? - {0,1}
 */

// console.log('+7-(000) 000:00-00'.match(/\d+/g).join('')); // => 70000000000
// console.log('+7-(000) 000:00-00'.replace(/\D/g, '')); // => 70000000000

// console.log('color colour'.match(/colou?r/g));
// console.log('color colour colotr'.match(/colo[ut]?r/g));

// console.log('Язык JavaScript это не Java вам =)'.match(/\bjava\b/ig));

// console.log('JavaScript это не Java'.match(/^java/i));
// console.log('JavaScript это не Java'.match(/java$/i));

// console.log('Chapter 7.2'.match(/\d\.\d/g));

/**
 * test (true||false)
 */
// console.log(/java/i.test(str));

// let result;
// let regExp2 = /java/ig;

// console.log(`Начальный индекс lastIndex ${regExp2.lastIndex}`);
// while (result = regExp2.exec(str)) {
// 	console.log(result);
// 	console.log(`Текущий lastIndex ${regExp2.lastIndex}`);
// }
// console.log(`Конечный lastindex ${regExp2.lastIndex}`);

let str = document.querySelector('p').textContent;

let str2 = str.replace(/'/gi, '"');
let text = document.querySelector('p').textContent = str2;
let str3 = text.replace(/\b"\b/gi, "'");
text = document.querySelector('p').textContent = str3; 

