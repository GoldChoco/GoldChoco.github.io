let highScores = {
    score1: {
        starting: "intro",
        playTime: 500,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score2: {
        starting: "intro",
        playTime: 500,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score3: {
        starting: "intro",
        playTime: 500,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score4: {
        starting: "intro",
        playTime: 500,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score5: {
        starting: "intro",
        playTime: 500,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score6: {
        starting: "intro",
        playTime: 1000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score7: {
        starting: "intro",
        playTime: 1000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score8: {
        starting: "intro",
        playTime: 1000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score9: {
        starting: "intro",
        playTime: 1000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score10: {
        starting: "intro",
        playTime: 1000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score11: {
        starting: "intro",
        playTime: 2000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score12: {
        starting: "intro",
        playTime: 2000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score13: {
        starting: "intro",
        playTime: 2000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score14: {
        starting: "intro",
        playTime: 2000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score15: {
        starting: "intro",
        playTime: 2000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score16: {
        starting: "intro",
        playTime: 5000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score17: {
        starting: "intro",
        playTime: 5000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score18: {
        starting: "intro",
        playTime: 5000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score19: {
        starting: "intro",
        playTime: 5000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score20: {
        starting: "intro",
        playTime: 5000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score21: {
        starting: "random",
        playTime: 500,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score22: {
        starting: "random",
        playTime: 500,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score23: {
        starting: "random",
        playTime: 500,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score24: {
        starting: "random",
        playTime: 500,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score25: {
        starting: "random",
        playTime: 500,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score26: {
        starting: "random",
        playTime: 1000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score27: {
        starting: "random",
        playTime: 1000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score28: {
        starting: "random",
        playTime: 1000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score29: {
        starting: "random",
        playTime: 1000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score30: {
        starting: "random",
        playTime: 1000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score31: {
        starting: "random",
        playTime: 2000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score32: {
        starting: "random",
        playTime: 2000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score33: {
        starting: "random",
        playTime: 2000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score34: {
        starting: "random",
        playTime: 2000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score35: {
        starting: "random",
        playTime: 2000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    score36: {
        starting: "random",
        playTime: 5000,
        round: 3,
        correct: 0,
        elapsedTime: 0
    },
    score37: {
        starting: "random",
        playTime: 5000,
        round: 5,
        correct: 0,
        elapsedTime: 0
    },
    score38: {
        starting: "random",
        playTime: 5000,
        round: 10,
        correct: 0,
        elapsedTime: 0
    },
    score39: {
        starting: "random",
        playTime: 5000,
        round: 20,
        correct: 0,
        elapsedTime: 0
    },
    score40: {
        starting: "random",
        playTime: 5000,
        round: 5140,
        correct: 0,
        elapsedTime: 0
    },
    getScore: function(starting, playTime, round, correct, elapsedTime){
        let target;
        for(key in this){
            if(this[key]["starting"] === starting && this[key]["playTime"] === playTime && this[key]["round"] === round){
                target =  this[key];
            }
        }
        if(!elapsedTime){
            return target;
        }
        else{
            target["correct"] = correct;
            target["elapsedTime"] = elapsedTime;
        }
    }
}

const song0 = {
    code: 0,
    startTime: 0.1,
    link: "https://youtu.be/IsXnK3wSE0w?si=5cCIrfvdTGJDKV-F",
    ko: "피차일반이야",
    ja: "お互い様やん",
    en: "Otagai Samayan",
    hiragana: "おたがいさまやん"
}
const song1 = {
    code: 1,
    startTime: 0.3,
    link: "https://youtu.be/_ZFozPfJXeg?si=FFmCgqI0Qi98DRpj",
    ko: "○○쨩",
    ja: "○○ちゃん",
    en: "Marumaru Chan",
    hiragana: "まるまるちゃん"
}
const song2 = {
    code: 2,
    startTime: 0.7,
    link: "https://youtu.be/6Mwg_NrfKOk?si=oTUciw_xrSE98BAa",
    ko: "19살이 되고 싶지 않아",
    ja: "19歳になりたくない",
    en: "19 Sai ni Naritakunai",
    hiragana: "19さいになりたくない"
}
const song3 = {
    code: 3,
    startTime: 0.45,
    link: "https://youtu.be/sfJVV6n3jUQ?si=nJUICYIchenrEIqw",
    ko: "3636",
    ja: "3636",
    en: "3636",
    hiragana: "3636"
}
const song4 = {
    code: 4,
    startTime: 0.8,
    link: "https://youtu.be/3b0pHa5_WNo?si=y2pgj5SllbAiR8tc",
    ko: "5월",
    ja: "皐月",
    en: "Satsuki",
    hiragana: "さつき"
}
const song5 = {
    code: 5,
    startTime: 0.5,
    link: "https://youtu.be/qIy1w3glAAc?si=yUhcSB6Sf6dKvR3z",
    ko: "die die die",
    ja: "die die die",
    en: "die die die",
    hiragana: "die die die"
}
const song6 = {
    code: 6,
    startTime: 1.3,
    link: "https://youtu.be/Gu6CazHnB38?si=Kwguc1USFmym9cYA",
    ko: "from 4층의 끝방",
    ja: "from 四階の角部屋",
    en: "From the Corner Room on the 4th Floor",
    hiragana: "from よんかいのかどべや"
}
const song7 = {
    code: 7,
    startTime: 0.5,
    link: "https://youtu.be/ABSKGxOVI9U?si=KAcGv_jjR7RKj-FE",
    ko: "GOOD NIGHT BABY",
    ja: "GOOD NIGHT BABY",
    en: "Good Night Baby",
    hiragana: "GOOD NIGHT BABY"
}
const song8 = {
    code: 8,
    startTime: 1,
    link: "https://youtu.be/pedGP_x2M4k?si=4aFVv5UaV4Nqx9L0",
    ko: "MIO",
    ja: "MIO",
    en: "MIO",
    hiragana: "MIO"
}
const song9 = {
    code: 9,
    startTime: 0.6,
    link: "https://youtu.be/kwBX8dEOCFc?si=QoA1Rbvjd9g4aXKs",
    ko: "NOT OK",
    ja: "ノット・オーケー",
    en: "NOT OK",
    hiragana: "のっとおーけー"
}
const song10 = {
    code: 10,
    startTime: 11.3,
    link: "https://youtu.be/VVcA1-ZZZ4Y?si=6wJ3N42_LzkDsYoD",
    ko: "Now한 Young이 엄청 웃긴 건 당연한 가(노래)",
    ja: "ナウなヤングにバカウケするのは当たり前だのクラッ歌",
    en: "Now na Young ni Bakauke Suru no wa Atarimae no Kura Uta",
    hiragana: "なうなやんぐにばかうけするのはあたりまえだのくらっか"
}
const song11 = {
    code: 11,
    startTime: 1.3,
    link: "https://youtu.be/TCdPm--yBZ8?si=jAaevoQ-8UAprX85",
    ko: "rhythm 64",
    ja: "リズム64",
    en: "rhythm 64",
    hiragana: "りずむ６４"
}
const song12 = {
    code: 12,
    startTime: 0.8,
    link: "https://youtu.be/fw_AhJHLJRg?si=JK_1Nbs3CVqLhSLp",
    ko: "RING DING",
    ja: "RING DING",
    en: "RING DING",
    hiragana: "RING DING"
}
const song13 = {
    code: 13,
    startTime: 1.2,
    link: "https://youtu.be/oP_hudbhCkw?si=J3-bF5ljZtYV6H5r",
    ko: "가슴",
    ja: "おっぱい",
    en: "Oppai",
    hiragana: "おっぱい"
}
const song14 = {
    code: 14,
    startTime: 0.63,
    link: "https://youtu.be/ifSsDCuIxDY?si=WxfmB_bycU0wVKN8",
    ko: "인터뷰",
    ja: "インタビュー",
    en: "Interview",
    hiragana: "いんたびゅー"
}
const song15 = {
    code: 15,
    startTime: 0.8,
    link: "https://youtu.be/-9PZ0wGGfqo?si=tzU7wgatO3yeFEW8",
    ko: "강한 척했습니다",
    ja: "強がりました",
    en: "Tsuyogari Mashita",
    hiragana: "つよがりました"
}
const song16 = {
    code: 16,
    startTime: 0.5,
    link: "https://youtu.be/DRih_KDJX00?si=Nd7uPhavbVf-kLi5",
    ko: "강해졌구나, 블루",
    ja: "強くなっちゃったんだ、ブルー",
    en: "Getting Stronger, but so blue",
    hiragana: "つよくなっちゃったんだ、ぶるー"
}
const song17 = {
    code: 17,
    startTime: 15.8,
    link: "https://youtu.be/VRfvTcuizQY?si=-0TJw86jByNatfAL",
    ko: "고양이",
    ja: "猫",
    en: "Neko",
    hiragana: "ねこ"
}
const song18 = {
    code: 18,
    startTime: 0.5,
    link: "https://youtu.be/OxiyIW2y1bg?si=ooEPbJHwbFikzwb6",
    ko: "하늘의 푸르름을 아는 사람이여",
    ja: "空の青さを知る人よ",
    en: "Her Blue Sky",
    hiragana: "そらのあおさをしるひとよ"
}
const song19 = {
    code: 19,
    startTime: 0.5,
    link: "https://youtu.be/b9TJZ7Qhq9c?si=VexMuuLA6EBTgZCm",
    ko: "그렇게 살고 있어",
    ja: "そんな風に生きている",
    en: "Living Like That",
    hiragana: "そんなふうにいきてる"
}
const song20 = {
    code: 20,
    startTime: 0.5,
    link: "https://youtu.be/4dTduRcOjIo?si=CWKQbSphSoKDzk9E",
    ko: "꿈을 좇는 벵갈",
    ja: "夢追いベンガル",
    en: "Dream Chaser Bengal",
    hiragana: "ゆめおいべんがる"
}
const song21 = {
    code: 21,
    startTime: 0.69,
    link: "https://youtu.be/ZuSXOev6B6Q?si=egzHoanGEM8uOHNZ",
    ko: "나에게 남자친구가 생기지 않는 이유",
    ja: "私に彼氏ができない理由",
    en: "Watashi ni Kareshi ga Dekinai Riyuu",
    hiragana: "わたしにかれしができないりゆう"
}
const song22 = {
    code: 22,
    startTime: 0.5,
    link: "https://youtu.be/RkO1TJY3V_c?si=WLo_Tdc4Fmc9fTsv",
    ko: "하트",
    ja: "ハート",
    en: "Heart",
    hiragana: "はーと"
}
const song23 = {
    code: 23,
    startTime: 0.4,
    link: "https://youtu.be/xy_xqHWeAPI?si=un6VB1w8vKbwbxeZ",
    ko: "남자친구유무",
    ja: "彼氏有無",
    en: "calcium",
    hiragana: "かれしうむ"
}
const song24 = {
    code: 24,
    startTime: 1.3,
    link: "https://youtu.be/rVMCKwRs9Os?si=JGUSbojYQFnGuDBg",
    ko: "내일 세상이 끝난다 하더라도",
    ja: "あした世界が終わるとしても",
    en: "Even If the World Ends Tomorrow",
    hiragana: "あしたせかいがおわるとしても"
}
const song25 = {
    code: 25,
    startTime: 0.4,
    link: "https://youtu.be/CJThPqL8Fq4?si=Psw9QDAfo4BqlYSs",
    ko: "너는 록을 듣지 않아",
    ja: "君はロックを聴かない",
    en: "Kimi Wa Rock Wo Kikanai",
    hiragana: "きまはろっくをきかない"
}
const song26 = {
    code: 26,
    startTime: 0.55,
    link: "https://youtu.be/XBNBNJHpsD0?si=qKGYuQDX-KhVb1z5",
    ko: "너를 위해",
    ja: "あなたのために",
    en: "For You",
    hiragana: "あなたのために"
}
const song27 = {
    code: 27,
    startTime: 0.6,
    link: "https://youtu.be/1C1rsLC53dI?si=RCj8Q2sJCOzqwWcz",
    ko: "너의 마음",
    ja: "君のこゝろ",
    en: "Your Heart",
    hiragana: "きみのこころ"
}
const song28 = {
    code: 28,
    startTime: 0.5,
    link: "https://youtu.be/b2-GyvwzDcc?si=h76vDwRLVDafzI_z",
    ko: "네가 없는 밤을 지샐 수 없어",
    ja: "君がいない夜を越えられやしない",
    en: "Kimi ga inai yoru o koerare ya shinai",
    hiragana: "きみがいないよるをこえられやしない"
}
const song29 = {
    code: 29,
    startTime: 0.6,
    link: "https://youtu.be/L5nD74wJWkQ?si=GYlL4dNTxZNBesWb",
    ko: "다면, 의 이야기",
    ja: "ら、のはなし",
    en: "What If...",
    hiragana: "ら、のはなし"
}
const song30 = {
    code: 30,
    startTime: 1.25,
    link: "https://youtu.be/ObCzNAw7dgc?si=K7hBrCYYoTXz-JYc",
    ko: "당신해부순애가 ~죽어~",
    ja: "貴方解剖純愛歌 〜死ね〜",
    en: "Anata Kaibou Junnaika ~Shine~",
    hiragana: "あなたかいぼうじゅんあいか～しね～"
}
const song31 = {
    code: 31,
    startTime: 0.5,
    link: "https://youtu.be/pybAnnhJFzc?si=l3wIc3mS6pOsWIao",
    ko: "동경해왔어",
    ja: "憧れてきたんだ",
    en: "Akogaretekitanda",
    hiragana: "あこがれてきたんだ"
}
const song32 = {
    code: 32,
    startTime: 1.6,
    link: "https://youtu.be/0Pit_PVpxXk?si=XnLEdKRUGWDjP6pZ",
    ko: "두 사람의 세계",
    ja: "ふたりの世界",
    en: "Futari No Sekai",
    hiragana: "ふたりのせかい"
}
const song33 = {
    code: 33,
    startTime: 0.5,
    link: "https://youtu.be/WPnNFMkD6X0?si=lVHsYpxEWIr9ngfI",
    ko: "둘만의 나라",
    ja: "二人だけの国",
    en: "A World of Just Me and You",
    hiragana: "ふたりだけのくに"
}
const song34 = {
    code: 34,
    startTime: 0.15,
    link: "https://youtu.be/wdDqsb1wmMk?si=6GOE7qHE6PXM6dAg",
    ko: "떡잎",
    ja: "双葉",
    en: "Futaba",
    hiragana: "ふたば"
}
const song35 = {
    code: 35,
    startTime: 1.6,
    link: "https://youtu.be/chPE-m-_x9E?si=Pi7WlInj6w1gx5pR",
    ko: "럭키 컬러",
    ja: "ラッキーカラー",
    en: "Rucky Color",
    hiragana: "らっきーからー"
}
const song36 = {
    code: 36,
    startTime: 1,
    link: "https://youtu.be/UbxtCV8nXnA?si=ZhPP_1SKWn2ZIPKV",
    ko: "마리골드",
    ja: "マリーゴールド",
    en: "Marigold",
    hiragana: "まりーごーるど"
}
const song37 = {
    code: 37,
    startTime: 0.6,
    link: "https://youtu.be/dcVismL0cPI?si=Y9-fp0HuwhBb5jvP",
    ko: "마시멜로",
    ja: "マシマロ",
    en: "Marshmellow",
    hiragana: "ましゅまろ"
}
const song38 = {
    code: 38,
    startTime: 0.77,
    link: "https://youtu.be/p6LKnhxpXRQ?si=o9ubPYUsOA3N9lIw",
    ko: "마트료시카",
    ja: "マトリョーシカ",
    en: "Matryoshka",
    hiragana: "まとりょしか"
}
const song39 = {
    code: 39,
    startTime: 0.5,
    link: "https://youtu.be/T_GKEAA9Vfs?si=EKsJZWcOrRWhm3O7",
    ko: "만나러 갈 텐데",
    ja: "会いに行くのに",
    en: "Wish I could see you, but",
    hiragana: "あいにゆくのに"
}
const song40 = {
    code: 40,
    startTime: 1.1,
    link: "https://youtu.be/XzzyAbNlSnE?si=SQsDn9TPf2LXv_X3",
    ko: "만월의 밤이라면",
    ja: "満月の夜なら",
    en: "Only Under the Full Moon",
    hiragana: "まんげつのよるなら"
}
const song41 = {
    code: 41,
    startTime: 0.7,
    link: "https://youtu.be/eFATmXn-NFE?si=0BZY2u7RlvfcvWYe",
    ko: "모습",
    ja: "姿",
    en: "Figure",
    hiragana: "すがた"
}
const song42 = {
    code: 42,
    startTime: 0.6,
    link: "https://youtu.be/rDqmc1beboI?si=HnmcLiIPZ9-UXFkC",
    ko: "미니스커트와 하이라이트",
    ja: "ミニスカートとハイライト",
    en: "Mini-Skirt and Hi-Lite",
    hiragana: "みにすかーととはいらいと"
}
const song43 = {
    code: 43,
    startTime: 1.05,
    link: "https://youtu.be/TDVZZPze4Iw?si=aMXmbXsnVTlFDOWF",
    ko: "바람의 속삭임",
    ja: "風のささやき",
    en: "Kaze No Sasayaki",
    hiragana: "かぞのささやき"
}
const song44 = {
    code: 44,
    startTime: 6.15,
    link: "https://youtu.be/hRix1pT4vGE?si=czAyMOMOXiZ4beH1",
    ko: "벌거벗은 마음",
    ja: "裸の心",
    en: "Naked Heart",
    hiragana: "はだかのこころ"
}
const song45 = {
    code: 45,
    startTime: 0.55,
    link: "https://youtu.be/Mh_xXqsOGHA?si=si0zMsn6zCEWJwJ5",
    ko: "벚꽃이 내리는 밤은",
    ja: "桜が降る夜は",
    en: "On a Cherry Blossom Night",
    hiragana: "さくらがふるよるは"
}
const song46 = {
    code: 46,
    startTime: 0.55,
    link: "https://youtu.be/dF3GDN2P84A?si=qYjWBOUD_ohxvFZW",
    ko: "봄날",
    ja: "ハルノヒ",
    en: "Harunohi",
    hiragana: "はるのひ"
}
const song47 = {
    code: 47,
    startTime: 0.5,
    link: "https://youtu.be/ngkjhC4iO3Q?si=Yx4DkzPbiQkNS3ZF",
    ko: "빙어",
    ja: "チカ",
    en: "Chika",
    hiragana: "ちか"
}
const song48 = {
    code: 48,
    startTime: 0.55,
    link: "https://youtu.be/NgAnXUbPqyw?si=T-1iB-Aa6TuvHV5J",
    ko: "빛나는 것",
    ja: "ひかりもの",
    en: "Raw Like Sushi",
    hiragana: "ひかりもの"
}
const song49 = {
    code: 49,
    startTime: 0.45,
    link: "https://youtu.be/93Fv-fmIvAc?si=vb5i50s2_tMYD1zp",
    ko: "사랑꽃",
    ja: "愛の花",
    en: "ai no hana",
    hiragana: "あいのはな"
}
const song50 = {
    code: 50,
    startTime: 0.5,
    link: "https://youtu.be/NXwj0VYoSuI?si=OjXIpW2cVcn4hkDH",
    ko: "사랑을 알기 전까지",
    ja: "愛を知るまでは",
    en: "Till I Know What Love Is (I'm Never Gonna Die)",
    hiragana: "あいをしるまでは"
}
const song51 = {
    code: 51,
    startTime: 0,
    link: "https://youtu.be/nZGrh6iKfg0?si=xTr7V_Qg6mH5Lyz-",
    ko: "사랑을 전하고 싶다든가",
    ja: "愛を伝えたいだとか",
    en: "Ai Wo Tsutaetaidatoka",
    hiragana: "あいをつたえたいだとか"
}
const song52 = {
    code: 52,
    startTime: 7.7,
    link: "https://youtu.be/KNvVkC96hJk?si=soiw816ECejS0iG1",
    ko: "사랑을 했으니까",
    ja: "恋をしたから",
    en: "Because I'm in Love",
    hiragana: "こいをしたから"
}
const song53 = {
    code: 53,
    startTime: 0.55,
    link: "https://youtu.be/4tftmjebMPY?si=0e03yeiRmS2-Zqpa",
    ko: "살아있었던 거구나",
    ja: "生きていたんだよな",
    en: "Ikiteitandayona",
    hiragana: "いきていたんだよな"
}
const song54 = {
    code: 54,
    startTime: 0.55,
    link: "https://youtu.be/nfTjNMLwcAg?si=ZsIsl1RkCHDZzo-u",
    ko: "숲의 곰씨",
    ja: "森のくまさん",
    en: "Bear In The Woods",
    hiragana: "もりのくもさん"
}
const song55 = {
    code: 55,
    startTime: 0.4,
    link: "https://youtu.be/SrazvevTn1s?si=oE4vzWzqwtPBvp-6",
    ko: "슈퍼걸",
    ja: "スーパーガール",
    en: "Super Girl",
    hiragana: "すーぱーかーる"
}
const song56 = {
    code: 56,
    startTime: 0.55,
    link: "https://youtu.be/lPXgRdk_SUY?si=zqx9oZ0GqA-7W3FK",
    ko: "시가렛",
    ja: "シガレット",
    en: "Cigarette",
    hiragana: "しがれっと"
}
const song57 = {
    code: 57,
    startTime: 0.55,
    link: "https://youtu.be/CvZvxi-IzlQ?si=OxlWhMbEQAC565bB",
    ko: "신비의 영역에",
    ja: "神秘の領域へ",
    en: "Into the land of Mystery",
    hiragana: "しんぴのりょういきへ"
}
const song58 = {
    code: 58,
    startTime: 0.7,
    link: "https://youtu.be/YHmV3B-Wj5s?si=JRsPtv0hYOAds2pw",
    ko: "아침 해",
    ja: "朝陽",
    en: "Morning Sun",
    hiragana: "あさひ"
}
const song59 = {
    code: 59,
    startTime: 0.6,
    link: "https://youtu.be/HcSv2B0Rcnc?si=12XsVrBL90r8LCW8",
    ko: "한들한들",
    ja: "ユラユラ",
    en: "Yurayura",
    hiragana: "ゆらゆら"
}
const song60 = {
    code: 60,
    startTime: 0.75,
    link: "https://youtu.be/NDeAFEdEjpo?si=MVCzlureQ-C5etmu",
    ko: "안녕",
    ja: "サラバ",
    en: "Saraba",
    hiragana: "さらば"
}
const song61 = {
    code: 61,
    startTime: 0,
    link: "https://youtu.be/196S2nlpwxk?si=xbZOnX74-xyuqem1",
    ko: "안녕을 말하는 오늘에",
    ja: "さよならの今日に",
    en: "On This Day We Say Goodbye",
    hiragana: "さよならのきょうに"
}
const song62 = {
    code: 62,
    startTime: 0.45,
    link: "https://youtu.be/hNmbaWDJO0E?si=Zx5vLJE-1rhl4Ob6",
    ko: "야행 버스",
    ja: "夜行バス",
    en: "Yakou Bus",
    hiragana: "やこうばす"
}
const song63 = {
    code: 63,
    startTime: 1.7,
    link: "https://youtu.be/Qetpdg4C1IY?si=KIVxD0Z61RcX9pUx",
    ko: "어차피 죽는다면",
    ja: "どうせ死ぬなら",
    en: "Douse Shinu Nara",
    hiragana: "どうせしぬなら"
}
const song64 = {
    code: 64,
    startTime: 0.95,
    link: "https://youtu.be/NjBE9qSH5MU?si=uWPMcLMPpCkmPTzA",
    ko: "언제까지나",
    ja: "いつまでも",
    en: "Itsumademo",
    hiragana: "いつまでも"
}
const song65 = {
    code: 65,
    startTime: 0.55,
    link: "https://youtu.be/Bf3_xVTPKCs?si=r5PgEwApygo6mf4R",
    ko: "한여름 밤의 냄새가 난다",
    ja: "真夏の夜の匂いがする",
    en: "The Smell of a Midsummer Night",
    hiragana: "まなつのよるのにおいがする"
}
const song66 = {
    code: 66,
    startTime: 0.55,
    link: "https://youtu.be/lMJBJ_HEIE0?si=aakx0pokQ3fFqMTj",
    ko: "해피",
    ja: "ハッピー",
    en: "Happy",
    hiragana: "はっぴー"
}
const song67 = {
    code: 67,
    startTime: 2.65,
    link: "https://youtu.be/yCUfOTeNKX4?si=mltUWFTc1Zu_4dHc",
    ko: "오늘밤 이대로",
    ja: "今夜このまま",
    en: "Let the Night",
    hiragana: "こんやこのまま"
}
const song68 = {
    code: 68,
    startTime: 0.55,
    link: "https://youtu.be/1sH3Vp_cyPE?si=y0L9j01CP3M8Mo6S",
    ko: "오늘의 예술",
    ja: "今日の芸術",
    en: "Kyou no geijutsu",
    hiragana: "きょうのげいじゅつ"
}
const song69 = {
    code: 69,
    startTime: 0.55,
    link: "https://youtu.be/FDVwlNPUnPk?si=haowIpJ79XcycCpN",
    ko: "이해 못 해",
    ja: "わかってない",
    en: "You Don't Know Me",
    hiragana: "わかってない"
}
const song70 = {
    code: 70,
    startTime: 0.55,
    link: "https://youtu.be/W6GPXw3nFEw?si=FJ74SQoAglptqSHv",
    ko: "이해해줘",
    ja: "分かってくれよ",
    en: "Wakatte Kureyo",
    hiragana: "わかってくれよ"
}
const song71 = {
    code: 71,
    startTime: 2.2,
    link: "https://youtu.be/LaUVHoK_puk?si=XmkvYRPYqJJ9RNmO",
    ko: "있잖아",
    ja: "あのね",
    en: "Anone",
    hiragana: "あのね"
}
const song72 = {
    code: 72,
    startTime: 0.55,
    link: "https://youtu.be/3uyBVI5kWkU?si=3b5OFS1x-eqiveM0",
    ko: "잉어",
    ja: "鯉",
    en: "Carp",
    hiragana: "こい"
}
const song73 = {
    code: 73,
    startTime: 0.55,
    link: "https://youtu.be/ILQ7_WB_LaI?si=bc7-31Cer4OYUurT",
    ko: "행복해지고 싶어",
    ja: "幸せになりたい",
    en: "Shiawase ni Naritai",
    hiragana: "しあわせになりたい"
}
const song74 = {
    code: 74,
    startTime: 0.55,
    link: "https://youtu.be/rJwANLbC3cc?si=MHMxwVQvfmoMRNbi",
    ko: "적당히 취함",
    ja: "ほろ酔い",
    en: "Horoyoi",
    hiragana: "ほろよい"
}
const song75 = {
    code: 75,
    startTime: 0.5,
    link: "https://youtu.be/B6EKkD2QugM?si=5aAnsdDJgErRbXCj",
    ko: "접시꽃",
    ja: "葵",
    en: "Aoi",
    hiragana: "あおい"
}
const song76 = {
    code: 76,
    startTime: 0.55,
    link: "https://youtu.be/T9BegxA_t54?si=DGklOBYhneFUitkn",
    ko: "제니퍼",
    ja: "ジェニファー",
    en: "Jennifer",
    hiragana: "じぇにふぁー"
}
const song77 = {
    code: 77,
    startTime: 0.55,
    link: "https://youtu.be/g-P0nBAkEDA?si=voqXoQVzEJW_5zLT",
    ko: "황혼에 보잘것없는 이야기를 했던 그날을 떠올리는 때를",
    ja: "黄昏にバカ話をしたあの日を思い出す時を",
    en: "Remember the Days We're Talking Rubbish in the Twilight",
    hiragana: "たそがれにばかばなしをしたあのひをおもいだしときを"
}
const song78 = {
    code: 78,
    startTime: 1.05,
    link: "https://youtu.be/PAKe829rHOM?si=D-4sLuF2CoHxv6zb",
    ko: "좋아한다고 말해줘",
    ja: "好きって言ってよ",
    en: "Suki tte Itte yo",
    hiragana: "すきっていってよ"
}
const song79 = {
    code: 79,
    startTime: 0.75,
    link: "https://youtu.be/2GzcoLoJ_Kw?si=nzi8afDfXHUUrmP6",
    ko: "좋은 일 합시다",
    ja: "いいことしましょ",
    en: "Ii Koto Shimasho",
    hiragana: "いいことしましょ"
}
const song80 = {
    code: 80,
    startTime: 0.55,
    link: "https://youtu.be/ToIaNmEIcAM?si=zCTSGNMfCnokaqsX",
    ko: "진흙경단의 천재가 있었네",
    ja: "泥だんごの天才いたよね",
    en: "Doro Dango no Tensai Ita yo ne",
    hiragana: "どろだんごのてんさいいたよね"
}
const song81 = {
    code: 81,
    startTime: 0.55,
    link: "https://youtu.be/kbLgSfBASVc?si=9nGTaAKxK34kLvDp",
    ko: "첫사랑이 울고 있어",
    ja: "初恋が泣いている",
    en: "My First Love is Crying",
    hiragana: "はつこいがないている"
}
const song82 = {
    code: 82,
    startTime: 0.45,
    link: "https://youtu.be/56l8Ex2jUXw?si=sCrbL6i52uWUP1Dr",
    ko: "청춘과 청춘과 청춘",
    ja: "青春と青春と青春",
    en: "Seishun To Seishun To Seishun",
    hiragana: "せいしゅんとせいしゅんとせいしゅん"
}
const song83 = {
    code: 83,
    startTime: 0.55,
    link: "https://youtu.be/A11zPlbw9_o?si=7J0p1oKy-pwC_sbn",
    ko: "텔레파시",
    ja: "テレパしい",
    en: "Telepathy",
    hiragana: "てれぱしい"
}
const song84 = {
    code: 84,
    startTime: 0.65,
    link: "https://youtu.be/W9zm4vjVa00?si=FvL_HEJyLYZLlxjE",
    ko: "페르소나의 기억",
    ja: "ペルソナの記憶",
    en: "The Memory of Persona",
    hiragana: "ぺるそなそきおく"
}
const song85 = {
    code: 85,
    startTime: 0.7,
    link: "https://youtu.be/vG4ZN5vqQfg?si=TG4eB1T0g7S1XDCv",
    ko: "포푸리의 잎",
    ja: "ポプリの葉",
    en: "Potpourri Leaf",
    hiragana: "ぽぷりのは"
}
const song86 = {
    code: 86,
    startTime: 0.98,
    link: "https://youtu.be/R22ITa_qvAQ?si=X6k8r3hyEqOkiSs0",
    ko: "표백",
    ja: "漂白",
    en: "Hyohaku",
    hiragana: "ひょうはく"
}
const song87 = {
    code: 87,
    startTime: 0.55,
    link: "https://youtu.be/gNKWFIXeUyk?si=kWDJvbRGcERlogdj",
    ko: "프레젠트",
    ja: "プレゼント",
    en: "Present",
    hiragana: "ぷれぜんと"
}
const songsArray = [
    song0, song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39, song40, song41, song42, song43, song44, song45, song46, song47, song48, song49, song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62, song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74, song75, song76, song77, song78, song79, song80, song81, song82, song83, song84, song85, song86, song87
];

