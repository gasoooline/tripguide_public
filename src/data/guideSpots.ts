import { GuideItem } from '../types';

/** 极光拍摄参数 + 冰岛 / 罗弗敦拍照机位，来自机位手册单文件版。 */
export const GUIDE_SPOT_ITEMS: GuideItem[] = [
  {
    id: "spot-aur-iphone",
    category: 'aurora',
    country: "both",
    title: "iPhone 拍极光参数",
    shortDesc: "夜景拉到 30 秒、关 Live、上三脚架，爆发时先竖屏连拍。",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["极光","iPhone","夜景模式"],
    location: "冰岛 / 罗弗敦极光机位",
    bookingNeeded: 'no',
    costRange: "自备三脚架",
    coverImage: "",
    gallery: [

    ],
    mapQuery: "",
    coordinates: "",
    details: [
      {
        sectionTitle: "机身设置",
        items: [
          "iPhone 12 起原相机支持夜景；15 Pro / Pro Max 可开 ProRAW。",
          "模式：原相机 · 夜景 Night Mode，低光下图标变黄。",
          "曝光 10–30 秒，快门滑条拉到 **30s 最大**，必须上三脚架。",
          "关闭 Live Photo 和闪光灯。",
          "设置 → 相机 → 格式 → 打开 ProRAW。",
          "手动对焦锁远方山峰，夜里自动对焦常失败。"
        ]
      },
      {
        sectionTitle: "实操",
        items: [
          "手持夜景最长 3 秒，糊率高；备蓝牙快门线避免按屏幕抖动。",
          "极光爆发先竖屏连拍 3 秒抓形态，再上架 30 秒长曝拍细节。"
        ]
      }
    ],
    quickChecklist: ["关 Live / 关闪光","三脚架 + 快门线","夜景拉到 30 秒"]
  },
  {
    id: "spot-aur-pocket",
    category: 'aurora',
    country: "both",
    title: "Pocket 3 拍极光参数",
    shortDesc: "自定义延时、间隔改成 5 秒，白平衡锁 3500–4000K。",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["极光","Pocket 3","延时"],
    location: "冰岛 / 罗弗敦极光机位",
    bookingNeeded: 'no',
    costRange: "自备三脚架",
    coverImage: "",
    gallery: [

    ],
    mapQuery: "",
    coordinates: "",
    details: [
      {
        sectionTitle: "参数",
        items: [
          "模式：延时摄影 · **自定义**，不要用普通视频。",
          "ISO 1600–3200：极光弱用 3200，强时降到 1600 减噪。",
          "快门 1–2 秒：跳动明显用 1 秒，静态可 2 秒。",
          "间隔必须改成 **5 秒**——屏幕默认 5 分钟是坑。",
          "白平衡手动 3500–4000K，自动会把绿光洗掉。",
          "格式 D-Log M，后期宽容度大。"
        ]
      },
      {
        sectionTitle: "时长",
        items: [
          "要出 5 秒视频（120 帧）× 5 秒间隔 ≈ 拍 10 分钟。",
          "延时导出后可用剪映转 Live Photo。"
        ]
      }
    ],
    quickChecklist: ["间隔改成 5 秒","白平衡锁 3500–4000K","上三脚架拍延时"]
  },
  {
    id: "spot-aur-action",
    category: 'aurora',
    country: "both",
    title: "Action 4 / 5 拍极光参数",
    shortDesc: "懒人流四步 auto 照做出片，手动流关 EIS 控噪；电池贴暖宝宝。",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["极光","Action","抗冻","懒人流"],
    location: "冰岛 / 罗弗敦极光机位",
    bookingNeeded: 'no',
    costRange: "自备三脚架",
    coverImage: "",
    gallery: [

    ],
    mapQuery: "",
    coordinates: "",
    details: [
      {
        sectionTitle: "⚡ 懒人流 · 小红书博主 Sam 实测（2026 元旦雷克雅未克极光爆发当晚，Action 5）",
        items: [
          "1. 左下角模式切换选 **「静止延时」**。",
          "2. 进设置打开 **Pro 模式**。",
          "3. 曝光设 **AUTO 自动挡**，数值（EV）**拉到最大**。",
          "4. 回主页面，点**正下方设置**，把静止延时的时长选 **「日出日落」** 档，开拍就完事。"
        ]
      },
      {
        sectionTitle: "什么时候用哪套",
        items: [
          "爆发当晚人冷手抖、不想折腾参数 → **懒人流**，auto 兜底稳出片。",
          "极光弱 / 想压噪点拍形态 → 用下面**手动流**精细控。",
          "两条是不同路径：「静止延时 + 日出日落档」≠ Starlapse，别混着设。"
        ]
      },
      {
        sectionTitle: "🔧 手动流参数",
        items: [
          "模式：夜间延时 Starlapse / 手动 Pro；Action 5 Pro 有 Starlapse。",
          "ISO：Action 4 上限 800 更稳，Action 5 Pro 可到 3200。",
          "快门 2–8 秒，Action 5 可到 15/30 秒；越长噪点越少，需三脚架。",
          "间隔 3–5 秒，与快门错开避免重叠。",
          "关闭 EIS 防抖：长曝光下 EIS 会插帧模糊。",
          "关闭畸变校正：省算力，边缘不裁。"
        ]
      },
      {
        sectionTitle: "抗冻",
        items: [
          "官方标定 -20℃，罗弗敦 -10℃ 续航掉一半。",
          "暖宝宝贴电池仓外侧，延时开机 1 小时更稳。"
        ]
      }
    ],
    quickChecklist: ["懒人流：静止延时+Pro+EV 最大","时长选「日出日落」档","手动流关 EIS 和畸变校正","备暖宝宝贴电池仓"]
  },
  {
    id: "spot-aur-prep",
    category: 'aurora',
    country: "both",
    title: "极光行前准备与肉眼识别",
    shortDesc: "看 KP 和云图，白天锁无穷远，雾状白光用夜景拍一张验绿。",
    iconName: "Sparkles",
    urgency: "high",
    tags: ["极光","KP","vedur.is"],
    location: "冰岛 / 罗弗敦",
    bookingNeeded: 'no',
    costRange: "自备装备",
    coverImage: "",
    gallery: [

    ],
    mapQuery: "",
    coordinates: "",
    details: [
      {
        sectionTitle: "出发前",
        items: [
          "App：My Aurora Forecast / Aurora Now；KP≥3 有戏，≥5 大爆。",
          "云图：冰岛 vedur.is，挪威 yr.no；绿色越深云越厚。",
          "三脚架必备，风大要压重。",
          "-10℃ 电量掉 50%，备 2–3 块电池贴身保温。",
          "白天先手动对焦锁无穷远，胶带固定。",
          "严禁开闪光灯。"
        ]
      },
      {
        sectionTitle: "肉眼识别",
        items: [
          "初期极光常是白色雾状眩光 / 长条，容易当成云。",
          "掏出手机开夜景拍一张，出片是绿色就是它。"
        ]
      }
    ],
    quickChecklist: ["先看 KP 和云图","电池贴身保温","夜景拍一张验是不是绿"]
  },
  {
    id: "spot-is-10",
    category: 'photo',
    country: "iceland",
    title: "哈尔格林姆教堂 Hallgrímskirkja",
    shortDesc: "雷克雅未克地标，高 73 米，外立面仿玄武岩石柱（basalt columns）",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Hallgrímskirkja"],
    location: "Hallgrímskirkja / Skólavörðustígur",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/is-10-1.webp",
    gallery: [
      "/spots/is-10-1.webp",
      "/spots/is-10-2.webp",
      "/spots/is-10-3.webp"
    ],
    mapQuery: "Hallgrímskirkja / Skólavörðustígur",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "雷克雅未克地标，高 73 米，外立面仿**玄武岩石柱（basalt columns）**的阶梯造型，1937 年设计、1986 年建成。",
          "教堂本身免费进；",
          "**登塔观景台成人 1,400 ISK**、7–16 岁 200 ISK、7 岁以下免费，现场售票机购票**只收卡**。",
          "电梯上塔顶 360° 俯瞰全城彩色铁皮屋顶 + Faxa 湾 + Esja 山。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：Skólavörðustígur 购物街正对教堂拍全立面；",
          "教堂前广场的**秋千**是网红机位，面对教堂坐上去可同框；",
          "日落前一小时黄金时刻最美。",
          "周日弥撒期间塔楼关闭。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Hallgrímskirkja / Skólavörðustígur**",
          "https://www.google.com/maps/search/?api=1&query=Hallgr%C3%ADmskirkja%20%2F%20Sk%C3%B3lav%C3%B6r%C3%B0ust%C3%ADgur"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Hallgrímskirkja"
  },
  {
    id: "spot-is-1",
    category: 'photo',
    country: "iceland",
    title: "间歇泉 Geysir",
    shortDesc: "主喷发的是 Strokkur 间歇泉，约 5–8 分钟喷一次。别在泉口咕噜冒",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Geysir"],
    location: "Geysir（主喷泉是旁边的 Strokkur）",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/is-1-1.webp",
    gallery: [
      "/spots/is-1-1.webp",
      "/spots/is-1-2.webp",
      "/spots/is-1-3.webp"
    ],
    mapQuery: "Geysir（主喷泉是旁边的 Strokkur）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "主喷发的是 Strokkur 间歇泉，约 **5–8 分钟**喷一次。",
          "别在泉口咕噜冒泡时举机——那只是前奏；",
          "当泉眼水面开始出现**顺时针或逆时针的水漩涡**，下一秒必然喷发，此时再连拍。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：提前半按快门等漩涡，喷发瞬间连拍；",
          "硫磺味浓（煮鸡蛋味），风大冷，多穿。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Geysir（主喷泉是旁边的 Strokkur）**",
          "https://www.google.com/maps/search/?api=1&query=Geysir%EF%BC%88%E4%B8%BB%E5%96%B7%E6%B3%89%E6%98%AF%E6%97%81%E8%BE%B9%E7%9A%84%20Strokkur%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Geysir / Strokkur"
  },
  {
    id: "spot-is-2",
    category: 'photo',
    country: "iceland",
    title: "黄金瀑布 Gullfoss",
    shortDesc: "黄金圈核心瀑布，双层落差。沿木栈道往下走到正面观景平台，仰拍双层瀑布全貌；上",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Gullfoss"],
    location: "Gullfoss",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/is-2-1.webp",
    gallery: [
      "/spots/is-2-1.webp",
      "/spots/is-2-2.webp",
      "/spots/is-2-3.webp"
    ],
    mapQuery: "Gullfoss",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "黄金圈核心瀑布，双层落差。",
          "沿木栈道往下走到**正面观景平台**，仰拍双层瀑布全貌；",
          "上层平台可俯瞰全景。",
          "靠近瀑布水汽极大，相机套防雨罩、镜头备擦布。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：大逆光时瀑布常挂彩虹，清晨或傍晚光线更柔；",
          "风大务必双手扶稳三脚架。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Gullfoss**",
          "https://www.google.com/maps/search/?api=1&query=Gullfoss"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Gullfoss"
  },
  {
    id: "spot-is-3",
    category: 'photo',
    country: "iceland",
    title: "塞里雅兰瀑布 Seljalandsfoss",
    shortDesc: "全岛唯一可走到瀑布后面拍的瀑布，绕一圈约 20 分钟、有 6 个拍摄角度。要",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Seljalandsfoss"],
    location: "Seljalandsfoss",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-3-1.webp",
    gallery: [
      "/spots/is-3-1.webp",
      "/spots/is-3-2.webp"
    ],
    mapQuery: "Seljalandsfoss",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "全岛**唯一可走到瀑布后面**拍的瀑布，绕一圈约 20 分钟、有 6 个拍摄角度。",
          "要穿到瀑布正后方，**防水鞋 + 防水裤 + 硬壳冲锋衣**必备——水汽量等于淋雨；",
          "不拍背面则对防水要求低很多。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：瀑布背面逆光剪影 + 人像最出片，注意镜头起雾。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：1,000 ISK / 车，停车场旁缴费亭刷卡、或用 Parka App / 亭上二维码支付"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Seljalandsfoss**",
          "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：1,000 ISK / 车，停车场旁缴费亭刷卡、或","到点先确认停车再下车拍"],
    funFact: "英文检索名：Seljalandsfoss"
  },
  {
    id: "spot-is-4",
    category: 'photo',
    country: "iceland",
    title: "斯科加瀑布 Skógafoss",
    shortDesc: "最大亮点是爬到瀑布顶端俯瞰：阶梯看着远，实际 10 分钟到顶，人像和俯瞰都出",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Skógafoss"],
    location: "Skogafoss",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-4-1.webp",
    gallery: [
      "/spots/is-4-1.webp",
      "/spots/is-4-2.webp",
      "/spots/is-4-3.webp"
    ],
    mapQuery: "Skogafoss",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "最大亮点是**爬到瀑布顶端俯瞰**：阶梯看着远，实际 10 分钟到顶，人像和俯瞰都出片。",
          "水量充沛时靠近瀑布脚下必湿鞋，备**拖鞋**踩水过去。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：顶端往下俯拍 + 近处低机位仰拍双层落差；",
          "晴天常有彩虹。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：找尽量靠近大巴停车区的免费区域，少走点路"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Skogafoss**",
          "https://www.google.com/maps/search/?api=1&query=Skogafoss"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：找尽量靠近大巴停车区的免费区域，少走点路","到点先确认停车再下车拍"],
    funFact: "英文检索名：Skógafoss"
  },
  {
    id: "spot-is-5",
    category: 'photo',
    country: "iceland",
    title: "飞机残骸（新，塞里雅兰瀑布旁）",
    shortDesc: "这是新的残骸点，就在塞里雅兰瀑布旁边，开车直接到、步行约 3 分钟，",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","DC-3 Airplane wr"],
    location: "DC-3 Airplane wreck - Eyvindarholt - Iceland",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-5-1.webp",
    gallery: [
      "/spots/is-5-1.webp",
      "/spots/is-5-2.webp",
      "/spots/is-5-3.webp"
    ],
    mapQuery: "DC-3 Airplane wreck - Eyvindarholt - Iceland",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "这是**新**的残骸点，就在塞里雅兰瀑布旁边，**开车直接到、步行约 3 分钟**，比黑沙滩那个要徒步 4 km 的老残骸（Solheimasandur）方便得多。",
          "别把两者搞混。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：机头、机身侧面 + 荒原背景的末日感；",
          "避开正午硬光。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：需交停车费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**DC-3 Airplane wreck - Eyvindarholt - Iceland**",
          "https://www.google.com/maps/search/?api=1&query=DC-3%20Airplane%20wreck%20-%20Eyvindarholt%20-%20Iceland"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：需交停车费","到点先确认停车再下车拍"],
    funFact: "英文检索名：DC-3 Airplane wreck - Eyvindarholt"
  },
  {
    id: "spot-is-6",
    category: 'photo',
    country: "iceland",
    title: "黑沙滩 Reynisfjara",
    shortDesc: "经典机位，游客最多，往沙滩深处走人明显变少。黑沙 + 白色浪花 + 岸边玄武",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Reynisfjara Beac"],
    location: "Reynisfjara Beach / Reynisfjöru, Reynishverfisvegur, 871 Vík",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-6-1.webp",
    gallery: [
      "/spots/is-6-1.webp",
      "/spots/is-6-2.webp",
      "/spots/is-6-3.webp"
    ],
    mapQuery: "Reynisfjara Beach / Reynisfjöru, Reynishverfisvegur, 871 Vík",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "经典机位，游客最多，**往沙滩深处走人明显变少**。",
          "黑沙 + 白色浪花 + 岸边玄武岩柱群（Reynisdrangar 海蚀柱）同框。",
          "务必远离浪线，突发巨浪（sneaker wave）会把人卷走。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：蓝调时刻（日出前/日落后）拍黑白最出片；",
          "海风大，帽子会被吹飞，一小时就吹得头疼。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：1,000 ISK，机器缴费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Reynisfjara Beach / Reynisfjöru, Reynishverfisvegur, 871 Vík**",
          "https://www.google.com/maps/search/?api=1&query=Reynisfjara%20Beach%20%2F%20Reynisfj%C3%B6ru%2C%20Reynishverfisvegur%2C%20871%20V%C3%ADk"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：1,000 ISK，机器缴费","到点先确认停车再下车拍"],
    funFact: "英文检索名：Reynisfjara Beach"
  },
  {
    id: "spot-is-7",
    category: 'photo',
    country: "iceland",
    title: "维克红教堂 Víkurkirkja",
    shortDesc: "最佳机位在教堂后面山坡上的俯瞰点——教堂后方有一条小路，开车上去即可。这里能",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Vík i Myrdal Chu"],
    location: "Vík i Myrdal Church",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-7-1.webp",
    gallery: [
      "/spots/is-7-1.webp",
      "/spots/is-7-2.webp"
    ],
    mapQuery: "Vík i Myrdal Church",
    coordinates: "63.421824, -19.001358",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "最佳机位在**教堂后面山坡上的俯瞰点**——教堂后方有一条小路，开车上去即可。",
          "这里能把红顶教堂 + 黑沙滩 + 大西洋尽收眼底，晴天蓝天绿草、阴天薄雾各有味道；",
          "6–7 月山坡开鲁冰花，冬天能看极光。",
          "旁边墓地（Vík Cemetery）在日落 + 海面平流雾时极美。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：日出时段等一场红教堂晨光；",
          "教堂后方山坡有信号干扰，无人机可能无法拍摄。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：教堂停车场自愿捐助（非强制）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Vík i Myrdal Church**",
          "坐标：63.421824, -19.001358",
          "https://www.google.com/maps/search/?api=1&query=V%C3%ADk%20i%20Myrdal%20Church"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：教堂停车场自愿捐助（非强制）","到点先确认停车再下车拍"],
    funFact: "英文检索名：Vík i Myrdal Church"
  },
  {
    id: "spot-is-8",
    category: 'photo',
    country: "iceland",
    title: "迪霍拉里 Dyrhólaey",
    shortDesc: "开车上到山顶灯塔，绕灯塔走一圈可俯瞰西边黑沙滩全景、远观东边黑沙滩，还能看到",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Dyrhólaey"],
    location: "Dyrhólaey",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-8-1.webp",
    gallery: [
      "/spots/is-8-1.webp",
      "/spots/is-8-2.webp",
      "/spots/is-8-3.webp"
    ],
    mapQuery: "Dyrhólaey",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "开车上到山顶灯塔，**绕灯塔走一圈**可俯瞰西边黑沙滩全景、远观东边黑沙滩，还能看到海蚀拱洞。",
          "继续往东边沙滩方向有徒步路线。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：灯塔 + 海岸线全景；",
          "**有明显禁飞标识，不可飞无人机**。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：1,000 ISK，小亭子缴费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Dyrhólaey**",
          "https://www.google.com/maps/search/?api=1&query=Dyrh%C3%B3laey"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：1,000 ISK，小亭子缴费","到点先确认停车再下车拍"],
    funFact: "英文检索名：Dyrhólaey"
  },
  {
    id: "spot-is-9",
    category: 'photo',
    country: "iceland",
    title: "冰河湖 + 钻石沙滩 Jökulsárlón",
    shortDesc: "杰古沙龙冰河湖与钻石沙滩紧挨着。钻石沙滩的\"钻石\"是从冰川崩落、漂向大海后被冲上岸的",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Jökulsárlón Glac"],
    location: "Jökulsárlón / Diamond Beach（两者相邻，一起玩）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-9-1.webp",
    gallery: [
      "/spots/is-9-1.webp",
      "/spots/is-9-2.webp"
    ],
    mapQuery: "Jökulsárlón / Diamond Beach（两者相邻，一起玩）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "杰古沙龙冰河湖与钻石沙滩紧挨着。",
          "钻石沙滩的\"钻石\"是从冰川崩落、漂向大海后被冲上岸的冰块，散在黑色沙滩上——**用长焦贴近冰块、低机位**拍蓝冰通透质感最出片。",
          "冰河湖可坐**水陆两栖船**（约 30 分钟，5–10 月开放），从陆地直接开进湖里。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：冰块多寡随季节浮动（冬天更多更大）；",
          "蓝冰洞探险仅 11 月–次年 3 月安全，其他时段乱跟团有风险。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：乘船点旁有停车场 / 餐车 / 纪念品店 / 卫生间；推荐龙虾卷"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Jökulsárlón / Diamond Beach（两者相邻，一起玩）**",
          "https://www.google.com/maps/search/?api=1&query=J%C3%B6kuls%C3%A1rl%C3%B3n%20%2F%20Diamond%20Beach%EF%BC%88%E4%B8%A4%E8%80%85%E7%9B%B8%E9%82%BB%EF%BC%8C%E4%B8%80%E8%B5%B7%E7%8E%A9%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：乘船点旁有停车场 / 餐车 / 纪念品店 / 卫生","到点先确认停车再下车拍"],
    funFact: "英文检索名：Jökulsárlón Glacier Lagoon & Diamond Beach"
  },
  {
    id: "spot-is-11",
    category: 'photo',
    country: "iceland",
    title: "尼康封面洞穴 Loftsalahellir Cave",
    shortDesc: "俗称\"塞尔达洞穴 / links 同款洞\"，冰岛封面级机位。**洞口倒心形**是标志",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Loftsalahellir C"],
    location: "Loftsalahellir Cave（离黑沙滩开车 7–8 分钟）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-11-1.webp",
    gallery: [
      "/spots/is-11-1.webp",
      "/spots/is-11-2.webp"
    ],
    mapQuery: "Loftsalahellir Cave（离黑沙滩开车 7–8 分钟）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "俗称\"塞尔达洞穴 / links 同款洞\"，冰岛封面级机位。",
          "**洞口倒心形**是标志构图，蹲在洞底往外拍。",
          "洞里还有一个半人高的小侧洞，人钻进去拍能出剪影效果。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**坡度陡 + 岩面湿滑**，务必穿钉齿冰爪或防滑徒步鞋；",
          "雨天量力而行；",
          "洞口正对西南、日落方向光线最好。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：山脚有小型停车位，需徒步爬坡上洞口"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Loftsalahellir Cave（离黑沙滩开车 7–8 分钟）**",
          "https://www.google.com/maps/search/?api=1&query=Loftsalahellir%20Cave%EF%BC%88%E7%A6%BB%E9%BB%91%E6%B2%99%E6%BB%A9%E5%BC%80%E8%BD%A6%207%E2%80%938%20%E5%88%86%E9%92%9F%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：山脚有小型停车位，需徒步爬坡上洞口","到点先确认停车再下车拍"],
    funFact: "英文检索名：Loftsalahellir Cave"
  },
  {
    id: "spot-is-12",
    category: 'photo',
    country: "iceland",
    title: "天堂之门 Stone Bridge（斯奈山半岛）",
    shortDesc: "北大西洋尽头的天然海蚀拱桥，桥面最窄处 1–2 米。2026-08-10 起打桩",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Stone Bridge"],
    location: "Stone Bridge（导航 musagja 也行）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-12-1.webp",
    gallery: [
      "/spots/is-12-1.webp",
      "/spots/is-12-2.webp"
    ],
    mapQuery: "Stone Bridge（导航 musagja 也行）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "北大西洋尽头的天然海蚀拱桥，桥面最窄处 1–2 米。",
          "**2026-08-10 起打桩围挡，起跳动作已成绝版**——仍可步行走上桥面拍氛围大片。",
          "之前有游客跳跃拍照失足坠海，工作人员现场加了防护桩。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：桥面石头不平，湿滑风大注意安全；",
          "阴云翻涌时氛围感最好，逆光剪影 + 海浪拍岩最出片。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：搜 Stone Bridge / hotel 附近的免费停车场，步行短程抵达"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Stone Bridge（导航 musagja 也行）**",
          "https://www.google.com/maps/search/?api=1&query=Stone%20Bridge%EF%BC%88%E5%AF%BC%E8%88%AA%20musagja%20%E4%B9%9F%E8%A1%8C%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：搜 Stone Bridge / hotel 附近","到点先确认停车再下车拍"],
    funFact: "英文检索名：Stone Bridge / musagja"
  },
  {
    id: "spot-is-13",
    category: 'photo',
    country: "iceland",
    title: "秘密瀑布 Gljufrabui",
    shortDesc: "塞里雅兰瀑布隔壁的藏在洞穴里的瀑布，多数团客不知道。面对塞里雅兰瀑布往左走约",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Gljufrabui"],
    location: "Gljufrabui（塞里雅兰瀑布左侧约 800m）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-13-1.webp",
    gallery: [
      "/spots/is-13-1.webp"
    ],
    mapQuery: "Gljufrabui（塞里雅兰瀑布左侧约 800m）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "塞里雅兰瀑布隔壁的**藏在洞穴里的瀑布**，多数团客不知道。",
          "面对塞里雅兰瀑布往左走约 800 米，找到一个不起眼的小洞口，穿过狭缝就是宣泄而下的大瀑布，仰头拍构图很像哈利波特里的场景。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "**必备防水鞋套**——最后一段路要踩着水和石头进去；",
          "洞内水汽极大，镜头擦布常备。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：与塞里雅兰瀑布同一停车场（1,000 ISK）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Gljufrabui（塞里雅兰瀑布左侧约 800m）**",
          "https://www.google.com/maps/search/?api=1&query=Gljufrabui%EF%BC%88%E5%A1%9E%E9%87%8C%E9%9B%85%E5%85%B0%E7%80%91%E5%B8%83%E5%B7%A6%E4%BE%A7%E7%BA%A6%20800m%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：与塞里雅兰瀑布同一停车场（1,000 ISK）","到点先确认停车再下车拍"],
    funFact: "英文检索名：Gljufrabui"
  },
  {
    id: "spot-is-14",
    category: 'photo',
    country: "iceland",
    title: "蓝色秘境瀑布 Brúarfoss",
    shortDesc: "黄金圈冷门宝藏。水色透亮如荧光蓝，因流经冰川碎屑与火山岩层的过滤而呈色。从专用停",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Brúarfoss"],
    location: "Brúarfoss Parking / Brúarfoss Waterfall",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-14-1.webp",
    gallery: [
      "/spots/is-14-1.webp"
    ],
    mapQuery: "Brúarfoss Parking / Brúarfoss Waterfall",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "黄金圈冷门宝藏。",
          "水色透亮如荧光蓝，因流经冰川碎屑与火山岩层的过滤而呈色。",
          "从**专用停车场徒步单程 3.5 km**到瀑布，往返约 2 小时；",
          "也可以在下游的 Hlauptungufoss、Miðfoss 顺便拍。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：木桥上方视角俯拍**光墙碎裂**的水流；",
          "避开正午硬光，多云天蓝色最饱和。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Brúarfoss Parking（收费，2024 起 750 ISK/车），私人土地"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Brúarfoss Parking / Brúarfoss Waterfall**",
          "https://www.google.com/maps/search/?api=1&query=Br%C3%BAarfoss%20Parking%20%2F%20Br%C3%BAarfoss%20Waterfall"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Brúarfoss Parking（收费，2024","到点先确认停车再下车拍"],
    funFact: "英文检索名：Brúarfoss"
  },
  {
    id: "spot-is-15",
    category: 'photo',
    country: "iceland",
    title: "羽毛大峡谷 Fjaðrárgljúfur",
    shortDesc: "冰岛南部 2 公里长的绿绒峡谷，两壁 100 米高，苔藓覆盖如毛毯。Justin",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Fjaðrárgljúfur"],
    location: "Fjaðrárgljúfur canyon",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-15-1.webp",
    gallery: [
      "/spots/is-15-1.webp"
    ],
    mapQuery: "Fjaðrárgljúfur canyon",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "冰岛南部 2 公里长的绿绒峡谷，两壁 100 米高，苔藓覆盖如毛毯。",
          "**Justin Bieber 的 I'll Show You MV 曾在此拍摄**，游客暴增后 2019 起对生态影响严重，官方长期设季节性限行。",
          "**沿峡谷顶部有 3 个观景平台**，走完约 1 小时。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：第二观景平台 S 弯俯拍最出片；",
          "如遇临时封闭以现场牌为准。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Fjaðrárgljúfur 停车场（免费，需从 1 号公路开进 4 km 碎石路，普通轿车可通行）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Fjaðrárgljúfur canyon**",
          "https://www.google.com/maps/search/?api=1&query=Fja%C3%B0r%C3%A1rglj%C3%BAfur%20canyon"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Fjaðrárgljúfur 停车场（免费，需从 ","到点先确认停车再下车拍"],
    funFact: "英文检索名：Fjaðrárgljúfur"
  },
  {
    id: "spot-is-16",
    category: 'photo',
    country: "iceland",
    title: "玄武岩峡谷 Stuðlagil",
    shortDesc: "冰岛环岛北/东段第一惊喜。成片笔直的玄武岩石柱夹着绿松石色 Jökla 河，",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Stuðlagil Canyon"],
    location: "Stuðlagil Canyon（东部环岛必去，Egilsstaðir 附近）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-16-1.webp",
    gallery: [
      "/spots/is-16-1.webp",
      "/spots/is-16-2.webp"
    ],
    mapQuery: "Stuðlagil Canyon（东部环岛必去，Egilsstaðir 附近）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "冰岛环岛北/东段第一惊喜。",
          "**成片笔直的玄武岩石柱夹着绿松石色 Jökla 河**，走进去像踏进外星秘境。",
          "2017 年一座大坝启用后水位下降才显露出如今的样貌。",
          "**东西两侧路线体验完全不同**：东侧步行 5 km 下到河边（近距离），西侧观景台不用徒步（俯瞰全景）。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：东侧河边石上仰拍岩柱 + 人物左下角；",
          "西侧俯瞰 S 弯河道拍大场景；",
          "**岩石常年湿滑，务必徒步鞋 + 手脚并用**；",
          "**两侧观景台都禁止无人机**，当地人对此意见很大。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：东侧 Stuðlafoss trailhead 停车场（收费）；西侧 Stuðlagil viewpoint 停车场（免费）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Stuðlagil Canyon（东部环岛必去，Egilsstaðir 附近）**",
          "https://www.google.com/maps/search/?api=1&query=Stu%C3%B0lagil%20Canyon%EF%BC%88%E4%B8%9C%E9%83%A8%E7%8E%AF%E5%B2%9B%E5%BF%85%E5%8E%BB%EF%BC%8CEgilssta%C3%B0ir%20%E9%99%84%E8%BF%91%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：东侧 Stuðlafoss trailhead 停","到点先确认停车再下车拍"],
    funFact: "英文检索名：Stuðlagil Canyon"
  },
  {
    id: "spot-is-17",
    category: 'photo',
    country: "iceland",
    title: "抹茶山 Mælifell（高地）",
    shortDesc: "一座孤独的绿色火山锥，从地面看已经很特别，无人机升起后才见到黑色沙漠里辫状河",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Mælifell"],
    location: "Mælifell（高地 F 路，需 4x4）",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/is-17-1.webp",
    gallery: [
      "/spots/is-17-1.webp",
      "/spots/is-17-2.webp"
    ],
    mapQuery: "Mælifell（高地 F 路，需 4x4）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "一座孤独的**绿色火山锥**，从地面看已经很特别，无人机升起后才见到黑色沙漠里辫状河如丝带穿过，绿山被包围在荒原正中。",
          "**只在 6 月底 – 9 月中旬夏季开放**，其他时间高地封路。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：地面拍 → 绿色锥体独立感；",
          "无人机 100 米高俯拍 → 展现辫状河与荒原的层次关系；",
          "**租车必须走 4x4 F 路险**，未买保险涉水损失自付百万级。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "路线：南线 F232 + F210 East 最常走，全程约 50 km、含拍照 5 h+，多处涉水，普通轿车禁行；北线 F210 West 更硬核；不建议自驾无经验者走"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Mælifell（高地 F 路，需 4x4）**",
          "https://www.google.com/maps/search/?api=1&query=M%C3%A6lifell%EF%BC%88%E9%AB%98%E5%9C%B0%20F%20%E8%B7%AF%EF%BC%8C%E9%9C%80%204x4%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","路线：南线 F232 + F210 East 最常走，全","到点先确认停车再下车拍"],
    funFact: "英文检索名：Mælifell"
  },
  {
    id: "spot-is-18",
    category: 'photo',
    country: "iceland",
    title: "辛格维利尔国家公园 Þingvellir",
    shortDesc: "黄金圈第一站，UNESCO 世界文化遗产。大裂缝 Almannagjá 是北",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Þingvellir Natio"],
    location: "Öxarárfoss p3 停车场（最近大裂缝入口，非主入口）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-18-1.webp",
    gallery: [
      "/spots/is-18-1.webp"
    ],
    mapQuery: "Öxarárfoss p3 停车场（最近大裂缝入口，非主入口）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "黄金圈第一站，UNESCO 世界文化遗产。",
          "**大裂缝 Almannagjá** 是北美板块与欧亚板块的接缝——左手北美、右手欧洲，同框世界唯一。",
          "930 年冰岛议会就诞生在这里。",
          "9 月底走公园主步道 30 min，看板块裂缝 + 一路走到 **Öxarárfoss 瀑布**。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：站在裂缝底部往两侧仰拍岩壁；",
          "**10 月初早晚可能结冰**，坡道极滑，最好带轻便冰爪。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：p1 主入口 750 ISK；p3 直达大裂缝，免费，步行 2 min 到最经典机位（推荐）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Öxarárfoss p3 停车场（最近大裂缝入口，非主入口）**",
          "https://www.google.com/maps/search/?api=1&query=%C3%96xar%C3%A1rfoss%20p3%20%E5%81%9C%E8%BD%A6%E5%9C%BA%EF%BC%88%E6%9C%80%E8%BF%91%E5%A4%A7%E8%A3%82%E7%BC%9D%E5%85%A5%E5%8F%A3%EF%BC%8C%E9%9D%9E%E4%B8%BB%E5%85%A5%E5%8F%A3%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：p1 主入口 750 ISK；p3 直达大裂缝，免","到点先确认停车再下车拍"],
    funFact: "英文检索名：Þingvellir National Park"
  },
  {
    id: "spot-is-19",
    category: 'photo',
    country: "iceland",
    title: "凯瑞德火山口 Kerið",
    shortDesc: "黄金圈返程顺路，直径 270 m 的火山口湖：青蓝湖面 + 红色火山土 + 苔藓",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Kerið Crater Lak"],
    location: "Kerið Crater",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-19-1.webp",
    gallery: [
      "/spots/is-19-1.webp"
    ],
    mapQuery: "Kerið Crater",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "黄金圈返程顺路，直径 270 m 的火山口湖：**青蓝湖面 + 红色火山土 + 苔藓绿** 三色同框，走完一圈约 20 min。",
          "**可下到湖边**，也可沿口沿步道拍俯瞰。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：口沿俯拍收全景；",
          "下到湖边水面倒影更纯；",
          "日落前 30 min 侧光把红色火山土打亮最出片。",
          "**1 号公路旁 5 min 就到**，不要跳过。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：私营景区，门票 400 ISK / 人（现金 or 卡）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Kerið Crater**",
          "https://www.google.com/maps/search/?api=1&query=Keri%C3%B0%20Crater"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：私营景区，门票 400 ISK / 人（现金 or","到点先确认停车再下车拍"],
    funFact: "英文检索名：Kerið Crater Lake"
  },
  {
    id: "spot-is-20",
    category: 'photo',
    country: "iceland",
    title: "哈帕音乐厅 Harpa",
    shortDesc: "雷市地标建筑，玻璃晶体幕墙随天光变化——阴天蓝、日落金、夜晚彩灯。免票进入大",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Harpa Concert Ha"],
    location: "Harpa（雷市海滨，Sculpture & Shore Walk 路上）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-20-1.webp",
    gallery: [
      "/spots/is-20-1.webp"
    ],
    mapQuery: "Harpa（雷市海滨，Sculpture & Shore Walk 路上）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "雷市地标建筑，**玻璃晶体幕墙**随天光变化——阴天蓝、日落金、夜晚彩灯。",
          "免票进入大厅，二层往上有免费观景平台，**建筑党必打卡**。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：建筑内 **回廊六边形玻璃格** 是网红机位；",
          "外部海边逆光剪影 + 幕墙反射；",
          "晚上灯光秀持续到 23:00。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Harpa 地下停车场（收费，卡付）；步行从市中心 8 min"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Harpa（雷市海滨，Sculpture & Shore Walk 路上）**",
          "https://www.google.com/maps/search/?api=1&query=Harpa%EF%BC%88%E9%9B%B7%E5%B8%82%E6%B5%B7%E6%BB%A8%EF%BC%8CSculpture%20%26%20Shore%20Walk%20%E8%B7%AF%E4%B8%8A%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Harpa 地下停车场（收费，卡付）；步行从市中心","到点先确认停车再下车拍"],
    funFact: "英文检索名：Harpa Concert Hall"
  },
  {
    id: "spot-is-21",
    category: 'photo',
    country: "iceland",
    title: "太阳航海者雕塑 Sun Voyager",
    shortDesc: "Harpa 沿海往西步行 5 min 就是。维京海盗船骨架不锈钢雕塑，配",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Sólfar"],
    location: "Solfar / Sun Voyager Sculpture",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-21-1.webp",
    gallery: [
      "/spots/is-21-1.webp"
    ],
    mapQuery: "Solfar / Sun Voyager Sculpture",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "Harpa 沿海往西步行 **5 min** 就是。",
          "维京海盗船骨架不锈钢雕塑，**配上海湾 + 远处 Esja 雪山 + 日落**，冰岛最经典单张之一。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**建议黄昏去**，太阳落到雪山后面时逆光剪影效果拉满；",
          "广角低机位 + 雕塑贴海平面最出片。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：海边步道 Sculpture & Shore Walk 免费停车位（有限）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Solfar / Sun Voyager Sculpture**",
          "https://www.google.com/maps/search/?api=1&query=Solfar%20%2F%20Sun%20Voyager%20Sculpture"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：海边步道 Sculpture & Shore Wa","到点先确认停车再下车拍"],
    funFact: "英文检索名：Sólfar / Sun Voyager"
  },
  {
    id: "spot-is-22",
    category: 'photo',
    country: "iceland",
    title: "珍珠楼 Perlan",
    shortDesc: "半球玻璃穹顶建筑，山顶 360° 观景平台免费俯瞰彩色屋顶 + 港口 + E",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Perlan Museum"],
    location: "Perlan Museum（雷市南山顶）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-22-1.webp",
    gallery: [
      "/spots/is-22-1.webp",
      "/spots/is-22-2.webp"
    ],
    mapQuery: "Perlan Museum（雷市南山顶）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "半球玻璃穹顶建筑，山顶 360° 观景平台**免费**俯瞰彩色屋顶 + 港口 + Esja 山。",
          "**值得花钱的是穹顶影院 + 冰洞 + 火山秀**：2025 年 10 月新开的 **4D 沉浸式火山喷发体验**（Volcano Show）——脚下岩浆翻滚、震动传体，20 分钟被震到沉默；",
          "紧接着穹顶影院里的**极光秀**不用等天气就能看。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：屋顶观景平台**广角俯拍雷市彩色铁皮屋顶**；",
          "建筑本身球顶白色几何感也很出片。",
          "**下雨/阴天必去**（能替代户外火山、极光观赏）。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Perlan 免费停车场；套票约 5,690 ISK（观景平台+火山+极光+冰洞+博物馆）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Perlan Museum（雷市南山顶）**",
          "https://www.google.com/maps/search/?api=1&query=Perlan%20Museum%EF%BC%88%E9%9B%B7%E5%B8%82%E5%8D%97%E5%B1%B1%E9%A1%B6%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Perlan 免费停车场；套票约 5,690 IS","到点先确认停车再下车拍"],
    funFact: "英文检索名：Perlan Museum"
  },
  {
    id: "spot-is-23",
    category: 'photo',
    country: "iceland",
    title: "无边泳池温泉 Sky Lagoon",
    shortDesc: "离雷市最近、水质最好的温泉，卖点是无边界池：温泉水一路延伸到北大西洋，泡在温",
    iconName: "Camera",
    urgency: "low",
    tags: ["冰岛","机位","Sky Lagoon"],
    location: "Sky Lagoon（雷市南 15 min 车程 / 有 BSI 公交接驳）",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/is-23-1.webp",
    gallery: [
      "/spots/is-23-1.webp",
      "/spots/is-23-2.webp"
    ],
    mapQuery: "Sky Lagoon（雷市南 15 min 车程 / 有 BSI 公交接驳）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "离雷市最近、水质最好的温泉，卖点是**无边界池**：温泉水一路延伸到北大西洋，泡在温热水里脸吹冷风，人 + 海 + 天空一条线。",
          "**需要提前在官网预约**，旺季现场经常买不到当日票。",
          "**建议接近日落时段入场**，光线最柔；",
          "下午 3–4 点进人相对少。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**靠边缘位置最上镜**（人+海+天空一条线）；",
          "**日落前 30 min** 光线最柔；",
          "手里拿一杯饮料更有度假感——池中直接刷灰色手环点单。",
          "**7 步疗愈**（热→冷→桑拿→冷雾→磨砂→再热→放松）每张票只能走一轮。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "价格：官网提前订，Pure（普通）+ 7 步疗愈约 10,990 ISK，Sér（私人更衣室）更贵；接驳套餐从 BSI 15 min 车程"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Sky Lagoon（雷市南 15 min 车程 / 有 BSI 公交接驳）**",
          "https://www.google.com/maps/search/?api=1&query=Sky%20Lagoon%EF%BC%88%E9%9B%B7%E5%B8%82%E5%8D%97%2015%20min%20%E8%BD%A6%E7%A8%8B%20%2F%20%E6%9C%89%20BSI%20%E5%85%AC%E4%BA%A4%E6%8E%A5%E9%A9%B3%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","价格：官网提前订，Pure（普通）+ 7 步疗愈约 10","到点先确认停车再下车拍"],
    funFact: "英文检索名：Sky Lagoon"
  },
  {
    id: "spot-is-24",
    category: 'photo',
    country: "iceland",
    title: "雷市极光机位 · Grótta 灯塔 极光",
    shortDesc: "离雷克雅未克市中心最近的黑暗海岸线，公交 11 路可达。住雷市当晚 KP≥3",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["冰岛","极光","Grótta Island Li"],
    location: "Grótta Island Lighthouse（雷市西北端半岛尖）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/is-24-1.webp",
    gallery: [
      "/spots/is-24-1.webp"
    ],
    mapQuery: "Grótta Island Lighthouse（雷市西北端半岛尖）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "离雷克雅未克市中心最近的**黑暗海岸线**，公交 11 路可达。",
          "住雷市当晚 KP≥3 且云层薄时的首选追光点。",
          "海边一座白色灯塔，从灯塔沿海边小路走，无光污染。",
          "**11 路公交末班约 23:50**，往返约 kr 1,340（≈9€）。",
          "步行从市中心也可 45 min。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**灯塔剪影 + 极光**同框最经典；",
          "肉眼看到白雾条状先用手机夜景确认再上架子。",
          "观测黄金时段 20:00–23:00。",
          "**拍摄参数见顶部极光章节**。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：灯塔停车场免费；涨潮时车道会淹，出发前查潮汐表"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Grótta Island Lighthouse（雷市西北端半岛尖）**",
          "https://www.google.com/maps/search/?api=1&query=Gr%C3%B3tta%20Island%20Lighthouse%EF%BC%88%E9%9B%B7%E5%B8%82%E8%A5%BF%E5%8C%97%E7%AB%AF%E5%8D%8A%E5%B2%9B%E5%B0%96%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：灯塔停车场免费；涨潮时车道会淹，出发前查潮汐表","到点先确认停车再下车拍"],
    funFact: "英文检索名：Grótta Island Lighthouse"
  },
  {
    id: "spot-lo-1",
    category: 'photo',
    country: "norway",
    title: "斯沃尔韦尔 Svolvær",
    shortDesc: "罗弗敦门户城镇。教堂坐落在小山坡上，背后是树林 + 雪山；港口以\"游轮 + 红色",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Svolvær church &"],
    location: "Svolvær / Svolvær church",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-1-1.webp",
    gallery: [
      "/spots/lo-1-1.webp",
      "/spots/lo-1-2.webp",
      "/spots/lo-1-3.webp"
    ],
    mapQuery: "Svolvær / Svolvær church",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "罗弗敦门户城镇。",
          "教堂坐落在小山坡上，背后是树林 + 雪山；",
          "港口以**\"游轮 + 红色渔屋\"**为背景拍，旅行感拉满。",
          "晴天在码头看海超治愈。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：小镇 Circle K 加油站是个意外的好观景位，可远眺雪山与海。",
          "**躺平帖秘籍：**教堂坐落**小山坡**，背后是树林 + 雪山；",
          "港口以**游轮 + 红色渔屋**为背景，旅行感直接拉满。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Svolvær / Svolvær church**",
          "https://www.google.com/maps/search/?api=1&query=Svolv%C3%A6r%20%2F%20Svolv%C3%A6r%20church"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Svolvær church & port"
  },
  {
    id: "spot-lo-18",
    category: 'photo',
    country: "norway",
    title: "Svolvær 港区极光 极光",
    shortDesc: "住 Svolvær 当晚下楼即拍——罗弗敦最省事的极光机位。港口北岸有一排小",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["罗弗敦","极光","Svolvær Harbour "],
    location: "Svolvær 港湾北岸 / Svinøybrua 桥上",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-18-1.webp",
    gallery: [
      "/spots/lo-18-1.webp"
    ],
    mapQuery: "Svolvær 港湾北岸 / Svinøybrua 桥上",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "住 Svolvær 当晚**下楼即拍**——罗弗敦最省事的极光机位。",
          "港口北岸有一排小渔船作前景，**下雪的夜晚 + 后方雪山**是灵魂配置。",
          "港口通宵灯亮不熄，前景光会盖住极光弱光——务必**包围曝光**（不同快门各拍一张再合成）。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "另一位置在**港湾东侧一排经典红色木屋**，取景把港口大渔船排除画面（光污染炸裂）；",
          "**两个架子一起干**一晚素材翻倍。",
          "**拍摄参数见顶部极光章节**。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Scandic Svolvær 出门 5 min 步行到位"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Svolvær 港湾北岸 / Svinøybrua 桥上**",
          "https://www.google.com/maps/search/?api=1&query=Svolv%C3%A6r%20%E6%B8%AF%E6%B9%BE%E5%8C%97%E5%B2%B8%20%2F%20Svin%C3%B8ybrua%20%E6%A1%A5%E4%B8%8A"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Scandic Svolvær 出门 5 min ","到点先确认停车再下车拍"],
    funFact: "英文检索名：Svolvær Harbour Aurora"
  },
  {
    id: "spot-lo-2",
    category: 'photo',
    country: "norway",
    title: "亨宁斯韦尔码头 Henningsvær",
    shortDesc: "被称为\"罗弗敦的威尼斯\"。码头栈道是最佳机位，木屋沿港排布、渔船静泊、雪山倒映。**",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Henningsvær Port"],
    location: "Henningsvær",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-2-1.webp",
    gallery: [
      "/spots/lo-2-1.webp",
      "/spots/lo-2-2.webp",
      "/spots/lo-2-3.webp"
    ],
    mapQuery: "Henningsvær",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "被称为\"罗弗敦的威尼斯\"。",
          "码头栈道是最佳机位，木屋沿港排布、渔船静泊、雪山倒映。",
          "**日出/蓝调时刻**来拍，码头彩色房子 + 栈桥圣诞树，像油画。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：蓝调时刻（日出前）童话感最强；",
          "栈桥 + 彩色木屋 + 雪山倒影三要素同框。",
          "**躺平帖秘籍：****日出蓝调时刻**拍码头彩色房子 + 栈桥圣诞树，出片像油画。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Henningsvær**",
          "https://www.google.com/maps/search/?api=1&query=Henningsv%C3%A6r"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Henningsvær Port"
  },
  {
    id: "spot-lo-3",
    category: 'photo',
    country: "norway",
    title: "亨宁斯韦尔足球场",
    shortDesc: "\"世界最孤独的足球场\"，礁石上的球场被峡湾环绕。**必须有无人机**才能拍到俯瞰图—",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Henningsvær Foot"],
    location: "Henningsvær Football Stadium",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-3-1.webp",
    gallery: [
      "/spots/lo-3-1.webp",
      "/spots/lo-3-2.webp",
      "/spots/lo-3-3.webp"
    ],
    mapQuery: "Henningsvær Football Stadium",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "\"世界最孤独的足球场\"，礁石上的球场被峡湾环绕。",
          "**必须有无人机**才能拍到俯瞰图——否则就算爬上小土坡，最多只能拍到球场与海/雪山的同框。",
          "车可停在球场边，免费。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：无无人机可直接跳过（多篇实测结论一致）；",
          "冬天球场被雪覆盖；",
          "顺路打卡即可。",
          "假草皮质量很好，可走到场边。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Henningsvær Football Stadium**",
          "https://www.google.com/maps/search/?api=1&query=Henningsv%C3%A6r%20Football%20Stadium"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Henningsvær Football Stadium"
  },
  {
    id: "spot-lo-4",
    category: 'photo',
    country: "norway",
    title: "Haukland 白沙滩",
    shortDesc: "被多位博主评为\"罗弗敦最美白沙滩\"：海水奶蓝色，沙子又白又细，与背后雪山同框。",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Hauklandstranda"],
    location: "Hauklandstranda",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-4-1.webp",
    gallery: [
      "/spots/lo-4-1.webp",
      "/spots/lo-4-2.webp",
      "/spots/lo-4-3.webp"
    ],
    mapQuery: "Hauklandstranda",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "被多位博主评为\"罗弗敦最美白沙滩\"：海水奶蓝色，沙子又白又细，与背后雪山同框。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：晴天下海水呈蒂芙尼蓝，人像 / 风景皆宜；",
          "适合夏季。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Hauklandstranda**",
          "https://www.google.com/maps/search/?api=1&query=Hauklandstranda"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Hauklandstranda"
  },
  {
    id: "spot-lo-5",
    category: 'photo',
    country: "norway",
    title: "Ramberg 海滩",
    shortDesc: "超有辨识度：黑沙滩 + 蒂芙尼蓝海水，海滩附近还有一栋标志性红房子。退潮后沙",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Ramberg Beach Vi"],
    location: "Ramberg Beach Vista Point",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-5-1.webp",
    gallery: [
      "/spots/lo-5-1.webp",
      "/spots/lo-5-2.webp",
      "/spots/lo-5-3.webp"
    ],
    mapQuery: "Ramberg Beach Vista Point",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "超有辨识度：**黑沙滩 + 蒂芙尼蓝海水**，海滩附近还有一栋标志性红房子。",
          "退潮后沙滩平整，可拍水面倒影；",
          "白浪白沙滩如油画。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：红房子作前景、雪山作背景；",
          "退潮后低机位拍镜面倒影。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Ramberg Beach Vista Point**",
          "https://www.google.com/maps/search/?api=1&query=Ramberg%20Beach%20Vista%20Point"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Ramberg Beach Vista Point"
  },
  {
    id: "spot-lo-20",
    category: 'photo',
    country: "norway",
    title: "雪山海滩 Skagsanden Beach",
    shortDesc: "\"雪山 + 大海叠 buff\"，最能一次收全罗弗敦典型元素的沙滩。**巨大的观景台把",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Skagsanden Beach"],
    location: "Skagsanden Beach（Flakstadøya 南岸，E10 边）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-20-1.webp",
    gallery: [
      "/spots/lo-20-1.webp"
    ],
    mapQuery: "Skagsanden Beach（Flakstadøya 南岸，E10 边）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "\"雪山 + 大海叠 buff\"，最能一次收全罗弗敦典型元素的沙滩。",
          "**巨大的观景台把\"白雪山脊 + 蓝绿海面\"框在一起**，背景党狂喜。",
          "10 月起沙滩边缘常有薄冰、湿润沙面形成**镜面反射**——极光季夜里在这里架相机能拍到\"极光 + 雪山 + 反射\"三合一。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**低机位贴沙面拍反射**是核心；",
          "黄昏侧光时雪山质感最好；",
          "**Flakstad Church**（红色木教堂）就在旁边 3 min 车程，可顺路加拍。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：导航到 Rasteplass Flakstad（Flakstad 休息区），免费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Skagsanden Beach（Flakstadøya 南岸，E10 边）**",
          "https://www.google.com/maps/search/?api=1&query=Skagsanden%20Beach%EF%BC%88Flakstad%C3%B8ya%20%E5%8D%97%E5%B2%B8%EF%BC%8CE10%20%E8%BE%B9%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：导航到 Rasteplass Flakstad（F","到点先确认停车再下车拍"],
    funFact: "英文检索名：Skagsanden Beach / Rasteplass Flakstad"
  },
  {
    id: "spot-lo-6",
    category: 'photo',
    country: "norway",
    title: "Big Mountain 观景点（沿途）",
    shortDesc: "E10 主路旁岔出一个小岔路即到。一条几乎没车的大直路，可以站在路中间拍，背",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Big Mountain Vie"],
    location: "Big Mountain View point",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-6-1.webp",
    gallery: [
      "/spots/lo-6-1.webp"
    ],
    mapQuery: "Big Mountain View point",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "E10 主路旁岔出一个小岔路即到。",
          "一条**几乎没车的大直路**，可以站在路中间拍，背后大山超级出片。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：站在大直路中间，大山 + 公路纵深感构图；",
          "注意来车。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Big Mountain View point**",
          "https://www.google.com/maps/search/?api=1&query=Big%20Mountain%20View%20point"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Big Mountain View point"
  },
  {
    id: "spot-lo-7",
    category: 'photo',
    country: "norway",
    title: "Alstad Kro 镜面倒影（沿途）",
    shortDesc: "路过的宝藏机位。没风的时候水面像一面镜子，倒映大山，拍出很不真实的效果，肉眼同样震撼",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Alstad Kro & Cam"],
    location: "Alstad Kro & Camp",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-7-1.webp",
    gallery: [
      "/spots/lo-7-1.webp",
      "/spots/lo-7-2.webp",
      "/spots/lo-7-3.webp"
    ],
    mapQuery: "Alstad Kro & Camp",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "路过的宝藏机位。",
          "没风的时候水面像一面镜子，倒映大山，拍出很不真实的效果，肉眼同样震撼。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：挑无风时段，山体 + 水面倒影完全对称构图。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Alstad Kro & Camp**",
          "https://www.google.com/maps/search/?api=1&query=Alstad%20Kro%20%26%20Camp"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Alstad Kro & Camp"
  },
  {
    id: "spot-lo-8",
    category: 'photo',
    country: "norway",
    title: "Nusfjord 渔村",
    shortDesc: "罗弗敦保存最完整的古老渔村，一排排彩色木屋沿峡湾排列。进村门票 150 NOK ",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Nusfjord"],
    location: "Nusfjord",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-8-1.webp",
    gallery: [
      "/spots/lo-8-1.webp",
      "/spots/lo-8-2.webp",
      "/spots/lo-8-3.webp"
    ],
    mapQuery: "Nusfjord",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "罗弗敦保存最完整的古老渔村，一排排彩色木屋沿峡湾排列。",
          "进村**门票 150 NOK / 人**（含博物馆和美术馆）。",
          "村里 Landhandleriet Café 的窗边座位直面峡湾，适合拍照 + 歇脚。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：彩色木屋沿峡湾排列的层次；",
          "咖啡馆窗边机位。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Nusfjord**",
          "https://www.google.com/maps/search/?api=1&query=Nusfjord"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Nusfjord"
  },
  {
    id: "spot-lo-9",
    category: 'photo',
    country: "norway",
    title: "Hamnøy 孤独星球封面",
    shortDesc: "《孤独星球》挪威版封面，罗弗敦最经典机位。桥的两端都是机位，站到桥上略靠中间",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Fotospot Hamnøy"],
    location: "FotoSpot Hamnøy / Hamnøy Scenic Viewpoint",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-9-1.webp",
    gallery: [
      "/spots/lo-9-1.webp",
      "/spots/lo-9-2.webp",
      "/spots/lo-9-3.webp"
    ],
    mapQuery: "FotoSpot Hamnøy / Hamnøy Scenic Viewpoint",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "《孤独星球》挪威版封面，罗弗敦最经典机位。",
          "**桥的两端都是机位**，站到桥上略靠中间，用广角把海水、红色渔屋、雪山同框拍进一个画面。",
          "清晨蓝调与傍晚日落最美，也是看极光的好位置。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：广角桥头全景；",
          "风大也要站上桥拍（封面同款）；",
          "日出/蓝调/极光时段最佳。",
          "**躺平帖秘籍：****桥两端都是机位！**站在桥上用广角，海水 + 木屋 + 雪山同框。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：导航 Parking Hamnøy Viewpoint，免费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**FotoSpot Hamnøy / Hamnøy Scenic Viewpoint**",
          "https://www.google.com/maps/search/?api=1&query=FotoSpot%20Hamn%C3%B8y%20%2F%20Hamn%C3%B8y%20Scenic%20Viewpoint"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：导航 Parking Hamnøy Viewpoi","到点先确认停车再下车拍"],
    funFact: "英文检索名：Fotospot Hamnøy"
  },
  {
    id: "spot-lo-19",
    category: 'photo',
    country: "norway",
    title: "Hamnøy 半岛极光位 极光",
    shortDesc: "网红机位 Hamnøy 封面拍完，往半岛内侧走 200 米就是这个安静位。周",
    iconName: "Sparkles",
    urgency: "medium",
    tags: ["罗弗敦","极光","Hamnøy Peninsula"],
    location: "Hamnøy 半岛内侧（Hamnøya, Moskenes）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-19-1.webp",
    gallery: [
      "/spots/lo-19-1.webp"
    ],
    mapQuery: "Hamnøy 半岛内侧（Hamnøya, Moskenes）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "网红机位 Hamnøy 封面拍完，往**半岛内侧走 200 米**就是这个安静位。",
          "周围都是民宿，架好三脚架回房睡觉，延时机自动运行。",
          "**人像拍摄选蓝调时刻**（日落后 20–40 min），能同时保住前景细节和天空绿光。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "10 月初日落 18:30 左右，蓝调 19:00–19:30，之后转深夜黑天，正是极光延时黄金档。",
          "**拍摄参数见顶部极光章节**。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Andøy Vest Rorbuer Reine 到这只有 10 min 车程"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Hamnøy 半岛内侧（Hamnøya, Moskenes）**",
          "https://www.google.com/maps/search/?api=1&query=Hamn%C3%B8y%20%E5%8D%8A%E5%B2%9B%E5%86%85%E4%BE%A7%EF%BC%88Hamn%C3%B8ya%2C%20Moskenes%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Andøy Vest Rorbuer Reine ","到点先确认停车再下车拍"],
    funFact: "英文检索名：Hamnøy Peninsula Aurora"
  },
  {
    id: "spot-lo-10",
    category: 'photo',
    country: "norway",
    title: "Sakrisøy 黄色渔屋",
    shortDesc: "就在 Hamnøy 旁边。蓝天 + 雪山 + 亮黄色小屋。把雪山顶和小屋顶放",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Sakrisøy Viewpoi"],
    location: "Sakrisøy Viewpoint / Sakrisøy",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-10-1.webp",
    gallery: [
      "/spots/lo-10-1.webp",
      "/spots/lo-10-2.webp",
      "/spots/lo-10-3.webp"
    ],
    mapQuery: "Sakrisøy Viewpoint / Sakrisøy",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "就在 Hamnøy 旁边。",
          "蓝天 + 雪山 + **亮黄色小屋**。",
          "把雪山顶和小屋顶放在**垂直线上做对称构图**，随手都是大片。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：黄色小屋与雪山顶垂直对齐对称构图。",
          "**躺平帖秘籍：**构图秘籍：把**雪山顶和小屋顶放在垂直线上**做对称，随手拍都是大片。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：导航直达，免费停 4 小时"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Sakrisøy Viewpoint / Sakrisøy**",
          "https://www.google.com/maps/search/?api=1&query=Sakris%C3%B8y%20Viewpoint%20%2F%20Sakris%C3%B8y"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：导航直达，免费停 4 小时","到点先确认停车再下车拍"],
    funFact: "英文检索名：Sakrisøy Viewpoint"
  },
  {
    id: "spot-lo-11",
    category: 'photo',
    country: "norway",
    title: "雷讷全景 Reine Utsiktspunkt",
    shortDesc: "俯瞰雷讷村庄的最佳视角，阴天有雾时更像仙境。早一点来、太阳低时更美。沿停车场",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Reine Utsiktspun"],
    location: "Reine Utsiktspunkt",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-11-1.webp",
    gallery: [
      "/spots/lo-11-1.webp",
      "/spots/lo-11-2.webp",
      "/spots/lo-11-3.webp"
    ],
    mapQuery: "Reine Utsiktspunkt",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "俯瞰雷讷村庄的最佳视角，阴天有雾时更像仙境。",
          "**早一点来、太阳低时更美**。",
          "沿停车场往小镇走的桥上也能拍到好机位。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：清晨低角度阳光；",
          "雾天出仙气。",
          "**躺平帖秘籍：**Reinehalsen 观景台**俯瞰 Reine 村庄**，阴天有雾时更像仙境。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：导航 Reine Utsiktspunkt，免费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Reine Utsiktspunkt**",
          "https://www.google.com/maps/search/?api=1&query=Reine%20Utsiktspunkt"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：导航 Reine Utsiktspunkt，免费","到点先确认停车再下车拍"],
    funFact: "英文检索名：Reine Utsiktspunkt / Reinehalsen"
  },
  {
    id: "spot-lo-12",
    category: 'photo',
    country: "norway",
    title: "雷讷黄房子 Famous Yellow House",
    shortDesc: "雷讷 ins 超火的小黄屋，因为出片才被谷歌地图起了\"Famous Yellow H",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","The Famous Yello"],
    location: "The Famous Yellow House / Anita's Sjømat（餐厅旁）",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-12-1.webp",
    gallery: [
      "/spots/lo-12-1.webp",
      "/spots/lo-12-2.webp",
      "/spots/lo-12-3.webp"
    ],
    mapQuery: "The Famous Yellow House / Anita's Sjømat（餐厅旁）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "雷讷 ins 超火的小黄屋，因为出片才被谷歌地图起了\"Famous Yellow House\"这个名字。",
          "背靠雪山的一间黄色小屋，雪山的形状与黄房子有奇妙呼应，**用长焦拍更好看**。",
          "注意这里是民宿/餐厅，文明打卡、勿打扰住客。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：长焦压缩黄房子与雪山；",
          "可定位 Anita's Seafood（黄房子就在餐厅旁）。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**The Famous Yellow House / Anita's Sjømat（餐厅旁）**",
          "https://www.google.com/maps/search/?api=1&query=The%20Famous%20Yellow%20House%20%2F%20Anita's%20Sj%C3%B8mat%EF%BC%88%E9%A4%90%E5%8E%85%E6%97%81%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：The Famous Yellow House / Anita's Sjømat"
  },
  {
    id: "spot-lo-13",
    category: 'photo',
    country: "norway",
    title: "Reinebringen 山顶徒步",
    shortDesc: "罗弗敦最具代表性的徒步机位。沿石阶上山约 1 小时 10 分钟，共 1,978 ",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Reinebringen"],
    location: "Steffenakken（停车，约20个位，建议上午到）然后步行 15 分钟到 Reinebringen trailhead",
    bookingNeeded: 'no',
    costRange: "免费机位",
    coverImage: "/spots/lo-13-1.webp",
    gallery: [
      "/spots/lo-13-1.webp",
      "/spots/lo-13-2.webp",
      "/spots/lo-13-3.webp"
    ],
    mapQuery: "Steffenakken（停车，约20个位，建议上午到）然后步行 15 分钟到 Reinebringen trailhead",
    coordinates: "然后步行 15 分钟到 Reinebringen trailhead",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "罗弗敦最具代表性的徒步机位。",
          "沿石阶上山约 **1 小时 10 分钟，共 1,978 级台阶、爬升 448 米**，山顶俯瞰雷讷小镇与峡湾全景。",
          "下山约 40 分钟。",
          "回程会经过孤独星球封面拍摄地 Fotospot Hamnøy。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：山顶俯瞰峡湾全景；",
          "深秋红叶满山、冬季雪山又是另一番景象；",
          "务必穿防滑鞋。"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Steffenakken（停车，约20个位，建议上午到）然后步行 15 分钟到 Reinebringen trailhead**",
          "坐标：然后步行 15 分钟到 Reinebringen trailhead",
          "https://www.google.com/maps/search/?api=1&query=Steffenakken%EF%BC%88%E5%81%9C%E8%BD%A6%EF%BC%8C%E7%BA%A620%E4%B8%AA%E4%BD%8D%EF%BC%8C%E5%BB%BA%E8%AE%AE%E4%B8%8A%E5%8D%88%E5%88%B0%EF%BC%89%E7%84%B6%E5%90%8E%E6%AD%A5%E8%A1%8C%2015%20%E5%88%86%E9%92%9F%E5%88%B0%20Reinebringen%20trailhead"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","到点先确认停车再下车拍"],
    funFact: "英文检索名：Reinebringen"
  },
  {
    id: "spot-lo-14",
    category: 'photo',
    country: "norway",
    title: "奥镇 Å 标志牌 + 观景点",
    shortDesc: "全世界名字最短的小镇，E10 公路到这里走到尽头。网红 \"Å\" 字路标必拍**；",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Å i Lofoten"],
    location: "Å i Lofoten / Parking for town of Å",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-14-1.webp",
    gallery: [
      "/spots/lo-14-1.webp",
      "/spots/lo-14-2.webp",
      "/spots/lo-14-3.webp"
    ],
    mapQuery: "Å i Lofoten / Parking for town of Å",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "全世界名字最短的小镇，E10 公路到这里走到尽头。",
          "网红 **\"Å\" 字路标必拍**；",
          "往前走几分钟到海边观景台，能拍到\"海与天吞掉脚边的路\"的辽阔感。",
          "从停车场往 Viewpoint of Å 走，途中一条小岔路进去，可见一块夹在悬崖中间的石头（地图上没标的小景）。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：Å 路标合影 + 海边观景台；",
          "小镇有伴手礼店可买冰箱贴。",
          "**躺平帖秘籍：****Å 标志牌拍完往前走几分钟**到海边观景台，能拍到\"海与天吞掉脚边的路\"的辽阔感。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Parking for town of Å，免费"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Å i Lofoten / Parking for town of Å**",
          "https://www.google.com/maps/search/?api=1&query=%C3%85%20i%20Lofoten%20%2F%20Parking%20for%20town%20of%20%C3%85"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Parking for town of Å，免费","到点先确认停车再下车拍"],
    funFact: "英文检索名：Å i Lofoten / Viewpoint of Å"
  },
  {
    id: "spot-lo-15",
    category: 'photo',
    country: "norway",
    title: "乌塔克利夫海滩 Uttakleiv",
    shortDesc: "罗弗敦最冷门也最出片的海滩之一，官方评为世界最佳北极海滩。白沙 + 海中巨石",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Uttakleiv Beach"],
    location: "Uttakleiv Beach（Leknes 出发约 25 min）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-15-1.webp",
    gallery: [
      "/spots/lo-15-1.webp",
      "/spots/lo-15-2.webp"
    ],
    mapQuery: "Uttakleiv Beach（Leknes 出发约 25 min）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "罗弗敦最冷门也最出片的海滩之一，官方评为**世界最佳北极海滩**。",
          "白沙 + 海中巨石 + 翡翠色海浪 + 冬季白雪同框，完全没有旅行团。",
          "它就在网红 Haukland 沙滩的**旁边一个山坳**里，很多人只停 Haukland 就走了、错过这里。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**沙滩尽头巨石群**是标志构图；",
          "**南头有环岛徒步小径**（Uttakleiv Rundtur），夏季 2h 完成一圈可拍高机位。",
          "极光季这里是罗弗敦最少光污染的海滩之一。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Uttakleiv Beach Parking（NOK 30/h，机器缴费）"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Uttakleiv Beach（Leknes 出发约 25 min）**",
          "https://www.google.com/maps/search/?api=1&query=Uttakleiv%20Beach%EF%BC%88Leknes%20%E5%87%BA%E5%8F%91%E7%BA%A6%2025%20min%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Uttakleiv Beach Parking（N","到点先确认停车再下车拍"],
    funFact: "英文检索名：Uttakleiv Beach"
  },
  {
    id: "spot-lo-16",
    category: 'photo',
    country: "norway",
    title: "卡伯尔沃格小镇 Kabelvåg",
    shortDesc: "攻略里几乎没人提的童话感冷门渔镇。E10 途中顺路，一栋栋小木屋在雪中亮着暖",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Kabelvåg"],
    location: "Kabelvåg（E10 上，Svolvær 西南 5 km）",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-16-1.webp",
    gallery: [
      "/spots/lo-16-1.webp",
      "/spots/lo-16-2.webp"
    ],
    mapQuery: "Kabelvåg（E10 上，Svolvær 西南 5 km）",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "攻略里几乎没人提的**童话感冷门渔镇**。",
          "E10 途中顺路，一栋栋小木屋在雪中亮着暖黄灯，日落时粉调 + 雪山 + 教堂配得像童话插画。",
          "镇上没有任何\"打卡点\"，就在街上随便走都出片。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**Kabelvåg 教堂 Vågan Kirke**（挪威北部最大木质教堂，1898）是主视觉锚点；",
          "日落前一小时最佳；",
          "镇上超市是罗弗敦最便宜的一家，顺路补给。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：镇上任意街边免费停"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Kabelvåg（E10 上，Svolvær 西南 5 km）**",
          "https://www.google.com/maps/search/?api=1&query=Kabelv%C3%A5g%EF%BC%88E10%20%E4%B8%8A%EF%BC%8CSvolv%C3%A6r%20%E8%A5%BF%E5%8D%97%205%20km%EF%BC%89"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：镇上任意街边免费停","到点先确认停车再下车拍"],
    funFact: "英文检索名：Kabelvåg"
  },
  {
    id: "spot-lo-17",
    category: 'photo',
    country: "norway",
    title: "Svinøy 大桥俯瞰 Svolvær",
    shortDesc: "Svolvær 主岛与 Svinøya 小岛之间的短桥，站在桥上可以同时收入Sv",
    iconName: "Camera",
    urgency: "low",
    tags: ["罗弗敦","机位","Svinøy Bridge"],
    location: "Svinøybrua / Svinøya, Svolvær",
    bookingNeeded: 'no',
    costRange: "停车可能收费",
    coverImage: "/spots/lo-17-1.webp",
    gallery: [
      "/spots/lo-17-1.webp"
    ],
    mapQuery: "Svinøybrua / Svinøya, Svolvær",
    coordinates: "",
    details: [
      {
        sectionTitle: "怎么找到这个机位",
        items: [
          "Svolvær 主岛与 Svinøya 小岛之间的短桥，站在桥上可以同时收入**Svolvær 港口的红木屋、Svinøya 岛上错落的渔民 rorbuer、远处的雪山群峰**。",
          "视野比码头开阔，游客几乎为零。"
        ]
      },
      {
        sectionTitle: "拍摄要点",
        items: [
          "拍摄：**桥上人行道是最佳机位**，早晚金光时最出片；",
          "桥面窄小心过往车辆。",
          "散步过桥进 Svinøya 岛，能拍传统 rorbuer 木屋群近景。"
        ]
      },
      {
        sectionTitle: "停车与到达",
        items: [
          "停车：Svolvær 港口任意停车位步行 5 min，或桥头 Svinøya 侧路边"
        ]
      },
      {
        sectionTitle: "地图定位",
        items: [
          "Google Maps 搜索：**Svinøybrua / Svinøya, Svolvær**",
          "https://www.google.com/maps/search/?api=1&query=Svin%C3%B8ybrua%20%2F%20Svin%C3%B8ya%2C%20Svolv%C3%A6r"
        ]
      }
    ],
    quickChecklist: ["定位词复制到 Google Maps","停车：Svolvær 港口任意停车位步行 5 min，或","到点先确认停车再下车拍"],
    funFact: "英文检索名：Svinøy Bridge / Svinøybrua"
  }
];
