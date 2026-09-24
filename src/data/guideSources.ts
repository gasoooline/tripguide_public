export interface GuideSource {
  title: string;
  url: string;
}

const s = (title: string, url: string): GuideSource => ({ title, url });

/** 移除小红书链接中的 PC 端会话参数，避免移动端 universal link 无法定位到具体帖子 */
export function cleanXhsUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes('xiaohongshu.com')) {
      u.searchParams.delete('xsec_token');
      u.searchParams.delete('xsec_source');
    }
    return u.toString();
  } catch {
    return url;
  }
}

const SOURCE_ORIGIN_LABELS: Record<string, string> = {
  'xiaohongshu.com': '小红书',
  'safetravel.is': 'SafeTravel 官网',
  'vedur.is': 'Vedur.is 官网',
  'road.is': 'road.is 官网',
  'umferdin.is': 'umferdin.is 官网',
  'vegvesen.no': 'Vegvesen 官网',
  'parka.is': 'Parka 官网',
  'easypark.com': 'EasyPark 官网',
  'hertz.is': 'Hertz 官网',
  'torghatten.no': 'Torghatten 官网',
  'avinor.no': 'Avinor 官网',
  'bluelagoon.com': 'Blue Lagoon 官网',
  'skylagoon.com': 'Sky Lagoon 官网',
  'secretlagoon.is': 'Secret Lagoon 官网',
  'dive.is': 'Dive.is 官网',
  'kefairport.com': 'Kefairport 官网',
  'toll.no': '挪威海关官网',
  'tax-free.no': 'Tax-free.no 官网',
  'globalblue.com': 'Global Blue 官网',
  'visitnorway.com': 'Visit Norway 官网',
  'guidetoiceland.is': 'Guide to Iceland 官网',
  'guidetolofoten.com': 'Guide to Lofoten 官网',
  'icelandcars.is': 'Iceland Cars 官网',
  'holdurcarrental.is': 'Holdur 官网',
  'lotuscarrental.is': 'Lotus 官网',
  'icerental4x4.is': 'Icerental4x4 官网',
  'bluecarrental.is': 'Blue Car Rental 官网',
  'carsiceland.com': 'Cars Iceland 官网',
  'carsnorway.com': 'Cars Norway 官网',
  'reykjavikcars.com': 'Reykjavik Cars 官网',
  'icelandtogo.is': 'Iceland to Go 官网',
  'icelandroads.com': 'Iceland Roads 官网',
  'mapoficeland.is': 'mapoficeland.is 官网',
  'nasjonaleturistveger.no': '国家旅游公路官网',
  'wikivoyage.org': 'Wikivoyage',
  'grapevine.is': 'Reykjavík Grapevine',
  'adventures.is': 'Arctic Adventures 官网',
  'northsailing.is': 'North Sailing 官网',
  'funiceland.is': 'Fun Iceland 官网',
  'northstarrental.is': 'Northstar 官网',
  'phallus.is': '丁丁博物馆官网',
  'audiala.com': 'Audiala 官网',
  'yr.no': 'Yr.no 官网',
  'europajournalnews.com': 'Europa Journal',
  'norwayexplained.com': 'Norway Explained 官网',
  'tournews.tw': 'Tournews 官网',
  'itinerary.expert': 'Itinerary Expert',
  'expatfocus.com': 'Expat Focus',
  'besttravelscout.com': 'BestTravelScout',
  'vetrarakstur.com': 'Vetrarakstur 官网',
  'norgeguide.com': 'NorgeGuide 官网',
  'kisolvetyres.no': 'Kisolve 官网',
  'senlinmao.com': '森林猫',
  'visualfoodie.com': 'Visual Foodie',
  'sternatravel.com': 'SternA Travel',
  'cyalcohol.com': 'CY Alcohol',
  'yourfriendinreykjavik.com': 'Your Friend in Reykjavik',
  'thepetitewanderer.com': 'Petite Wanderer',
  'flynordic.com': 'FlyNordic',
  'arcticnorwaytours.com': 'Arctic Norway Tours',
  'spinyourdestination.com': 'Lofoten 目的地指南',
  'dronesgator.com': 'Dronesgator',
  'toomanyadapters.com': 'Too Many Adapters',
  'daily8.com': 'Daily8',
  'airports.guide': 'Airports Guide',
  'airporteu.com': 'AirportEU',
  'loudavymkrokem.cz': 'Lofoten 物价'
}

function normalizeSourceHost(url: string): string {
  try {
    let host = new URL(url).hostname.toLowerCase();
    host = host.replace(/^(www|en|cn|m)\./, '');
    host = host.replace(/^(www|en|cn|m)\./, '');
    return host;
  } catch {
    return '';
  }
}

/** 信息源前缀：小红书笔记标「小红书」，其余标站点官网名。 */
export function sourceOriginLabel(url: string): string {
  const host = normalizeSourceHost(url);
  if (!host) return '来源';
  if (SOURCE_ORIGIN_LABELS[host]) return SOURCE_ORIGIN_LABELS[host];
  const parent = host.split('.').slice(-2).join('.');
  if (SOURCE_ORIGIN_LABELS[parent]) return SOURCE_ORIGIN_LABELS[parent];
  const brand = host.split('.')[0] || host;
  return `${brand.charAt(0).toUpperCase()}${brand.slice(1)} 官网`;
}

/** 每张手册细则对应的信息源：官方站 + 小红书公开笔记，按卡片合并去重。 */
export const GUIDE_SOURCES: Record<string, GuideSource[]> = {
  "wb-01": [
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/"),
    s("Itinerary Expert 挪威租车", "https://itinerary.expert/norway/car-rental-in-norway/")
  ],
  "wb-02": [
    s("Cars Iceland 租车年龄规则", "https://carsiceland.com/blog/iceland-car-rental-age-requirements"),
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/")
  ],
  "wb-03": [
    s("Expat Focus 冰岛租车", "https://www.expatfocus.com?p=21844/"),
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/")
  ],
  "wb-04": [
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/")
  ],
  "wb-05": [
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/")
  ],
  "wb-06": [
    s("Hertz 冰岛租车官方指南", "https://www.hertz.is/zh-cn/car-rental-tips/how-to-rent-a-car-in-iceland/"),
    s("Itinerary Expert 挪威租车", "https://itinerary.expert/norway/car-rental-in-norway/")
  ],
  "wb-07": [
    s("Iceland to Go 保险套餐对照", "https://icelandtogo.is/insurance"),
    s("Lotus 保险条款（中文）", "https://www.lotuscarrental.is/zh/%E4%BF%9D%E9%99%A9%E6%9D%A1%E6%AC%BE")
  ],
  "wb-08": [
    s("Icerental4x4 险种说明", "https://www.icerental4x4.is/en/insurances/"),
    s("Lotus 保险条款（中文）", "https://www.lotuscarrental.is/zh/%E4%BF%9D%E9%99%A9%E6%9D%A1%E6%AC%BE")
  ],
  "wb-09": [
    s("Hertz 冰岛险种与除外项", "https://www.hertz.is/coveragesandextras"),
    s("Lotus 保险条款（中文）", "https://www.lotuscarrental.is/zh/%E4%BF%9D%E9%99%A9%E6%9D%A1%E6%AC%BE")
  ],
  "wb-10": [
    s("BestTravelScout 挪威租车保险", "https://besttravelscout.com/car-rental/norway")
  ],
  "wb-11": [
    s("Hertz 冰岛险种与除外项", "https://www.hertz.is/coveragesandextras"),
    s("BestTravelScout 挪威租车保险", "https://besttravelscout.com/car-rental/norway")
  ],
  "wb-12": [
    s("mapoficeland.is 冰岛限速与罚单表", "https://mapoficeland.is/iceland-speed-limits-fines")
  ],
  "wb-13": [
    s("mapoficeland.is 冰岛限速与罚单表", "https://mapoficeland.is/iceland-speed-limits-fines")
  ],
  "wb-14": [
    s("mapoficeland.is 冰岛限速与罚单表", "https://mapoficeland.is/iceland-speed-limits-fines"),
    s("Reykjavik Cars 驾驶指南", "https://www.reykjavikcars.com/blog/driving-iceland/driving-iceland-july")
  ],
  "wb-15": [
    s("mapoficeland.is 冰岛限速与罚单表", "https://mapoficeland.is/iceland-speed-limits-fines"),
    s("Reykjavik Cars 驾驶指南", "https://www.reykjavikcars.com/blog/driving-iceland/driving-iceland-july")
  ],
  "wb-16": [
    s("Cars Norway 挪威限速与罚单", "https://www.carsnorway.com/blog/norway-speed-limits")
  ],
  "wb-17": [
    s("Cars Norway 挪威限速与罚单", "https://www.carsnorway.com/blog/norway-speed-limits"),
    s("Statens vegvesen", "https://www.vegvesen.no")
  ],
  "wb-18": [
    s("Cars Norway 挪威限速与罚单", "https://www.carsnorway.com/blog/norway-speed-limits"),
    s("Statens vegvesen", "https://www.vegvesen.no")
  ],
  "wb-19": [
    s("NorgeGuide 挪威驾驶规则", "https://www.norgeguide.com/en/oppdag-norge-guide/planlegging-og-budsjettering/transport-veier-bilutleie/driving-rules-norway"),
    s("Statens vegvesen", "https://www.vegvesen.no")
  ],
  "wb-20": [
    s("Holdur 加油与支付指南", "http://www.holdurcarrental.is/travel-inspiration/how-to-pay-for-gas-in-iceland-self-drive"),
    s("Northstar 房车加油指南", "https://northstarrental.is/?p=586")
  ],
  "wb-21": [
    s("Holdur 加油与支付指南", "http://www.holdurcarrental.is/travel-inspiration/how-to-pay-for-gas-in-iceland-self-drive")
  ],
  "wb-22": [
    s("冰岛租车自驾血泪史", "https://www.xiaohongshu.com/explore/68e7ee5300000000050018ef?xsec_token=ABsj9lED1gwE8E1R1K5Zt6D8xUqMyQJ0f5KIulgppDEj4=&xsec_source=pc_search")
  ],
  "wb-23": [
    s("Vetrarakstur 油站间距", "https://www.vetrarakstur.com/is/articles/iceland-petrol-stations-fuel-guide")
  ],
  "wb-24": [
    s("Vetrarakstur 油站间距", "https://www.vetrarakstur.com/is/articles/iceland-petrol-stations-fuel-guide"),
    s("Holdur 加油与支付指南", "http://www.holdurcarrental.is/travel-inspiration/how-to-pay-for-gas-in-iceland-self-drive")
  ],
  "wb-25": [
    s("EasyPark 挪威停车指南", "https://www.easypark.com/en-no/parking-in-norway"),
    s("Guide to Iceland 停车费概况", "https://guidetoiceland.is/travel-info/car-hire-in-iceland"),
    s("停车缴费千万不要用 Parka", "https://www.xiaohongshu.com/explore/6a3025b60000000015027be9?xsec_token=ABKfEfT_3NvFCF1g9qHIjqW9Ke1DmdB7U_ci3fi9JC4Ow=&xsec_source=pc_search")
  ],
  "wb-26": [
    s("最容易被罚的 3 件事", "https://www.xiaohongshu.com/explore/69b3ee82000000001a027fa5?xsec_token=AB_NT-lFKm2sUaygUzfmLy6dZ3CamTnrrRdgwwSEEqA-8=&xsec_source=pc_search"),
    s("冰岛自驾 0 罚单攻略", "https://www.xiaohongshu.com/explore/690eb59d0000000004006283?xsec_token=ABMS2ufiLKzAAXOQ6HjJjbx7mGp6bCuPK9RyHM2cIV6_o=&xsec_source=pc_search")
  ],
  "wb-27": [
    s("最容易被罚的 3 件事", "https://www.xiaohongshu.com/explore/69b3ee82000000001a027fa5?xsec_token=AB_NT-lFKm2sUaygUzfmLy6dZ3CamTnrrRdgwwSEEqA-8=&xsec_source=pc_search")
  ],
  "wb-28": [
    s("停车缴费千万不要用 Parka", "https://www.xiaohongshu.com/explore/6a3025b60000000015027be9?xsec_token=ABKfEfT_3NvFCF1g9qHIjqW9Ke1DmdB7U_ci3fi9JC4Ow=&xsec_source=pc_search"),
    s("冰岛租车自驾血泪史", "https://www.xiaohongshu.com/explore/68e7ee5300000000050018ef?xsec_token=ABsj9lED1gwE8E1R1K5Zt6D8xUqMyQJ0f5KIulgppDEj4=&xsec_source=pc_search")
  ],
  "wb-29": [
    s("Guide to Lofoten", "https://guidetolofoten.com")
  ],
  "wb-30": [
    s("挪威罗弗敦自驾必看：停车大踩坑 + 电车充电", "https://www.xiaohongshu.com/explore/6a943824000000002a030479?xsec_token=AByo59d9ETKgPbmTlndKg5rjvzH3G4lKVGlgHV_oXM1uY=&xsec_source=pc_search")
  ],
  "wb-32": [
    s("冰岛自驾 0 罚单攻略", "https://www.xiaohongshu.com/explore/690eb59d0000000004006283?xsec_token=ABMS2ufiLKzAAXOQ6HjJjbx7mGp6bCuPK9RyHM2cIV6_o=&xsec_source=pc_search")
  ],
  "wb-33": [
    s("停车缴费千万不要用 Parka", "https://www.xiaohongshu.com/explore/6a3025b60000000015027be9?xsec_token=ABKfEfT_3NvFCF1g9qHIjqW9Ke1DmdB7U_ci3fi9JC4Ow=&xsec_source=pc_search"),
    s("最容易被罚的 3 件事", "https://www.xiaohongshu.com/explore/69b3ee82000000001a027fa5?xsec_token=AB_NT-lFKm2sUaygUzfmLy6dZ3CamTnrrRdgwwSEEqA-8=&xsec_source=pc_search")
  ],
  "wb-34": [
    s("挪威罗弗敦自驾必看：停车大踩坑 + 电车充电", "https://www.xiaohongshu.com/explore/6a943824000000002a030479?xsec_token=AByo59d9ETKgPbmTlndKg5rjvzH3G4lKVGlgHV_oXM1uY=&xsec_source=pc_search")
  ],
  "wb-35": [
    s("Iceland Cars 风险提示", "https://www.icelandcars.is/blogs/iceland-road-signs"),
    s("Wikivoyage 冰岛驾驶", "https://en.wikivoyage.org/wiki/Iceland")
  ],
  "wb-36": [
    s("Iceland Cars 风险提示", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-37": [
    s("Vedur.is 冰岛气象", "https://en.vedur.is")
  ],
  "wb-38": [
    s("冰岛自驾开车门要当心，我们门被吹断了", "https://www.xiaohongshu.com/explore/67003ca1000000001902e9ad?xsec_token=ABnjKq7lcONS5r2s4R1pdFt2K2kiiMNfN-GnVKx8TsT7s=&xsec_source=pc_search")
  ],
  "wb-39": [
    s("冰岛大风吹坏车门，租车平台竟表示全险不含？", "https://www.xiaohongshu.com/explore/6866a6a2000000001502338e?xsec_token=ABBpfCIqwLXjhPFo2e5f3_UM2iL5ZXJ9hzJSqlD5rp06g=&xsec_source=pc_search")
  ],
  "wb-40": [
    s("冰岛自驾 0 罚单攻略", "https://www.xiaohongshu.com/explore/690eb59d0000000004006283?xsec_token=ABMS2ufiLKzAAXOQ6HjJjbx7mGp6bCuPK9RyHM2cIV6_o=&xsec_source=pc_search"),
    s("冰岛租车自驾血泪史", "https://www.xiaohongshu.com/explore/68e7ee5300000000050018ef?xsec_token=ABsj9lED1gwE8E1R1K5Zt6D8xUqMyQJ0f5KIulgppDEj4=&xsec_source=pc_search")
  ],
  "wb-41": [
    s("Iceland Cars 路标与 F 路", "https://www.icelandcars.is/blogs/iceland-road-signs"),
    s("Wikivoyage 冰岛驾驶", "https://en.wikivoyage.org/wiki/Iceland")
  ],
  "wb-42": [
    s("Wikivoyage 冰岛驾驶", "https://en.wikivoyage.org/wiki/Iceland"),
    s("Iceland Cars 路标与 F 路", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-43": [
    s("冰岛内陆高地自驾车陷了", "https://www.xiaohongshu.com/explore/6a3d8bf600000000060363a3?xsec_token=ABfa3WzzCMDiqSIEbeu-2cn-JrSfek10lW0M14vKJV1F8=&xsec_source=pc_search")
  ],
  "wb-44": [
    s("Iceland Cars 路标与 F 路", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-45": [
    s("Iceland Cars 路标与 F 路", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-46": [
    s("SafeTravel.is", "https://safetravel.is"),
    s("Wikivoyage 冰岛驾驶", "https://en.wikivoyage.org/wiki/Iceland")
  ],
  "wb-47": [
    s("罗弗敦自驾这一路遇见的翻车", "https://www.xiaohongshu.com/explore/6995b401000000000a03ce0f?xsec_token=ABNiEoZHrlFHAKLhGuP2p1DKppIpJnyF8w19E1ojDe8pY=&xsec_source=pc_search")
  ],
  "wb-48": [
    s("Iceland Cars 路标与 F 路", "https://www.icelandcars.is/blogs/iceland-road-signs"),
    s("Vegvesen Trafikk 挪威路况", "https://www.vegvesen.no/trafikk")
  ],
  "wb-49": [
    s("Iceland Cars 应急指南", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-50": [
    s("Iceland Cars 应急指南", "https://www.icelandcars.is/blogs/iceland-road-signs")
  ],
  "wb-51": [
    s("Iceland Cars 应急指南", "https://www.icelandcars.is/blogs/iceland-road-signs"),
    s("SafeTravel.is", "https://safetravel.is")
  ],
  "wb-52": [
    s("冰岛极端天气自驾事故经验分享", "https://www.xiaohongshu.com/explore/679d683b000000002a002073?xsec_token=AB_Fy-vlvNKSYYI-qpYeIYVe5pavb2G97m6e9rcND8JOk=&xsec_source=pc_search")
  ],
  "wb-53": [
    s("SafeTravel.is", "https://safetravel.is")
  ],
  "wb-54": [
    s("Guide to Lofoten 渡轮时刻与价格", "https://guidetolofoten.com/?p=7076/"),
    s("Torghatten Nord 官网", "https://www.torghatten.no")
  ],
  "wb-55": [
    s("Guide to Lofoten 渡轮时刻与价格", "https://guidetolofoten.com/?p=7076/"),
    s("Torghatten Nord 官网", "https://www.torghatten.no")
  ],
  "wb-56": [
    s("Avinor 埃沃内斯机场官方", "https://avinor.no/en/airport/evenes/"),
    s("EVE 机场交通与租车指南", "https://airporteu.com/harstad-narvik-airport-evenes")
  ],
  "wb-57": [
    s("冰岛超市购买指南", "https://www.senlinmao.com/travel-tips/iceland-supermarket-shopping-guide-for-hong-kong-and-taiwan-travellers"),
    s("Grapevine 冰岛节假日营业时间", "https://grapevine.is/news/2025/04/17/easter-2025-opening-hours-in-iceland/")
  ],
  "wb-58": [
    s("Lofoten 超市与物价", "https://loudavymkrokem.cz/en?p=214023")
  ],
  "wb-59": [
    s("Grapevine 冰岛节假日营业时间", "https://grapevine.is/news/2025/04/17/easter-2025-opening-hours-in-iceland/")
  ],
  "wb-60": [
    s("冰岛超市购买指南", "https://www.senlinmao.com/travel-tips/iceland-supermarket-shopping-guide-for-hong-kong-and-taiwan-travellers")
  ],
  "wb-61": [
    s("Hertz 冰岛超市指南", "https://www.hertz.is/zh-tw/travel-info/iceland-supermarket-grocery-store-guide/"),
    s("visualfoodie 冰岛超市解析", "https://visualfoodie.com/iceland-grocery-store-food-places-explained/"),
    s("小猪超市必买", "https://www.xiaohongshu.com/explore/678be1590000000016020bfd?xsec_token=ABOCddIMiHQcvUjGK2fdyKLzzsuGxqBY-dsTWAmF0v4BU=&xsec_source=pc_search")
  ],
  "wb-62": [
    s("SternA Travel 购物指南", "https://sternatravel.com/guides/shopping-in-reykjavik-best-souvenirs-and-where-to-buy-them/"),
    s("伴手礼红黑榜", "https://www.xiaohongshu.com/explore/69b599d6000000001b002c04?xsec_token=ABH8ZInOufS6zZcXfc91ne50KRf4aw_LmuarCJTPITQDE=&xsec_source=pc_search"),
    s("纪念品附价格", "https://www.xiaohongshu.com/explore/69f59ce70000000035027aa2?xsec_token=ABKRLTKWEjxMpIWiChYGDmKXEV0GuOP005FyEXFUE9xz0=&xsec_source=pc_search")
  ],
  "wb-63": [
    s("伴手礼红黑榜", "https://www.xiaohongshu.com/explore/69b599d6000000001b002c04?xsec_token=ABH8ZInOufS6zZcXfc91ne50KRf4aw_LmuarCJTPITQDE=&xsec_source=pc_search"),
    s("SternA Travel 购物指南", "https://sternatravel.com/guides/shopping-in-reykjavik-best-souvenirs-and-where-to-buy-them/")
  ],
  "wb-64": [
    s("Dive.is（Silfra）", "https://www.dive.is")
  ],
  "wb-66": [
    s("Blue Lagoon 官网", "https://www.bluelagoon.com"),
    s("Sky Lagoon 官网", "https://www.skylagoon.com/")
  ],
  "wb-67": [
    s("Arctic Adventures 冰川徒步 / 冰洞", "https://adventures.is/iceland/day-tours/ice-caves/skaftafell-ice-cave-glacier-hike/")
  ],
  "wb-68": [
    s("North Sailing 观鲸", "https://northsailing.is/tours/whale-watching/")
  ],
  "wb-69": [
    s("Guide to Lofoten", "https://guidetolofoten.com")
  ],
  "wb-70": [
    s("Guide to Lofoten", "https://guidetolofoten.com")
  ],
  "wb-71": [
    s("Petite Wanderer 冰岛穷游指南", "https://thepetitewanderer.com/2025/04/28/iceland-on-a-budget/"),
    s("免费温泉", "https://www.xiaohongshu.com/explore/6a3f405c000000001c025420?xsec_token=ABHr-zG85SNXd8XFlRXkIG8Qx1bReftHEIxquAae_rS8A=&xsec_source=pc_search")
  ],
  "wb-72": [
    s("secretlagoon.is 官方价目", "https://secretlagoon.is/"),
    s("Your Friend in Reykjavik 温泉指南", "https://yourfriendinreykjavik.com/best-hot-springs-in-iceland/")
  ],
  "wb-73": [
    s("中国胃在冰岛", "https://www.xiaohongshu.com/explore/694e8de3000000001e010bc1?xsec_token=ABF3vJok9xCUQrA8GcO9-EzpiU4sJG1131zkEtC34-eLU=&xsec_source=pc_search"),
    s("冰岛美食记", "https://www.xiaohongshu.com/explore/6a7e4d050000000011023a48?xsec_token=ABV7tNLk7BgvNWpBxMZ4sycyWkz3uCVnXVycR_p1ooLP8=&xsec_source=pc_search")
  ],
  "wb-74": [
    s("躺平路线机位", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngGyejlht9ALNOGLcSt2ImaYQ=&xsec_source=pc_search"),
    s("说点大家没说的", "https://www.xiaohongshu.com/explore/69d74897000000002302369c?xsec_token=ABtd5qp1Q7d8V3xT-EX3C2dTK-QPhiub_aU4al7Fj7b3M=&xsec_source=pc_search")
  ],
  "wb-75": [
    s("说点大家没说的", "https://www.xiaohongshu.com/explore/69d74897000000002302369c?xsec_token=ABtd5qp1Q7d8V3xT-EX3C2dTK-QPhiub_aU4al7Fj7b3M=&xsec_source=pc_search"),
    s("3日环岛", "https://www.xiaohongshu.com/explore/69962edc000000001d025dbd?xsec_token=ABL67l6mIdnzFQHEQY4r4uxH84H3VAMY3DGinfZVlwnkA=&xsec_source=pc_search")
  ],
  "wb-76": [
    s("FlyNordic 罗弗敦指南", "https://www.flynordic.com/?p=477/"),
    s("Arctic Norway Tours 罗弗敦指南", "https://arcticnorwaytours.com/en-uk/reine-lofoten-guide")
  ],
  "wb-77": [
    s("自驾3天", "https://www.xiaohongshu.com/explore/6964662c000000002200916f?xsec_token=ABwQoiIOJqqh4Gwc2scy-EIWe4x3AYQexiSevxSj8TRM0=&xsec_source=pc_search"),
    s("3日环岛", "https://www.xiaohongshu.com/explore/69962edc000000001d025dbd?xsec_token=ABL67l6mIdnzFQHEQY4r4uxH84H3VAMY3DGinfZVlwnkA=&xsec_source=pc_search"),
    s("Lofoten 目的地指南", "https://spinyourdestination.com/popular-destinations/lofoten")
  ],
  "wb-78": [
    s("Guide to Iceland 停车费概况", "https://guidetoiceland.is/travel-info/car-hire-in-iceland")
  ],
  "wb-79": [
    s("Hertz 冰岛 KEF 退税指南", "https://www.hertz.is/iceland-travel-info/keflavik-international-airport-iceland-best-guide")
  ],
  "wb-80": [
    s("Global Blue 挪威退税", "https://www.globalblue.com/en/shoppers/how-to-shop-tax-free/destinations/norway")
  ],
  "wb-81": [
    s("Blue Car Rental 冰岛联网指南", "https://www.bluecarrental.is/blog/stay-connected-in-iceland-wi-fi-and-mobile-tips-for-self-drive-trips/")
  ],
  "wb-82": [
    s("Too Many Adapters 冰岛 SIM/eSIM", "https://toomanyadapters.com/buying-sim-card-iceland/"),
    s("Blue Car Rental 冰岛联网指南", "https://www.bluecarrental.is/blog/stay-connected-in-iceland-wi-fi-and-mobile-tips-for-self-drive-trips/")
  ],
  "wb-83": [
    s("Guide to Iceland 冰岛无人机法规", "https://guidetoiceland.is/pl/informacja-turystyczna/flying-drones-in-iceland"),
    s("冰岛无人机禁飞区（中文）", "https://cn.guidetoiceland.is/travel-info/rules-of-flying-drones-in-iceland")
  ],
  "wb-84": [
    s("Visit Norway 挪威无人机规则", "https://visitnorway.com/plan-your-trip/drone-rules/"),
    s("Dronesgator 挪威无人机（NSM 申报）", "https://dronesgator.com/drone-laws-in-norway")
  ],
  "wb-85": [
    s("Kisolve 挪威冬季胎法规", "https://kisolvetyres.no/en/blog/norway-winter-tyre-laws-complete-guide")
  ],
  "wb-86": [
    s("NorgeGuide 冬季驾驶清单", "https://www.norgeguide.com/en/oppdag-norge-guide/planlegging-og-budsjettering/transport-veier-bilutleie/winter-driving-checklist")
  ],
  "wb-87": [
    s("Wikivoyage Helsinki Airport", "https://en.m.wikivoyage.org/wiki/Helsinki_Airport")
  ],
  "wb-88": [
    s("Airports Guide 赫尔辛基机场", "https://airports.guide/hel"),
    s("Wikivoyage Helsinki Airport", "https://en.m.wikivoyage.org/wiki/Helsinki_Airport")
  ],
  "wb-89": [
    s("Guide to Iceland 凯夫拉维克机场", "https://cn.guidetoiceland.is/travel-iceland/drive/keflavik-international-airport"),
    s("Keflavík Airport 官方商店", "https://www.kefairport.com/check-in-information")
  ],
  "wb-90": [
    s("Daily8 挪威机场免税价差调查", "https://www.daily8.com/en/article/d45bec1069e4e1a1fbd097ac8f4e69d9"),
    s("Airports Guide 奥斯陆机场", "https://airports.guide/OSL"),
    s("Avinor 埃沃内斯机场官方", "https://avinor.no/en/airport/evenes/")
  ],
  "wb-91": [
    s("Fun Iceland 签证与海关", "https://www.funiceland.is/facts/travel-guide/visa-customs/"),
    s("CY Alcohol 冰岛酒税指南", "https://cyalcohol.com/article/what-is-duty-and-tax-on-alcohol-brought-into-iceland")
  ],
  "wb-92": [
    s("Tolletaten 挪威海关", "http://toll.no/en/goods/alcohol-and-tobacco/simplified-customs-declaration"),
    s("Travel Retail Norway 配额说明", "https://www.tax-free.no/en/kundeservice/kvote/no/en/merker/0758/dior")
  ],
  "wb-93": [
    s("Guide to Iceland 冰岛道路收费", "https://guidetoiceland.is/travel-info/road-tolls-in-iceland"),
    s("Iceland Roads 桥隧收费", "https://icelandroads.com/guides/bridges-tunnels"),
    s("Happy Campers 2026 收费更新", "https://europajournalnews.com/driving-in-iceland-parking-fees-and-road-tolls-2026-update")
  ],
  "wb-94": [
    s("Map of Iceland 路况官方信源", "https://mapoficeland.is/guides/how-to-check-iceland-road-conditions"),
    s("umferdin.is 实时路况", "https://www.umferdin.is/en")
  ],
  "wb-95": [
    s("Norway Explained 收费站原理", "https://norwayexplained.com/toll-booths-in-norway/"),
    s("挪威租车攻略 AutoPASS 收费", "https://tournews.tw/norway-car-rental-guide-2026/")
  ],
  "wb-96": [
    s("Statens vegvesen", "https://www.vegvesen.no"),
    s("Nasjonal turistveg Lofoten", "https://www.nasjonaleturistveger.no/en/routes/lofoten")
  ],
  "wb-97": [
    s("Statens vegvesen", "https://www.vegvesen.no")
  ]
,
  "wb-31": [
    s("Norway Explained 收费站原理", "https://norwayexplained.com/toll-booths-in-norway/"),
    s("挪威租车攻略 AutoPASS 收费", "https://tournews.tw/norway-car-rental-guide-2026/")
  ],
  "wb-65": [
    s("丁丁博物馆官网", "https://phallus.is")
  ],
"spot-aur-iphone": [
    s("冰岛自助追极光指南", "https://www.xiaohongshu.com/explore/6914e34c00000000040038ba?xsec_token=ABJPGxRxEmvJgHUEFwLM3EF4dY-bIvJ4ffQ4jLPB2QUOs=&xsec_source=pc_search"),
    s("Vedur.is 极光预报", "https://en.vedur.is/weather/forecasts/aurora/")
  ],
  "spot-aur-pocket": [
    s("冰岛自助追极光指南", "https://www.xiaohongshu.com/explore/6914e34c00000000040038ba?xsec_token=ABJPGxRxEmvJgHUEFwLM3EF4dY-bIvJ4ffQ4jLPB2QUOs=&xsec_source=pc_search"),
    s("Vedur.is 极光预报", "https://en.vedur.is/weather/forecasts/aurora/")
  ],
  "spot-aur-action": [
    s("冰岛自助追极光指南", "https://www.xiaohongshu.com/explore/6914e34c00000000040038ba?xsec_token=ABJPGxRxEmvJgHUEFwLM3EF4dY-bIvJ4ffQ4jLPB2QUOs=&xsec_source=pc_search"),
    s("Vedur.is 极光预报", "https://en.vedur.is/weather/forecasts/aurora/")
  ],
  "spot-aur-prep": [
    s("Vedur.is 极光预报", "https://en.vedur.is/weather/forecasts/aurora/"),
    s("Yr.no 挪威天气与云图", "https://www.yr.no"),
    s("冰岛自助追极光指南", "https://www.xiaohongshu.com/explore/6914e34c00000000040038ba?xsec_token=ABJPGxRxEmvJgHUEFwLM3EF4dY-bIvJ4ffQ4jLPB2QUOs=&xsec_source=pc_search")
  ],
"spot-is-10": [
    s("冰岛🇮🇸. 雷克雅未克大教堂", "https://www.xiaohongshu.com/explore/692a6c3b000000001e0295d6?xsec_token=ABM26cWKkrpcph1fpNOBhvQMMypBPurZ410XSNnu_wMhk=&xsec_source=pc_search"),
    s("Hallgrímskirkja Visitor Guide（票价/开放时间）", "https://audiala.com/en/iceland/reykjavik/hallgrimskirkja")
  ],
  "spot-is-1": [
    s("一口气喷了四次的间歇泉（附攻略）", "https://www.xiaohongshu.com/explore/69a794e7000000001a027e33?xsec_token=ABJNcbcihhsYweauWCJthQzgpZ3RDVd3mZQrb78MLsh0A=&xsec_source=pc_search"),
    s("冰岛机位收藏18张壁纸（P17 黄金瀑布）", "https://www.xiaohongshu.com/explore/694d4424000000001e00b8a3?xsec_token=ABh-Pl7LIPuGWc98A6-TvKNTDrT5pm1QGOR061QeatZyM=&xsec_source=pc_search")
  ],
  "spot-is-2": [
    s("冰岛机位收藏18张壁纸", "https://www.xiaohongshu.com/explore/694d4424000000001e00b8a3?xsec_token=ABh-Pl7LIPuGWc98A6-TvKNTDrT5pm1QGOR061QeatZyM=&xsec_source=pc_search"),
    s("冰岛黄金圈的美丽严重被低估", "https://www.xiaohongshu.com/explore/69bae0ce00000000210040c5?xsec_token=ABLtTAhMG04riXyZ_Gbz8rv7BCm5jZK5TwToyThLNGBpU=&xsec_source=pc_search")
  ],
  "spot-is-3": [
    s("塞里雅兰瀑布 + 斯科加瀑布保姆级打卡攻略（赞222）", "https://www.xiaohongshu.com/explore/68d62fb9000000001400b19b?xsec_token=ABmcWpGEcbukHCphK_fnmifCl89v7-LDJa6z2CNXNurk4=&xsec_source=pc_search")
  ],
  "spot-is-4": [
    s("塞里雅兰瀑布 + 斯科加瀑布保姆级打卡攻略（赞222）", "https://www.xiaohongshu.com/explore/68d62fb9000000001400b19b?xsec_token=ABmcWpGEcbukHCphK_fnmifCl89v7-LDJa6z2CNXNurk4=&xsec_source=pc_search")
  ],
  "spot-is-5": [
    s("冰岛的飞机残骸总要去的吧！", "https://www.xiaohongshu.com/explore/68f0cd56000000000402083d?xsec_token=AB5SXHKnhRgHYjTZnp5rbBhNE2XZypHDw0falAweyARYg=&xsec_source=pc_search")
  ],
  "spot-is-6": [
    s("黑沙滩的蓝调时刻", "https://www.xiaohongshu.com/explore/6922aa2a000000001e003fd1?xsec_token=ABpKCBGkLDX4De8EbN6ZVO8kojX6IS6UFwZu8DcjCquLY=&xsec_source=pc_search"),
    s("维克黑沙滩末日美学的5种打开方式", "https://www.xiaohongshu.com/explore/691ed63a000000001e00eac2?xsec_token=AB5Qt2W27KupkV1vBTjZx5OlbFaxxu69cFXLipMNOPEao=&xsec_source=pc_search")
  ],
  "spot-is-7": [
    s("在维克红教堂等一场日出", "https://www.xiaohongshu.com/explore/69e36db2000000001a02e8e2?xsec_token=ABEdJQyl_lI8unlLtDeAYBPyjjHLjzu-aSYh8rRmpDZOI=&xsec_source=pc_search"),
    s("维克小镇绝佳机位", "https://www.xiaohongshu.com/explore/68d8e8e0000000000e022166?xsec_token=ABCU7KTeC43Y9cjkWMA9mJ5vnQA_g9PlFFQcpOQsgkaro=&xsec_source=pc_search")
  ],
  "spot-is-8": [
    s("维克黑沙滩末日美学的5种打开方式（Dyrhólaey 段）", "https://www.xiaohongshu.com/explore/691ed63a000000001e00eac2?xsec_token=AB5Qt2W27KupkV1vBTjZx5OlbFaxxu69cFXLipMNOPEao=&xsec_source=pc_search")
  ],
  "spot-is-9": [
    s("冰岛日记 DAY2 — 冰河湖 & 钻石沙滩", "https://www.xiaohongshu.com/explore/68cbf879000000000e0316b0?xsec_token=ABd_tu0UcKFD7jE2yhQipFAyob9O0mLmJ-0nZ3-OjGAYs=&xsec_source=pc_search")
  ],
  "spot-is-11": [
    s("冰岛拍照抄作业❗6个小众机位", "https://www.xiaohongshu.com/explore/6a8acb33000000003300b8cc?xsec_token=ABVEGslY6RGZbhtpdNcBFAvPC71Dm7AaJXONbiHu6DcA8=&xsec_source=pc_search"),
    s("冰岛不露脸拍照攻略（p15-16）", "https://www.xiaohongshu.com/explore/68e8725600000000070385f3?xsec_token=ABzXlfrEjOEcpvhLGVBSaBPHIQFHWJDcpb8Uni_H1G_2c=&xsec_source=pc_search")
  ],
  "spot-is-12": [
    s("冰岛｜绝版机位⚠️天堂之门围起来了", "https://www.xiaohongshu.com/explore/6a845d06000000002402da0d?xsec_token=ABiC4mf80d-tfr8GHgctK00oQ0Q1HEgh2j79c1EAlSmNM=&xsec_source=pc_search")
  ],
  "spot-is-13": [
    s("冰岛拍照抄作业❗6个小众机位（p2）", "https://www.xiaohongshu.com/explore/6a8acb33000000003300b8cc?xsec_token=ABVEGslY6RGZbhtpdNcBFAvPC71Dm7AaJXONbiHu6DcA8=&xsec_source=pc_search")
  ],
  "spot-is-14": [
    s("冰岛机位分享｜寻找我的 25 号底片（p2）", "https://www.xiaohongshu.com/explore/6a7086ca000000003300fd12?xsec_token=AB6Lr3ZEVn0gMRREFmykll4W0bEtPzhJA2IOG7xyi-0Bc=&xsec_source=pc_search")
  ],
  "spot-is-15": [
    s("冰岛机位分享｜寻找我的 25 号底片（p3）", "https://www.xiaohongshu.com/explore/6a7086ca000000003300fd12?xsec_token=AB6Lr3ZEVn0gMRREFmykll4W0bEtPzhJA2IOG7xyi-0Bc=&xsec_source=pc_search")
  ],
  "spot-is-16": [
    s("斯图拉吉尔峡谷 避坑+攻略", "https://www.xiaohongshu.com/explore/6aa93056000000002600a130?xsec_token=ABWHPwAQXplvakndQoiRmdvfMdM6SHis4n1hKBvFkyESQ=&xsec_source=pc_search")
  ],
  "spot-is-17": [
    s("冰岛高地抹茶山，最像外星球的地方", "https://www.xiaohongshu.com/explore/6a973fb2000000002502e97b?xsec_token=ABooTkZgfAeNjM8MWD5g5cqh4zZwQRorR7tYKiXRy9G2w=&xsec_source=pc_search")
  ],
  "spot-is-18": [
    s("冰岛🇮🇸|黄金圈攻略", "https://www.xiaohongshu.com/explore/67de5e35000000000b016d33?xsec_token=ABYmDx3nInGqLdOKUNJqdgDX_MO3Yce5vTMcXQGA_kFo0=&xsec_source=pc_search")
  ],
  "spot-is-19": [
    s("冰岛 Kerid 火山口｜大自然的调色盘", "https://www.xiaohongshu.com/explore/691be889000000000402b13b?xsec_token=ABzFRPCy4CSzgIZCAW-oWLVa3GRzEnnzvM0m1M4NKgeIg=&xsec_source=pc_search")
  ],
  "spot-is-20": [
    s("雷克雅未克半日游保姆级攻略", "https://www.xiaohongshu.com/explore/68d888b5000000001301a064?xsec_token=ABCU7KTeC43Y9cjkWMA9mJ5rvjsbzAzvRXoOT6qtn4NI8=&xsec_source=pc_search"),
    s("雷克雅未克景点排名（Harpa 顶级）", "https://www.xiaohongshu.com/explore/6a4c6fac00000000070290b9?xsec_token=ABJqf5CDwvpWZq7l04XkqfoJt1zJMDLg2mzhbGRC4gnZg=&xsec_source=pc_search")
  ],
  "spot-is-21": [
    s("雷克雅未克景点从夯到拉纯主观排名（Sun Voyager 顶级）", "https://www.xiaohongshu.com/explore/6a4c6fac00000000070290b9?xsec_token=ABJqf5CDwvpWZq7l04XkqfoJt1zJMDLg2mzhbGRC4gnZg=&xsec_source=pc_search")
  ],
  "spot-is-22": [
    s("冰岛最震撼的 20 分钟（Perlan 火山秀）", "https://www.xiaohongshu.com/explore/6989152e000000000a02b728?xsec_token=ABsNemAt8SP-Qmun1cA4LFocmuemXwzGZDT-vXQ6IEnFA=&xsec_source=pc_search")
  ],
  "spot-is-23": [
    s("Sky Lagoon 极简攻略", "https://www.xiaohongshu.com/explore/69dc87230000000021039aa6?xsec_token=ABpTIaw5lY_Hszm6B67ZfxibZ6egyMlkIM5Mk-6bf_KrI=&xsec_source=pc_search"),
    s("冰岛最出片的地方居然是温泉", "https://www.xiaohongshu.com/explore/69d940d1000000001f00200f?xsec_token=AB88tnpb8kFyxSWT5XrcTwvoNQgje8OolrmmkImguzxZk=&xsec_source=pc_search")
  ],
  "spot-is-24": [
    s("冰岛自助追极光指南", "https://www.xiaohongshu.com/explore/6914e34c00000000040038ba?xsec_token=ABJPGxRxEmvJgHUEFwLM3EF4dY-bIvJ4ffQ4jLPB2QUOs=&xsec_source=pc_search")
  ],
  "spot-lo-1": [
    s("罗弗敦躺平路线 + 出片机位分享（赞1112）", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("在挪威拍到了人生照片（赞1264）", "https://www.xiaohongshu.com/explore/69e6fd76000000001a02368a?xsec_token=ABubmPCTOXaCGZWol6InS5eXVzzwhpEu_FUFRZnlUGOJ4=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-18": [
    s("罗弗敦几个靠近住宿的小众极光拍摄点", "https://www.xiaohongshu.com/explore/6900dc23000000000400312a?xsec_token=ABn2wfj4Wq_gK5FkddK2W-uCq2iBLh8-a25f1DYVRT68w=&xsec_source=pc_search")
  ],
  "spot-lo-2": [
    s("罗弗敦躺平路线 + 出片机位分享（赞1112）", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("在挪威拍到了人生照片（赞1264）", "https://www.xiaohongshu.com/explore/69e6fd76000000001a02368a?xsec_token=ABubmPCTOXaCGZWol6InS5eXVzzwhpEu_FUFRZnlUGOJ4=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-3": [
    s("这里有一座世界上最美的海岛足球场", "https://www.xiaohongshu.com/explore/69de197400000000230223c6?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5M0cdFu58cAlSms7Nt5THgs=&xsec_source=pc_search"),
    s("罗弗敦经典打卡点攻略版", "https://www.xiaohongshu.com/explore/698ca0e90000000016009579?xsec_token=ABo8jGtPDIY98X99e0vnwTwQJ6H7BeXlg6ChwEiV5hyMY=&xsec_source=pc_search")
  ],
  "spot-lo-4": [
    s("比孤独星球封面还夯的罗弗敦机位全集（赞398）", "https://www.xiaohongshu.com/explore/6a3189f8000000000803c233?xsec_token=ABmp7WXDv1Nr49lz1Z5Y18-ax0X-Xrtl4VR4aSJuMgD3U=&xsec_source=pc_search")
  ],
  "spot-lo-5": [
    s("在挪威拍到了人生照片（赞1264）", "https://www.xiaohongshu.com/explore/69e6fd76000000001a02368a?xsec_token=ABubmPCTOXaCGZWol6InS5eXVzzwhpEu_FUFRZnlUGOJ4=&xsec_source=pc_search"),
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search")
  ],
  "spot-lo-20": [
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-6": [
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search")
  ],
  "spot-lo-7": [
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search")
  ],
  "spot-lo-8": [
    s("在挪威拍到了人生照片（赞1264）", "https://www.xiaohongshu.com/explore/69e6fd76000000001a02368a?xsec_token=ABubmPCTOXaCGZWol6InS5eXVzzwhpEu_FUFRZnlUGOJ4=&xsec_source=pc_search")
  ],
  "spot-lo-9": [
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("比孤独星球封面还夯的机位全集", "https://www.xiaohongshu.com/explore/6a3189f8000000000803c233?xsec_token=ABmp7WXDv1Nr49lz1Z5Y18-ax0X-Xrtl4VR4aSJuMgD3U=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-19": [
    s("罗弗敦几个靠近住宿的小众极光拍摄点", "https://www.xiaohongshu.com/explore/6900dc23000000000400312a?xsec_token=ABn2wfj4Wq_gK5FkddK2W-uCq2iBLh8-a25f1DYVRT68w=&xsec_source=pc_search")
  ],
  "spot-lo-10": [
    s("比孤独星球封面还夯的罗弗敦机位全集", "https://www.xiaohongshu.com/explore/6a3189f8000000000803c233?xsec_token=ABmp7WXDv1Nr49lz1Z5Y18-ax0X-Xrtl4VR4aSJuMgD3U=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享（赞1112）", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-11": [
    s("罗弗敦躺平路线 + 出片机位分享（赞1112）", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-12": [
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search"),
    s("在挪威拍到了人生照片（赞1264）", "https://www.xiaohongshu.com/explore/69e6fd76000000001a02368a?xsec_token=ABubmPCTOXaCGZWol6InS5eXVzzwhpEu_FUFRZnlUGOJ4=&xsec_source=pc_search")
  ],
  "spot-lo-13": [
    s("我的人生就应浪费在这种地方｜罗弗敦 Reine", "https://www.xiaohongshu.com/explore/68dbec2900000000040009ee?xsec_token=AB00j9BqaN7vQ-DCTsWbBQOTNZgcsuHYt45rsclRVFbyw=&xsec_source=pc_search")
  ],
  "spot-lo-14": [
    s("罗弗敦躺平路线 + 出片机位分享（赞1112）", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search"),
    s("罗弗敦出片机位附定位", "https://www.xiaohongshu.com/explore/69dea80f000000001b0013fb?xsec_token=ABA4f2Ed4-xnQAcJa5bkQM5GK3FFfil2qp-QM6Biccrag=&xsec_source=pc_search"),
    s("罗弗敦躺平路线 + 出片机位分享", "https://www.xiaohongshu.com/explore/691d8743000000001b025a79?xsec_token=AB_YtPgRiKj2AB2meT_cngG_9P_f7kGjyoNzQgNXzDYkQ=&xsec_source=pc_search")
  ],
  "spot-lo-15": [
    s("罗弗敦群岛的小众海滩", "https://www.xiaohongshu.com/explore/699d823f000000001a0297d0?xsec_token=ABl3GeMDIcuzUsyXdpGGvC13F_sekk5eog1rThMhZavms=&xsec_source=pc_search")
  ],
  "spot-lo-16": [
    s("罗弗敦最惊喜的梦幻小镇！冷门到没有游客", "https://www.xiaohongshu.com/explore/6996a9550000000015022cf6?xsec_token=ABL67l6mIdnzFQHEQY4r4uxN9nQT7yIWixDLRULmBMqTo=&xsec_source=pc_search")
  ],
  "spot-lo-17": [
    s("罗弗敦旅游攻略 | 说点大家没说的", "https://www.xiaohongshu.com/explore/69d74897000000002302369c?xsec_token=ABtd5qp1Q7d8V3xT-EX3C2dfUualwHeVbh2dxNK42i3Q8=&xsec_source=pc_search")
  ]
};
