function tag()
{
document.title="Теги";
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position = "absolute";
document.getElementById("Txt").style.top ="1%";
document.getElementById("Txt").style.right = "1%";
document.getElementById("Txt").style.width ="62%";
document.getElementById("Txt").style.height = "91%";
document.getElementById("Txt").style.overflow = "scroll";
document.getElementById("Txt").style.border = "2px solid #777777";
document.getElementById('Txt').style.fontSize='100%';
document.getElementById('Txt').style.textIndent="30px"; //* Отступ первой строки *//
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="3%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
document.getElementById("Txt").innerHTML ="\
<Br>\
<center><h1>Теги HTML</h1></center>\
<Br>\
<center><h2>&lt;&gt;&lt;/&gt;</h2></center>\
<center><h2>Краткое описание</h2></center>\
<Br>\
<center><h3>Служебные теги:</h3></center>\
<Br>&lt;DOCTYPE&gt;&lt;/DOCTYPE&gt;\
<Br>Определяет тип документа.\
<Br>\
<Br>&lt;html&gt;&lt;/html&gt;\
<Br>Определяет html документ.\
<Br>\
<Br>&lt;head&gt;&lt;/head&gt;\
<Br>Определяет информацию о документе.\
<Br>\
<Br>&lt;meta&gt;&lt;/meta&gt;\
<Br>Определяет мета-информацию.\
<Br>\
<Br>&lt;script&gt;&lt;/script&gt;\
<Br>Определяет сценарий (скрипт).\
<Br>\
<Br>&lt;style&gt;&lt;/style&gt;\
<Br>Определяет определение стиля.\
<Br>\
<Br>&lt;title&gt;&lt;/title&gt;\
<Br>Определяет название документа.\
<Br>\
<Br>&lt;body&gt;&lt;/body&gt;\
<Br>Определяет элемент тела документа.\
<Br>\
<Br>&lt;noscript&gt;&lt;/noscript&gt;\
<Br>Определяет секцию, не поддерживающую сценарий (скрипт).\
<Br>\
<Br>&lt;canvas&gt;&lt;/canvas&gt;\
<Br>Определяет графики.\
<Br>\
<Br>Строковые теги:\
<Br>&lt;abbr&gt;&lt;/abbr&gt;\
<Br>Определяет аббревиатуру.\
<Br>\
<Br>&lt;article&gt;&lt;/article&gt;\
<Br>Определяет статью.\
<Br>\
<Br>&lt;blockquote&gt;&lt;/blockquote&gt;\
<Br>Определяет длинную цитату.\
<Br>\
<Br>&lt;br&gt;&lt;/br&gt;\
<Br>Вставка одного разрыва строки.\
<Br>\
<Br>&lt;bdo&gt;&lt;/bdo&gt;\
<Br>Определяет направление отображения текста.\
<Br>\
<Br>&lt;comment&gt;&lt;/comment&gt;\
<Br>Определяет комментарий.\
<Br>\
<Br>&lt;code&gt;&lt;/code&gt;\
<Br>Определяет, что текст является программным кодом.\
<Br>\
<Br>&lt;cite&gt;&lt;/cite&gt;\
<Br>Определяет цитату или сноску на материал.\
<Br>\
<Br>&lt;dd&gt;&lt;/dd&gt;\
<Br>Определяет описание определения.\
<Br>\
<Br>&lt;dfn&gt;&lt;/dfn&gt;\
<Br>Определяет определение термина.\
<Br>\
<Br>&lt;h1&gt;&lt;/h1&gt;\
<Br>&lt;h2&gt;&lt;/h2&gt;\
<Br>&lt;h3&gt;&lt;/h3&gt;\
<Br>&lt;h4&gt;&lt;/h4&gt;\
<Br>&lt;h5&gt;&lt;/h5&gt;\
<Br>&lt;h6&gt;&lt;/h6&gt;\
<Br>Определяет заголовок с 1 по 6 заголовок.\
<Br>\
<Br>&lt;b&gt;&lt;/b&gt;\
<Br>Определяет жирный текст.\
<Br>\
<Br>&lt;big&gt;&lt;/big&gt;\
<Br>Не поддерживается. Определяет большой текст.\
<Br>\
<Br>&lt;del&gt;&lt;/del&gt;\
<Br>Определяет удаленный текст.\
<Br>\
<Br>&lt;em&gt;&lt;/em&gt;\
<Br>Определяет выделенный текст.\
<Br>\
<Br>&lt;font&gt;&lt;/font&gt;\
<Br>Устаревший. Определяет шрифт текста, размер и цвет.\
<Br>\
<Br>&lt;i&gt;&lt;/i&gt;\
<Br>Определяет курсив.\
<Br>\
<Br>&lt;ins&gt;&lt;/ins&gt;\
<Br>Определяет вставленный (обновленный) текст.\
<Br>\
<Br>&lt;kbd&gt;&lt;/kbd&gt;\
<Br>Определяет текст, набранный на клавиатуре.\
<Br>\
<Br>&lt;mark&gt;&lt;/mark&gt;\
<Br>Определяет выделенный текст.\
<Br>\
<Br>&lt;p&gt;&lt;/p&gt;\
<Br>Определяет параграф (абзац).\
<Br>\
<Br>&lt;pre&gt;&lt;/pre&gt;\
<Br>Определяет выровненный (форматированный) текст.\
<Br>\
<Br>&lt;q&gt;&lt;/q&gt;\
<Br>Определяет краткую цитату.\
<Br>\
<Br>&lt;s&gt;&lt;/s&gt;\
<Br>Не поддерживается. Определяет зачеркнутый текст.\
<Br>\
<Br>&lt;samp&gt;&lt;/samp&gt;\
<Br>Определяет образец программного кода.\
<Br>\
<Br>&lt;small&gt;&lt;/small&gt;\
<Br>Определяет мелкий текст.\
<Br>\
<Br>&lt;strike&gt;&lt;/strike&gt;\
<Br>Не поддерживается. Определяет зачеркнутый текст.\
<Br>\
<Br>&lt;strong&gt;&lt;/strong&gt;\
<Br>Определяет выделенный жирный текст.\
<Br>\
<Br>&lt;sub&gt;&lt;/sub&gt;\
<Br>Определяет индексным текст.\
<Br>\
<Br>&lt;sup&gt;&lt;/sup&gt;\
<Br>Определяет надстрочным текст.\
<Br>\
<Br>&lt;tt&gt;&lt;/tt&gt;\
<Br>Не поддерживается. Определяет телетайп текст.\
<Br>\
<Br>&lt;u&gt;&lt;/u&gt;\
<Br>Не поддерживается. Определяет подчеркнутый текст.\
<Br>\
<Br>&lt;xmp&gt;&lt;/xmp&gt;\
<Br>Не поддерживается. Определяет выровненный текст.\
<Br>\
<center><h3>Теги пространства</h3></center>\
&lt;center&gt;&lt;/center&gt;\
<Br>Не поддерживается. Определяет текст по центру.\
<Br>\
<Br>&lt;span&gt;&lt;/span&gt;\
<Br>Определяет раздел в документе.\
<Br>\
<Br>&lt;div&gt;&lt;/div&gt;\
<Br>Определяет секцию (блок) в документе.\
<Br>\
<Br>&lt;ul&gt;&lt;/ul&gt;\
<Br>Определяет неупорядоченный список.\
<Br>\
<Br>&lt;li&gt;&lt;/li&gt;\
<Br>Определяет элемент списка.\
<Br>\
<Br>&lt;table&gt;&lt;/table&gt;\
<Br>Определяет таблицу.\
<Br>\
<Br>&lt;caption&gt;&lt;/caption&gt;\
<Br>Определяет заголовок (подпись) таблицы.\
<Br>\
<Br>&lt;th&gt;&lt;/th&gt;\
<Br>Определяет заголовок ячейки таблицы.\
<Br>\
<Br>&lt;thead&gt;&lt;/thead&gt;\
<Br>Определяет заголовок таблицы.\
<Br>\
<Br>&lt;tbody&gt;&lt;/tbody&gt;\
<Br>Определяет тело таблицы.\
<Br>\
<Br>&lt;tr&gt;&lt;/tr&gt;\
<Br>Определяет строку таблицы.\
<Br>\
<Br>&lt;td&gt;&lt;/td&gt;\
<Br>Определяет ячейку таблицы.\
<Br>\
<Br>&lt;col&gt;&lt;/col&gt;\
<Br>Определяет атрибуты для столбцов таблицы.\
<Br>\
<Br>&lt;colgroup&gt;&lt;/colgroup&gt;\
<Br>Определяет групп столбцов таблицы.\
<Br>\
<Br>&lt;frame&gt;&lt;/frame&gt;\
<Br>Не поддерживается. Определяет фрейм.\
<Br>\
<Br>&lt;frameset&gt;&lt;/frameset&gt;\
<Br>Не поддерживается. Определяет набор фреймов.\
<Br>\
<Br>&lt;noframes&gt;&lt;/noframes&gt;\
<Br>Не поддерживается. Определяет секцию, не поддерживающую фрейм.\
<Br>\
<center><h3>Стили</h3></center>\
<Br>&lt;basefont&gt;&lt;/basefont&gt;\
<Br>Не поддерживается. Используетя вместо CSS для задания шрифта.\
<Br>\
<center><h3>Теги событий</h3></center>\
<Br>&lt;a&gt;&lt;/a&gt;\
<Br>Определяет гиперссылки.\
<Br>\
<Br>&lt;button&gt;&lt;/button&gt;\
<Br>Определяет кнопку.\
<Br>\
<center><h3>Остальные теги</h3></center>\
<Br>&lt;acronym&gt;&lt;/acronym&gt;\
<Br>Не поддерживается. Определяет акроним.\
<Br>\
<Br>&lt;address&gt;&lt;/address&gt;\
<Br>Определяет элемент с адресом.\
<Br>\
<Br>&lt;applet&gt;&lt;/applet&gt;\
<Br>Не поддерживается. Определяет апплет.\
<Br>\
<Br>&lt;area&gt;&lt;/area&gt;\
<Br>Определяет область внутри изображения карты.\
<Br>\
<Br>&lt;aside&gt;&lt;/aside&gt;\
<Br>Определяет контент в стороне от основного контента страницы.\
<Br>\
<Br>&lt;audio&gt;&lt;/audio&gt;\
<Br>Определяет аудио контент.\
<Br>\
<Br>&lt;base&gt;&lt;/base&gt;\
<Br>Определяет базовый URL для всех относительных ссылок на странице.\
<Br>\
<Br>&lt;command&gt;&lt;/command&gt;\
<Br>Определяет командную кнопку.\
<Br>\
<Br>&lt;datagrid&gt;&lt;/datagrid&gt;\
<Br>Определяет данные в упорядоченный список.\
<Br>\
<Br>&lt;datalist&gt;&lt;/datalist&gt;\
<Br>Определяет выпадающий список.\
<Br>\
<Br>&lt;datatemplate&gt;&lt;/datatemplate&gt;\
<Br>Определяет шаблон данных.\
<Br>\
<Br>&lt;details&gt;&lt;/details&gt;\
<Br>Определяет детали элемента.\
<Br>\
<Br>&lt;dialog&gt;&lt;/dialog&gt;\
<Br>Определяет диалог (разговор).\
<Br>\
<Br>&lt;dir&gt;&lt;/dir&gt;\
<Br>Не поддерживается.\
<Br>Определяет список директорий.\
<Br>\
<Br>&lt;dl&gt;&lt;/dl&gt;\
<Br>Определяет список определений.\
<Br>\
<Br>&lt;dt&gt;&lt;/dt&gt;\
<Br>Определяет определение термина в списке.\
<Br>\
<Br>&lt;embed&gt;&lt;/embed&gt;\
<Br>Определяет внешний интерактивный контент или плагин.\
<Br>\
<Br>&lt;eventsource&gt;&lt;/eventsource&gt;\
<Br>Определяет цель события, отправляемого по серверу.\
<Br>\
<Br>&lt;fieldset&gt;&lt;/fieldset&gt;\
<Br>Определяет сгруппированный набор полей формы.\
<Br>\
<Br>&lt;figure&gt;&lt;/figure&gt;\
<Br>Определяет группу медиа-контента, и их подписи.\
<Br>\
<Br>&lt;footer&gt;&lt;/footer&gt;\
<Br>Определяет нижний колонтитул для раздела или страницы.\
<Br>\
<Br>&lt;form&gt;&lt;/form&gt;\
<Br>Определяет форму.\
<Br>\
<Br>&lt;header&gt;&lt;/header&gt;\
<Br>Определяет область заголовка раздела или страницы.\
<Br>\
<Br>&lt;hr&gt;&lt;/hr&gt;\
<Br>Определяет горизонтальную линию.\
<Br>\
<Br>&lt;iframe&gt;&lt;/iframe&gt\
<Br>Определяет встроенный фрейм.\
<Br>\
<Br>&lt;img&gt;&lt;/img&gt;\
<Br>Определяет изображение.\
<Br>\
<Br>&lt;input&gt;&lt;/input&gt;\
<Br>Определяет поле ввода.\
<Br>\
<Br>&lt;isindex&gt;&lt;/isindex&gt;\
<Br>Не поддерживается. Определяет поисковый индекс в документе.\
<Br>\
<Br>&lt;label&gt;&lt;/label&gt;\
<Br>Определяет метку для элемента формы.\
<Br>\
<Br>&lt;legend&gt;&lt;/legend&gt;\
<Br>Определяет заголовок группы элементов формы.\
<Br>\
<Br>&lt;link&gt;&lt;/link&gt;\
<Br>Определяет ссылку на ресурс.\
<Br>\
<Br>&lt;map&gt;&lt;/map&gt;\
<Br>Определяет изображение карты.\
<Br>\
<Br>&lt;menu&gt;&lt;/menu&gt;\
<Br>Определяет список меню.\
<Br>\
<Br>&lt;meter&gt;&lt;/meter&gt;\
<Br>Определяет измерения в течение заранее определенного диапазона.\
<Br>\
<Br>&lt;nav&gt;&lt;/nav&gt;\
<Br>Определяет навигационные ссылки.\
<Br>\
<Br>&lt;nest&gt;&lt;/nest&gt;\
<Br>Определяет вложенную точку в шаблоне данных.\
<Br>\
<Br>&lt;object&gt;&lt;/object&gt;\
<Br>Определяет внедренный объект.\
<Br>\
<Br>&lt;ol&gt;&lt;/ol&gt;\
<Br>Определяет упорядоченный список.\
<Br>\
<Br>&lt;optgroup&gt;&lt;/optgroup&gt;\
<Br>Определяет группу вариантов в раскрывающемся списке.\
<Br>\
<Br>&lt;option&gt;&lt;/option&gt;\
<Br>Определяет вариант в раскрывающемся списке.\
<Br>\
<Br>&lt;output&gt;&lt;/output&gt;\
<Br>Определяет некоторые виды результата.\
<Br>\
<Br>&lt;param&gt;&lt;/param&gt;\
<Br>Определяет параметр для объекта.\
<Br>\
<Br>&lt;progress&gt;&lt;/progress&gt;\
<Br>Определяет ход выполнения задачи любого рода.\
<Br>\
<Br>&lt;rule&gt;&lt;/rule&gt;\
<Br>Определяет правила для обновления шаблонов.\
<Br>\
<Br>&lt;section&gt;&lt;/section&gt;\
<Br>Определяет раздел (секцию).\
<Br>\
<Br>&lt;select&gt;&lt;/select&gt;\
<Br>Определяет список для выбора.\
<Br>\
<Br>&lt;source&gt;&lt;/source&gt;\
<Br>Определяет медиа-ресурсы.\
<Br>\
<Br>&lt;textarea&gt;&lt;/textarea&gt;\
<Br>Определяет область ввода текста.\
<Br>\
<Br>&lt;tfoot&gt;&lt;/tfoot&gt;\
<Br>Определяет колонтитул таблицы.\
<Br>\
<Br>&lt;time&gt;&lt;/time&gt;\
<Br>Определяет дату/время.\
<Br>\
<Br>&lt;var&gt;&lt;/var&gt;\
<Br>Определяет переменную.\
<Br>\
<Br>&lt;video&gt;&lt;/video&gt;\
<Br>Определяет видео.\
<Br>\
<Br>\
<Br>"
}
