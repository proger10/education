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
	    fioi  = Subject.create('Физические основы информатики', '', Subject.COMMON),
	    intel  = Subject.create('Охрана интелектуальной собственности', '', Subject.COMMON),
	    biz  = Subject.create('Бизнес-планирование', '', Subject.COMMON),
	    prep  = Subject.create('Искус. препод. физ.', '', Subject.COMMON),
	    eko = Subject.create('Экология', '', Subject.COMMON);
	    
	var 
	    palchikov = Teacher.create('Пальчиков Е.И..'),
	    shehtman = Teacher.create('Шехтман Е.Л.'),
	    petrova = Teacher.create('Петрова Э.Д.'),
	    knyazev = Teacher.create('Князев Б.А.'),
	    arjannikov = Teacher.create('Аржанников А.В.');
	    
	var 
	    nsu = function (aud) { return Location.create("ГК",aud); },
	    nov = function (aud) { return Location.create("НК",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud) };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар');
	
	// mon.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, bj,   nsu(304),  ivanchenko));
	// mon.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, bj,   nsu(304),  ivanchenko));
	// mon.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, eng,   nov(2235), tambovskaya));
	
	tue.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, fioi,   nsu('БА'), palchikov));
	tue.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR, fioi,   nsu('БА'), palchikov));

	//wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE, db, iae('УЦ'), islam));
	//wed.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR, ood, inp(508), gayazov));
	//wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE, dis, inp('Библиотека'), fatkin));
	
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE, intel, nsu(313), shehtman));
	thu.add(Course.create(16*60 + 00, 1*60 + 35, SEMINAR, biz, nsu(316), petrova));

	fri.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE,  prep,  nsu('БА'), knyazev));

	sat.add(Course.create(12*60 + 40, 1*60 + 35, LECTURE, eko, nsu('БА'), arjannikov, 0));
	
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
