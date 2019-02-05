window.onload = function main()
{
    frame.init();
    
    var week = Week.create( 9*60 + 00, 6*(1*60 + 50), 1*60 + 50);
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
        mimi  = Subject.create('Цифровая обработка МиМИ', '', Subject.COMMON),
        iface  = Subject.create('Интерфейсы программных систем', '', Subject.COMMON),
        phil  = Subject.create('Философия и методология науки', '', Subject.COMMON),
        distsys  = Subject.create('Распределенные системы', '', Subject.COMMON),
        strit  = Subject.create('Современные тенденции развития информационных технологий', '', Subject.COMMON),
        minion = Subject.create('Управление ИТ-проектами (КафОИ)', '', Subject.SPECIAL),
        intdoc = Subject.create('Интеллектуальная обработка документов и фактов (КафСИ)', '', Subject.SPECIAL);
        
    var 
        kugaevckih = Teacher.create('Кугаевских А.В.'),
        derjo = Teacher.create('Держо М.А.'),
        trubicin = Teacher.create('Трубицын О.К.'),
        jijimov = Teacher.create('Жижимов О.Л.'),
        muhortov = Teacher.create('Мухортов В.В.'),
        savostyanov = Teacher.create('Савостьянов А.Н.'),
        yahyaeva = Teacher.create('Яхъяева');
        
    var 
        nsu = function (aud) { return Location.create("ГК",aud); },
        nov = function (aud) { return Location.create("НК",aud); },
        inp = function (aud) { return Location.create("ИЯФ",aud) };

    var 
        LECTURE  = Type.create('Лекция'),
        SEMINAR  = Type.create('Семинар');
    
    mon.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, mimi, nov(2128), kugaevckih, 1));
    mon.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, mimi, nov(2128), kugaevckih, 0));
    
    tue.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR, iface,nov(4220), derjo));

    // wed.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, metopt, nov(4117), panin, 0));
    
    thu.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, phil, nov(2128), trubicin, 1));
    thu.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR, phil, nov(3120), trubicin, 0));
    thu.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE, distsys, nov(2128), jijimov, 1));
    thu.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE, iface, nov(1155), derjo, 0));
    thu.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR, distsys, nov(1154), jijimov, 1));
    thu.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR, iface, nov(4218), derjo, 0));

    // fri.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, abmd, nov(1155), pavlovsky, 1));
    // fri.add(Course.create( 9*60 + 00, 1*60 + 35, SEMINAR, abmd, nov(1155), pavlovsky, 0));
    // fri.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, algan, nov(1156), yahyaeva, 1));
    // fri.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, algan, nov(1156), yahyaeva, 0));

    sat.add(Course.create( 9*60 + 00, 1*60 + 35, LECTURE, minion, nov(1156), muhortov, 1));
    sat.add(Course.create( 9*60 + 00, 1*60 + 35, SEMINAR, minion, nov(1156), muhortov, 0));
    sat.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE, strit, nov(3120), savostyanov, 1));
    sat.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR, strit, nov(3120), savostyanov, 0));
    
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
