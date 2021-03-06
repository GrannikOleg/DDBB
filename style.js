function styl()
{
document.title="Стили JavaScript/CSS";
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
<br>Подгруппа свойств 	Свойства 	Описание\
<br>\
<br>Оформление фона\
<br>\
<br>background 	Возвращает или устанавливает значение CSS свойства background.\
<br>backgroundAttachment 	Возвращает или устанавливает значение CSS свойства background-attachment.\
<br>backgroundColor 	Возвращает или устанавливает значение CSS свойства background-color.\
<br>backgroundImage 	Возвращает или устанавливает значение CSS свойства background-image.\
<br>backgroundPosition 	Возвращает или устанавливает значение CSS свойства backround-position.\
<br>backgroundPositionX    Абсцисса фонового изображения\
<br>backgroundPositionY    Ордината фонового изображения\
<br>backgroundRepeat 	Возвращает или устанавливает значение CSS свойства backround-repeat.\
<br>\
<br>Оформление текста\
<br>\
<br>color 	Возвращает или устанавливает значение CSS свойства color.\
<br>font Стенографическое свойство для одновременного задания нескольких свойств шрифта.\
<br>Возвращает или устанавливает значение CSS свойства font.\
<br>fontFamily Гарнитура шрифта. Возвращает или устанавливает значение CSS свойства font-family.\
<br>fontSize Размер шрифта.	Возвращает или устанавливает значение CSS свойства font-size.\
<br>fontStyle Начертание шрифта. Возвращает или устанавливает значение CSS свойства font-style.\
<br>fontVariants Может задать вывод капителью. Возвращает или устанавливает значение CSS свойства font-variants.\
<br>fontWeight Насыщенность шрифта.	Возвращает или устанавливает значение CSS свойства font-weight.\
<br>letterSpacing Межсимвольное расстояние. Возвращает или устанавливает значение CSS свойства letter-spacing.\
<br>lineHeight Межстрочный интервал. Возвращает или устанавливает значение CSS свойства line-height.\
<br>textAlign Выравнивание текста.	Возвращает или устанавливает значение CSS свойства text-align.\
<br>textDecoration text-decoration Декорирование текста\
<br>textDecorationBlink Мерцающий текст\
<br>textDecorationLineTrough Перечеркнутый текст\
<br>textDecorationNone Текст без эффектов\
<br>textDecorationOverLine Надчеркнутый текст\
<br>textDecorationUnderLine Подчеркнутый текст\
<br>textIndent text-indent Отступ первой строки текста в блоке\
<br>textTransform text-transform Преобразование текста\
<br>top Вертикальное смещение блока относительно верха контейнера\
<br>verticalAlign Вертикальное выравнивание HTML элемента относительно контейнера\
<br>visibility Видимость блока\
<br>textIndent 	Возвращает или устанавливает значение CSS свойства text-indent.\
<br>whiteSpace 	Возвращает или устанавливает значение CSS свойства white-space.\
<br>wordSpacing 	Возвращает или устанавливает значение CSS свойства word-spacing.\
<br>\
<br>Оформление границ\
<br>\
<br>border 	Возвращает или устанавливает значение CSS свойства border.\
<br>borderTop 	      Возвращает или устанавливает значение CSS свойства border-top.\
<br>borderBottom      Возвращает или устанавливает значение CSS свойства border-bottom.\
<br>borderLeft 	      Возвращает или устанавливает значение CSS свойства border-left.\
<br>borderRight       Возвращает или устанавливает значение CSS свойства border-right.\
<br>\
<br>borderColor 	Возвращает или устанавливает значение CSS свойства border-color.\
<br>borderTopColor 	  Возвращает или устанавливает значение CSS свойства border-top-color.\
<br>borderBottomColor Возвращает или устанавливает значение CSS свойства border-bottom-color.\
<br>borderLeftColor   Возвращает или устанавливает значение CSS свойства border-left-color.\
<br>borderRightColor  Возвращает или устанавливает значение CSS свойства border-right-color.\
<br>\
<br>borderStyle 	Возвращает или устанавливает значение CSS свойства border-style.\
<br>borderTopStyle 	Возвращает или устанавливает значение CSS свойства border-top-style.\
<br>borderBottomStyle 	Возвращает или устанавливает значение CSS свойства border-bottom-style.\
<br>borderLeftStyle 	Возвращает или устанавливает значение CSS свойства border-left-style.\
<br>borderRightStyle 	Возвращает или устанавливает значение CSS свойства border-right-style.\
<br>\
<br>borderWidth 	Возвращает или устанавливает значение CSS свойства border-width.\
<br>borderTopWidth 	Возвращает или устанавливает значение CSS свойства border-top-width.\
<br>borderBottomWidth 	Возвращает или устанавливает значение CSS свойства border-bottom-width.\
<br>borderLeftWidth 	Возвращает или устанавливает значение CSS свойства border-left-width.\
<br>borderRightWidth 	Возвращает или устанавливает значение CSS свойства border-right-width.\
<br>\
<br>Возвращает или устанавливает значение CSS свойства margin.\
<br>margin Стенографическое свойство для одновременного задания полей.\
<br>Размер зоны полей вокруг блока (сверху, справа, снизу, слева)\
<br>marginBottom 	Возвращает или устанавливает значение CSS свойства margin-bottom.\
<br>marginLeft 	Возвращает или устанавливает значение CSS свойства margin-left.\
<br>marginRight 	Возврщает или устанавливает значение CSS свойства margin-right.\
<br>marginTop 	Возвращает или устанавливает значение CSS свойства margin-top.\
<br>\
<br>Оформление внутреннего отступа\
<br>Стенографическое свойство для одновременного задания отступов\
<br>Размер зоны отступов внутри блока (сверху, справа, снизу, слева )\
<br>padding 	Возвращает или устанавливает значение CSS свойства padding.\
<br>paddingBottom 	Возвращает или устанавливает значение CSS свойства padding-bottom.\
<br>paddingLeft 	Возвращает или устанавливает значение CSS свойства padding-left.\
<br>paddingRight 	Возвращает или устанавливает значение CSS свойства padding-right.\
<br>paddingTop 	Возвращает или устанавливает значение CSS свойства padding-top.\
<br>\
<br>Оформление расположения элементов\
<br>\
<br>clear 	Возвращает или устанавливает значение CSS свойства clear.\
<br>clip 	Возвращает или устанавливает значение CSS свойства clip.\
<br>cssFloat 	Возвращает или устанавливает значение CSS свойства float.\
<br>cursor 	Возвращает или устанавливает значение CSS свойства cursor.\
<br>direction 	Возвращает или устанавливает значение CSS свойства direction.\
<br>display 	Возвращает или устанавливает значение CSS свойства display.\
<br>height Высота содержимого блока. Возвращает или устанавливает значение CSS свойства height.\
<br>maxHeight 	Возвращает или устанавливает значение CSS свойства max-height.\
<br>maxWidth 	Возвращает или устанавливает значение CSS свойства max-width.\
<br>Тип усечения содержимого, выходящего за пределы блока\
<br>overflow 	Возвращает или устанавливает значение CSS свойства overflow.\
<br>verticalAlign 	Возвращает или устанавливает значение CSS свойства verticalAlign.\
<br>visibility 	Возвращает или устанавливает значение CSS свойства visibility.\
<br>width Ширина содержимого блока.	Возвращает или устанавливает значение CSS свойства width.\
<br>\
<br>Свойства позиционирования\
<br>\
<br>bottom 	Возвращает или устанавливает значение CSS свойства bottom.\
<br>Возвращает или устанавливает значение CSS свойства left.\
<br>left Горизонтальное смещение блока относительно левой границы контейнера. \
<br>position Алгоритм позиционирования.	Возвращает или устанавливает значение CSS свойства position.\
<br>right 	Возвращает или устанавливает значение CSS свойства right.\
<br>top 	Возвращает или устанавливает значение CSS свойства top.\
<br>zIndex Позиционный уровень блока. Возвращает или устанавливает значение CSS свойства z-index.\
<br>\
<br>Оформление таблиц\
<br>\
<br>borderCollapse 	Возвращает или устанавливает значение CSS свойства border-collapse.\
<br>borderSpacing 	Возвращает или устанавливает значение CSS свойства border-spacing.\
<br>captionSide 	Возвращает или устанавливает значение CSS свойства caption-side\
<br>emptyCell 	Возвращает или устанавливает значение CSS свойства empty-cell.\
<br>Оформление списков 	listStyle 	Возвращает или устанавливает значение CSS свойства list-style.\
<br>listStyleImage 	Возвращает или устанавливает значение CSS свойства list-style-image.\
<br>listStylePosition 	Возвращает или устанавливает значение CSS свойства list-style-position.\
<br>listStyleType 	Возвращает или устанавливает значение CSS свойства list-style-type.\
<br>\
<br>Оформление\
<br>\
<br>внешней линии 	outline 	\
<br>Возвращает или устанавливает значение CSS свойства outline.\
<br>outlineColor 	Возвращает или устанавливает значение CSS свойства outline-color.\
<br>outlineStyle 	Возвращает или устанавливает значение CSS свойства outline-style.\
<br>outlineWidth 	Возвращает или устанавливает значение CSS свойства outline-width.\
<br>\
<br>filter    Фильтр\
<br>\
<br>styleFloat    float    Задает смещение блока, вследствие чего блок будет обтекаться текстом контейнера\
<br>\
<br>Высота содержимого блока в пикселах\
<br>pixelHeight\
<br>\
<br>Горизонтальное смещение блока относительно левой границы контейнера в пикселах\
<br>pixelLeft\
<br>\
<br>Вертикальное смещение блока относительно левой границы контейнера в пикселах\
<br>pixelTop\
<br>\
<br>Ширина содержимого блока в пикселах\
<br>pixelWidth\
<br>\
<br>Высота содержимого блока\
<br>posHeight\
<br>\
<br>posLeft\
<br>Горизонтальное смещение блока относительно левой границы контейнера\
<br>\
<br>posTop\
<br>Вертикальное смещение блока относительно левой границы контейнера\
<br>\
<br>posWidth\
<br>Ширина содержимого блока\
<br>\
<br>"
}
