let app = new Vue({
    el: `#app`,
    data: {
        lang: `RU`,
        lang2: `RU`,
        text: `Для любого человека нет ничего важнее семьи. Я тоже люблю свою семью. Сегодня я хотел бы рассказать вам о них.

Моя семья довольно большая. Она состоит из моей мамы, папы, моих трех братьев и сестер и нашего кота Боба. Ну, большинство людей сказали бы, что домашнее животное не является членом семьи, но никто в нашей семье с этим не согласится. Мы все любим Боба и считаем его членом семьи.

Мою маму зовут Анна, она учитель. Она работает в нашей местной школе уже долгое время. Моя мама преподает историю и обществознание, предметы, которые я очень люблю. Она очень любит читать, а ее любимая книга — «Уличный кот по имени Боб» Джеймса Боуэна. Если вы знакомы с этой книгой, то можете догадаться, почему она назвала нашего рыжего кота Бобом.

Моего отца зовут Игорь. Он немного старше мамы, и раньше он был полицейским. Он вышел на пенсию в довольно молодом возрасте и с тех пор занимается собственным бизнесом. У него есть небольшая кофейня и кондитерская. Честно говоря, я не очень много знаю о его бизнесе, но он говорит, что дела идут хорошо.

Что касается моих братьев и сестер, у меня есть сестра Мария, она старшая, и два брата — Виктор и Борис. Кстати, я младший ребенок в семье, но меня полностью устраивает эта роль. Моя сестра Мария — инженер, она живет в другом городе, но приезжает к нам как минимум раз в месяц. Мои братья еще студенты. Виктор изучает историю, следуя по стопам нашей мамы, Борис собирается стать разработчиком программного обеспечения. Он большой поклонник видеоигр, и его мечта — разработать собственную игру.

В заключение я хотел бы сказать, что я люблю свою семью и для меня нет ничего важнее их. Я думаю, что у них всех одинаковое мнение. Даже у Боба.`,

text2:  `Вы когда-нибудь задумывались о том, какой будет ваша будущая жизнь? Что вы будете делать, когда закончите школу? Никогда не рано и не поздно начать думать о своей будущей карьере. Возможно, вам нравятся какие-то предметы в школе больше, чем другие. Если так, это хороший знак, потому что они приведут вас к вашей будущей профессии.
В современном мире ваша будущая карьера может быть абсолютно любой. Это не обязательно означает иметь начальника или работать в компании. Например, вы можете стать фрилансером. Фрилансер — это человек, который работает дома или где угодно, выполняя работу для своих клиентов. Клиенты просят фрилансера что-то сделать, и он должен сделать это до определенной даты. Пока работа выполняется, фрилансеры могут выбирать, где и когда работать. Они могут даже работать по ночам или провести неделю вообще без работы, это зависит только от них.
Кроме того, есть много профессий, требующих креативности. Например, вы можете стать диджеем, музыкантом или актером. Эти профессии могут потребовать большого количества обучения, практики и, возможно, некоторого таланта.
Некоторые люди становятся предпринимателями. Они управляют собственным бизнесом, создают рабочие места и удовлетворяют потребности общества, хотя управление бизнесом — это большая ответственность. Многие люди зависят от предпринимателя, включая его сотрудников, партнеров и клиентов.
Многим нравится работать в более традиционных отраслях. Если вы любите печь выпечку или ухаживать за животными, вам следует следовать своей настоящей страсти. Выбор профессии зависит от вас.
В заключение я хотел бы сказать, что выбор будущей карьеры — нелегкий, но, безусловно, полезно заниматься тем, что вы любите.`

        
    },
    methods: {
        next() {
            if(this.lang == `RU`) {
                
                this.text = `For almost any person, there is nothing more important in the world than their family. I love my family too. Today I would like to tell you about them.

My family is quite big. It consists of my mother, father, my three siblings and our cat Bob. Well, most people would say that a pet is not a family member but no one in our family would agree with that. We all love Bob and consider him a family member.

My mother’s name is Anna, she is a teacher. She has been working in our local school for a long time. My mom teaches History and Social Studies, the subjects that I really love. She loves reading very much, and her favorite book is “A Street Cat Named Bob” by James Bowen. If you are familiar with the book, you can guess why she named our ginger cat Bob.

My father’s name is Igor. He is a little older than mom and he used to be a police officer. He retired at a quite young age and has been running his own business ever since. He has a small coffee shop and a candy store. To be honest, I don’t know much about his business, but he says it is doing well.

As for my siblings, I have a sister, her name is Maria, and she is the oldest one, and two brothers – Viktor and Boris. By the way, I am the youngest child in the family but I am totally happy with that role. My sister Maria is an engineer, she lives in another town but visits us at least once a month. My brothers are still students. Viktor studies history, following in our mother’s footsteps, Boris is going to be a software developer. He is a big fan of videogames, and his dream is to develop his own game.

In conclusion, I would like to say that I love my family and for me there is nothing more important than them. I think, they all have the same opinion. Even Bob.`,

                this.lang = `NE`
            } else{
                this.text = `Для любого человека нет ничего важнее семьи. Я тоже люблю свою семью. Сегодня я хотел бы рассказать вам о них.

Моя семья довольно большая. Она состоит из моей мамы, папы, моих трех братьев и сестер и нашего кота Боба. Ну, большинство людей сказали бы, что домашнее животное не является членом семьи, но никто в нашей семье с этим не согласится. Мы все любим Боба и считаем его членом семьи.

Мою маму зовут Анна, она учитель. Она работает в нашей местной школе уже долгое время. Моя мама преподает историю и обществознание, предметы, которые я очень люблю. Она очень любит читать, а ее любимая книга — «Уличный кот по имени Боб» Джеймса Боуэна. Если вы знакомы с этой книгой, то можете догадаться, почему она назвала нашего рыжего кота Бобом.

Моего отца зовут Игорь. Он немного старше мамы, и раньше он был полицейским. Он вышел на пенсию в довольно молодом возрасте и с тех пор занимается собственным бизнесом. У него есть небольшая кофейня и кондитерская. Честно говоря, я не очень много знаю о его бизнесе, но он говорит, что дела идут хорошо.

Что касается моих братьев и сестер, у меня есть сестра Мария, она старшая, и два брата — Виктор и Борис. Кстати, я младший ребенок в семье, но меня полностью устраивает эта роль. Моя сестра Мария — инженер, она живет в другом городе, но приезжает к нам как минимум раз в месяц. Мои братья еще студенты. Виктор изучает историю, следуя по стопам нашей мамы, Борис собирается стать разработчиком программного обеспечения. Он большой поклонник видеоигр, и его мечта — разработать собственную игру.

В заключение я хотел бы сказать, что я люблю свою семью и для меня нет ничего важнее их. Я думаю, что у них всех одинаковое мнение. Даже у Боба.`
                this.lang = `RU`
            } 
        },
        next2() {
            if(this.lang2 == `RU`) {
                this.text2 = `Have you ever thought about what your future life is going to be like? What are you going to do when you finish school? It is never too early or late to start thinking about your future career. Maybe you enjoy some of the subjects at school more than others. If you do, this is a good sign, because they will guide you to your future profession.
In today’s world, your future career can be absolutely anything. It does not necessarily mean having a boss or working in a company. For example, you can become a freelancer. A freelancer is a person who works at home or wherever they want, doing work for their clients. The clients ask a freelancer to do something, and they have to do it until a certain date. As long as the job is getting done, freelancers can choose where and when to work. They can even work at night, or spend a week not working at all, it depends only on them.
Also, there are a lot of jobs that require creativity. For example, you can become a DJ, a musician, or an actor. These professions might require a great deal of training, practice and probably some talent.
Some people become entrepreneurs. They run their own businesses, make jobs and fill the needs of society, although running a business is a lot of responsibility. A lot of people depend on an entrepreneur including their employees, partners and clients.
Many people enjoy working in more traditional industries. If you love baking pastry or taking care of animals, you should follow your real passion. It is up to you what occupation to choose.
In conclusion, I would like to say that choosing your future career is not easy but it is surely rewarding to do something you love.`

       this.lang2 = `NE`


            } else{
                this.text2 = `Вы когда-нибудь задумывались о том, какой будет ваша будущая жизнь? Что вы будете делать, когда закончите школу? Никогда не рано и не поздно начать думать о своей будущей карьере. Возможно, вам нравятся какие-то предметы в школе больше, чем другие. Если так, это хороший знак, потому что они приведут вас к вашей будущей профессии.
В современном мире ваша будущая карьера может быть абсолютно любой. Это не обязательно означает иметь начальника или работать в компании. Например, вы можете стать фрилансером. Фрилансер — это человек, который работает дома или где угодно, выполняя работу для своих клиентов. Клиенты просят фрилансера что-то сделать, и он должен сделать это до определенной даты. Пока работа выполняется, фрилансеры могут выбирать, где и когда работать. Они могут даже работать по ночам или провести неделю вообще без работы, это зависит только от них.
Кроме того, есть много профессий, требующих креативности. Например, вы можете стать диджеем, музыкантом или актером. Эти профессии могут потребовать большого количества обучения, практики и, возможно, некоторого таланта.
Некоторые люди становятся предпринимателями. Они управляют собственным бизнесом, создают рабочие места и удовлетворяют потребности общества, хотя управление бизнесом — это большая ответственность. Многие люди зависят от предпринимателя, включая его сотрудников, партнеров и клиентов.
Многим нравится работать в более традиционных отраслях. Если вы любите печь выпечку или ухаживать за животными, вам следует следовать своей настоящей страсти. Выбор профессии зависит от вас.
В заключение я хотел бы сказать, что выбор будущей карьеры — нелегкий, но, безусловно, полезно заниматься тем, что вы любите.`

                this.lang2 = `RU`
            }
        }
    }
});