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
	    fri = Day.create( 5, 'Пятница'     );
	    sat = Day.create( 6, 'Суббота'     );
	    
	var 
	    plasm = Subject.create( 'Плазма',    '', Subject.COMMON  ),
	    inft  = Subject.create( 'ФОИТ',      '', Subject.SPECIAL ),
	    plis  = Subject.create( 'ПЛИС',      '', Subject.SPECIAL ),
	    cpl   = Subject.create( 'Совр.Я.П.', '', Subject.COMMON  ),
	    pyt   = Subject.create( 'Python',    '', Subject.SPECIAL ),
	    conf  = Subject.create( 'Конфликты', '', Subject.LIBERAL ),
	    pstr  = Subject.create( 'П.Страт.',  '', Subject.LIBERAL ),
	    phil  = Subject.create( 'Философия', '', Subject.LIBERAL ),
	    eng   = Subject.create( 'Ин.Яз.',    '', Subject.LIBERAL ),
	    cpp   = Subject.create( 'C++',       '', Subject.SPECIAL ),
	    alg   = Subject.create( 'Алгоритмы', '', Subject.SPECIAL );
	    
	var 
	    postupaev   = Teacher.create('Поступаев В.В.'),
	    murahtin    = Teacher.create('Мурахтин С.В.'),
	    shamirzaev  = Teacher.create('Шамирзаев Т.С.'),
	    abramkin    = Teacher.create('Абрамкин Д.С.'),
	    mig_val_idr = Teacher.create('Мигинский, Валеев, Идрисов'),
	    grozin      = Teacher.create('Грозин А.Г.'),
	    kiyanova    = Teacher.create('Киянова М.К.'),
	    borisov     = Teacher.create('Борисов И.В.'),
	    anisimova   = Teacher.create('Анисимова Н.К.'),
	    dunaev      = Teacher.create('Дунаев Александр'),
	    gat_sten    = Teacher.create('Гатилов, Стененко'),
	    unknown     = Teacher.create('');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); };

	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум'),
	    SHAD     = Type.create('ШАД');
	
	mon.add(Course.create(10*60 + 50, 3*60 + 25, LECTURE,  cpl,   inp(508),  mig_val_idr  ));
	mon.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  conf,  nsu(416),  kiyanova     ));
	mon.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR,  pstr,  nsu(416),  kiyanova     ));
	
	tue.add(Course.create( 9*60 +  0, 1*60 + 35, PRACTICE, plis,  inp(508),  unknown      ));
	tue.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR,  plasm, nsu(333),  murahtin     ));
	tue.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE,  inft,  nsu('БА'), shamirzaev   ));
	tue.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR,  inft,  nsu('БА'), abramkin     ));
	
	wed.add(Course.create(18*60 + 10, 3*60 + 10, SHAD,     cpp,   nsu(4204), dunaev       ));

	fri.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR,  phil,  nsu(429),  borisov      ));

	sat.add(Course.create( 9*60 +  0, 1*60 + 35, SEMINAR,  eng,   nsu(5251), anisimova    ));
	sat.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  plasm, nsu(442),  postupaev    ));
	sat.add(Course.create(14*60 + 30, 3*60 + 25, SHAD,     alg,   nsu(1155), gat_sten     ));
	// sat.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  phil,  nsu(442),  borisov      ));
	
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
