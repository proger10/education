window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 00, 7*(1*60 + 50), 1*60 + 50);
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
	    mon = Day.create( 1, 'Понедельник' ),
	    tue = Day.create( 2, 'Вторник'     ),
	    wed = Day.create( 3, 'Среда'       ),
	    thu = Day.create( 4, 'Четверг'     ),
	    fri = Day.create( 5, 'Пятница'     ),
	    sat = Day.create( 6, 'Суббота'     );
	    
	var 
	    demman  = Subject.create('Управление требованиями', '', Subject.COMMON),
	    spivt  = Subject.create('СПИиВТ', '', Subject.COMMON),
	    metopt  = Subject.create('Методы оптимизации', '', Subject.COMMON),
	    mettest  = Subject.create('Методы тестирования', '', Subject.COMMON),
	    abmd  = Subject.create('АБМД', '', Subject.COMMON),
	    algan = Subject.create('Анализ Алгоритмов', '', Subject.COMMON);
	    
	var 
	    vasuchkova = Teacher.create('Васючкова Т.С.'),
	    ivancheva = Teacher.create('Иванчева Н.А.'),
	    miginsky = Teacher.create('Мигинский Д.С.'),
	    panin = Teacher.create('Панин А.А.'),
	    kutnenko = Teacher.create('Кутненко О.А.'),
	    zolotuhin = Teacher.create('Золотухин Т.А.'),
	    pavlovsky = Teacher.create('Павловский Е.Н.'),
	    yahyaeva = Teacher.create('Яхъяева');
	    
	var 
	    nsu = function (aud) { return Location.create("ГК",aud); },
	    nov = function (aud) { return Location.create("НК",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud) };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар');
	
	mon.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, demman, nsu(257), vasuchkova, 0));
	mon.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, demman, nsu(257), ivancheva, 1));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, spivt, nov(2128), miginsky));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, spivt, nov(2128), miginsky));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, spivt, nov(5239), miginsky));
	
	// tue.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, fioi,   nsu('БА'), palchikov));
	// tue.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR, fioi,   nsu('БА'), palchikov));

	wed.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, metopt, nov(4117), panin, 1));
	
	thu.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR, metopt, nov(5210), kutnenko));
	thu.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR, mettest, nov(4213), zolotuhin));

	fri.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, abmd, nov(1155), pavlovsky, 0));
	fri.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, abmd, nov(1155), pavlovsky, 1));
	fri.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, algan, nov(1156), yahyaeva, 0));
	fri.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR, algan, nov(1156), yahyaeva, 1));

	// sat.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, intel, nsu(402), shehtman));
	// sat.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, eko, nsu('БА'), arjannikov));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	//week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
