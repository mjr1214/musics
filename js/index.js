 $(function(){
    var audio=$('audio').get(0);
    var controler=$('.controler');
    var bofang=$('.bofang');
    var index=0;
    var lists=[
        {name:"青春的颜色",
            singer:"曾子岚",
            time:'05:06',
            src:"zengzilan.jpg",
            geci:[
                {time:"00:00",lrc:"青春的颜色"},
                {time:"00:02",lrc:"作词：曾子岚"},
                {time:"00:04",lrc:"作曲：曾子岚"},
                {time:"00:06",lrc:"编曲：乐方舟"},
                {time:"00:08",lrc:"演唱：曾子岚"},
                {time:"00:10",lrc:""},
                {time:"00:11",lrc:"LRC编辑：紫色忧郁"},
                {time:"00:13",lrc:"QQ：25025025250"},
                {time:"00:20",lrc:""},
                {time:"00:21",lrc:"花儿流着泪 会枯萎 虽然美"},
                {time:"00:25",lrc:"时光飞逝悄然抹去了香味"},
                {time:"00:30",lrc:"我们不再追 追着谁 拖着谁"},
                {time:"00:34",lrc:"只是年少轻狂留下的疲惫"},
                {time:"00:40",lrc:"风儿伴着月 冷的夜 白的雪"},
                {time:"00:44",lrc:"饮着曾今沧海岁月酿的醉"},
                {time:"00:49",lrc:"你的那个谁 我的谁 靠着谁"},
                {time:"00:53",lrc:"如今天涯海角成了谁的谁"},
                {time:"00:58",lrc:"一睁眼 一眨眼 转身过了多少年"},
                {time:"01:03",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"01:08",lrc:"睁眼 眨眼 过了多少年"},
                {time:"01:12",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"01:17",lrc:""},
                {time:"01:20",lrc:"青春的颜色 那是真情的颜色"},
                {time:"01:24",lrc:"风吹雨打仍旧灿烂着"},
                {time:"01:29",lrc:"离散总是太多 真心总被无情错过"},
                {time:"01:36",lrc:""},
                {time:"01:38",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"01:43",lrc:"难为爱情总是太苦涩"},
                {time:"01:48",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"01:55",lrc:""},
                {time:"02:16",lrc:"花儿流着泪 会枯萎 虽然美"},
                {time:"02:20",lrc:"时光飞逝悄然抹去了香味"},
                {time:"02:26",lrc:"我们不再追 追着谁 拖着谁"},
                {time:"02:30",lrc:"只是年少轻狂留下的疲惫"},
                {time:"02:35",lrc:"风儿伴着月 冷的夜 白的雪"},
                {time:"02:39",lrc:"饮着曾今沧海岁月酿的醉"},
                {time:"02:44",lrc:"你的那个谁 我的谁 靠着谁"},
                {time:"02:48",lrc:"如今天涯海角成了谁的谁"},
                {time:"02:53",lrc:"一睁眼 一眨眼 转身过了多少年"},
                {time:"02:58",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"03:03",lrc:"睁眼 眨眼 过了多少年"},
                {time:"03:07",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"03:12",lrc:""},
                {time:"03:14",lrc:"青春的颜色 那是真情的颜色"},
                {time:"03:18",lrc:"风吹雨打仍旧灿烂着"},
                {time:"03:23",lrc:"离散总是太多 真心总被无情错过"},
                {time:"03:29",lrc:""},
                {time:"03:32",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"03:37",lrc:"难为爱情总是太苦涩"},
                {time:"03:42",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"03:48",lrc:""},
                {time:"03:51",lrc:"青春的颜色 那是真情的颜色"},
                {time:"03:55",lrc:"风吹雨打仍旧灿烂着"},
                {time:"04:01",lrc:"离散总是太多 真心总被无情错过"},
                {time:"04:06",lrc:""},
                {time:"04:10",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"04:14",lrc:"难为爱情总是太苦涩"},
                {time:"04:20",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"04:25",lrc:""}
     ]
        },
        {name:"红玫瑰",
            singer:"陈奕迅",
            src:"chenyixun.jpg",
            geci:[
                {time:"00:01",lrc:"红玫瑰 - 陈奕迅"},
                {time:"00:03",lrc:"词:李焯雄"},
                {time:"00:06",lrc:"曲：梁翘柏"},
                {time:"00:08",lrc:"编：梁翘柏"},
                {time:"00:16",lrc:"梦里梦到醒不来的梦"},
                {time:"00:18",lrc:"红线里被软禁的红"},
                {time:"00:23",lrc:"所有刺激剩下疲乏的痛"},
                {time:"00:26",lrc:"再无动于衷"},
                {time:"00:30",lrc:"从背后抱你的时候"},
                {time:"00:33",lrc:"期待的却是她的面容"},
                {time:"00:37",lrc:"说来实在嘲讽 我不太懂"},
                {time:"00:41",lrc:"偏渴望你懂"},
                {time:"00:44",lrc:"是否幸福轻得太沉重"},
                {time:"00:48",lrc:"过度使用不痒不痛"},
                {time:"00:52",lrc:"烂熟透红空洞了的瞳孔"},
                {time:"00:56",lrc:"终于掏空 终于有始无终"},
                {time:"00:59",lrc:"得不到的永远在骚动"},
                {time:"01:03",lrc:"被偏爱的 都有恃无恐"},
                {time:"01:06",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"01:11",lrc:"握在手中却流失于指缝"},
                {time:"01:14",lrc:"又落空"},
                {time:"01:16",lrc:""},
                {time:"01:31",lrc:"红是朱砂痣烙印心口"},
                {time:"01:33",lrc:"红是蚊子血般平庸"},
                {time:"01:38",lrc:"时间美化那仅有的悸动"},
                {time:"01:41",lrc:"也磨平激动"},
                {time:"01:45",lrc:"从背后抱你的时候"},
                {time:"01:48",lrc:"期待的却是她的面容"},
                {time:"01:52",lrc:"说来实在嘲讽"},
                {time:"01:55",lrc:"我不太懂 偏渴望你懂"},
                {time:"01:59",lrc:"是否幸福轻得太沉重"},
                {time:"02:03",lrc:"过度使用 不痒不痛"},
                {time:"02:07",lrc:"烂熟透红空洞了的瞳孔"},
                {time:"02:11",lrc:"终于掏空 终于有始无终"},
                {time:"02:14",lrc:"得不到的永远在骚动"},
                {time:"02:18",lrc:"被偏爱的都有恃无恐"},
                {time:"02:22",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"02:26",lrc:"握在手中却流失于指缝"},
                {time:"02:29",lrc:"又落空"},
                {time:"02:31",lrc:""},
                {time:"02:44",lrc:"是否说爱都太过沉重"},
                {time:"02:48",lrc:"过度使用不痒不痛"},
                {time:"02:52",lrc:"烧得火红 蛇行缠绕心中"},
                {time:"02:56",lrc:"终于冷冻终于有始无终"},
                {time:"02:59",lrc:"得不到的永远在骚动"},
                {time:"03:03",lrc:"被偏爱的都有恃无恐"},
                {time:"03:06",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"03:11",lrc:"握在手中却流失于指缝"},
                {time:"03:15",lrc:"得不到的永远在骚动"},
                {time:"03:18",lrc:"被偏爱的 都有恃无恐"},
                {time:"03:21",lrc:"玫瑰的红 伤口绽放的梦"},
                {time:"03:26",lrc:"握在手中却流失于指缝"},
                {time:"03:29",lrc:"再落空"}
                ]
        },
        {name:"国王与乞丐",singer:"华晨宇",src:"huachenyu.jpg",
            geci:[
                {time:'00:00',lrc:'华晨宇、杨宗纬 - 国王与乞丐'},
                {time:'00:03',lrc:'作词：代岳东'},
                {time:'00:04',lrc:'作曲：Mike Chan/Faizal Tahir'},
                {time:'00:05',lrc:'编曲：郑楠'},
                {time:'00:14',lrc:'怎么了 怎么了'},
                {time:'00:17',lrc:'一份爱失去了光泽'},
                {time:'00:20',lrc:'面对面 背对背'},
                {time:'00:23',lrc:'反复挣扎怎么都痛'},
                {time:'00:27',lrc:'以为爱坚固像石头'},
                {time:'00:30',lrc:'谁知一秒钟就碎落'},
                {time:'00:33',lrc:'难道心痛都要不断打磨'},
                {time:'00:39',lrc:'抱紧你的我比国王富有'},
                {time:'00:46',lrc:'曾多么快乐'},
                {time:'00:52',lrc:'失去你的我比乞丐落魄'},
                {time:'00:59',lrc:'痛多么深刻'},
                {time:'01:06',lrc:'噢 喔 噢 喔'},
                {time:'01:13',lrc:'噢 喔 噢 喔'},
                {time:'01:18',lrc:'谁哭着谁笑着'},
                {time:'01:21',lrc:'一人分饰两个角色'},
                {time:'01:25',lrc:'越执迷越折磨'},
                {time:'01:28',lrc:'回忆还在煽风点火'},
                {time:'01:32',lrc:'明知往前就会坠落'},
                {time:'01:35',lrc:'抱着遗憾重返寂寞'},
                {time:'01:38',lrc:'爱到最后究竟还剩什么'},
                {time:'01:44',lrc:'抱紧你的我比国王富有'},
                {time:'01:51',lrc:'曾多么快乐'},
                {time:'01:57',lrc:'失去你的我比乞丐落魄'},
                {time:'02:04',lrc:'痛多么深刻'},
                {time:'02:11',lrc:'当一切 结束了 安静了 过去了'},
                {time:'02:18',lrc:'为什么 还拥有 一万个 舍不得'},
                {time:'02:26',lrc:'喔 喔'},
                {time:'02:36',lrc:'谁又能感受'},
                {time:'02:43',lrc:'回忆里的我比国王富有'},
                {time:'02:49',lrc:'奢侈的快乐'},
                {time:'02:55',lrc:'失去你以后比乞丐落魄'},
                {time:'03:06',lrc:'心痛如刀割'},
                {time:'03:13',lrc:'怀念那时你安静陪着我'},
                {time:'03:17',lrc:'噢 噢'},
                {time:'03:20',lrc:'柔软时光里最美的挥霍'},
                {time:'03:26',lrc:'喔 喔'},
                {time:'03:29',lrc:'爱有多快乐'},
                {time:'03:34',lrc:'痛有多深刻'},
                {time:'03:40',lrc:'痛有多深刻'}
            ]

        },
        {name:"走在冷风中",singer:"刘思涵",src:"liusihan.jpg",
            geci:[
                {time:'00:02',lrc:'走在冷风中'},
                {time:'00:08',lrc:'演唱：刘思涵'},
                {time:'00:18',lrc:'分手 从你口中说出十分冷漠'},
                {time:'00:26',lrc:'难过 沸腾心中然后熄灭的火'},
                {time:'00:33',lrc:'我以为留下来没有错'},
                {time:'00:37',lrc:'我以为努力过你会懂'},
                {time:'00:40',lrc:'怎么连落叶 都在嘲笑我'},
                {time:'00:45',lrc:'要假装坚强的走'},
                {time:'00:53',lrc:'行走在冬夜的冷风中'},
                {time:'00:56',lrc:'飘散的 踩碎的 都是梦'},
                {time:'01:00',lrc:'孤单单这一刻 如何 确定你曾爱过我'},
                {time:'01:08',lrc:'停留在冬夜的冷风中'},
                {time:'01:12',lrc:'我不是 也不想 装脆弱'},
                {time:'01:16',lrc:'我没说不代表我不会痛'},
                {time:'01:22',lrc:''},
                {time:'01:39',lrc:'我以为你暂时走失了'},
                {time:'01:44',lrc:'我以为你累了会回头'},
                {time:'01:47',lrc:'怎么连复杂的故事背后'},
                {time:'01:51',lrc:'都是我听朋友说'},
                {time:'01:56',lrc:'行走在冬夜的冷风中'},
                {time:'02:01',lrc:'飘散的 踩碎的 都是梦'},
                {time:'02:05',lrc:'孤单单这一刻 如何 确定你曾爱过我'},
                {time:'02:13',lrc:'停留在冬夜的冷风中'},
                {time:'02:16',lrc:'我不是 也不想 装脆弱'},
                {time:'02:20',lrc:'我没说不代表我不会痛'},
                {time:'02:28',lrc:''},
                {time:'02:31',lrc:'停留在冬夜的冷风中'},
                {time:'02:36',lrc:'我不是 也不想 装脆弱'},
                {time:'02:40',lrc:'只因为你说过 爱是等待是细水长流'},
                {time:'02:48',lrc:'Je le sais continue c’est pas bon(我知道继续是不好的)'},
                {time:'02:52',lrc:'A la fin tu restes pas longtemps (结局是你不会停留太久)'},
                {time:'02:56',lrc:'我没说不代表我不会痛'},
                {time:'03:03',lrc:''}
            ]

        },
        {name:"寂寞的季节",singer:"陶喆",src:"taozhe.jpg",
            geci:[
                {time:"00:00",lrc:"陶喆 寂寞的季节"},
                {time:"00:05",lrc:"songstack"},
                {time:"00:12",lrc:"风吹落最后一片叶"},
                {time:"00:17",lrc:"我的心也飘着雪"},
                {time:"00:24",lrc:"爱只能往回忆里堆叠"},
                {time:"00:29",lrc:"oh~给下个季节"},
                {time:"00:36",lrc:"忽然间树梢冒花蕊"},
                {time:"00:42",lrc:"我怎么会都没有感觉"},
                {time:"00:47",lrc:"oh~整条街都是恋爱的人"},
                {time:"00:54",lrc:"我独自走在暖风的夜"},
                {time:"01:02",lrc:"多想要向过去告别"},
                {time:"01:08",lrc:"当季节不停更迭 oh~"},
                {time:"01:14",lrc:"却还是少一点坚决"},
                {time:"01:20",lrc:"在这寂寞的季节"},
                {time:"01:28",lrc:"艳阳高照在那海边"},
                {time:"01:34",lrc:"爱情盛开的世界"},
                {time:"01:40",lrc:"远远看著热闹一切"},
                {time:"01:46",lrc:"oh~我记得那狂烈"},
                {time:"01:52",lrc:"窗外是快枯黄的叶"},
                {time:"01:58",lrc:"感伤在心中有一些 oh~"},
                {time:"02:05",lrc:"我了解那些爱过的人"},
                {time:"02:10",lrc:"心是如何慢慢在凋谢"},
                {time:"02:16",lrc:"多想要向过去告别"},
                {time:"02:22",lrc:"当季节不停更迭 oh~"},
                {time:"02:29",lrc:"却永远少一点坚决"},
                {time:"02:35",lrc:"在这寂寞的季节"},
                {time:"02:42",lrc:"又走过风吹的冷冽"},
                {time:"02:49",lrc:"最后一盏灯熄灭"},
                {time:"02:56",lrc:"从回忆我慢慢穿越"},
                {time:"03:00",lrc:"在这寂寞的季节"},
                {time:"03:06",lrc:"还是寂寞的季节"},
                {time:"03:13",lrc:"一样寂寞的季节"}
     ]
        },
        {name:"Fighter",singer:"中岛美嘉",src:"zhongdaomeijia.jpg",
            geci:[
                {time:"00:00",lrc:"Fighter - 中岛美嘉&加藤美穂"},
                {time:"00:01",lrc:"I CAN BE MUCH STRONGER"},
                {time:"00:04",lrc:""},
                {time:"00:06",lrc:"CAUSE I CAN FEEL YOU"},
                {time:"00:07",lrc:"WHEREVER YOU ARE"},
                {time:"00:08",lrc:""},
                {time:"00:26",lrc:"Now I know いつも二人そばに"},
                {time:"00:34",lrc:""},
                {time:"00:35",lrc:"だけど见えない"},
                {time:"00:39",lrc:"燃える瞳"},
                {time:"00:43",lrc:""},
                {time:"00:44",lrc:"君が立っている"},
                {time:"00:48",lrc:"まさにそこで始まる"},
                {time:"00:53",lrc:"夸り高き戦士の"},
                {time:"00:57",lrc:"触れられないほどの热さが"},
                {time:"01:02",lrc:"You're the one that I live for"},
                {time:"01:05",lrc:""},
                {time:"01:06",lrc:"君はとても孤独な Fighter"},
                {time:"01:10",lrc:"いつまでもそばにいて"},
                {time:"01:14",lrc:"だけど君はそうしてくれない"},
                {time:"01:28",lrc:"You're the one that I live for"},
                {time:"01:31",lrc:"君は Fighter Fighter"},
                {time:"01:35",lrc:"Fighter Fighter"},
                {time:"01:38",lrc:"That sounds like our love story"},
                {time:"01:40",lrc:"That sounds like our love story"},
                {time:"01:42",lrc:"That sounds like our love story"},
                {time:"01:45",lrc:"That sounds like…I feel like"},
                {time:"01:47",lrc:"That sounds like our love story"},
                {time:"01:49",lrc:"That sounds like our love story"},
                {time:"01:51",lrc:"That sounds like our love story"},
                {time:"01:54",lrc:""},
                {time:"01:55",lrc:"I miss you I wanna hold you"},
                {time:"01:58",lrc:"恋しくて 眠れぬ夜は"},
                {time:"02:00",lrc:"Upside down 君との kiss"},
                {time:"02:02",lrc:"思い出す 窓の外眺め"},
                {time:"02:05",lrc:"t's the only way to fly"},
                {time:"02:06",lrc:"high and I"},
                {time:"02:07",lrc:"悲しくても泣かない Cause I"},
                {time:"02:09",lrc:"赤い糸繋ぐ One & Only It's you"},
                {time:"02:13",lrc:""},
                {time:"02:14",lrc:"见送る背中"},
                {time:"02:17",lrc:"私の心は泣いてる"},
                {time:"02:22",lrc:"でも笑顔で君は帰ってくる"},
                {time:"02:26",lrc:"信じて 爱する君についていく"},
                {time:"02:31",lrc:"You're the one that I live for"},
                {time:"02:34",lrc:"君はとても勇敢な Fighter"},
                {time:"02:39",lrc:"全力で走っても"},
                {time:"02:43",lrc:"振り向けば追ってくる魂"},
                {time:"02:49",lrc:"いばらの道を裸足で进む"},
                {time:"02:53",lrc:"どんな试练も受けて立つ"},
                {time:"02:57",lrc:"You're the one that I live for"},
                {time:"03:00",lrc:"So Lonely Fighter Fighter"},
                {time:"03:03",lrc:"Fighter Fighter"},
                {time:"03:06",lrc:""},
                {time:"03:08",lrc:"Where are you from?"},
                {time:"03:09",lrc:"Where do you go?"},
                {time:"03:11",lrc:"Please take me with you"},
                {time:"03:14",lrc:"somewhere"},
                {time:"03:16",lrc:"Just be yourself I can't deny"},
                {time:"03:21",lrc:"たまに苦しくなる そんな时は"},
                {time:"03:27",lrc:"私のこと思い出して"},
                {time:"03:32",lrc:"ただこんなに君を强く"},
                {time:"03:36",lrc:"想ってる I love you more"},
                {time:"03:42",lrc:"You're the one that I live for"},
                {time:"03:45",lrc:"君はとても孤独な Fighter"},
                {time:"03:50",lrc:"君が君であるため"},
                {time:"03:54",lrc:"今日も戦い続けてる"},
                {time:"04:00",lrc:"壊れそうでも 踬いてでも"},
                {time:"04:04",lrc:"君は必ず见つけ出す"},
                {time:"04:09",lrc:"You're the one that I live for"},
                {time:"04:11",lrc:"君は Fighter Fighter"},
                {time:"04:15",lrc:"Fighter Fighter"},
                {time:"04:17",lrc:""}
     ]
        },
        {name:"一路向北",singer:"周杰伦",src:"zhoujielun.jpg",
            geci:[
                {time:'00:00',lrc:'一路向北'},
                {time:'00:04',lrc:'曲:周杰伦 词:方文山 编曲:蔡科俊'},
                {time:'00:07',lrc:''},
                {time:'00:34',lrc:'后视镜里的世界 越来越远的道别'},
                {time:'00:47',lrc:'你转身向背 侧脸还是很美'},
                {time:'00:53',lrc:'我用眼光去追 竟听见你的泪'},
                {time:'01:03',lrc:'在车窗外面排徊 是我错失的机会'},
                {time:'01:16',lrc:'你站的方位 跟我中间隔着泪'},
                {time:'01:21',lrc:'街景一直在后退 你的崩溃在窗外零碎'},
                {time:'01:30',lrc:'我一路向北 离开有你的季节'},
                {time:'01:37',lrc:'你说你好累 已无法再爱上谁'},
                {time:'01:44',lrc:'风在山路吹 过往的画面全都是我不对'},
                {time:'01:52',lrc:'细数惭愧 我伤你几回'},

                {time:'02:19',lrc:'后视镜里的世界 越来越远的道别'},
                {time:'02:31',lrc:'你转身向背 侧脸还是很美'},
                {time:'02:37',lrc:'我用眼光去追 竟听见你的泪'},
                {time:'02:47',lrc:'在车窗外面排徊 是我错失的机会'},
                {time:'02:59',lrc:'你站的方位 跟我中间隔着泪'},
                {time:'03:05',lrc:'街景一直在后退 你的崩溃在窗外零碎'},
                {time:'03:13',lrc:'我一路向北 离开有你的季节'},
                {time:'03:21',lrc:'你说你好累 已无法再爱上谁'},
                {time:'03:28',lrc:'风在山路吹 过往的画面全都是我不对'},
                {time:'03:36',lrc:'细数惭愧 我伤你几回'},
                {time:'03:41',lrc:'我一路向北 离开有你的季节'},
                {time:'03:48',lrc:'方向盘周围 回转着我的后悔'},
                {time:'03:56',lrc:'我加速超越 却甩不掉紧紧跟随的伤悲'},
                {time:'04:04',lrc:'细数惭愧 我伤你几回'},
                {time:'04:12',lrc:'停止狼狈 就让错纯粹'},
                {time:'04:20',lrc:''}
            ]

        },
        {name:"演员",singer:"薛之谦",src:"xuezhiqian.jpg",
            geci:[
                {time:"00:00",lrc:"演员 - 薛之谦"},
                {time:"00:08",lrc:"词曲：薛之谦"},
                {time:"00:21",lrc:"简单点说话的方式简单点"},
                {time:"00:30",lrc:"递进的情绪请省略"},
                {time:"00:33",lrc:"你又不是个演员"},
                {time:"00:36",lrc:"别设计那些情节"},
                {time:"00:41",lrc:"没意见我只想看看你怎么圆"},
                {time:"00:51",lrc:"你难过的太表面 像没天赋的演员"},
                {time:"00:57",lrc:"观众一眼能看见"},
                {time:"01:02",lrc:"该配合你演出的我演视而不见"},
                {time:"01:07",lrc:"在逼一个最爱你的人即兴表演"},
                {time:"01:12",lrc:"什么时候我们开始收起了底线"},
                {time:"01:18",lrc:"顺应时代的改变看那些拙劣的表演"},
                {time:"01:23",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"01:28",lrc:"我该变成什么样子才能延缓厌倦"},
                {time:"01:33",lrc:"原来当爱放下防备后的这些那些"},
                {time:"01:39",lrc:"才是考验"},
                {time:"01:44",lrc:"没意见你想怎样我都随便"},
                {time:"01:54",lrc:"你演技也有限"},
                {time:"01:57",lrc:"又不用说感言"},
                {time:"02:00",lrc:"分开就平淡些"},
                {time:"02:05",lrc:"该配合你演出的我演视而不见"},
                {time:"02:10",lrc:"别逼一个最爱你的人即兴表演"},
                {time:"02:15",lrc:"什么时候我们开始没有了底线"},
                {time:"02:21",lrc:"顺着别人的谎言被动就不显得可怜"},
                {time:"02:26",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"02:31",lrc:"我该变成什么样子才能配合出演"},
                {time:"02:36",lrc:"原来当爱放下防备后的这些那些"},
                {time:"02:41",lrc:"都有个期限"},
                {time:"02:47",lrc:"其实台下的观众就我一个"},
                {time:"02:53",lrc:"其实我也看出你有点不舍"},
                {time:"02:58",lrc:"场景也习惯我们来回拉扯"},
                {time:"03:02",lrc:"还计较着什么"},
                {time:"03:08",lrc:"其实说分不开的也不见得"},
                {time:"03:14",lrc:"其实感情最怕的就是拖着"},
                {time:"03:19",lrc:"越演到重场戏越哭不出了"},
                {time:"03:24",lrc:"是否还值得"},
                {time:"03:29",lrc:"该配合你演出的我尽力在表演"},
                {time:"03:34",lrc:"像情感节目里的嘉宾任人挑选"},
                {time:"03:39",lrc:"如果还能看出我有爱你的那面"},
                {time:"03:44",lrc:"请剪掉那些情节让我看上去体面"},
                {time:"03:50",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"03:55",lrc:"不在意的样子是我最后的表演"},
                {time:"04:01",lrc:"是因为爱你我才选择表演这种成全"},
            ]
        },
        {name:"化身孤岛的鲸",singer:"不才",src:"bucai.jpg",
            geci:[
                {time:'00:01',lrc:'【化身孤岛的鲸】'},
                {time:'00:03',lrc:''},
                {time:'00:05',lrc:'曲：我们都被忘了'},
                {time:'00:10',lrc:'词：沃特艾文儿'},
                {time:'00:27',lrc:'我是只化身孤岛的蓝鲸'},
                {time:'00:30',lrc:'有着最巨大的身影'},
                {time:'00:34',lrc:'鱼虾在身侧穿行'},
                {time:'00:38',lrc:'也有飞鸟在背上停'},
                {time:'00:42',lrc:''},
                {time:'00:43',lrc:'我路过太多太美的奇景'},
                {time:'00:46',lrc:'如同伊甸般的仙境'},
                {time:'00:51',lrc:'而大海太平太静'},
                {time:'00:55',lrc:'多少故事无人倾听'},
                {time:'00:59',lrc:''},
                {time:'00:59',lrc:'我爱地中海的天晴'},
                {time:'01:03',lrc:'爱西伯利亚的雪景'},
                {time:'01:07',lrc:'爱万丈高空的鹰'},
                {time:'01:09',lrc:'爱肚皮下的藻荇'},
                {time:'01:12',lrc:'我在尽心尽力地多情'},
                {time:'01:15',lrc:'直到那一天'},
                {time:'01:20',lrc:'你的衣衫破旧'},
                {time:'01:22',lrc:'而歌声却温柔'},
                {time:'01:24',lrc:'陪我漫无目地四处漂流'},
                {time:'01:28',lrc:'我的背脊如荒丘'},
                {time:'01:30',lrc:'而你却微笑摆首'},
                {time:'01:33',lrc:'把它当成整个宇宙'},
                {time:'01:37',lrc:'你与太阳挥手'},
                {time:'01:39',lrc:'也同海鸥问候'},
                {time:'01:41',lrc:'陪我爱天爱地四处风流'},
                {time:'01:45',lrc:'只是遗憾你终究'},
                {time:'01:47',lrc:'无法躺在我胸口'},
                {time:'01:50',lrc:'欣赏夜空最辽阔的不朽'},
                {time:'01:53',lrc:'把星子放入眸'},
                {time:'02:03',lrc:'我是只化身孤岛的蓝鲸'},
                {time:'02:06',lrc:'有着最巨大的身影'},
                {time:'02:11',lrc:'鱼虾在身侧穿行'},
                {time:'02:15',lrc:'也有飞鸟在背上停'},
                {time:'02:20',lrc:'我有着太冷太清的天性'},
                {time:'02:23',lrc:'对天上的她动过情'},
                {time:'02:28',lrc:'而云朵太远太轻'},
                {time:'02:32',lrc:'辗转之后各安天命'},
                {time:'02:36',lrc:'我未入过繁华之境'},
                {time:'02:40',lrc:'未听过喧嚣的声音'},
                {time:'02:44',lrc:'未见过太多生灵'},
                {time:'02:46',lrc:'未有过滚烫心情'},
                {time:'02:49',lrc:'所以也未觉大洋正中'},
                {time:'02:52',lrc:'有多么安静'},
                {time:'02:56',lrc:'你的衣衫破旧'},
                {time:'02:59',lrc:'而歌声却温柔'},
                {time:'03:01',lrc:'陪我漫无目地四处漂流'},
                {time:'03:05',lrc:'我的背脊如荒丘'},
                {time:'03:07',lrc:'而你却微笑摆首'},
                {time:'03:10',lrc:'把它当成整个宇宙'},
                {time:'03:13',lrc:'你与太阳挥手'},
                {time:'03:15',lrc:'也同海鸥问候'},
                {time:'03:18',lrc:'陪我爱天爱地四处风流'},
                {time:'03:22',lrc:'只是遗憾你终究'},
                {time:'03:24',lrc:'无法躺在我胸口'},
                {time:'03:26',lrc:'欣赏夜空最辽阔的不朽'},
                {time:'03:30',lrc:'把星子放入眸'},
                {time:'03:34',lrc:'你的指尖轻柔'},
                {time:'03:37',lrc:'抚摸过我所有'},
                {time:'03:39',lrc:'风浪冲撞出的丑陋疮口'},
                {time:'03:43',lrc:'你眼中有春与秋'},
                {time:'03:45',lrc:'胜过我见过爱过'},
                {time:'03:48',lrc:'的一切山川与河流'},
                {time:'03:51',lrc:'曾以为我肩头'},
                {time:'03:53',lrc:'是那么的宽厚'},
                {time:'03:55',lrc:'足够撑起海底那座琼楼'},
                {time:'03:59',lrc:'而在你到来之后'},
                {time:'04:02',lrc:'它显得如此清瘦'},
                {time:'04:04',lrc:'我想给你能奔跑的岸头'},
                {time:'04:08',lrc:'让你如同王后'},
                {time:'04:12',lrc:''}
            ]

        },
        {name:"走着走着就散了",singer:"庄心妍",src:"zhuangxinyan.jpg",
            geci:[
                {time:'00:00',lrc:'走着走着就散了'},
                {time:'00:03',lrc:'词曲：萧全'},
                {time:'00:06',lrc:'编曲：萧全'},
                {time:'00:09',lrc:'演唱：庄心妍'},
                {time:'00:39',lrc:'习惯人群中找你的影子 回想那些幸福的日子'},
                {time:'00:47',lrc:'但其实我明白 我和从前的我'},
                {time:'00:51',lrc:'已经分开很远很远'},
                {time:'00:56',lrc:'寂寞世界中的两颗心 寂寞城市中的每个人'},
                {time:'01:05',lrc:'我们相遇相拥 相互猜测怀疑'},
                {time:'01:09',lrc:'一边微笑一边流泪'},
                {time:'01:13',lrc:'那些激情后的陌生 被利用的信任'},
                {time:'01:17',lrc:'累觉不爱的心 任性错过的人'},
                {time:'01:23',lrc:'伤痕累累才懂 认真我就输了'},
                {time:'01:29',lrc:'有些人走着走着就散了'},
                {time:'01:34',lrc:'有些事看着看着就淡了'},
                {time:'01:39',lrc:'有多少无人能懂的不快乐'},
                {time:'01:42',lrc:'就有多少无能为力的不舍'},
                {time:'01:47',lrc:'有些人想着想着就忘了'},
                {time:'01:51',lrc:'有些梦做着做着就醒了'},
                {time:'01:56',lrc:'才发现从前是我太天真'},
                {time:'02:00',lrc:'现实又那么残忍'},
                {time:'02:41',lrc:'寂寞世界中的两颗心 寂寞城市中的每个人'},
                {time:'02:50',lrc:'我们相遇相拥 相互猜测怀疑'},
                {time:'02:54',lrc:'一边微笑一边流泪'},
                {time:'02:57',lrc:'那些激情后的陌生 被利用的信任'},
                {time:'03:02',lrc:'累觉不爱的心 任性错过的人'},
                {time:'03:07',lrc:'伤痕累累才懂 认真我就输了'},
                {time:'03:14',lrc:'有些人走着走着就散了'},
                {time:'03:19',lrc:'有些事看着看着就淡了'},
                {time:'03:23',lrc:'有多少无人能懂的不快乐'},
                {time:'03:27',lrc:'就有多少无能为力的不舍'},
                {time:'03:32',lrc:'有些人想着想着就忘了'},
                {time:'03:36',lrc:'有些梦做着做着就醒了'},
                {time:'03:41',lrc:'才发现从前是我太天真'},
                {time:'03:44',lrc:'现实又那么残忍'},
                {time:'03:49',lrc:'有些人想着想着就忘了'},
                {time:'03:53',lrc:'有些梦做着做着就醒了'},
                {time:'03:58',lrc:'才发现从前是我太天真'},
                {time:'04:02',lrc:'现实却那么残忍'}
            ]

        }
    ]
     //歌词
     function makeGeci() {
         var lrc=lists[index].geci;
         if(!lrc){
             $('.gecilist').html("")
             $('<li>').text("暂无歌词").appendTo('.gecilist')
         }else{
             $(lrc).each(function(i,v){
                 if(lrc[i].time==minitues(audio.currentTime)){
                     $('.gecilist').html("")
                     for(var a=i;a<lrc.length;a++){
                         $('<li>').text(lrc[a].lrc).appendTo('.gecilist')
                     }
                 }
             })
         }
     }
     makeGeci();
    $('.zhuan').css('background','url("image/'+lists[0].src+'") no-repeat center center/cover')
     $('.imgs').get(0).src='image/'+lists[0].src
     //歌曲播放
    bofang.on('click',function(){
        if(audio.paused){
            audio.play();
            $('.bo1').css({"display":"none"});
            $('.bo2').css({"display":"block"});

        }else{
            audio.pause();
            $('.bo1').css({"display":"block"});
            $('.bo2').css({"display":"none"});

        };
    })
     $(audio).on('play',function(){
         $('.bofang').css({})
     })
     //进度条点击事件
    $('.jindutiao').on('click',function(e){//进度条点击事件，事件源
        var lefts=e.offsetX;  //获取点击源left值
        var widths=$('.jindutiao').width(); //获取进度条的总长
        audio.currentTime=audio.duration*(lefts/widths);//当前的音频播放时间就等于总时长乘以left除以宽
    })
     $('.yuan').on('click',false);
     //音量条点击事件
     $('.yinliangtiao').on("click",function(e){
         var left=e.offsetX;
         var width=$('.yinliangtiao').width();
         audio.volume=left/width;
     });
     //当音量发生改变的时候
     audio.onvolumechange=function () {
         $('.yinliangtiao .yuan').css({"left":audio.volume*$('.yinliangtiao').width()-$('.yinliangtiao .yuan').width()/2});

     }
     //当歌曲播放时执行的函数
     audio.ontimeupdate=function(){  //当歌曲播放时执行的函数  发生的事情
         makeGeci();
         $('.jindutiao .yuan').css("left",$('.jindutiao').width()*(audio.currentTime/audio.duration)-$('.jindutiao .yuan').width()/2);
         // console.log($('.jindutiao').width()*(audio.currentTime/audio.duration)-$('.jindutiao .yuan').width()/2)
         $('.jins').css("width",$('.jindutiao').width()*(audio.currentTime/audio.duration)-$('.jindutiao .yuan').width()/2)
         // console.log($('.jins').width())
         //设置yuan的left值=进度条的宽*当前时长除以总时长   就相当于是一个百分比*进度条的width。就相当于是点击到你的音乐走到哪的时候，元的位置
         $('.f').text(minitues(audio.currentTime)); //调用minitues函数，将audio当前比放时间  和总时长传入到对应的f m 的值
         $('.m').text(minitues(audio.duration));
     };
    $('.m').text(lists[0].time);//默认m的事件是list数组的第一个值，就是第一首歌的时间，
     //音量静音点击事件
    $('.menu').on('click',function(){
        if($(this).attr("pre")){ //如果他有这个属性就让audio的音量=这个属性的值
            audio.volume=$(this).attr("pre");
            // audio.currentTime=audio.duration*(audio.volume/1)// ?????????????点击静音的时候当前音频的时长
            $(this).attr("pre",""); //然后清空
            $('.m2').css({"display":"none"})
            $('.m1').css({"display":"block"})
        }else{
            $(this).attr("pre",audio.volume);// 属性的值就是audio的音量
            audio.volume=0;// 让他等于0
            $('.m1').css({"display":"none"})
            $('.m2').css({"display":"block"})
        }
    })
     //转换函数（数字转为时间）
    function minitues(shuzhi){
        var fenzhong=Math.floor(shuzhi/60);//把传进来的数字变成00：00的形式，现在得到的是前边的00
        if(fenzhong<10){
            fenzhong="0"+fenzhong;
        }
        var miao=Math.floor(shuzhi%60)
        if(miao<10){
            miao="0"+miao;
        }
        return fenzhong +":"+ miao;
    }
    //进度条拖拽
     $('.jindutiao .yuan').on('mousedown',function(e){
         $(document).on('mousemove','.jindutiao',function(e){
             // if(e.offsetX>$('.jindutiao').width()||e.offsetX<0){
             //     return;
             // }
            $('.jins').css("width",e.offsetX-$(".jindutiao .yuan").width())
             $('.jindutiao .yuan').css("left",e.offsetX-$(".jindutiao .yuan").width())
         })

     })
     $(document).on('mouseup',function(){
         $(document).off('mousemove','.jindutiao')
     })

 //右下列表
   $(lists).each(function(i,v){
       $('<li>').text(v.name)
           .appendTo('.lis')
   })
    $('.lis li').on('click',function(){
        $('.bo1').css({"display":"none"});
        $('.bo2').css({"display":"block"});
        makeGeci();
        $('.lis li').removeClass('color');
        $(this).addClass('color');
        audio.src="MP3/"+lists[$(this).index()].name+'.mp3';
        audio.play();
         h=$(this).index();
         index=h;
        $('.tables li' ).removeClass('active')
        $('.tables li').eq(h).addClass("active")
        $('.imgs').get(0).src="image/"+lists[h].src;
        $('.zhuan').css('background','url("image/'+lists[h].src+'") no-repeat center center/cover')
        console.log($('this').index())
    })
    $('.lis').on('click',false)
    var list=$('.list');
    list.on('click',function(){
       $('.lis').fadeToggle(700)
    })
  //上一首   下一首
    var s=$('.shangyishou');
    var x=$('.xiayishou');
    x.on('click',function(){
        index++;
        if(index==lists.length){
            index=0;
        }
        audio.src="MP3/"+lists[index].name+'.mp3';
        audio.play();
        $('.tables li').removeClass('active')
        $('.tables li').eq(index).addClass('active')
        $('.tables span').removeClass('active');
        $('.tables span').eq(index).addClass('active');
        $('.lis li').removeClass('color')
        $('.lis li').eq(index).addClass('color')
        $('.imgs').get(0).src="image/"+lists[index].src;
        $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover')
    })
    s.on('click',function(){
        index--;
        if(index<0){
            index=lists.length-1;
        }
        audio.src="MP3/"+lists[index].name+'.mp3';
        audio.play();
        $('.tables li').removeClass('active')
        $('.tables li').removeClass('active')
        $('.tables li').eq(index).addClass('active')
        $('.tables span').removeClass('active');
        $('.tables span').eq(index).addClass('active');
        $('.lis li').removeClass('color')
        $('.lis li').eq(index).addClass('color')
        $('.imgs').get(0).src="image/"+lists[index].src;
        $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover')
    })
   //歌曲长度
   $('.songs').text(lists.length).css({"textAlign":"center","lineHeight":"35px"})
    $('.order').on('click',function(){
        $('.shunxukuang').fadeToggle(700);
        $('.triangle').fadeToggle(700);
    })
     $('.middle').on('click',function(){
         $('.shunxukuang').css({"display":"none"})
         $('.triangle').css({"display":"none"})
         $('.lis').css({"display":"none"})
     })

    // $('.shunxukuang').on('click',false)
   $('.single-play').on('click',function(){
       $(".shunxukuang li").removeClass('active');
       $('.order').css("background","url('image/33.png')no-repeat center center/30px 30px");
       $(this).addClass('active');
       audio.onended=function () {
           return;
       }
   })
    $('.single-cycle').on('click',function(){
        $(".shunxukuang li").removeClass('active');
        $('.order').css("background","url('image/34.png')no-repeat center center/25px 25px");
        $(this).addClass('active');
        audio.onended=function () {
            audio.play();
        }
    })
    $('.order-of-play').on('click',function(){
        $('.order').css("background","url('image/35.png')no-repeat center center/30px 30px");
        // $(".shunxukuang li").eq(index-1).removeClass('active');
        // $(this).eq(index).addClass('active');

        audio.onended=function(){
            index++;
            if(index==lists.length){
                return
            }
            audio.src="MP3/"+lists[index].name+'.mp3';
            audio.play();
            $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover')
            $('.tables li').eq(index-1).removeClass('active')
            $('.tables li').eq(index).addClass('active')
            $('.tables span').eq(index-1).removeClass('active');
            $('.tables span').eq(index).addClass('active');
            $('.lis li').removeClass('color')
            $('.lis li').eq(index).addClass('color')
        }
        $('.imgs').get(0).src="image/"+lists[index].src;

    })
    $('.list-of-circulation').on('click',function(){
        $('.order').css("background","url('image/36.png')no-repeat center center/30px 30px");
        audio.onended=function(){
            index++;
            if(index==lists.length){
                index=0;
            }
            audio.src="MP3/"+lists[index].name+'.mp3';
            audio.play();
            $('.tables li').eq(index-1).removeClass('active')
            $('.tables li').eq(index).addClass('active')
            $('.tables span').eq(index-1).removeClass('active');
            $('.tables span').eq(index).addClass('active');
            $('.lis li').removeClass('color')
            $('.lis li').eq(index).addClass('color')
            $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover')
        }
        $('.imgs').get(0).src="image/"+lists[index].src;
    })
    $('.random-play').on('click',function(){
        $('.order').css("background","url('image/37.png')no-repeat center center/25px 25px");
        audio.onended=function(){
            var b=Math.floor(Math.random()*lists.length);
            console.log(b)
            index=b;
            audio.src="MP3/"+lists[index].name+'.mp3';
            audio.play();
            $('.tables li').removeClass('active')
            $('.tables li').eq(index).addClass('active')
            $('.tables span').removeClass('active');
            $('.tables span').eq(index).addClass('active');
            $('.lis li').removeClass('color')
            $('.lis li').eq(index).addClass('color')
            $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover')
        }
        $('.imgs').get(0).src="image/"+lists[index].src;
    })
    //左列
     $(lists).each(function(i,v){
        if(index==i){
            $('<li id="'+i+'"><div class="jia">+</div>'+v.name+'<div class="tubiao"><div class="tu1"></div><div class="tu2"></div><div class="tu3"></div></div><span>'+v.singer+'</span></li>')
                .appendTo('.tables')
                .addClass('active')
                .on('click',function(){
                    audio.src="MP3/"+lists[$(this).index()].name+'.mp3';
                    audio.play();
                    index=i;
                    $('.tables li' ).removeClass('active')
                    $(this).addClass("active")
                    $('.tables span').removeClass('active');
                    $('.tables span').eq(index).addClass('active');
                    $('.imgs').get(0).src="image/"+lists[index].src;
                    $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover');
                    $('.lis li').removeClass('color')
                    $('.lis li').eq(index).addClass('color')
                    $('.bo1').css({"display":"none"});
                    $('.bo2').css({"display":"block"});
                })
                .on('mouseenter',function(){
                    $('.table li,.table span').removeClass('hover');
                    $('.table span').eq(i).addClass('hover');
                    $(this).addClass('hover');
                    $(this).find('.tubiao').show(200);
                    $('.jia').eq(i).css("display","block")
                })
                .on('mouseleave',function(){
                    $('.table li,.table span').removeClass('hover');
                    $(this).find('.tubiao').hide(200);
                    $('.jia').eq(i).css("display","none")
                })

        }else{
            $('<li id="'+i+'"><div class="jia">+</div>'+v.name+'<div class="tubiao"><div class="tu1"></div><div class="tu2"></div><div class="tu3"></div></div><span>'+v.singer+'</span></li>')
                .appendTo('.tables')
                .on('click',function(){
                    audio.src="MP3/"+lists[$(this).index()].name+'.mp3';
                    audio.play();
                    index=i;
                    $('.tables li' ).removeClass('active')
                    $(this).addClass("active")
                    $('.tables span').removeClass('active');
                    $('.tables span').eq(index).addClass('active');
                    $('.imgs').get(0).src="image/"+lists[index].src;
                    $('.zhuan').css('background','url("image/'+lists[index].src+'") no-repeat center center/cover');
                    $('.lis li').removeClass('color')
                    $('.lis li').eq(index).addClass('color')
                    // $(this).find('.tubiao').on('click',false);

                })
                .on('mouseenter',function(){
                    $('.table li,.table span').removeClass('hover');
                    $('.table span').eq(i).addClass('hover');
                    $(this).addClass('hover');
                    $(this).find('.tubiao').show(200);
                    $('.jia').eq(i).css("display","block")

                })
                .on('mouseleave',function(){
                    $('.table li,.table span').removeClass('hover');
                    $(this).find('.tubiao').hide(200);
                    $('.jia').eq(i).css("display","none")
        })
        }
    })

     $('.tu1').on('click',function () {
         $(this).css("background","url('image/loved.png')no-repeat center center/25px 25px");
             // $('.tables li').eq($(this).parent().index()).appendTo('.bendis');
     })

     //删除歌曲
     col=lists
     $('.tu2').on('click',function(){
         var b=$(this).parent().attr('id');
         col=lists.splice(b,1);
         $('.tables').empty();
         $(lists).each(function(i,v){
             if(index==i){
                 $('<li id="'+i+'"><div class="jia">+</div>'+v.name+'<div class="tubiao"><div class="tu1"></div><div class="tu2"></div><div class="tu3"></div></div><span>'+v.singer+'</span></li>')
                     .appendTo('.tables')
                     .addClass('active')
                     .on('click',function(){
                         audio.src="MP3/"+lists[i].name+'.mp3';
                         audio.play();
                         index=i;
                         $('.tables li' ).removeClass('active')
                         $(this).addClass("active")
                         $('.tables span').removeClass('active');
                         $('.tables span').eq(index).addClass('active');
                         $('.imgs').get(0).src="image/"+lists[i].src;

                     })
                     .on('mouseenter',function(){
                         $('.table li,.table span').removeClass('hover');
                         $('.table span').eq(i).addClass('hover');
                         $(this).addClass('hover');
                         $(this).find('.tubiao').show();
                     })
                     .on('mouseleave',function(){
                         $('.table li,.table span').removeClass('hover');
                         $(this).find('.tubiao').hide();
                     })

             }else{
                 $('<li id="'+i+'"><div class="jia">+</div>'+v.name+'<div class="tubiao"><div class="tu1"></div><div class="tu2"></div><div class="tu3"></div></div><span>'+v.singer+'</span></li>')
                     .appendTo('.tables')
                     .on('click',function(){
                         audio.src="MP3/"+lists[i].name+'.mp3';
                         audio.play();
                         index=i;
                         $('.tables li' ).removeClass('active')
                         $(this).addClass("active")
                         $('.tables span').removeClass('active');
                         $('.tables span').eq(index).addClass('active');
                         // $(this).find('.tubiao').on('click',false);
                         $('.imgs').get(0).src="image/"+lists[i].src;
                         console.log(1)
                     })
                     .on('mouseenter',function(){
                         $('.table li,.table span').removeClass('hover');
                         $('.table span').eq(i).addClass('hover');
                         $(this).addClass('hover');
                         $(this).find('.tubiao').show();
                     })
                     .on('mouseleave',function(){
                         $('.table li,.table span').removeClass('hover');
                         $(this).find('.tubiao').hide();
                     })
             }
         })
     })
     $('.xuanxiang ul').eq(0).css({"display":"block"});
  $('.gequtiao .zhaopian').each(function(i,v){
      $(this).index=i
      $(this).on('click',function(){
          $('.xuanxiang ul').each(function(a,b){
            $('.xuanxiang ul').css({"display":"none"})
          })
          $('.xuanxiang ul').eq(i).css({"display":"block"})
      })
  })
var guan=false;
 $('.skin').on('click',function(){
     // $('.skins').css("display","block")
     var ol=$('#l1').get(0)
     if(guan){
         ol.href='css/index.css'
     }else{
         ol.href='css/index1.css'
     }
guan=!guan;
 })
$('.downs').on('click',function(){
    $('.big').css("display","none")
    audio.pause();
})
$('.small').on('click',function(){
   $('.big').addClass('active')
})
$('.top-left') .on('click',function(){
    $('.big').removeClass('active')
})
 })