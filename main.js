window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 5*(1*60 + 50), 1*60 + 50);
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
	    obj  = Subject.create('ОБЖ', '', Subject.COMMON),
	    eng  = Subject.create('Английский', '', Subject.LIBERA),
	    fome  = Subject.create('Физические основы микроэлектроники', '', Subject.COMMON),
	    ovf  = Subject.create('Основы вычислительной физики', '', Subject.COMMON)
	    //db = Subject.create('Базы данных', '', Subject.SPECIAL),
	    //ood = Subject.create('ООД', '', Subject.SPECIAL),
	    //dis = Subject.create('Цифровые интегральные схемы', '', Subject.SPECIAL),
	    //evm = Subject.create('ЭВМ в эксперименте', '', Subject.SPECIAL);
	    
	var 
	    kazancev = Teacher.create('Казанцев А. А.'),
	    tambovskaya = Teacher.create('Тамбовская Л. Е.'),
	    volodin = Teacher.create('Володин В. А.'),
	    bloshkin = Teacher.create('Блошкин А. А.'),
	    smirnov = Teacher.create('Смирнов С. В.'),
	    sidelnikov = Teacher.create('Сидельников О. С.');
	    //pirogov = Teacher.create('Пирогов С. А.'),
	    //fatkin = Teacher.create('Фатькин Г. А.'),
	    //gayazov = Teacher.create('Гаязов С. В.'),
	    //maginsky = Teacher.create('Магинский Д. С.'),
	    //korol = Teacher.create('Король А. А.'),
	    //unknown = Teacher.create('');
	    
	var 
	    nsu = function (aud) { return Location.create("ГК",aud); },
	    nov = function (aud) { return Location.create("НК",aud); };
	    //inp = function (aud) { return Location.create("ИЯФ",aud) };
	    //iae = function (aud) { return Location.create("ИАиЭ",aud); };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, obj,   nsu(315),  kazancev));
	mon.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, obj,   nsu(315),  kazancev, 0));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, eng,   nov(2235), tambovskaya));
	
	tue.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, fome,  nsu(324),  volodin));
	tue.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, fome,  nsu(324),  bloshkin));
	tue.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, ovf,   nsu('БА'), smirnov));

	//wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE, db, iae('УЦ'), islam));
	//wed.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR, ood, inp(508), gayazov));
	//wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE, dis, inp('Библиотека'), fatkin));
	
	//thu.add(Course.create( 9*60 +  0, 3*60 + 25, PRACTICE, tsani, nsu(346), unknown));
	//thu.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, tvms, nsu('БА'), kovalevsky));

	fri.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  ovf,  nsu(305),  sidelnikov));
	fri.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR,  eng,  nov(3123), tambovskaya));

	//sat.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, tvms, nsu(304), prokopenko));
	//sat.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, sbp, nsu(316), kozhevnikov, 0));
	//sat.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, sbp, nsu(310),  kozhevnikov, 1));
	//sat.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, sbp, nsu(316), kozhevnikov, 0));
	//sat.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, sbp, nsu(310),  kozhevnikov, 1));
	
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
