const playList = [
    {
        title: 'AirplanePt2',
        artist: 'BTS',
        img: 'images/AIRPLANE PT2.jpg ',
        song:'audio/BTS (防弾少年団) _Airplane pt.2 -Japanese ver.-_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'ALL IN',
        artist:'Stary Kids',
        img:'images/ALL IN.jpeg',
        song:'audio/STRAY KIDS - _ALL IN_ Lyrics [Color Coded_Kan_Rom_Eng](MP3_128K).mp3'
    },
    {
        title:'ANPANMAN',
        artist:'BTS',
        img:'images/ANPANMAN.jpeg',
        song:'audio/BTS (방탄소년단) _ANPANMAN_ MV(MP3_128K)_1.mp3'
    },
    {
        title:'BLACK SWAN',
        artist:'BTS',
        img:'images/BLACK SWAN.jpeg',
        song:'audio/BTS (방탄소년단) _Black Swan_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'BOMBAYAH',
        artist:'BLACKPNIK',
        img:'images/BOOBMAYAH.jpeg',
        song:'audio/BLACKPINK - _붐바야_(BOOMBAYAH) M_V(MP3_128K).mp3'
    },
    {
        title:'BOY WITH LUV' ,
        artist:'BTS',
        img:'images/BOY WITH LUV.jpeg',
        song:'audio/BTS (방탄소년단) _작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'BUTTER' ,
        artist:'BTS',
        img:'images/BUTTER.jpeg',
        song:'audio/BTS (방탄소년단) _Butter_ Official MV(MP3_128K).mp3'
    },
    {
        title:'CHICKEN NOODLE SOUP' ,
        artist:'J_HOPE and BECKY G',
        img:'images/CHICKEN NOODLE SOUP.jpeg',
        song:'audio/j-hope _Chicken Noodle Soup (feat. Becky G)_ MV(MP3_128K)_1.mp3'
    },
    {
        title:'CHK CHK BOOM' ,
        artist:'STRAY KIDS',
        img:'images/CHK CHK BOOM.jpeg',
        song:'audio/Stray Kids _Chk Chk Boom_ Performance Video(MP3_160K).mp3'
    },
    {
        title:'CIRCUS' ,
        artist:'STRAY KIDS',
        img:'images/CIRCUS.jpeg',
        song:'audio/Stray Kids - Circus (Traducida al Español)(MP3_128K).mp3'
    },
    {
        title:'DAECHWITA' ,
        artist:'Agust_D',
        img:'images/DAECHWITA.jpeg',
        song:'audio/Agust D _대취타_ MV(MP3_128K)_1.mp3'
    },
    {
        title:'DDU-DU-DDU-DU' ,
        artist:'BLACK PINK',
        img:'images/DDU-DU-DDU-DU.jpeg',
        song:'audio/BLACKPINK - _뚜두뚜두 (DDU-DU DDU-DU)_ M_V(MP3_160K)_1.mp3'
    },
    {
        title:'DYNAMITE' ,
        artist:'BTS',
        img:'images/DYNAMITE.jpeg',
        song:'audio/BTS (방탄소년단) _Dynamite_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'FAKE LOVE' ,
        artist:'BTS',
        img:'images/FAKE LOVE.jpeg',
        song:'audio/BTS (방탄소년단) _FAKE LOVE_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'FIRE' ,
        artist:'BTS',
        img:'images/FIRE.jpeg',
        song:'audio/BTS (방탄소년단) _불타오르네 (FIRE)_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'GODS MENU' ,
        artist:'STRAY KIDS',
        img:'images/GODS MENU.jpeg',
        song:'audio/God_s Menu(MP3_128K).mp3'
    },
    {
        title:'3D' ,
        artist:'JUNGKOOK',
        img:'images/JUNGKOOK 3D.png',
        song:'audio/3D - Alternate Ver(MP3_160K).mp3'
    },
    {
        title:'KILL THIS LOVE' ,
        artist:'BLACK PINK',
        img:'images/KILL THIS LOVE.jpeg',
        song:'audio/BLACKPINK - _Kill This Love_ M_V(MP3_128K)_1.mp3'
    },
    {
        title:'LALALALA' ,
        artist:'STRAY KIDS',
        img:'images/LALALALA.jpeg',
        song:'audio/Stray Kids _락 (樂) (LALALALA)_ M_V(MP3_160K).mp3'
    },
    {
        title:'MANIAC' ,
        artist:'STRAY KIDS',
        img:'images/MANIAC.webp',
        song:'audio/Stray Kids _MANIAC_ Lyrics (Color Coded Lyrics)(MP3_128K).mp3'
    },
    {
        title:'MIC DROP' ,
        artist:'BTS',
        img:'images/MIC DROP.jpeg',
        song:'audio/BTS (방탄소년단) _MIC Drop (Steve Aoki Remix)_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'NO MORE DREAM' ,
        artist:'BTS',
        img:'images/NO MORE DREAM.jpeg',
        song:'audio/BTS (방탄소년단) _No More Dream_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'NOT TODAY' ,
        artist:'BTS',
        img:'images/NOT TODAY.jpeg',
        song:'audio/BTS (방탄소년단) _Not Today_ Official MV(MP3_128K)_1.mp3'
    },
    {
        title:'ON' ,
        artist:'BTS',
        img:'images/ON.jpeg',
        song:'audio/BTS (방탄소년단) _ON_ Kinetic Manifesto Film _ Come Prima(MP3_128K)_1.mp3'
    },
    {
        title:'PERMISSION TO DANCE' ,
        artist:'BTS',
        img:'images/PERMISSION TO DANCE.jpeg',
        song:'audio/BTS (방탄소년단) _Permission to Dance_ Official MV(MP3_128K).mp3'
    },
    {
        title:'PINK VENOM' ,
        artist:'BLACK PINK',
        img:'images/PINK VENOM.jpeg',
        song:'audio/BLACKPINK - PINK VENOM (Letra Fácil _ Pronunciación Fácil _ Easy Lyrics)(MP3_128K).mp3'
    },
    {
        title:'RUN' ,
        artist:'BTS',
        img:'images/RUN.jpg',
        song:'audio/달려라 방탄(MP3_128K).mp3'
    }, {
        title:'S-CLASS' ,
        artist:'STRAY KIDS',
        img:'images/S-CLASS.png',
        song:'audio/Stray Kids (스트레이키즈) _특 S-Class_ Official Audio(MP3_160K).mp3'
    }, {
        title:'SEVEN' ,
        artist:'JUNGKOOK',
        img:'audio/Jungkook - Seven (Feat. Latto) (Explicit Ver.) (Traducida al Español)(MP3_160K).mp3',
        song:'images/SEVEN.jpg'
    },
    {
        title:'THAT THAT' ,
        artist:'PSY and SUGA',
        img:'images/THAT THAT.webp',
        song:'audio/PSY Ft. Suga of BTS - That That __ Sub. Español(MP3_128K).mp3'
    },
    {
        title:'TOPLINE' ,
        artist:'STARY KIDS',
        img:'images/TOPLINE.jpg',
        song:'audio/Stray Kids _TOPLINE (Feat. Tiger JK)_ Video(MP3_160K).mp3'
    },
    {
        title:'VENOM' ,
        artist:'STARY KIDS',
        img:'images/VENOM.jpg',
        song:'audio/Stray Kids _거미줄(VENOM)_ Video(MP3_160K).mp3'
    },
]