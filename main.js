window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 7*(1*60 + 50), 1*60 + 50);
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
	    sbp  = Subject.create('ФКС', '', Subject.COMMON),
	    phil = Subject.create('Философия', '', Subject.LIBERA)
	    eng  = Subject.create('Английский', '', Subject.LIBERA),
	    rnd  = Subject.create('Случайные процессы', '', Subject.COMMON),
	    tsani  = Subject.create('ТСАНИ', '', Subject.COMMON),
	    tvms  = Subject.create('Теор. вер. и мат. стат.', '', Subject.COMMON)
	    db = Subject.create('Базы данных', '', Subject.SPECIAL),
	    ood = Subject.create('ООД', '', Subject.SPECIAL),
	    dis = Subject.create('Цифровые интегральные схемы', '', Subject.SPECIAL),
	    evm = Subject.create('ЭВМ в эксперименте', '', Subject.SPECIAL);
	    
	var 
	    kozhevnikov = Teacher.create('Кожевников А. А.'),
	    shemyakin = Teacher.create('Шемякин Д. Н.'),
	    tsyplakov = Teacher.create('Цыплаков Д. А.'),
	    tambovskaya = Teacher.create('Тамбовская Л. Е.'),
	    arkashov = Teacher.create('Аркашов Н. С.'),
	    kovalevsky = Teacher.create('Ковалевский А. П.'),
	    prokopenko = Teacher.create('Прокопенко Е. И.'),
	    islam = Teacher.create('Исламов Д. Р.'),
	    pirogov = Teacher.create('Пирогов С. А.'),
	    fatkin = Teacher.create('Фатькин Г. А.'),
	    gayazov = Teacher.create('Гаязов В. С.'),
	    maginsky = Teacher.create('Магинский Д. С.'),
	    korol = Teacher.create('Король А. А.'),
	    unknown = Teacher.create('');
	    
	var 
	    nsu = function (aud) { return Location.create("ГК",aud); },
	    nov = function (aud) { return Location.create("НК",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud) };
	    iae = function (aud) { return Location.create("ИАиЭ",aud); };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, sbp,   nsu(316), kozhevnikov));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, sbp,   nsu(328), shemyakin  ));
	
	tue.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, phil, nsu(316), tsyplakov));
	tue.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, phil, nsu('БА'), tsyplakov));
	tue.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR, eng, nov(3151), tambovskaya));
	tue.add(Course.create(18*60 + 10, 1*60 + 35, LECTURE, rnd, nsu(313), arkashov));

	wed.add(Course.create(09*60 + 00, 1*60 + 35, LECTURE, db, iae('УЦ'), islam));
	wed.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR, ood, inp(508), gayazov));
	wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE, dis, inp('Библиотека'), fatkin));
	
	thu.add(Course.create( 9*60 + 00, 3*60 + 25, PRACTICE, tsani, nsu(346), unknown));
	thu.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, tvms, nsu('БА'), kovalevsky));

	fri.add(Course.create(09*60 + 00, 1*60 + 35, PRACTICE,  db,  inp(508), pirogov));
	fri.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  ood,  iae('УЦ'), maginsky));
	fri.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  eng,  nov(3123), tambovskaya));
	fri.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  evm,  inp(508), korol));
	fri.add(Course.create(16*60 + 10, 1*60 + 35, PRACTICE,  evm,  inp(508), korol));

	sat.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, tvms, nsu(304), prokopenko));
	sat.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, sbp, nsu(316), kozhevnikov, 0));
	sat.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, sbp, nsu(310),  shemyakin, 1));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
