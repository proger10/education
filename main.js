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
        fri = Day.create( 5, 'Пятница'     );
        sat = Day.create( 6, 'Суббота'     );
        
    var 
        eng  = Subject.create('Английский язык', '', Subject.COMMON),
        intel  = Subject.create('Интеллектуальные системы', '', Subject.COMMON),
        trpo  = Subject.create('Технология разработки программного обеспечения', '', Subject.COMMON),
        puitp  = Subject.create('Практика управления ИТ-проектами', '', Subject.SPECIAL),
        model  = Subject.create('Нечёткие модели и теория мягких вычислений', '', Subject.SPECIAL);
        
    var 
        hockina = Teacher.create('Хоцкина О.В.'),
        gulnara = Teacher.create('Яхъяева Г.Э.'),
        nagornih = Teacher.create('Нагорных Д.Ю.'),
        miginsky = Teacher.create('Мигинский Д.С.'),
        muhortov = Teacher.create('Мухортов В.В.'),
        bukshev = Teacher.create('Букшев И.Е.');
        
    var 
        nsu = function (aud) { return Location.create("ГК",aud); },
        nov = function (aud) { return Location.create("НК",aud); },
        inp = function (aud) { return Location.create("ИЯФ",aud) };

    var 
        LECTURE  = Type.create('Лекция'),
        SEMINAR  = Type.create('Семинар');
    
    mon.add(Course.create( 9*60 + 00, 1*60 + 35, SEMINAR, model, nov(4231), gulnara));
    
    tue.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, intel,nov(2128), gulnara, 0));
    tue.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, intel,nov(1156), nagornih));

    wed.add(Course.create(09*60 + 00, 3*60 + 25, LECTURE, trpo, nov(2128), miginsky));
    wed.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, puitp, nov(5272), muhortov));
    wed.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, puitp, nov(1156), muhortov, 1));
    
    thu.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR, eng, nov(1154), hockina));

    fri.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR, trpo, nov(1154), bukshev));

    // sat.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, minion, nov(1156), muhortov, 0));
    
    week.add(mon);
    week.add(tue);
    week.add(wed);
    week.add(thu);
    week.add(fri);
    // week.add(sat);
    
    frame.add(week);
    
    frame.reshape();
    frame.mark(new Date());
    
    setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
    frame.reshape();
};
