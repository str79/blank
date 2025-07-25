var langStr={
	HELP:'Справка',
	ACTIONS:'Режимы',
	ACT_KEYMOVE:'Перемещение кнопками клавиатуры',
	ACT_GLOBALMOVE:'Глобальное перемещение',
	ACT_GLOBALSIZE:'Глобальный размер',
	ACT_YONGUP:'Более молодые номера сверху.',
	ACT_BUILDROUTE:'Построить маршрут',
	ACT_TEMPGLINES:'Рисование линий',
	FASTACT:'Быстрые действия:',
	FASTACT_SAVEMAP:'Сохранить положение и размер карты в памяти.',
	FASTACT_NEWEMAP:'Создать новую карту (на основе текущей).',
	FASTACT_NEWGROUP:'Новая группа.',
	FASTACT_NEWPOINT:'Новая точка.',
	FASTACT_COMPRESS:'Сжать точки.',
	FASTACT_IGNORDEL:'Удалить игнор лист.',
	FASTACT_FLIPMAPS:'Перевернуть карты',
	MAPS:'Карты',
	HISTNAME:'История',
	GROUPS:'Группы',
	GROUPS_ALLON:'Включить всё',
	GROUPS_ALLOFF:'Выключить всё',
	GROUPS_COMMON:'Общая группа',
	GROUPS_HISTORY:'История',
	GROUPCMENU:'Меню группы',
	GROUPCMENU_MOVE:'Переместить',
	GROUPCMENU_REMOVE:'Удалить',
	SETUPDLG_TITLE:'Настройка привязки клавиш',
	SETUPDLG_RESET:'Cброс',
	SETUPDLG_KEYMOVE:'Перемещение клавишами',
	SETUPDLG_GMOVE:'Глобальное перемещение',
	SETUPDLG_GSIZE:'Глобальный размер',
	SETUPDLG_ROUTESHOW:'Показать маршрут',
	SETUPDLG_DRAWLINES:'Рисование линий',
	CONTMENU:'Меню метки',
	CONTMENU_CHGROUP:'Сменить группу',
	CONTMENU_DELPOINT:'Удалить',
	CONTMENU_ADDIGNORE:'В игнор для маршрутов',
	LANG:'<img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" style="display: inline;height: 1em;">Язык',
	HELP_TEXT:'<br>-----Порядок работы примерно следующий----------\:<br> \
	выбираем нужную карту справа, по мере прохождения игры отключаем собранные точки индивидуально, а в истории запоминается наш путь.<br> \
	Если карта новая, её создаем в быстрых действиях, создать новую карту, будет создана первая метка, далее эту метку можно передвигать, переименовывать и размножать с нажатым alt.<br> \
	В конце двойной клик по названию \"группы\", метки скопируются в б/о. Затем вставьте его в settings.js с перезаписью.<br> \
	<br>--------------Кратко\:----------------<br> \
	Есть карта, слева группы (элементов на карте), справа профили (разные карты), карту можно перемещать<br> \
	при клике и удержании на карту, её можно двигать,<br> \
	при клике и удержании на элементе (кружке) на карте, его можно перемещать,<br> \
	при двойном клике убирается (скрывается) на карте, так и в левом меню.<br> \
	при наведении на элемент на карте высвечивает текстовое содержимое<br> \
	<br> \
	В левом меню при клике на названии группы, список этой группы раскрывается/закрывается и видны элементы в группе<br> \
	клик по глазку на элементе списка показывает/скрывает его на карте, а также активирует/деактивирует сам глазок<br> \
	клик по глазку на названии группы активирует/деактивирует сам глазок, подэлементы, а также показывает/скрывает их на карте<br> \
	двойной щелчок по элементу в группе - центрирует его на карте<br> \
	двойной щелчок по любому месту на карте выводит его координаты в консоль и копирует их в буфер обмена (служебное).<br> \
	<br> \
	В меню профилей (справа) при клике активирует профиль и меняет карту, соответствующую профилю, также загружает историю и загружает новые группы (меню слева),<br> \
	при клике с нажатым Ctrl по надписи \"карты\" раскрывается/показывается меню карт/профилей,<br> \
	при клике с нажатым Ctrl по надписи "группы" раскрывается/показывается меню групп.<br> \
	<br>------------Подробно--------<br> \
	<br>---Группа \"История\"\:<br> \
	История сохраняется в localStorage<br> \
	Добавляются в неё те элементы которые были де активированы по глазку на элементе(не на группе) или двойным кликом по кнопке на карте.<br> \
	<br> \
	Элементы истории можно активировать, щелкнув глазок рядом с ним, можно удалить, щелкнув по корзине, а также можно щелкнуть метку «история», удерживая Alt — включается режим перемещения меток истории, далее Alt + Click - отмена, просто Click - финиш.<br> \
	<br> \
	Появилась возможность передвигать записи истории с нажатым shift (shift клик включает режим перемещения), при этом при наведении на любой элемент, он будет подчеркиваться синей полосой,<br> \
	обозначающей место десантирования, далее клик будет закреплять новое положение записи в истории,<br> \
	с зажатой shift - отменять, при этом история обновляется визуально и динамически, записываясь в local storage<br> \
	<br> \
	Если кликнуть по заголовку история с нажатым alt - вся история очищается, необходимо перезагрузить страницу.<br> \
	<br>---В меню групп\:<br> \
	При наведении курсора мыши на название элемента в группе, на карте он становится на передний план.<br> \
	Также имеется кнопка с изображением глаза, позволяющая включить все в группе — она включает все элементы, которые она содержит, включая элементы на карте.<br> \
	По двойному клику по надписи \"группы\" копируется массив настроек профилей и точек чтобы можно было заменить им уже имеющийся в настройках, settings.js (полностью)<br> \
	<br> \
	Если нажать alt при двойном клике по надписи \"группы\", в буффер обмена копируются точки с сортировкой по истории.<br> \
	Текущие точки берутся не из сохраненных групп, а из карты и только активные.<br> \
	Информация по точкам текущей карты берется из маркеров на карте, остальные - из прежних настроек.<br> \
	История меняется относительно новых номеров точек (ВНИМАНИЕ), для замены текущей группы точек (т.е. чтобы ничего не слетело надо\:1. переключиться на новую карту (профиль), тогда<br> \
	сохранятся последние изменения. 2. После операции сохранить полученный результат в settings.js).<br> \
	<br> \
	шифт + клик по группе - выделяет точки группы<br> \
	alt + клик по группе - позволяет переименовать группу<br> \
	ctrl + клик по группе - появляется меню<br> \
	где можно:<br> \
	переместить группу (также влияет группы при сборе меток текущей карты)<br> \
	удалить группу<br> \
	при перемещении активируется выбор группы назначения<br> \
	клик - подтверждаем и перемещаем<br> \
	стрл и клик - отмена<br> \
	просто клик по группе - открывает/закрывает её<br> \
	<br>---Карты/профили\:<br> \
	шифт + клик по карте - позволяет переименовать её.<br> \
	Alt + Click - включается режим перемещения карт/профилей, далее Alt + Click - отмена, просто Click - финиш.<br> \
	<br>---Карта\:<br> \
	Клик по элементу на карте зажатой клавишей shift - можно редактировать текстовое описание. \
	<br> \
	Также если зажать ctrl и кликнуть по метке - показывает меню где можно сменить её группу<br> \
	или удалить саму метку или добавить метку в игнор лист<br> \
	Маркеры на карте можно передвигать с зажатым alt - тогда создается копия метки<br> \
	Также добавлен режим отмены перетаскивания если нажат ctrl и shift.<br> \
	<br> \
	При клике с ctrl по карте, появляется круг, отключается тем же способом, круг можно перемещать и увеличивать кнопками [],<br> \
	смысл в том, что при наведении на определенную группу маркеров,	появлялся список того что находится в круге с номером и описанием.<br> \
	<br> \
	Поворот колеса с alt и ctrl меняет масштаб карты.<br> \
	<br> \
	Новый инструмент выделение - выделяет нужные точки на карте\:<br> \
	shift клик на карте, двигаем мышь и ещё раз нажимаем для определения прямоугольника,<br> \
	все точки внутри прямоугольника попадут в массив выделенных, сами точки тоже будут выделены.<br> \
	<br> \
	shift + d - убирает выделение. \
	<br>---Действия<br> \
	Добавлен режим массового перетаскивания меток по g и изменения размера по z, с зажаты shift - пропорциональное изменение расстояний между метками (как если бы решили изменить масштаб  \
	карты и надо бы метки привести в соответствие), без клавиши shift - ширина и длина растягиваются по разному, при нажатии zg больше не используются, \
	в новой версии появилась возможность активации опций через клавиатуру (клавиши в скобках, на основе скан кодов клавиатуры). \
	<br> \
	Глобальное перемещение и глобальный размер теперь учитывают выделение. \
	<br> \
	Опция перемещение клавишами - метка (элемент) будет перемещаться клавишами стрелками, также есть hotkey в скобках. \
	<br> \
	В меню действия появилась возможность показывать более молодые номера поверх более старых. \
	<br> \
	опция построить маршрут - строит маршрут на основании точек на карте, также записывает в начало последнюю убранную точку \
	позволяет менять размер клавишами [] \
	<br> \<br> \
	Рисование линий - включает режим рисования линий, клик по карте - 1 точка далее интерактивно кликаем на желаемом месте 2 точки,  \
	линия закрепляется и можно рисовать новую или выключить этот режим, также если удерживать shift во время выбора 2 точки, \
	то линия станет прямой. Также появилась возможность сменить цвет линии на панели инструментов рисования, по умолчанию используется задний цвет. <br> \
	Теперь можно выбирать другие инструменты, например, постоянную линию. \
	Постоянная строка — координаты записываются в память для последующего экспорта в settings.js. \
	Добавлены настройки рисования линий - открываются по правому щелчку по иконке постоянной линии, \
	каждая настройка открывается левым щелчком мыши, выбранная позиция запоминается в памяти и используется при рисовании линии, \
	также при выборе варианта настройка закрывается, некоторые настройки, такие как надпись, запоминаются только при закрытии (повторном клике) данной настройки. \
	<br>---Быстрые действия<br> \
	Сохранение в памяти положения любой карты (не только текущей) - сохраняет положение для настроек профилей, для удобства, также сохраняет zoom,<br> \
	новая карта (профиль) - создает новый профиль в памяти с одной новой меткой, удобно если нет карт вообще или если надо продублировать текущую<br> \
	новая группа - создает новую группу в памяти<br> \
	Новая точка - создает новую точку<br> \
	после всех манипуляций сливаем то что в памяти - двойной клик по надписи \"Группы\" и кладем в settings.js с перезаписью<br> \
	<br> \
	Новое действие сжать - сжимает выделенные точки, если их нет, сжимает все точки. \
	<br> \
	Удалить игнор лист - удаляет игнор лист из хранилища и из памяти \
	<br> \
	Перевернуть карты - переворачивает карты/профили в обратном порядке, при этом текущая карта перемещается наверх \
	<br>---Настройки settings.js<br> \
	Вы можете определить индекс, с которого начинается отсчет чисел. Это поле StartIndex, оно устарело, но работает, оно было нужно, когда история запоминала только цифры, независимо от карты.<br>\
	pointarr - ссылка на массив элементов (точек, окружностей) для данной карты (профиля)<br>\
	GpoupList - список групп<br> \
	',
};