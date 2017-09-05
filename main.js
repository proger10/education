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
	    bj  = Subject.create('БЖ', '', Subject.COMMON),
	    eng  = Subject.create('Английский', '', Subject.LIBERA),
	    fome  = Subject.create('Физические основы микроэлектроники', '', Subject.COMMON),
	    ovf  = Subject.create('Основы вычислительной физики', '', Subject.COMMON),
	    pdo = Subject.create('Психология деловых отношений', '', Subject.LIBERA);
	    graph = Subject.create('Графика', '', Subject.SPECIAL),
	    mp = Subject.create('МП системы', '', Subject.SPECIAL);
	    
	var 
	    ivanchenko = Teacher.create('Иванченко А. А.'),
	    tambovskaya = Teacher.create('Тамбовская Л. Е.'),
	    volodin = Teacher.create('Володин В. А.'),
	    bloshkin = Teacher.create('Блошкин А. А.'),
	    smirnov = Teacher.create('Смирнов С. В.'),
	    sidelnikov = Teacher.create('Сидельников О. С.'),
	    kiyanova = Teacher.create('Киянова М. К.'),
	    hayrulin = Teacher.create('Хайрулин С. С.'),
	    osipov = Teacher.create('Осипов В. Н.'),
	    medvedev = Teacher.create('Медведев А. М.');
	    
	var 
	    nsu = function (aud) { return Location.create("ГК",aud); },
	    nov = function (aud) { return Location.create("НК",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud) };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар');
	
	mon.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, bj,   nsu(304),  ivanchenko));
	mon.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, bj,   nsu(304),  ivanchenko, 1));
	mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, eng,   nov(2235), tambovskaya));
	
	tue.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, fome,  nsu(312),  volodin));
	tue.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, fome,  nsu(312),  bloshkin));
	tue.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, ovf,   nsu('БА'), smirnov));
	tue.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE, pdo,   nsu('416'), kiyanova));

	//wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE, db, iae('УЦ'), islam));
	//wed.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR, ood, inp(508), gayazov));
	//wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE, dis, inp('Библиотека'), fatkin));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE, graph, inp(508), hayrulin));
	thu.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR, graph, inp(508), hayrulin));
	thu.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE, mp, inp('Конф. зал'), osipov));
	thu.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR, mp, inp(508), medvedev));

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
