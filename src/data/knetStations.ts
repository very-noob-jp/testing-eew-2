/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ユーザー提供の観測点CSV (intensity-points-v1 (1).csv) より完全抽出した
// 気象庁 / NIED K-NET・KiK-net 全国公式強震観測点データベース (1749地点)

export interface BaseStationInfo {
  code: string;
  name: string;
  pref: string;
  region: '北海道' | '東北' | '関東' | '中部' | '近畿' | '中国' | '四国' | '九州' | '沖縄';
  lat: number;
  lon: number;
  siteAmp: number;
  isUnderground?: boolean;
}

export const KNET_STATIONS: BaseStationInfo[] = [
  {
    "code": "ABSH01",
    "name": "雄武",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.5253,
    "lon": 142.8483,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "ABSH02",
    "name": "興部西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.421,
    "lon": 143.0304,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH03",
    "name": "興部東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3819,
    "lon": 143.2446,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH04",
    "name": "滝上北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1896,
    "lon": 143.0806,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH05",
    "name": "滝上南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1123,
    "lon": 143.0149,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH06",
    "name": "湧別北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.2122,
    "lon": 143.6242,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH07",
    "name": "白滝",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8469,
    "lon": 143.09,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH08",
    "name": "斜里北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0616,
    "lon": 144.9976,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH09",
    "name": "斜里南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9244,
    "lon": 144.8111,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "ABSH10",
    "name": "佐呂間",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0789,
    "lon": 143.9494,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "ABSH11",
    "name": "女満別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9119,
    "lon": 144.1953,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "ABSH12",
    "name": "小清水",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8542,
    "lon": 144.4614,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "ABSH13",
    "name": "留辺蘂",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7394,
    "lon": 143.4553,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "ABSH14",
    "name": "美幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7203,
    "lon": 144.1875,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "ABSH15",
    "name": "置戸東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6328,
    "lon": 143.5139,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "AICH04",
    "name": "安城",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9286,
    "lon": 137.0597,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "AICH05",
    "name": "常滑",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.8854,
    "lon": 136.8792,
    "siteAmp": 1.67,
    "isUnderground": true
  },
  {
    "code": "AICH06",
    "name": "渥美",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.6125,
    "lon": 137.0449,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "AICH07",
    "name": "旭",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.2161,
    "lon": 137.4069,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "AICH08",
    "name": "額田",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9157,
    "lon": 137.3023,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "AICH09",
    "name": "豊橋",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.661,
    "lon": 137.3932,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "AICH10",
    "name": "鳳来",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9969,
    "lon": 137.6273,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "AICH11",
    "name": "春日井",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.3027,
    "lon": 137.06,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "AICH12",
    "name": "幡豆",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.7852,
    "lon": 137.1087,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH13",
    "name": "清洲",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.2144,
    "lon": 136.8539,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH14",
    "name": "長久手",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.181,
    "lon": 137.0504,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH15",
    "name": "足助",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.1359,
    "lon": 137.3389,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH16",
    "name": "設楽",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.1511,
    "lon": 137.538,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH17",
    "name": "豊根",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.1808,
    "lon": 137.7298,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH18",
    "name": "岡崎",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9603,
    "lon": 137.2406,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH19",
    "name": "作手",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9479,
    "lon": 137.4144,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "AICH20",
    "name": "新城",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.8943,
    "lon": 137.4906,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "AICH21",
    "name": "南知多",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.7368,
    "lon": 136.9415,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "AICH22",
    "name": "豊橋北",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.7821,
    "lon": 137.4423,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "AICH23",
    "name": "常滑2",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.8774,
    "lon": 136.8345,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "AKTH01",
    "name": "西木北",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.8119,
    "lon": 140.5825,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH02",
    "name": "西木南",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.6606,
    "lon": 140.5756,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH03",
    "name": "矢島",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.2194,
    "lon": 140.1317,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH04",
    "name": "東成瀬",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.1711,
    "lon": 140.7164,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH05",
    "name": "鳥海",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.0689,
    "lon": 140.3219,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH06",
    "name": "雄勝",
    "pref": "秋田県",
    "region": "東北",
    "lat": 38.9772,
    "lon": 140.4986,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH07",
    "name": "小坂",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.4536,
    "lon": 140.8431,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH08",
    "name": "藤里",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.3161,
    "lon": 140.2375,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH09",
    "name": "田代",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.2728,
    "lon": 140.4631,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKTH10",
    "name": "大館",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.2975,
    "lon": 140.5847,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "AKTH11",
    "name": "男鹿",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.9527,
    "lon": 139.7657,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "AKTH12",
    "name": "五城目",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.9128,
    "lon": 140.2256,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH13",
    "name": "阿仁",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.9791,
    "lon": 140.4107,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH14",
    "name": "鹿角",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.0594,
    "lon": 140.8119,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH15",
    "name": "協和",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.6857,
    "lon": 140.411,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH16",
    "name": "西仙北",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.5422,
    "lon": 140.3515,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH17",
    "name": "中仙",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.5547,
    "lon": 140.615,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH18",
    "name": "大森",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.3519,
    "lon": 140.3903,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AKTH19",
    "name": "湯沢",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.1885,
    "lon": 140.4744,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "AOMH01",
    "name": "大間",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.5246,
    "lon": 140.9163,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH02",
    "name": "佐井",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.4023,
    "lon": 140.8603,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH03",
    "name": "川内",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.2313,
    "lon": 140.9932,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH04",
    "name": "青森",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.8497,
    "lon": 140.6794,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH05",
    "name": "野辺地",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.8537,
    "lon": 141.1069,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH06",
    "name": "六ヶ所",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.9638,
    "lon": 141.3774,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH07",
    "name": "深浦",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.7424,
    "lon": 140.0268,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOMH08",
    "name": "鰺ヶ沢",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.7592,
    "lon": 140.3156,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "AOMH09",
    "name": "岩木",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6172,
    "lon": 140.3533,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "AOMH10",
    "name": "黒石",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6064,
    "lon": 140.6681,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH11",
    "name": "十和田湖西",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5773,
    "lon": 140.9986,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH12",
    "name": "十和田湖東",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5819,
    "lon": 141.1582,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH13",
    "name": "八戸",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5767,
    "lon": 141.4487,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH14",
    "name": "西目屋",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5461,
    "lon": 140.2761,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH15",
    "name": "大鰐",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4814,
    "lon": 140.56,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH16",
    "name": "新郷",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4597,
    "lon": 141.0958,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH17",
    "name": "名川",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4465,
    "lon": 141.3409,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "AOMH18",
    "name": "田子",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.2934,
    "lon": 141.018,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "CHBH04",
    "name": "下総",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7934,
    "lon": 140.0238,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHBH06",
    "name": "匝瑳",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7183,
    "lon": 140.5079,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHBH10",
    "name": "千葉",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.5425,
    "lon": 140.245,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "CHBH11",
    "name": "養老",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.2834,
    "lon": 140.1562,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH12",
    "name": "富津",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.3412,
    "lon": 139.8586,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH13",
    "name": "成田",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.8275,
    "lon": 140.3013,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH14",
    "name": "銚子中",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7309,
    "lon": 140.8263,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH15",
    "name": "館山西",
    "pref": "千葉県",
    "region": "関東",
    "lat": 34.9558,
    "lon": 139.7917,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH16",
    "name": "鴨川",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1351,
    "lon": 139.9681,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH17",
    "name": "勝浦東",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1681,
    "lon": 140.3431,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH19",
    "name": "蓮沼",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.5911,
    "lon": 140.514,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "CHBH20",
    "name": "鴨川南",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.0848,
    "lon": 140.1029,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "EHMH01",
    "name": "津島",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.0522,
    "lon": 132.5577,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH02",
    "name": "西条",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.8617,
    "lon": 133.1866,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH03",
    "name": "新宮",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.9121,
    "lon": 133.6523,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH04",
    "name": "丹原",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.899,
    "lon": 133.0684,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH05",
    "name": "砥部",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.7079,
    "lon": 132.8057,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH06",
    "name": "日吉",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.3314,
    "lon": 132.8005,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "EHMH07",
    "name": "河辺",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.4988,
    "lon": 132.7505,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "EHMH08",
    "name": "柳谷",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.5354,
    "lon": 133.0042,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "EHMH09",
    "name": "伊方",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.4686,
    "lon": 132.3097,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "EHMH10",
    "name": "宮窪",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 34.1886,
    "lon": 133.0607,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "EHMH11",
    "name": "大洲",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.5774,
    "lon": 132.6036,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "EHMH12",
    "name": "宇和",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.4236,
    "lon": 132.508,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "EHMH13",
    "name": "三崎",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.3685,
    "lon": 132.1182,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "FKIH01",
    "name": "永平寺",
    "pref": "福井県",
    "region": "中部",
    "lat": 36.0924,
    "lon": 136.3646,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH02",
    "name": "織田",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.9452,
    "lon": 136.0584,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH03",
    "name": "和泉",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.9383,
    "lon": 136.7019,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH04",
    "name": "三方",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.5556,
    "lon": 135.8722,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH05",
    "name": "敦賀",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.6358,
    "lon": 136.0331,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH06",
    "name": "高浜",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.4875,
    "lon": 135.4869,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKIH07",
    "name": "小浜",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.4542,
    "lon": 135.7294,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "FKOH01",
    "name": "北九州",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.8817,
    "lon": 130.9822,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH02",
    "name": "若宮",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.6931,
    "lon": 130.5986,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH03",
    "name": "宇美",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5575,
    "lon": 130.5522,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH04",
    "name": "嘉穂",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5479,
    "lon": 130.7475,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH05",
    "name": "犀川",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.526,
    "lon": 130.9526,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH06",
    "name": "豊前",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5892,
    "lon": 131.1372,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH07",
    "name": "大刀洗",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.3644,
    "lon": 130.6378,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH08",
    "name": "小石原",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.4621,
    "lon": 130.8308,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH09",
    "name": "玄海",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.8469,
    "lon": 130.5456,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "FKOH10",
    "name": "浮羽",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.2858,
    "lon": 130.8194,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "FKSH01",
    "name": "西会津",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.7535,
    "lon": 139.7183,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "FKSH02",
    "name": "熱塩加納",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.7287,
    "lon": 139.8855,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH03",
    "name": "高郷",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6048,
    "lon": 139.7566,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH04",
    "name": "会津高田",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4478,
    "lon": 139.8159,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH05",
    "name": "下郷",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2513,
    "lon": 139.8758,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH06",
    "name": "伊南",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.1692,
    "lon": 139.5231,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH07",
    "name": "檜枝岐",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0072,
    "lon": 139.3788,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH08",
    "name": "長沼",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2792,
    "lon": 140.2178,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH09",
    "name": "郡山",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.35,
    "lon": 140.4297,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKSH10",
    "name": "西郷",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.1585,
    "lon": 140.0963,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKSH11",
    "name": "矢吹",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.1976,
    "lon": 140.342,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKSH12",
    "name": "平田",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2139,
    "lon": 140.5736,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKSH13",
    "name": "いわき西",
    "pref": "福島県",
    "region": "東北",
    "lat": 36.9919,
    "lon": 140.5886,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKSH14",
    "name": "いわき東",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0233,
    "lon": 140.9736,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKSH15",
    "name": "猪苗代",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6431,
    "lon": 140.1768,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "FKSH16",
    "name": "福島",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.7613,
    "lon": 140.38,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "FKSH17",
    "name": "川俣",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6606,
    "lon": 140.6008,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "FKSH18",
    "name": "三春",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4864,
    "lon": 140.5414,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "FKSH19",
    "name": "都路",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4672,
    "lon": 140.7261,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "FKSH20",
    "name": "浪江",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4881,
    "lon": 140.9906,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "FKSH21",
    "name": "只見",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.3392,
    "lon": 139.3179,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "GIFH03",
    "name": "根尾",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6294,
    "lon": 136.6164,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH04",
    "name": "古川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2417,
    "lon": 137.2013,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH05",
    "name": "荘川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.0622,
    "lon": 136.9508,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH06",
    "name": "高富",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.5006,
    "lon": 136.7969,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH07",
    "name": "春日",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4147,
    "lon": 136.4376,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH08",
    "name": "大和",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.8291,
    "lon": 136.9651,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH09",
    "name": "羽島",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.2736,
    "lon": 136.7031,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIFH10",
    "name": "神岡",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.3749,
    "lon": 137.3746,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "GIFH11",
    "name": "八百津",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4833,
    "lon": 137.2494,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH12",
    "name": "坂内",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6001,
    "lon": 136.4164,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH13",
    "name": "白川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2712,
    "lon": 136.9009,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH14",
    "name": "上宝",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2462,
    "lon": 137.5204,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH15",
    "name": "高山",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.1306,
    "lon": 137.2238,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH16",
    "name": "朝日北",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.0909,
    "lon": 137.3468,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH17",
    "name": "高鷲",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.9483,
    "lon": 136.8762,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH18",
    "name": "馬瀬",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.896,
    "lon": 137.1525,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH19",
    "name": "朝日南",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.0184,
    "lon": 137.3936,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "GIFH20",
    "name": "下呂北",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.7959,
    "lon": 137.2561,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "GIFH21",
    "name": "美並",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6633,
    "lon": 136.9648,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "GIFH22",
    "name": "金山",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6651,
    "lon": 137.1084,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "GIFH23",
    "name": "板取",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.7203,
    "lon": 136.7876,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH24",
    "name": "東白川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6369,
    "lon": 137.3217,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH25",
    "name": "谷汲",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.5183,
    "lon": 136.6156,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH26",
    "name": "各務原",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4089,
    "lon": 136.8794,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH27",
    "name": "美濃加茂",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4495,
    "lon": 137.007,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH28",
    "name": "中津川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4539,
    "lon": 137.4737,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GIFH29",
    "name": "上石津",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.2921,
    "lon": 136.4761,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "GNMH05",
    "name": "伊勢崎",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.3111,
    "lon": 139.1879,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "GNMH06",
    "name": "館林",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2409,
    "lon": 139.5476,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH07",
    "name": "利根",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.6967,
    "lon": 139.2136,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH08",
    "name": "嬬恋",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.4886,
    "lon": 138.5275,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH09",
    "name": "高山",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.6181,
    "lon": 138.91,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH10",
    "name": "下仁田",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2325,
    "lon": 138.7322,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH11",
    "name": "富岡",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2831,
    "lon": 138.9242,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH12",
    "name": "神流",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.1409,
    "lon": 138.9161,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH13",
    "name": "水上2",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.8589,
    "lon": 139.0659,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "GNMH14",
    "name": "みどり",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.4899,
    "lon": 139.3251,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "HDKH01",
    "name": "平取西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7006,
    "lon": 142.2333,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH02",
    "name": "平取東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7036,
    "lon": 142.4092,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH03",
    "name": "門別東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5908,
    "lon": 142.3558,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH04",
    "name": "門別西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5101,
    "lon": 142.0418,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH05",
    "name": "新冠",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5951,
    "lon": 142.5483,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH06",
    "name": "静内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.3472,
    "lon": 142.3609,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HDKH07",
    "name": "様似",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1304,
    "lon": 142.9201,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HRSH01",
    "name": "三原",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.3704,
    "lon": 133.0262,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH02",
    "name": "大和",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.545,
    "lon": 132.9506,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH03",
    "name": "御調",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.515,
    "lon": 133.1401,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH04",
    "name": "沼隈",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.3753,
    "lon": 133.3519,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH05",
    "name": "神辺",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5534,
    "lon": 133.4205,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH06",
    "name": "口和",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.9105,
    "lon": 132.9149,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH07",
    "name": "呉",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.285,
    "lon": 132.6436,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH08",
    "name": "佐伯",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.3903,
    "lon": 132.1636,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRSH09",
    "name": "吉舎",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.6983,
    "lon": 132.955,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "HRSH10",
    "name": "芸北",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.7439,
    "lon": 132.3819,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH11",
    "name": "神石",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.8193,
    "lon": 133.1701,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH12",
    "name": "広島",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5778,
    "lon": 132.432,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH13",
    "name": "広島南",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4089,
    "lon": 132.3932,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH14",
    "name": "沖美",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.2058,
    "lon": 132.4088,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH15",
    "name": "倉橋",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.1129,
    "lon": 132.5078,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH16",
    "name": "吉田",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.6597,
    "lon": 132.6715,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH17",
    "name": "戸河内",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5684,
    "lon": 132.2351,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HRSH18",
    "name": "東広島",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.454,
    "lon": 132.7949,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "HYGH01",
    "name": "三原",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.2904,
    "lon": 134.7968,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH02",
    "name": "南光",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.0639,
    "lon": 134.4261,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH03",
    "name": "波賀",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.2161,
    "lon": 134.5264,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH04",
    "name": "篠山",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.0676,
    "lon": 135.2839,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH05",
    "name": "上郡",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.8963,
    "lon": 134.3311,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH06",
    "name": "相生",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.7903,
    "lon": 134.4819,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH07",
    "name": "夢前",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.029,
    "lon": 134.6728,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH08",
    "name": "加美",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.0978,
    "lon": 134.9064,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYGH09",
    "name": "東条",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.905,
    "lon": 135.0872,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "HYGH10",
    "name": "加古川",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.8132,
    "lon": 134.8106,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "HYGH11",
    "name": "山東",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.2893,
    "lon": 134.9099,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "HYGH12",
    "name": "新宮",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9281,
    "lon": 134.545,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "HYGH13",
    "name": "香住",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.6177,
    "lon": 134.6594,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "HYGH14",
    "name": "出石",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.4543,
    "lon": 134.8649,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "HYGH15",
    "name": "村岡",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.4665,
    "lon": 134.598,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "HYMH01",
    "name": "北檜山",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4826,
    "lon": 139.9714,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "HYMH02",
    "name": "厚沢部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.9831,
    "lon": 140.3122,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "HYMH03",
    "name": "熊石",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1319,
    "lon": 140.0075,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "IBRH06",
    "name": "北茨城2",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.8778,
    "lon": 140.6579,
    "siteAmp": 1.16,
    "isUnderground": false
  },
  {
    "code": "IBRH07",
    "name": "江戸崎",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.9489,
    "lon": 140.3334,
    "siteAmp": 1.16,
    "isUnderground": false
  },
  {
    "code": "IBRH08",
    "name": "大洋",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1156,
    "lon": 140.5655,
    "siteAmp": 1.16,
    "isUnderground": false
  },
  {
    "code": "IBRH09",
    "name": "常北",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.4358,
    "lon": 140.3592,
    "siteAmp": 1.16,
    "isUnderground": false
  },
  {
    "code": "IBRH10",
    "name": "石下",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.108,
    "lon": 139.992,
    "siteAmp": 1.14,
    "isUnderground": false
  },
  {
    "code": "IBRH11",
    "name": "岩瀬",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.3669,
    "lon": 140.1434,
    "siteAmp": 1.14,
    "isUnderground": false
  },
  {
    "code": "IBRH12",
    "name": "大子",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.8338,
    "lon": 140.3215,
    "siteAmp": 1.14,
    "isUnderground": false
  },
  {
    "code": "IBRH13",
    "name": "高萩",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.7924,
    "lon": 140.5784,
    "siteAmp": 1.14,
    "isUnderground": false
  },
  {
    "code": "IBRH14",
    "name": "十王",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.689,
    "lon": 140.5518,
    "siteAmp": 1.14,
    "isUnderground": false
  },
  {
    "code": "IBRH15",
    "name": "御前山",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.5535,
    "lon": 140.3046,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "IBRH16",
    "name": "山方",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.6374,
    "lon": 140.4009,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "IBRH17",
    "name": "霞ヶ浦",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.0832,
    "lon": 140.3173,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "IBRH18",
    "name": "ひたちなか",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.3599,
    "lon": 140.6231,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "IBRH19",
    "name": "つくば",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.2106,
    "lon": 140.0926,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "IBRH20",
    "name": "波崎2",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.8252,
    "lon": 140.7356,
    "siteAmp": 1.11,
    "isUnderground": false
  },
  {
    "code": "IBRH21",
    "name": "つくば南",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.9782,
    "lon": 140.1083,
    "siteAmp": 1.11,
    "isUnderground": false
  },
  {
    "code": "IBUH01",
    "name": "追分",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8714,
    "lon": 141.8228,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH02",
    "name": "穂別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8689,
    "lon": 142.1322,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH03",
    "name": "厚真",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6461,
    "lon": 141.8679,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH04",
    "name": "豊浦",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.639,
    "lon": 140.6686,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH05",
    "name": "白老",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5604,
    "lon": 141.3533,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH06",
    "name": "室蘭",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4091,
    "lon": 141.0053,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IBUH07",
    "name": "大滝",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6451,
    "lon": 141.0679,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "IKRH01",
    "name": "当別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4063,
    "lon": 141.5873,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "IKRH02",
    "name": "新篠津",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2179,
    "lon": 141.6561,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "IKRH03",
    "name": "千歳",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8856,
    "lon": 141.6436,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "ISKH01",
    "name": "珠洲",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.5236,
    "lon": 137.2875,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "ISKH02",
    "name": "柳田",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.3614,
    "lon": 137.0443,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "ISKH03",
    "name": "内浦",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.3428,
    "lon": 137.2467,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "ISKH04",
    "name": "富来",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.1872,
    "lon": 136.7206,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "ISKH05",
    "name": "穴水",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.2194,
    "lon": 136.9719,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "ISKH06",
    "name": "志賀",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.0503,
    "lon": 136.8236,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "ISKH07",
    "name": "金沢",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.5119,
    "lon": 136.6386,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "ISKH08",
    "name": "津幡",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.735,
    "lon": 136.7936,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "ISKH09",
    "name": "尾口",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.2636,
    "lon": 136.7197,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "IWTH01",
    "name": "二戸東",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.2356,
    "lon": 141.3458,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "IWTH02",
    "name": "玉山",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.8222,
    "lon": 141.3861,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH03",
    "name": "岩泉",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.7992,
    "lon": 141.6556,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH04",
    "name": "住田",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.1781,
    "lon": 141.3944,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH05",
    "name": "藤沢",
    "pref": "岩手県",
    "region": "東北",
    "lat": 38.8625,
    "lon": 141.3547,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH06",
    "name": "二戸西",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.2583,
    "lon": 141.1744,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH07",
    "name": "軽米",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.2678,
    "lon": 141.5744,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH08",
    "name": "久慈北",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.2658,
    "lon": 141.7867,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH09",
    "name": "久慈南",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.0833,
    "lon": 141.7156,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWTH10",
    "name": "安代",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.1364,
    "lon": 140.9564,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "IWTH11",
    "name": "一戸",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.0783,
    "lon": 141.195,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "IWTH12",
    "name": "九戸",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.1506,
    "lon": 141.4281,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "IWTH13",
    "name": "葛巻",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.9369,
    "lon": 141.5528,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "IWTH14",
    "name": "田老",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.7407,
    "lon": 141.9123,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "IWTH15",
    "name": "矢巾",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6119,
    "lon": 141.0964,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "IWTH16",
    "name": "雫石",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6408,
    "lon": 140.95,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "IWTH17",
    "name": "川井北",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6414,
    "lon": 141.6013,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "IWTH18",
    "name": "川井南",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.4601,
    "lon": 141.6811,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "IWTH19",
    "name": "花巻北",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.4531,
    "lon": 141.0036,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "IWTH20",
    "name": "花巻南",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.3406,
    "lon": 141.0508,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH21",
    "name": "山田",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.4705,
    "lon": 141.9372,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH22",
    "name": "東和",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.3311,
    "lon": 141.305,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH23",
    "name": "釜石",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.2712,
    "lon": 141.8269,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH24",
    "name": "金ヶ崎",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.195,
    "lon": 141.0153,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH25",
    "name": "一関西",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.0063,
    "lon": 140.8673,
    "siteAmp": 1.54,
    "isUnderground": true
  },
  {
    "code": "IWTH26",
    "name": "一関東",
    "pref": "岩手県",
    "region": "東北",
    "lat": 38.9661,
    "lon": 141.0047,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "IWTH27",
    "name": "陸前高田",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.0278,
    "lon": 141.5356,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "IWTH28",
    "name": "一関西2",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.0065,
    "lon": 140.8674,
    "siteAmp": 1.53,
    "isUnderground": false
  },
  {
    "code": "KGSH01",
    "name": "長島",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 32.1519,
    "lon": 130.1214,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGSH02",
    "name": "阿久根",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.9906,
    "lon": 130.21,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGSH03",
    "name": "宮之城",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.9778,
    "lon": 130.4461,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGSH04",
    "name": "川内",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.8339,
    "lon": 130.3625,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGSH05",
    "name": "祁答院",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.8664,
    "lon": 130.4981,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGSH06",
    "name": "郡山",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.6953,
    "lon": 130.4617,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGSH07",
    "name": "姶良",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.7106,
    "lon": 130.6172,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGSH08",
    "name": "大隅",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.5583,
    "lon": 130.9992,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGSH09",
    "name": "知覧",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.3706,
    "lon": 130.4356,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGSH10",
    "name": "山川",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.2031,
    "lon": 130.6206,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGSH11",
    "name": "佐多",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.0864,
    "lon": 130.7013,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGSH12",
    "name": "内之浦",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.2547,
    "lon": 131.09,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGSH13",
    "name": "鹿屋",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.3969,
    "lon": 130.8564,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGWH01",
    "name": "綾上",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2153,
    "lon": 133.952,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KGWH02",
    "name": "三野",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.1948,
    "lon": 133.7107,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KGWH03",
    "name": "三木",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2668,
    "lon": 134.1508,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KGWH04",
    "name": "大内",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2231,
    "lon": 134.3069,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KGWH05",
    "name": "内海",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.454,
    "lon": 134.3268,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KKWH01",
    "name": "美深北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.595,
    "lon": 142.3075,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "KKWH02",
    "name": "美深東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.5486,
    "lon": 142.5775,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH03",
    "name": "美深西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.4708,
    "lon": 142.2764,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH04",
    "name": "名寄",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.4353,
    "lon": 142.4094,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH05",
    "name": "下川西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.2897,
    "lon": 142.6342,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH06",
    "name": "下川東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3183,
    "lon": 142.7694,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH07",
    "name": "富良野",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3672,
    "lon": 142.3447,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH08",
    "name": "占冠",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0381,
    "lon": 142.66,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH09",
    "name": "音威子府",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.7722,
    "lon": 142.2581,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "KKWH10",
    "name": "中川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.6594,
    "lon": 142.0567,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "KKWH11",
    "name": "和寒",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9731,
    "lon": 142.2872,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "KKWH12",
    "name": "美瑛東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5014,
    "lon": 142.6044,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "KKWH13",
    "name": "美瑛西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5089,
    "lon": 142.3944,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "KKWH14",
    "name": "中富良野",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3817,
    "lon": 142.5283,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "KKWH15",
    "name": "上川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8522,
    "lon": 142.7694,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "KMMH01",
    "name": "鹿北",
    "pref": "熊本県",
    "region": "九州",
    "lat": 33.1056,
    "lon": 130.6972,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "KMMH02",
    "name": "小国",
    "pref": "熊本県",
    "region": "九州",
    "lat": 33.1186,
    "lon": 131.0653,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "KMMH03",
    "name": "菊池",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.995,
    "lon": 130.8325,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH04",
    "name": "阿蘇",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9481,
    "lon": 131.0222,
    "siteAmp": 1.09,
    "isUnderground": true
  },
  {
    "code": "KMMH05",
    "name": "波野",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9519,
    "lon": 131.2231,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH06",
    "name": "白水",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.8081,
    "lon": 131.1033,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH07",
    "name": "三角",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.62,
    "lon": 130.5608,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH08",
    "name": "矢部",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.6467,
    "lon": 131.0275,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH09",
    "name": "泉",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.4867,
    "lon": 130.9069,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "KMMH10",
    "name": "新和",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3117,
    "lon": 130.1833,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "KMMH11",
    "name": "芦北",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.2883,
    "lon": 130.58,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "KMMH12",
    "name": "人吉",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.2019,
    "lon": 130.7394,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "KMMH13",
    "name": "上",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.2175,
    "lon": 130.9119,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "KMMH14",
    "name": "豊野",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.6311,
    "lon": 130.7544,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "KMMH15",
    "name": "水俣",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.1669,
    "lon": 130.3669,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "KMMH16",
    "name": "益城",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.7933,
    "lon": 130.8222,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "KMMH17",
    "name": "玉名",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9839,
    "lon": 130.5632,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "KMMH18",
    "name": "阿蘇2",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9997,
    "lon": 131.0094,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "KNGH10",
    "name": "横浜",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4959,
    "lon": 139.5227,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "KNGH11",
    "name": "厚木",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4007,
    "lon": 139.3571,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "KNGH18",
    "name": "藤野",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.6404,
    "lon": 139.1315,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "KNGH19",
    "name": "山北中",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.414,
    "lon": 139.0468,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "KNGH20",
    "name": "松田",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3631,
    "lon": 139.1291,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "KNGH21",
    "name": "清川",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4595,
    "lon": 139.2177,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "KNGH22",
    "name": "山北南",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3551,
    "lon": 139.0942,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "KNGH23",
    "name": "葉山",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.2591,
    "lon": 139.6142,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "KOCH01",
    "name": "北川",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.5387,
    "lon": 134.1224,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "KOCH02",
    "name": "吾北",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.7046,
    "lon": 133.3667,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "KOCH03",
    "name": "大正",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.2649,
    "lon": 132.9916,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "KOCH04",
    "name": "大月",
    "pref": "高知県",
    "region": "四国",
    "lat": 32.838,
    "lon": 132.7091,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH05",
    "name": "池川",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.6439,
    "lon": 133.1469,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH06",
    "name": "中村",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.0719,
    "lon": 132.955,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH07",
    "name": "須崎",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.3886,
    "lon": 133.2892,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH08",
    "name": "土佐清水",
    "pref": "高知県",
    "region": "四国",
    "lat": 32.7763,
    "lon": 132.9743,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH09",
    "name": "香北",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.6714,
    "lon": 133.8269,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "KOCH10",
    "name": "伊野",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.528,
    "lon": 133.4414,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "KOCH11",
    "name": "室戸",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.2832,
    "lon": 134.1629,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "KOCH12",
    "name": "芸西",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.5261,
    "lon": 133.8218,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "KOCH13",
    "name": "本山",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.751,
    "lon": 133.5786,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "KSRH01",
    "name": "阿寒北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4336,
    "lon": 144.0883,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH02",
    "name": "阿寒南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1117,
    "lon": 144.1269,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH03",
    "name": "標茶北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3822,
    "lon": 144.6319,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH04",
    "name": "標茶南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2114,
    "lon": 144.6844,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH05",
    "name": "鶴居西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2531,
    "lon": 144.2378,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH06",
    "name": "鶴居東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2175,
    "lon": 144.4325,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH07",
    "name": "鶴居南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1333,
    "lon": 144.3314,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH08",
    "name": "白糠北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1578,
    "lon": 143.8975,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH09",
    "name": "白糠南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9831,
    "lon": 143.9881,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "KSRH10",
    "name": "浜中",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2058,
    "lon": 145.1208,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "KYTH01",
    "name": "野田川",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.5211,
    "lon": 135.1271,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KYTH02",
    "name": "伊根",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.707,
    "lon": 135.2524,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "KYTH03",
    "name": "福知山",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.3098,
    "lon": 135.1362,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "KYTH04",
    "name": "美山",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.2653,
    "lon": 135.5536,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "KYTH05",
    "name": "網野",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.6783,
    "lon": 135.0296,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "KYTH06",
    "name": "亀岡",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.0437,
    "lon": 135.4874,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "KYTH07",
    "name": "久御山",
    "pref": "京都府",
    "region": "近畿",
    "lat": 34.895,
    "lon": 135.749,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "KYTH08",
    "name": "京都",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.0062,
    "lon": 135.7333,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "MIEH01",
    "name": "四日市",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.9817,
    "lon": 136.4592,
    "siteAmp": 1.2,
    "isUnderground": false
  },
  {
    "code": "MIEH02",
    "name": "大山田",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.7629,
    "lon": 136.2864,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH03",
    "name": "嬉野",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.5438,
    "lon": 136.3721,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH04",
    "name": "度会",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.3499,
    "lon": 136.5895,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH05",
    "name": "尾鷲",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.0604,
    "lon": 136.1718,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH06",
    "name": "宮川",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.3547,
    "lon": 136.3322,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH07",
    "name": "志摩",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.2511,
    "lon": 136.8245,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH08",
    "name": "松阪",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.5392,
    "lon": 136.5061,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH09",
    "name": "紀宝",
    "pref": "三重県",
    "region": "近畿",
    "lat": 33.7611,
    "lon": 135.9998,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "MIEH10",
    "name": "芸濃",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.8192,
    "lon": 136.4274,
    "siteAmp": 1.17,
    "isUnderground": false
  },
  {
    "code": "MYGH01",
    "name": "仙台",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.237,
    "lon": 141.0003,
    "siteAmp": 1.27,
    "isUnderground": true
  },
  {
    "code": "MYGH02",
    "name": "鳴子",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.8558,
    "lon": 140.6547,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYGH03",
    "name": "唐桑",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.9178,
    "lon": 141.6412,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYGH04",
    "name": "東和",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7831,
    "lon": 141.3289,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYGH05",
    "name": "小野田",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5764,
    "lon": 140.7839,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYGH06",
    "name": "田尻",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5878,
    "lon": 141.0744,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "MYGH07",
    "name": "川崎",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.1772,
    "lon": 140.6439,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "MYGH08",
    "name": "岩沼",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.1103,
    "lon": 140.8475,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "MYGH09",
    "name": "白石",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.0061,
    "lon": 140.6061,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "MYGH10",
    "name": "山元",
    "pref": "宮城県",
    "region": "東北",
    "lat": 37.9381,
    "lon": 140.8958,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYGH11",
    "name": "河北",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5129,
    "lon": 141.3456,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYGH12",
    "name": "志津川",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.6386,
    "lon": 141.4463,
    "siteAmp": 1.24,
    "isUnderground": true
  },
  {
    "code": "MYGH13",
    "name": "南三陸",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.6964,
    "lon": 141.4211,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYGH14",
    "name": "利府",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.337,
    "lon": 140.9586,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH01",
    "name": "五ヶ瀬",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.6502,
    "lon": 131.2281,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH02",
    "name": "北川",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.6938,
    "lon": 131.6854,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH03",
    "name": "椎葉",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.4719,
    "lon": 131.1067,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH04",
    "name": "諸塚",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.5147,
    "lon": 131.3373,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH05",
    "name": "南郷",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.3436,
    "lon": 131.2692,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH06",
    "name": "東郷",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.3572,
    "lon": 131.4667,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH07",
    "name": "西米良",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.1953,
    "lon": 131.1969,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH08",
    "name": "川南",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.2097,
    "lon": 131.5333,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH09",
    "name": "須木",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.0386,
    "lon": 131.0642,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "MYZH10",
    "name": "国富",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.0181,
    "lon": 131.2924,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MYZH11",
    "name": "佐土原",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.0173,
    "lon": 131.4724,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MYZH12",
    "name": "都城北",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.8608,
    "lon": 130.9478,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "MYZH13",
    "name": "都城南",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.7267,
    "lon": 131.0814,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "MYZH14",
    "name": "日南",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.5614,
    "lon": 131.3533,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "MYZH15",
    "name": "日向",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.3619,
    "lon": 131.5917,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "MYZH16",
    "name": "延岡",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.5026,
    "lon": 131.6982,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "NARH01",
    "name": "十津川西",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 33.9633,
    "lon": 135.6518,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "NARH02",
    "name": "十津川東",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 33.9658,
    "lon": 135.8603,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NARH03",
    "name": "川上",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.2892,
    "lon": 136.005,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NARH04",
    "name": "黒滝",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.3028,
    "lon": 135.8397,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NARH05",
    "name": "東吉野",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.4204,
    "lon": 136.0323,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NARH06",
    "name": "山添",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.6381,
    "lon": 136.054,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NARH07",
    "name": "天理",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.5811,
    "lon": 135.8569,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "NGNH03",
    "name": "阿智2",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.4753,
    "lon": 137.7376,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH07",
    "name": "中野",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.7403,
    "lon": 138.3792,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH08",
    "name": "三郷",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.251,
    "lon": 137.8622,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH09",
    "name": "武石",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.2828,
    "lon": 138.2522,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH10",
    "name": "木祖",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.96,
    "lon": 137.77,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH11",
    "name": "富士見",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9125,
    "lon": 138.3083,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH12",
    "name": "南牧",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9664,
    "lon": 138.4828,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH13",
    "name": "喬木",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.5111,
    "lon": 137.8797,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH14",
    "name": "平谷",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.3063,
    "lon": 137.6292,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH15",
    "name": "辰野",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.0056,
    "lon": 137.9336,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH16",
    "name": "茅野",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9433,
    "lon": 138.1879,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH17",
    "name": "佐久",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.1393,
    "lon": 138.5535,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH18",
    "name": "開田",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9292,
    "lon": 137.598,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH19",
    "name": "川上",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9703,
    "lon": 138.5877,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH20",
    "name": "上松",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.7839,
    "lon": 137.7203,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH21",
    "name": "伊那",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.8283,
    "lon": 137.9267,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH22",
    "name": "長谷",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.7914,
    "lon": 138.0855,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH23",
    "name": "南木曽",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.6024,
    "lon": 137.6135,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH24",
    "name": "松川",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.612,
    "lon": 137.8827,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH25",
    "name": "南信濃",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.2953,
    "lon": 137.9298,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH26",
    "name": "上山田",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.4632,
    "lon": 138.1505,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH27",
    "name": "信州新",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.5739,
    "lon": 138.051,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH28",
    "name": "戸隠",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.7044,
    "lon": 138.0995,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH29",
    "name": "野沢温泉",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.9072,
    "lon": 138.4439,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH30",
    "name": "奈川",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.0609,
    "lon": 137.688,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH31",
    "name": "塩尻",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.1153,
    "lon": 137.9419,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH32",
    "name": "松本",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.2546,
    "lon": 137.9929,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH33",
    "name": "生坂",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.4567,
    "lon": 137.9668,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH34",
    "name": "大町中",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.5296,
    "lon": 137.8231,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH35",
    "name": "穂高",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.3793,
    "lon": 137.8231,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH36",
    "name": "白馬",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.6953,
    "lon": 137.8513,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH37",
    "name": "御代田",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.3277,
    "lon": 138.4999,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGNH54",
    "name": "飯田",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.4456,
    "lon": 138.0088,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "NGSH01",
    "name": "平戸",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.2083,
    "lon": 129.4375,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGSH02",
    "name": "佐世保北",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.2089,
    "lon": 129.7675,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGSH03",
    "name": "佐世保南",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.1222,
    "lon": 129.8125,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGSH04",
    "name": "琴海",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.9519,
    "lon": 129.8049,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGSH05",
    "name": "高来",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.9069,
    "lon": 130.1431,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGSH06",
    "name": "長崎",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.6965,
    "lon": 129.8647,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NIGH01",
    "name": "長岡",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.4242,
    "lon": 138.8908,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "NIGH02",
    "name": "朝日",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.2769,
    "lon": 139.5519,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH03",
    "name": "荒川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.1297,
    "lon": 139.4322,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH04",
    "name": "関川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.1283,
    "lon": 139.5461,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH05",
    "name": "聖籠",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.9729,
    "lon": 139.2821,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH06",
    "name": "加茂",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6497,
    "lon": 139.0708,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH07",
    "name": "村松",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6628,
    "lon": 139.2643,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH08",
    "name": "津川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6678,
    "lon": 139.4681,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH09",
    "name": "下田",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.5356,
    "lon": 139.1311,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIGH10",
    "name": "上川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.5408,
    "lon": 139.3681,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "NIGH11",
    "name": "川西",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.1697,
    "lon": 138.7472,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "NIGH12",
    "name": "湯之谷",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.2208,
    "lon": 138.9853,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "NIGH13",
    "name": "牧",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0514,
    "lon": 138.3997,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "NIGH14",
    "name": "塩沢",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0272,
    "lon": 138.8553,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NIGH15",
    "name": "六日",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0503,
    "lon": 138.9983,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NIGH16",
    "name": "糸魚川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 36.9347,
    "lon": 137.8511,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NIGH17",
    "name": "妙高高原",
    "pref": "新潟県",
    "region": "中部",
    "lat": 36.8539,
    "lon": 138.0997,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NIGH18",
    "name": "妙高",
    "pref": "新潟県",
    "region": "中部",
    "lat": 36.9394,
    "lon": 138.2625,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NIGH19",
    "name": "湯沢",
    "pref": "新潟県",
    "region": "中部",
    "lat": 36.8083,
    "lon": 138.7881,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "NMRH01",
    "name": "標津北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7825,
    "lon": 145.0286,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "NMRH02",
    "name": "標津南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6747,
    "lon": 144.9658,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "NMRH03",
    "name": "中標津",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5483,
    "lon": 144.9706,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "NMRH04",
    "name": "別海東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3953,
    "lon": 145.1264,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "NMRH05",
    "name": "別海西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3875,
    "lon": 144.8061,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "OITH01",
    "name": "山国",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4089,
    "lon": 131.035,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH02",
    "name": "山香",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4547,
    "lon": 131.4453,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH03",
    "name": "安岐",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4703,
    "lon": 131.6881,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH04",
    "name": "庄内",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.1272,
    "lon": 131.3497,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH05",
    "name": "野津原",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.1492,
    "lon": 131.5444,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH06",
    "name": "竹田",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.9692,
    "lon": 131.4008,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH07",
    "name": "三重",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.9836,
    "lon": 131.5905,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH08",
    "name": "宇目西",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.8358,
    "lon": 131.5381,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH09",
    "name": "宇目東",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.8452,
    "lon": 131.681,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OITH10",
    "name": "佐伯",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.9244,
    "lon": 131.8719,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OITH11",
    "name": "九重",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.2811,
    "lon": 131.2142,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OKYH01",
    "name": "玉野",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.5037,
    "lon": 133.8931,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "OKYH02",
    "name": "瀬戸",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.7468,
    "lon": 134.0728,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "OKYH03",
    "name": "岡山",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.7751,
    "lon": 133.7917,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "OKYH04",
    "name": "真備",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.6397,
    "lon": 133.6888,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH05",
    "name": "建部",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.8652,
    "lon": 133.8554,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH06",
    "name": "美星",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.6724,
    "lon": 133.5309,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH07",
    "name": "神郷",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.0461,
    "lon": 133.3196,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH08",
    "name": "哲多",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.9071,
    "lon": 133.4081,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH09",
    "name": "湯原",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.1777,
    "lon": 133.6792,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "OKYH10",
    "name": "上斎原",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.2794,
    "lon": 133.929,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OKYH11",
    "name": "勝央",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.07,
    "lon": 134.1189,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OKYH12",
    "name": "大原",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.0967,
    "lon": 134.3217,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OKYH13",
    "name": "日生",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.7251,
    "lon": 134.2771,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OKYH14",
    "name": "北房",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.9331,
    "lon": 133.6232,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "OSKH01",
    "name": "田尻",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.3944,
    "lon": 135.2864,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "OSKH02",
    "name": "此花",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.6595,
    "lon": 135.3924,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "OSKH03",
    "name": "太子",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.5215,
    "lon": 135.6636,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "OSKH04",
    "name": "交野",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.7597,
    "lon": 135.7081,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "OSKH05",
    "name": "大阪",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.7127,
    "lon": 135.5227,
    "siteAmp": 1.21,
    "isUnderground": false
  },
  {
    "code": "OSMH01",
    "name": "知内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.5951,
    "lon": 140.4243,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "OSMH02",
    "name": "上磯",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.8349,
    "lon": 140.6367,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "RMIH01",
    "name": "幌延",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.0144,
    "lon": 142.0833,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "RMIH02",
    "name": "天塩",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.8925,
    "lon": 141.9289,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "RMIH03",
    "name": "遠別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.6336,
    "lon": 141.8225,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "RMIH04",
    "name": "小平東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0951,
    "lon": 141.9659,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "RMIH05",
    "name": "小平西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0231,
    "lon": 141.7914,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "SAGH01",
    "name": "鎮西",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.5047,
    "lon": 129.8899,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "SAGH02",
    "name": "伊万里",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.2623,
    "lon": 129.8821,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "SAGH03",
    "name": "富士",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.4065,
    "lon": 130.2353,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "SAGH04",
    "name": "東脊振",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.3621,
    "lon": 130.4069,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "SAGH05",
    "name": "白石",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.1772,
    "lon": 130.1069,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "SBSH01",
    "name": "古平",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2317,
    "lon": 140.6264,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "SBSH02",
    "name": "泊",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0503,
    "lon": 140.5053,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH03",
    "name": "赤井川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0818,
    "lon": 140.8235,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH04",
    "name": "共和",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9733,
    "lon": 140.6256,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH05",
    "name": "倶知安",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9476,
    "lon": 140.8259,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH06",
    "name": "蘭越",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8285,
    "lon": 140.4867,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH07",
    "name": "真狩",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7606,
    "lon": 140.8121,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH08",
    "name": "喜茂別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7656,
    "lon": 140.9803,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH09",
    "name": "黒松内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6079,
    "lon": 140.4877,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "SBSH10",
    "name": "島牧",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7772,
    "lon": 140.1593,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "SIGH01",
    "name": "多賀",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.2351,
    "lon": 136.3628,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "SIGH02",
    "name": "大津",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.245,
    "lon": 135.87,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "SIGH03",
    "name": "信楽",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 34.8497,
    "lon": 136.0344,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SIGH04",
    "name": "日野",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 34.9606,
    "lon": 136.2639,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH01",
    "name": "岩槻",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9258,
    "lon": 139.7381,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH03",
    "name": "日高",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.8958,
    "lon": 139.3875,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH04",
    "name": "所沢",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.7996,
    "lon": 139.5385,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH05",
    "name": "神泉",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.1478,
    "lon": 139.0536,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH06",
    "name": "川本",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.11,
    "lon": 139.2926,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH07",
    "name": "名栗",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9086,
    "lon": 139.1517,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH08",
    "name": "小鹿野",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.0243,
    "lon": 138.9722,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "SITH09",
    "name": "皆野",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.0683,
    "lon": 139.1024,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "SITH10",
    "name": "都幾川",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9933,
    "lon": 139.2223,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "SITH11",
    "name": "飯能",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.8605,
    "lon": 139.2758,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "SMNH01",
    "name": "伯太",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.2931,
    "lon": 133.263,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "SMNH02",
    "name": "仁多",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.2203,
    "lon": 133.0882,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "SMNH03",
    "name": "佐田",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.2212,
    "lon": 132.7249,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "SMNH04",
    "name": "邑智",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.0886,
    "lon": 132.5333,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH05",
    "name": "羽須美",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.8665,
    "lon": 132.6422,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH06",
    "name": "金城",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.8807,
    "lon": 132.2051,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH07",
    "name": "美都",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.6908,
    "lon": 132.0427,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH08",
    "name": "石見",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.8769,
    "lon": 132.4233,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH09",
    "name": "匹見",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.5693,
    "lon": 132.0147,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "SMNH10",
    "name": "美保関",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.5547,
    "lon": 133.3031,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH11",
    "name": "平田",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.4228,
    "lon": 132.8033,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH12",
    "name": "吉田",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.1603,
    "lon": 132.8583,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH13",
    "name": "江津",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.0056,
    "lon": 132.3094,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH14",
    "name": "六日市",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.3872,
    "lon": 131.895,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH15",
    "name": "鹿島",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.5201,
    "lon": 133.0252,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "SMNH16",
    "name": "加茂",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.3391,
    "lon": 132.9014,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "SOYH01",
    "name": "猿払北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.3324,
    "lon": 142.1224,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "SOYH02",
    "name": "猿払南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2141,
    "lon": 142.2293,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "SOYH03",
    "name": "稚内西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2508,
    "lon": 141.6372,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "SOYH04",
    "name": "稚内東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2281,
    "lon": 141.8844,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "SOYH05",
    "name": "稚内北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.4861,
    "lon": 141.8889,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "SOYH06",
    "name": "豊富",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.0997,
    "lon": 141.7872,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "SOYH07",
    "name": "浜頓別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.0978,
    "lon": 142.4346,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "SOYH08",
    "name": "中頓別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.9364,
    "lon": 142.2286,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "SOYH09",
    "name": "歌登北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.8547,
    "lon": 142.4907,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "SOYH10",
    "name": "歌登南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.741,
    "lon": 142.6078,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "SRCH01",
    "name": "幌加内北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.278,
    "lon": 142.1633,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH02",
    "name": "幌加内中",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1136,
    "lon": 142.1452,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH03",
    "name": "幌加内南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.997,
    "lon": 142.1296,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH04",
    "name": "沼田",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8179,
    "lon": 141.9435,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH05",
    "name": "深川北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8219,
    "lon": 142.1632,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH06",
    "name": "深川南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6924,
    "lon": 142.0814,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH07",
    "name": "三笠",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2276,
    "lon": 141.9016,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH08",
    "name": "砂川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5114,
    "lon": 141.9128,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH09",
    "name": "栗山",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0563,
    "lon": 141.81,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "SRCH10",
    "name": "夕張",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9905,
    "lon": 142.0123,
    "siteAmp": 1.16,
    "isUnderground": false
  },
  {
    "code": "SZOH24",
    "name": "引佐",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.831,
    "lon": 137.6646,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH25",
    "name": "新居",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.6879,
    "lon": 137.5634,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH26",
    "name": "袋井",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7915,
    "lon": 137.9064,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH28",
    "name": "浜松",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.665,
    "lon": 137.7471,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH29",
    "name": "静岡北",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.3038,
    "lon": 138.2003,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH30",
    "name": "水窪北",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.2201,
    "lon": 137.9212,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "SZOH31",
    "name": "川根",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9365,
    "lon": 138.0798,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "SZOH32",
    "name": "龍山東",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0053,
    "lon": 137.8439,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH33",
    "name": "静岡南",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0113,
    "lon": 138.3557,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH34",
    "name": "清水北",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.1271,
    "lon": 138.4273,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH35",
    "name": "伊東中",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9434,
    "lon": 139.0887,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH36",
    "name": "藤枝",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9109,
    "lon": 138.2038,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH37",
    "name": "芝川",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.1995,
    "lon": 138.569,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH38",
    "name": "函南",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0821,
    "lon": 138.981,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH39",
    "name": "西伊豆西",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7954,
    "lon": 138.7755,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "SZOH40",
    "name": "河津",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7798,
    "lon": 138.9732,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "SZOH41",
    "name": "南伊豆",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.6715,
    "lon": 138.8372,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "SZOH42",
    "name": "修善寺",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9723,
    "lon": 138.9159,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "SZOH43",
    "name": "清水南",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9706,
    "lon": 138.4955,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "SZOH53",
    "name": "掛川3",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.8735,
    "lon": 138.0205,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "SZOH54",
    "name": "初島2",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0384,
    "lon": 139.1716,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "TCGH06",
    "name": "真岡",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.4427,
    "lon": 139.9541,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TCGH07",
    "name": "栗山西",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.8786,
    "lon": 139.4567,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TCGH08",
    "name": "栗山東",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.8797,
    "lon": 139.6492,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TCGH09",
    "name": "矢板",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.8594,
    "lon": 139.8397,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TCGH10",
    "name": "大田原",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.8547,
    "lon": 140.0258,
    "siteAmp": 1.61,
    "isUnderground": true
  },
  {
    "code": "TCGH11",
    "name": "今市",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.7053,
    "lon": 139.7727,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "TCGH12",
    "name": "氏家",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.6928,
    "lon": 139.9875,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TCGH13",
    "name": "馬頭",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.7311,
    "lon": 140.1814,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TCGH14",
    "name": "粟野",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5478,
    "lon": 139.6186,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TCGH15",
    "name": "宇都宮",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5564,
    "lon": 139.8669,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TCGH16",
    "name": "芳賀",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5449,
    "lon": 140.0784,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TCGH17",
    "name": "藤原2",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.9823,
    "lon": 139.6955,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TKCH01",
    "name": "陸別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4658,
    "lon": 143.6869,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH02",
    "name": "足寄東",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3797,
    "lon": 143.9022,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH03",
    "name": "足寄西",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2683,
    "lon": 143.4356,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH04",
    "name": "新得南",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1714,
    "lon": 142.9214,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH05",
    "name": "本別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1186,
    "lon": 143.6219,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH06",
    "name": "芽室",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8894,
    "lon": 143.0642,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "TKCH07",
    "name": "豊頃",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8089,
    "lon": 143.5242,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "TKCH08",
    "name": "大樹",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4839,
    "lon": 143.1558,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "TKCH10",
    "name": "新得北",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3313,
    "lon": 142.9486,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TKCH11",
    "name": "清水",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8717,
    "lon": 142.8868,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "TKSH01",
    "name": "日和佐",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.7717,
    "lon": 134.5021,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKSH02",
    "name": "貞光",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.0079,
    "lon": 134.0945,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKSH03",
    "name": "木屋平",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.8745,
    "lon": 134.1321,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKSH04",
    "name": "徳島",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.9869,
    "lon": 134.5364,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKSH05",
    "name": "海南",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.6594,
    "lon": 134.3183,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKSH06",
    "name": "井川",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.9964,
    "lon": 133.8959,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "TKYH02",
    "name": "府中",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6507,
    "lon": 139.4736,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKYH11",
    "name": "江東",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6081,
    "lon": 139.8157,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "TKYH12",
    "name": "八王子",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6669,
    "lon": 139.2682,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "TKYH13",
    "name": "檜原南",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6984,
    "lon": 139.1306,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "TTRH01",
    "name": "智頭",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.2572,
    "lon": 134.22,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH02",
    "name": "日野",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.2281,
    "lon": 133.3936,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH03",
    "name": "溝口",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.3522,
    "lon": 133.4944,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH04",
    "name": "赤碕",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.4636,
    "lon": 133.6333,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH05",
    "name": "岩美",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.5698,
    "lon": 134.3454,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH06",
    "name": "河原",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.3914,
    "lon": 134.2015,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TTRH07",
    "name": "関金",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.3618,
    "lon": 133.7513,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "TYMH01",
    "name": "氷見",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.8836,
    "lon": 136.9306,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "TYMH02",
    "name": "大門",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.7111,
    "lon": 137.0408,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "TYMH03",
    "name": "富山",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.7263,
    "lon": 137.2658,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "TYMH04",
    "name": "魚津",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.7883,
    "lon": 137.4719,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "TYMH05",
    "name": "井波",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.5706,
    "lon": 136.9614,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "TYMH06",
    "name": "八尾",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.5681,
    "lon": 137.1625,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "TYMH07",
    "name": "利賀",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.4375,
    "lon": 137.0422,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "WKYH01",
    "name": "広川",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.9771,
    "lon": 135.215,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH02",
    "name": "花園",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.134,
    "lon": 135.5397,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH03",
    "name": "野上",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.1281,
    "lon": 135.3272,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH04",
    "name": "すさみ",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.5525,
    "lon": 135.5482,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH05",
    "name": "那智勝浦",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.6038,
    "lon": 135.8648,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH06",
    "name": "大塔",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.6915,
    "lon": 135.5981,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH07",
    "name": "上富田",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.6861,
    "lon": 135.4424,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "WKYH08",
    "name": "那賀",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.3194,
    "lon": 135.4511,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "WKYH09",
    "name": "和歌山",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.2835,
    "lon": 135.0742,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "WKYH10",
    "name": "印南",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.8214,
    "lon": 135.22,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "YMGH01",
    "name": "防府",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0461,
    "lon": 131.5642,
    "siteAmp": 1.67,
    "isUnderground": false
  },
  {
    "code": "YMGH02",
    "name": "美祢",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1078,
    "lon": 131.1458,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH03",
    "name": "岩国",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1858,
    "lon": 132.1285,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH04",
    "name": "周東",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0237,
    "lon": 132.0651,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH05",
    "name": "美川",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1941,
    "lon": 131.9968,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH06",
    "name": "宇部",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.986,
    "lon": 131.3036,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH07",
    "name": "菊川",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1117,
    "lon": 131.053,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH08",
    "name": "豊浦",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1316,
    "lon": 130.9347,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH09",
    "name": "田万川",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.6225,
    "lon": 131.6706,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "YMGH10",
    "name": "むつみ",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.4805,
    "lon": 131.6353,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "YMGH11",
    "name": "徳地",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.2058,
    "lon": 131.6883,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "YMGH12",
    "name": "美東",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.2143,
    "lon": 131.3621,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "YMGH13",
    "name": "長門",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.3376,
    "lon": 131.1794,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "YMGH14",
    "name": "萩",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.3947,
    "lon": 131.3798,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "YMGH15",
    "name": "徳山",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.9692,
    "lon": 131.8174,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "YMGH16",
    "name": "上関",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.8227,
    "lon": 132.1064,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "YMGH17",
    "name": "東和",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.9258,
    "lon": 132.4071,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "YMNH08",
    "name": "西野原",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.6863,
    "lon": 138.7371,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "YMNH09",
    "name": "早川",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.4294,
    "lon": 138.3356,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "YMNH10",
    "name": "早川北",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.5319,
    "lon": 138.3118,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH11",
    "name": "大月",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.6215,
    "lon": 138.9808,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH12",
    "name": "増穂",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.5591,
    "lon": 138.4521,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH13",
    "name": "身延",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.3476,
    "lon": 138.4234,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH14",
    "name": "都留南",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.5082,
    "lon": 138.9707,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH15",
    "name": "上九一色",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.5291,
    "lon": 138.6076,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMNH16",
    "name": "甲府2",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.7389,
    "lon": 138.5684,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "YMTH01",
    "name": "天童",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.3811,
    "lon": 140.3839,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH02",
    "name": "山形",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.2664,
    "lon": 140.2617,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH03",
    "name": "南陽",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.1006,
    "lon": 140.1586,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH04",
    "name": "上山",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.0783,
    "lon": 140.3011,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH05",
    "name": "小国",
    "pref": "山形県",
    "region": "東北",
    "lat": 37.9853,
    "lon": 139.805,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH06",
    "name": "高畠",
    "pref": "山形県",
    "region": "東北",
    "lat": 37.9603,
    "lon": 140.1869,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "YMTH07",
    "name": "米沢",
    "pref": "山形県",
    "region": "東北",
    "lat": 37.8931,
    "lon": 140.0311,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "YMTH08",
    "name": "八幡",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.9672,
    "lon": 140.0367,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "YMTH09",
    "name": "戸沢",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.7469,
    "lon": 140.1814,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "YMTH10",
    "name": "舟形",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.7078,
    "lon": 140.3778,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "YMTH11",
    "name": "最上",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.7103,
    "lon": 140.5578,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "YMTH12",
    "name": "立川",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.6328,
    "lon": 140.0089,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "YMTH13",
    "name": "朝日",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.4675,
    "lon": 139.7639,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "YMTH14",
    "name": "西川西",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.3831,
    "lon": 139.995,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "YMTH15",
    "name": "西川東",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.4228,
    "lon": 140.1283,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "AIC001",
    "name": "尾西",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.2944,
    "lon": 136.753,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC002",
    "name": "小牧",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.2947,
    "lon": 136.9183,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC003",
    "name": "津島",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.17,
    "lon": 136.7433,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC004",
    "name": "名古屋",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.06,
    "lon": 136.9767,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC005",
    "name": "藤岡",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.1947,
    "lon": 137.2086,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC006",
    "name": "稲武",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.2127,
    "lon": 137.5116,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "AIC007",
    "name": "足助",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.1361,
    "lon": 137.3383,
    "siteAmp": 1.61,
    "isUnderground": true
  },
  {
    "code": "AIC008",
    "name": "設楽",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.0973,
    "lon": 137.5786,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "AIC009",
    "name": "豊田",
    "pref": "愛知県",
    "region": "中部",
    "lat": 35.078,
    "lon": 137.1494,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "AIC010",
    "name": "作手",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.977,
    "lon": 137.4327,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC011",
    "name": "知多",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9933,
    "lon": 136.8669,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC012",
    "name": "安城",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9086,
    "lon": 137.0477,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC013",
    "name": "長篠",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.9302,
    "lon": 137.5791,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC014",
    "name": "蒲郡",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.823,
    "lon": 137.223,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC015",
    "name": "豊橋",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.7516,
    "lon": 137.4077,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC016",
    "name": "美浜",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.7755,
    "lon": 136.9116,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC017",
    "name": "田原",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.6695,
    "lon": 137.2636,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AIC018",
    "name": "渥美",
    "pref": "愛知県",
    "region": "中部",
    "lat": 34.6188,
    "lon": 137.1108,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "AKT001",
    "name": "小坂",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.3252,
    "lon": 140.7463,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "AKT002",
    "name": "大館",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.265,
    "lon": 140.5694,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT003",
    "name": "藤里",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.2755,
    "lon": 140.2666,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT004",
    "name": "八森",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.3861,
    "lon": 139.9861,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT005",
    "name": "能代",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.2005,
    "lon": 140.0322,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT006",
    "name": "鹿角",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.2125,
    "lon": 140.7908,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT007",
    "name": "琴丘",
    "pref": "秋田県",
    "region": "東北",
    "lat": 40.0349,
    "lon": 140.0953,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "AKT008",
    "name": "飯田川",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.8802,
    "lon": 140.075,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "AKT009",
    "name": "男鹿",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.8852,
    "lon": 139.85,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "AKT010",
    "name": "秋田",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.7197,
    "lon": 140.1036,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT011",
    "name": "宮田",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.81,
    "lon": 140.5838,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT012",
    "name": "田沢湖",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.6963,
    "lon": 140.7216,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT013",
    "name": "協和",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.6041,
    "lon": 140.3247,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT014",
    "name": "角館",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.5922,
    "lon": 140.5588,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT015",
    "name": "本荘",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.3802,
    "lon": 140.0533,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT016",
    "name": "大曲",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.4516,
    "lon": 140.4794,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT017",
    "name": "横手",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.2947,
    "lon": 140.5663,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT018",
    "name": "鳥海",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.1911,
    "lon": 140.1936,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT019",
    "name": "雄勝",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.0355,
    "lon": 140.4544,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "AKT020",
    "name": "象潟",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.1994,
    "lon": 139.9119,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "AKT021",
    "name": "阿仁",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.9922,
    "lon": 140.4066,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "AKT022",
    "name": "玉川",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.7711,
    "lon": 140.6702,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AKT023",
    "name": "椿台",
    "pref": "秋田県",
    "region": "東北",
    "lat": 39.1433,
    "lon": 140.7205,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "AOM001",
    "name": "大間",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.5241,
    "lon": 140.928,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "AOM002",
    "name": "福浦",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.3254,
    "lon": 140.8168,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "AOM003",
    "name": "大畑",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.4028,
    "lon": 141.1735,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "AOM004",
    "name": "尻屋",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.4061,
    "lon": 141.4522,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "AOM005",
    "name": "むつ",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.2922,
    "lon": 141.2008,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "AOM006",
    "name": "川内",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.195,
    "lon": 141.0008,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "AOM007",
    "name": "南通",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.1664,
    "lon": 141.3882,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "AOM008",
    "name": "横浜",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.0813,
    "lon": 141.2588,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "AOM009",
    "name": "六ヶ所",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.9638,
    "lon": 141.3769,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "AOM010",
    "name": "野辺地",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.8694,
    "lon": 141.1452,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM011",
    "name": "三沢",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6776,
    "lon": 141.3705,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM012",
    "name": "八戸",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5111,
    "lon": 141.4841,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM013",
    "name": "南部",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4097,
    "lon": 141.2836,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM014",
    "name": "子ノ口",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4344,
    "lon": 140.9441,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM015",
    "name": "碇ヶ関",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.4711,
    "lon": 140.6341,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM016",
    "name": "弘前",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5991,
    "lon": 140.5025,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM017",
    "name": "深浦",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6336,
    "lon": 139.9319,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "AOM018",
    "name": "鯵ヶ沢",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.7755,
    "lon": 140.2011,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "AOM019",
    "name": "五所川原",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.8125,
    "lon": 140.4508,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "AOM020",
    "name": "青森",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.8166,
    "lon": 140.7536,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM021",
    "name": "十和田",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6125,
    "lon": 141.2116,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM022",
    "name": "東田沢",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.9897,
    "lon": 140.9191,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM023",
    "name": "中里",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.965,
    "lon": 140.4361,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM024",
    "name": "蟹田",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.0447,
    "lon": 140.6433,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM025",
    "name": "今別",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.1769,
    "lon": 140.4836,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM026",
    "name": "小泊",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.1255,
    "lon": 140.3141,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM027",
    "name": "脇野沢",
    "pref": "青森県",
    "region": "東北",
    "lat": 41.1427,
    "lon": 140.8255,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM028",
    "name": "八甲田",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.6975,
    "lon": 140.9225,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "AOM029",
    "name": "西目屋",
    "pref": "青森県",
    "region": "東北",
    "lat": 40.5731,
    "lon": 140.3,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "CHB001",
    "name": "野田",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.9563,
    "lon": 139.8766,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB002",
    "name": "松戸",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7836,
    "lon": 139.9063,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB003",
    "name": "白井",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7911,
    "lon": 140.0597,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB004",
    "name": "佐原",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.8975,
    "lon": 140.4938,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB005",
    "name": "銚子",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7325,
    "lon": 140.8333,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB006",
    "name": "成田",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7769,
    "lon": 140.31,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "CHB007",
    "name": "佐倉",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7202,
    "lon": 140.23,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "CHB008",
    "name": "浦安",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.6505,
    "lon": 139.9055,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "CHB009",
    "name": "千葉",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.605,
    "lon": 140.1055,
    "siteAmp": 1.61,
    "isUnderground": false
  },
  {
    "code": "CHB010",
    "name": "八日市場",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7044,
    "lon": 140.5713,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB011",
    "name": "蓮沼",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.5844,
    "lon": 140.5004,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB012",
    "name": "東金",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.5694,
    "lon": 140.3366,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB013",
    "name": "茂原",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.4294,
    "lon": 140.2938,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB014",
    "name": "姉崎",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.4736,
    "lon": 140.0522,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB015",
    "name": "木更津",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.3705,
    "lon": 139.9191,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB016",
    "name": "岬",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.2966,
    "lon": 140.39,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB017",
    "name": "市場",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.2955,
    "lon": 140.0788,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB018",
    "name": "勝浦",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1544,
    "lon": 140.3255,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "CHB019",
    "name": "鋸南",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1072,
    "lon": 139.8383,
    "siteAmp": 1.64,
    "isUnderground": false
  },
  {
    "code": "CHB020",
    "name": "鴨川",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1122,
    "lon": 140.1055,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "CHB021",
    "name": "白浜",
    "pref": "千葉県",
    "region": "関東",
    "lat": 34.905,
    "lon": 139.9011,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB022",
    "name": "富津",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.305,
    "lon": 139.863,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB023",
    "name": "館山",
    "pref": "千葉県",
    "region": "関東",
    "lat": 34.9708,
    "lon": 139.8481,
    "siteAmp": 1.66,
    "isUnderground": true
  },
  {
    "code": "CHB024",
    "name": "稲毛",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.6303,
    "lon": 140.0817,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB025",
    "name": "千倉",
    "pref": "千葉県",
    "region": "関東",
    "lat": 34.9674,
    "lon": 139.9491,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB026",
    "name": "長南",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.3839,
    "lon": 140.2403,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB027",
    "name": "勝浦北",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.1777,
    "lon": 140.2688,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB028",
    "name": "市川北",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.7628,
    "lon": 139.9697,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB029",
    "name": "行徳",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.6915,
    "lon": 139.9208,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "CHB030",
    "name": "木更津市役所",
    "pref": "千葉県",
    "region": "関東",
    "lat": 35.3733,
    "lon": 139.9183,
    "siteAmp": 1.68,
    "isUnderground": true
  },
  {
    "code": "EHM001",
    "name": "伊予三島",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.9755,
    "lon": 133.552,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "EHM002",
    "name": "新居浜",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.9183,
    "lon": 133.31,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "EHM003",
    "name": "東予",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.9233,
    "lon": 133.0869,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "EHM004",
    "name": "今治",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 34.0591,
    "lon": 133.0008,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM005",
    "name": "川内",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.7941,
    "lon": 132.9166,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM006",
    "name": "美川",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.6377,
    "lon": 133.0108,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM007",
    "name": "北条",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.9588,
    "lon": 132.7747,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM008",
    "name": "松山",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.8165,
    "lon": 132.7307,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM009",
    "name": "広田",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.6291,
    "lon": 132.7988,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "EHM010",
    "name": "肱川",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.4478,
    "lon": 132.6907,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM011",
    "name": "八幡浜",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.4463,
    "lon": 132.4361,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM012",
    "name": "宇和島",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.2183,
    "lon": 132.5752,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM013",
    "name": "三崎",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.3891,
    "lon": 132.1166,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM014",
    "name": "西海",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 32.9419,
    "lon": 132.5072,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM015",
    "name": "長浜",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.6061,
    "lon": 132.4793,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "EHM016",
    "name": "伊予",
    "pref": "愛媛県",
    "region": "四国",
    "lat": 33.7621,
    "lon": 132.7114,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "FKI001",
    "name": "三国",
    "pref": "福井県",
    "region": "中部",
    "lat": 36.2162,
    "lon": 136.1594,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI002",
    "name": "越廼",
    "pref": "福井県",
    "region": "中部",
    "lat": 36.0355,
    "lon": 136.0166,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI003",
    "name": "福井",
    "pref": "福井県",
    "region": "中部",
    "lat": 36.0709,
    "lon": 136.2716,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI004",
    "name": "大野",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.9758,
    "lon": 136.4894,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI005",
    "name": "武生",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.9036,
    "lon": 136.1772,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI006",
    "name": "今庄",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.77,
    "lon": 136.2027,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI007",
    "name": "敦賀",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.6415,
    "lon": 136.0604,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI008",
    "name": "三方",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.5447,
    "lon": 135.9113,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI009",
    "name": "小浜",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.4933,
    "lon": 135.7547,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKI010",
    "name": "高浜",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.4872,
    "lon": 135.5538,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "FKI011",
    "name": "和泉",
    "pref": "福井県",
    "region": "中部",
    "lat": 35.9066,
    "lon": 136.6712,
    "siteAmp": 0.98,
    "isUnderground": false
  },
  {
    "code": "FKO001",
    "name": "玄海",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.8392,
    "lon": 130.5109,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO002",
    "name": "中間",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.823,
    "lon": 130.7077,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO003",
    "name": "北九州",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.8291,
    "lon": 130.9038,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO004",
    "name": "行橋",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.7355,
    "lon": 131.0119,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO005",
    "name": "飯塚",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.6486,
    "lon": 130.6986,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO006",
    "name": "福岡",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5936,
    "lon": 130.4008,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO007",
    "name": "前原",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5577,
    "lon": 130.2047,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "FKO008",
    "name": "添田",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.5683,
    "lon": 130.8563,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "FKO009",
    "name": "筑紫野",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.4919,
    "lon": 130.5186,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "FKO010",
    "name": "甘木",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.4202,
    "lon": 130.6713,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO011",
    "name": "久留米",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.3202,
    "lon": 130.5138,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO012",
    "name": "浮羽",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.3286,
    "lon": 130.7963,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO013",
    "name": "八女",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.2219,
    "lon": 130.563,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO014",
    "name": "矢部",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.1458,
    "lon": 130.8205,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO015",
    "name": "柳川",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.1594,
    "lon": 130.4075,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKO016",
    "name": "大牟田",
    "pref": "福岡県",
    "region": "九州",
    "lat": 33.0125,
    "lon": 130.4494,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "FKS001",
    "name": "相馬",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.7919,
    "lon": 140.923,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS002",
    "name": "梁川",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.8419,
    "lon": 140.6047,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS003",
    "name": "福島",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.7583,
    "lon": 140.4833,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS004",
    "name": "飯舘",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6769,
    "lon": 140.738,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS005",
    "name": "原町",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6355,
    "lon": 140.9883,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS006",
    "name": "葛尾",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.5,
    "lon": 140.7622,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS007",
    "name": "大熊",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.403,
    "lon": 140.9666,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS008",
    "name": "船引",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4333,
    "lon": 140.5702,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS009",
    "name": "小野",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2747,
    "lon": 140.6383,
    "siteAmp": 1.77,
    "isUnderground": false
  },
  {
    "code": "FKS010",
    "name": "広野",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2311,
    "lon": 141.005,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "FKS011",
    "name": "いわき",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.088,
    "lon": 140.9069,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "FKS012",
    "name": "勿来",
    "pref": "福島県",
    "region": "東北",
    "lat": 36.9038,
    "lon": 140.7963,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "FKS013",
    "name": "古殿",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0869,
    "lon": 140.5597,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "FKS014",
    "name": "矢祭",
    "pref": "福島県",
    "region": "東北",
    "lat": 36.8833,
    "lon": 140.4199,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "FKS015",
    "name": "棚倉",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0186,
    "lon": 140.3808,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "FKS016",
    "name": "白河",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.1197,
    "lon": 140.1947,
    "siteAmp": 1.8,
    "isUnderground": false
  },
  {
    "code": "FKS017",
    "name": "須賀川",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.2811,
    "lon": 140.3722,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "FKS018",
    "name": "郡山",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.393,
    "lon": 140.3655,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "FKS019",
    "name": "二本松",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6,
    "lon": 140.4402,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "FKS020",
    "name": "猪苗代",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.5444,
    "lon": 140.1111,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "FKS021",
    "name": "喜多方",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.6505,
    "lon": 139.8666,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "FKS022",
    "name": "西会津",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.5972,
    "lon": 139.65,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "FKS023",
    "name": "会津若松",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.4744,
    "lon": 139.9327,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "FKS024",
    "name": "中野",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.3927,
    "lon": 140.1358,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS025",
    "name": "下郷",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.3047,
    "lon": 139.9033,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS026",
    "name": "南郷",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.263,
    "lon": 139.5419,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS027",
    "name": "滝原",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0669,
    "lon": 139.6841,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS028",
    "name": "只見",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.3007,
    "lon": 139.3651,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS029",
    "name": "桧枝岐",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.0128,
    "lon": 139.3834,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "FKS030",
    "name": "金山",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.45,
    "lon": 139.5166,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "FKS031",
    "name": "川内",
    "pref": "福島県",
    "region": "東北",
    "lat": 37.3333,
    "lon": 140.8166,
    "siteAmp": 0.95,
    "isUnderground": false
  },
  {
    "code": "GIF001",
    "name": "白川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2711,
    "lon": 136.9008,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF002",
    "name": "河合",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2703,
    "lon": 137.0283,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF003",
    "name": "神岡",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.3291,
    "lon": 137.3044,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF004",
    "name": "栃尾",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.2461,
    "lon": 137.5205,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF005",
    "name": "高山",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.1505,
    "lon": 137.2544,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF006",
    "name": "荘川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.0302,
    "lon": 136.9558,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "GIF007",
    "name": "高根",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 36.0347,
    "lon": 137.4891,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "GIF008",
    "name": "小坂",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.9483,
    "lon": 137.263,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "GIF009",
    "name": "白鳥",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.9188,
    "lon": 136.8341,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "GIF010",
    "name": "下呂",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.7997,
    "lon": 137.248,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF011",
    "name": "八幡",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.7561,
    "lon": 136.9838,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF012",
    "name": "東杉原",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6333,
    "lon": 136.4911,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF013",
    "name": "金山",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6605,
    "lon": 137.1647,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF014",
    "name": "付知",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.6544,
    "lon": 137.4288,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF015",
    "name": "美濃",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.5422,
    "lon": 136.9102,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF016",
    "name": "七宗",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.5392,
    "lon": 137.1221,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF017",
    "name": "揖斐川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4797,
    "lon": 136.5743,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF018",
    "name": "中津川",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4855,
    "lon": 137.503,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "GIF019",
    "name": "恵那",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4463,
    "lon": 137.4069,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "GIF020",
    "name": "岐阜",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4216,
    "lon": 136.7598,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIF021",
    "name": "美濃加茂",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.4394,
    "lon": 137.003,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIF022",
    "name": "上石津",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.2802,
    "lon": 136.4744,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIF023",
    "name": "土岐",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.385,
    "lon": 137.2188,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIF024",
    "name": "明智",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.2977,
    "lon": 137.39,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GIF025",
    "name": "板取",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.7202,
    "lon": 136.7877,
    "siteAmp": 1.47,
    "isUnderground": true
  },
  {
    "code": "GIF026",
    "name": "美山",
    "pref": "岐阜県",
    "region": "中部",
    "lat": 35.588,
    "lon": 136.7444,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "GNM001",
    "name": "片品",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.7691,
    "lon": 139.228,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM002",
    "name": "水上",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.7788,
    "lon": 138.9727,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM003",
    "name": "沼田",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.6547,
    "lon": 139.0816,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM004",
    "name": "草津",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.6141,
    "lon": 138.595,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM005",
    "name": "嬬恋",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.5102,
    "lon": 138.5208,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM006",
    "name": "吾妻",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.5072,
    "lon": 138.7555,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM007",
    "name": "渋川",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.4606,
    "lon": 139.0124,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM008",
    "name": "前橋",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.3447,
    "lon": 139.14,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "GNM009",
    "name": "桐生",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.4075,
    "lon": 139.3283,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "GNM010",
    "name": "館林",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2311,
    "lon": 139.5363,
    "siteAmp": 1.56,
    "isUnderground": false
  },
  {
    "code": "GNM011",
    "name": "太田",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2883,
    "lon": 139.3641,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "GNM012",
    "name": "伊勢崎",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.3116,
    "lon": 139.1956,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "GNM013",
    "name": "高崎",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.315,
    "lon": 139.0208,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "GNM014",
    "name": "坂本",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.3436,
    "lon": 138.7243,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "GNM015",
    "name": "下仁田",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.2255,
    "lon": 138.7611,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "GNM016",
    "name": "万場",
    "pref": "群馬県",
    "region": "関東",
    "lat": 36.113,
    "lon": 138.9283,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "HKD001",
    "name": "稚内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.4141,
    "lon": 141.6758,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD002",
    "name": "宗谷岬",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.511,
    "lon": 141.9587,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD003",
    "name": "豊富",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.1008,
    "lon": 141.7705,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD004",
    "name": "上猿払",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2119,
    "lon": 142.2294,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD005",
    "name": "猿払",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.3306,
    "lon": 142.1787,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD006",
    "name": "浜頓別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.1244,
    "lon": 142.3558,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD007",
    "name": "中頓別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.9675,
    "lon": 142.2947,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "HKD008",
    "name": "枝幸",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.9352,
    "lon": 142.5783,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "HKD009",
    "name": "歌登",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.8394,
    "lon": 142.485,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "HKD010",
    "name": "風烈布",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.7383,
    "lon": 142.7672,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD011",
    "name": "東利尻",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2438,
    "lon": 141.2208,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD012",
    "name": "船泊",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.4386,
    "lon": 141.0405,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD013",
    "name": "礼文",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.3027,
    "lon": 141.0513,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD014",
    "name": "沼川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 45.2503,
    "lon": 141.857,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD015",
    "name": "天塩",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.8822,
    "lon": 141.7538,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD016",
    "name": "遠別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.7172,
    "lon": 141.8322,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD017",
    "name": "初山別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.53,
    "lon": 141.7702,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD018",
    "name": "正修",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.543,
    "lon": 141.9691,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD019",
    "name": "羽幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3588,
    "lon": 141.7016,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "HKD020",
    "name": "港町",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1463,
    "lon": 141.668,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD021",
    "name": "留萌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9383,
    "lon": 141.6408,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD022",
    "name": "増毛",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8491,
    "lon": 141.5313,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD023",
    "name": "雄冬",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7711,
    "lon": 141.3722,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD024",
    "name": "達布",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0466,
    "lon": 141.8611,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD025",
    "name": "中川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.8093,
    "lon": 142.0755,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD026",
    "name": "音威子府",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.7261,
    "lon": 142.2675,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD027",
    "name": "美深",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.4783,
    "lon": 142.3466,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD028",
    "name": "名寄",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3575,
    "lon": 142.4586,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD029",
    "name": "下川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3088,
    "lon": 142.6458,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD030",
    "name": "士別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1797,
    "lon": 142.398,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD031",
    "name": "朝日",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1161,
    "lon": 142.5991,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD032",
    "name": "和寒",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0211,
    "lon": 142.4161,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD033",
    "name": "愛別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9066,
    "lon": 142.5733,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD034",
    "name": "上川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8519,
    "lon": 142.7725,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD035",
    "name": "層雲峡",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.768,
    "lon": 142.9072,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD036",
    "name": "旭川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7702,
    "lon": 142.3686,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD037",
    "name": "美瑛",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5861,
    "lon": 142.4713,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD038",
    "name": "南富良野",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1641,
    "lon": 142.57,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD039",
    "name": "富良野",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3397,
    "lon": 142.3883,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "HKD040",
    "name": "占冠",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.978,
    "lon": 142.4033,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD041",
    "name": "天人峡",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6225,
    "lon": 142.6875,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD042",
    "name": "仁宇布",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.5427,
    "lon": 142.573,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD043",
    "name": "雄武",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.5797,
    "lon": 142.9683,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD044",
    "name": "興部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.4772,
    "lon": 143.1316,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD045",
    "name": "西興部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3263,
    "lon": 142.9486,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "HKD046",
    "name": "滝上",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1891,
    "lon": 143.0813,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "HKD047",
    "name": "紋別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.3533,
    "lon": 143.3577,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "HKD048",
    "name": "湧別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.2175,
    "lon": 143.6194,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "HKD049",
    "name": "遠軽",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0897,
    "lon": 143.5375,
    "siteAmp": 1.38,
    "isUnderground": false
  },
  {
    "code": "HKD050",
    "name": "白滝",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8761,
    "lon": 143.1786,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD051",
    "name": "佐呂間",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0161,
    "lon": 143.7786,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD052",
    "name": "常呂",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.118,
    "lon": 144.0752,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD053",
    "name": "留辺蘂",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7825,
    "lon": 143.6111,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD054",
    "name": "北見",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7972,
    "lon": 143.9047,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD055",
    "name": "美幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8219,
    "lon": 144.1127,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD056",
    "name": "置戸",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6683,
    "lon": 143.5819,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD057",
    "name": "津別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.703,
    "lon": 144.0311,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD058",
    "name": "網走",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0177,
    "lon": 144.2769,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "HKD059",
    "name": "小清水",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.8541,
    "lon": 144.4669,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "HKD060",
    "name": "斜里",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.9111,
    "lon": 144.6697,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD061",
    "name": "ウトロ",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0675,
    "lon": 145.0013,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD062",
    "name": "富士見",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6722,
    "lon": 143.3127,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD063",
    "name": "相泊",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.1036,
    "lon": 145.2519,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD064",
    "name": "羅臼",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0177,
    "lon": 145.1927,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD065",
    "name": "薫別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7913,
    "lon": 145.0605,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD066",
    "name": "標津",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6594,
    "lon": 145.1347,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD067",
    "name": "中標津",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5525,
    "lon": 144.9766,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD068",
    "name": "上西春別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4083,
    "lon": 144.7744,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD069",
    "name": "別海",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3916,
    "lon": 145.1208,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD070",
    "name": "本別海",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3827,
    "lon": 145.288,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD071",
    "name": "厚床",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.23,
    "lon": 145.2644,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD072",
    "name": "落石",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1922,
    "lon": 145.525,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD073",
    "name": "根室",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3302,
    "lon": 145.6044,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD074",
    "name": "納沙布",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3655,
    "lon": 145.8067,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD075",
    "name": "浜中",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1283,
    "lon": 145.0328,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD076",
    "name": "厚岸",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0483,
    "lon": 144.8538,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD077",
    "name": "釧路",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9819,
    "lon": 144.3863,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD078",
    "name": "塘路",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1461,
    "lon": 144.5016,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD079",
    "name": "標茶",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3008,
    "lon": 144.6036,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "HKD080",
    "name": "弟子屈",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5052,
    "lon": 144.4525,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "HKD081",
    "name": "川湯",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.6402,
    "lon": 144.3941,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "HKD082",
    "name": "阿寒湖畔",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4344,
    "lon": 144.0894,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "HKD083",
    "name": "鶴居",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2305,
    "lon": 144.3288,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD084",
    "name": "阿寒",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1116,
    "lon": 144.1269,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD085",
    "name": "白糠",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9555,
    "lon": 144.0736,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD086",
    "name": "直別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8516,
    "lon": 143.8618,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD087",
    "name": "二股",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1477,
    "lon": 143.8955,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD088",
    "name": "陸別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.4691,
    "lon": 143.7522,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD089",
    "name": "足寄",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2411,
    "lon": 143.5583,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "HKD090",
    "name": "本別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1188,
    "lon": 143.6222,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD091",
    "name": "浦幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8061,
    "lon": 143.6627,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD092",
    "name": "池田",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9258,
    "lon": 143.4522,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD093",
    "name": "糠平",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3166,
    "lon": 143.3088,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD094",
    "name": "士幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1669,
    "lon": 143.2447,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD095",
    "name": "帯広",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9286,
    "lon": 143.2175,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "HKD096",
    "name": "中札内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.695,
    "lon": 143.1394,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "HKD097",
    "name": "生花",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6155,
    "lon": 143.4247,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "HKD098",
    "name": "大樹",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4958,
    "lon": 143.2825,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "HKD099",
    "name": "新得",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0711,
    "lon": 142.8433,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "HKD100",
    "name": "広尾",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.2838,
    "lon": 143.3158,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HKD101",
    "name": "トムラウシ",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3313,
    "lon": 142.9511,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "HKD102",
    "name": "日高",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.875,
    "lon": 142.4522,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD103",
    "name": "幌毛志",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.725,
    "lon": 142.3011,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD104",
    "name": "平取",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5861,
    "lon": 142.1347,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD105",
    "name": "門別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.48,
    "lon": 142.058,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD106",
    "name": "静内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.3388,
    "lon": 142.3725,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD107",
    "name": "農屋",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4169,
    "lon": 142.503,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD108",
    "name": "三石",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.2502,
    "lon": 142.568,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD109",
    "name": "浦河",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1652,
    "lon": 142.7711,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "HKD110",
    "name": "様似",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.128,
    "lon": 142.9391,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "HKD111",
    "name": "えりも",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.0144,
    "lon": 143.1525,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "HKD112",
    "name": "えりも岬",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.9344,
    "lon": 143.2441,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "HKD113",
    "name": "目黒",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1261,
    "lon": 143.3191,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "HKD114",
    "name": "朱鞠内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.2783,
    "lon": 142.165,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD115",
    "name": "幌加内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 44.0047,
    "lon": 142.1522,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD116",
    "name": "沼田",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7983,
    "lon": 141.938,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD117",
    "name": "深川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.7219,
    "lon": 142.0563,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD118",
    "name": "滝川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.55,
    "lon": 141.9213,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD119",
    "name": "芦別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5175,
    "lon": 142.1952,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "HKD120",
    "name": "月形",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3419,
    "lon": 141.6672,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD121",
    "name": "美唄",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3308,
    "lon": 141.8591,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD122",
    "name": "岩見沢",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1944,
    "lon": 141.7791,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD123",
    "name": "夕張",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9908,
    "lon": 142.0122,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD124",
    "name": "由仁",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9961,
    "lon": 141.7941,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD125",
    "name": "穂別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7583,
    "lon": 142.1383,
    "siteAmp": 1.28,
    "isUnderground": false
  },
  {
    "code": "HKD126",
    "name": "鵡川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5725,
    "lon": 141.9316,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD127",
    "name": "追分",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8716,
    "lon": 141.8241,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD128",
    "name": "早来",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.763,
    "lon": 141.8258,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD129",
    "name": "苫小牧",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6319,
    "lon": 141.6094,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "HKD130",
    "name": "白老",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5602,
    "lon": 141.3536,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD131",
    "name": "登別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4186,
    "lon": 141.085,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD132",
    "name": "室蘭",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.3458,
    "lon": 141.0355,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD133",
    "name": "伊達",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4702,
    "lon": 140.8694,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD134",
    "name": "大滝",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6686,
    "lon": 141.0827,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD135",
    "name": "壮瞥",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5508,
    "lon": 140.8902,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD136",
    "name": "豊浦",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5869,
    "lon": 140.6472,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD137",
    "name": "余別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3211,
    "lon": 140.3827,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD138",
    "name": "積丹",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2897,
    "lon": 140.605,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "HKD139",
    "name": "余市",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.195,
    "lon": 140.7855,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "HKD140",
    "name": "小樽",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1883,
    "lon": 140.9972,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD141",
    "name": "神恵内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1425,
    "lon": 140.4391,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD142",
    "name": "赤井川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.0822,
    "lon": 140.8236,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD143",
    "name": "岩内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9769,
    "lon": 140.513,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD144",
    "name": "倶知安",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9033,
    "lon": 140.7708,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD145",
    "name": "喜茂別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7952,
    "lon": 140.94,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD146",
    "name": "ニセコ",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8053,
    "lon": 140.6913,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD147",
    "name": "蘭越",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.8027,
    "lon": 140.5338,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD148",
    "name": "黒松内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6654,
    "lon": 140.3085,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD149",
    "name": "寿都",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.788,
    "lon": 140.2341,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "HKD150",
    "name": "島牧",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.6986,
    "lon": 140.0652,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "HKD151",
    "name": "長万部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4919,
    "lon": 140.3575,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "HKD152",
    "name": "八雲",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.2561,
    "lon": 140.2672,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD153",
    "name": "上の湯",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1219,
    "lon": 140.3794,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD154",
    "name": "森",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.0938,
    "lon": 140.5669,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD155",
    "name": "鹿部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.0411,
    "lon": 140.81,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD156",
    "name": "七飯",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.8969,
    "lon": 140.6994,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD157",
    "name": "南茅部",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.9025,
    "lon": 140.9733,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD158",
    "name": "椴法華",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.8319,
    "lon": 141.1447,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD159",
    "name": "戸井",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.7136,
    "lon": 141.0061,
    "siteAmp": 1.37,
    "isUnderground": false
  },
  {
    "code": "HKD160",
    "name": "函館",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.7675,
    "lon": 140.7419,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "HKD161",
    "name": "木古内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.6774,
    "lon": 140.4364,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "HKD162",
    "name": "福島",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.4836,
    "lon": 140.2505,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "HKD163",
    "name": "松前",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.4313,
    "lon": 140.115,
    "siteAmp": 1.39,
    "isUnderground": false
  },
  {
    "code": "HKD164",
    "name": "瀬棚",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4477,
    "lon": 139.8572,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD165",
    "name": "今金",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.4261,
    "lon": 140.0211,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD166",
    "name": "大成",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.2261,
    "lon": 139.8219,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD167",
    "name": "熊石",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.1272,
    "lon": 139.985,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD168",
    "name": "江差",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.8666,
    "lon": 140.1305,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD169",
    "name": "木間内",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.9327,
    "lon": 140.373,
    "siteAmp": 1.4,
    "isUnderground": false
  },
  {
    "code": "HKD170",
    "name": "湯ノ岱",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.7466,
    "lon": 140.2547,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD171",
    "name": "小砂子",
    "pref": "北海道",
    "region": "北海道",
    "lat": 41.6461,
    "lon": 140.0011,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD172",
    "name": "稲穂",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.2372,
    "lon": 139.5555,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD173",
    "name": "青苗",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.0636,
    "lon": 139.455,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD174",
    "name": "北島歌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.5925,
    "lon": 139.8322,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD175",
    "name": "浜益",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.5991,
    "lon": 141.3919,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD176",
    "name": "四番川",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.53,
    "lon": 141.5961,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "HKD177",
    "name": "厚田",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.3977,
    "lon": 141.4383,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD178",
    "name": "石狩",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1697,
    "lon": 141.3083,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD179",
    "name": "当別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.2213,
    "lon": 141.5208,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "HKD180",
    "name": "札幌",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1366,
    "lon": 141.355,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD181",
    "name": "江別",
    "pref": "北海道",
    "region": "北海道",
    "lat": 43.1137,
    "lon": 141.5499,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD182",
    "name": "広島",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.99,
    "lon": 141.5561,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD183",
    "name": "定山渓",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.9697,
    "lon": 141.1688,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD184",
    "name": "千歳",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.7875,
    "lon": 141.6047,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HKD185",
    "name": "支笏湖畔",
    "pref": "北海道",
    "region": "北海道",
    "lat": 42.773,
    "lon": 141.4058,
    "siteAmp": 1.45,
    "isUnderground": false
  },
  {
    "code": "HRS001",
    "name": "高野",
    "pref": "広島県",
    "region": "中国",
    "lat": 35.0305,
    "lon": 132.9044,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "HRS002",
    "name": "東城",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.8919,
    "lon": 133.2781,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "HRS003",
    "name": "三次",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.8111,
    "lon": 132.8444,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "HRS004",
    "name": "芸北",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.723,
    "lon": 132.2797,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "HRS005",
    "name": "油木",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.7738,
    "lon": 133.2833,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "HRS006",
    "name": "豊平",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.6627,
    "lon": 132.4102,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "HRS007",
    "name": "甲奴",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.7,
    "lon": 133.0972,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "HRS008",
    "name": "向原",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5997,
    "lon": 132.7227,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "HRS009",
    "name": "湯来",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4894,
    "lon": 132.2819,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "HRS010",
    "name": "世羅",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5836,
    "lon": 133.0514,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS011",
    "name": "府中",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.5654,
    "lon": 133.239,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS012",
    "name": "東広島",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4244,
    "lon": 132.7447,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS013",
    "name": "広島",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.3736,
    "lon": 132.453,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS014",
    "name": "大野",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.2836,
    "lon": 132.2791,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS015",
    "name": "福山",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4816,
    "lon": 133.3641,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS016",
    "name": "尾道",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4166,
    "lon": 133.1997,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS017",
    "name": "三原",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.4008,
    "lon": 133.0858,
    "siteAmp": 1.75,
    "isUnderground": false
  },
  {
    "code": "HRS018",
    "name": "竹原",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.338,
    "lon": 132.9094,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "HRS019",
    "name": "呉",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.2497,
    "lon": 132.5642,
    "siteAmp": 1.76,
    "isUnderground": false
  },
  {
    "code": "HRS020",
    "name": "因島",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.2903,
    "lon": 133.1802,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HRS021",
    "name": "西城",
    "pref": "広島県",
    "region": "中国",
    "lat": 34.9497,
    "lon": 133.1197,
    "siteAmp": 1.78,
    "isUnderground": false
  },
  {
    "code": "HYG001",
    "name": "浜坂",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.6163,
    "lon": 134.4527,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG002",
    "name": "香住",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.638,
    "lon": 134.6311,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG003",
    "name": "出石",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.4583,
    "lon": 134.8786,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG004",
    "name": "村岡",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.455,
    "lon": 134.5775,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG005",
    "name": "和田山",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.3375,
    "lon": 134.8647,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG006",
    "name": "大屋",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.3294,
    "lon": 134.668,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "HYG007",
    "name": "波賀",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.1605,
    "lon": 134.5486,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "HYG008",
    "name": "生野",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.145,
    "lon": 134.7908,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "HYG009",
    "name": "黒井",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.1658,
    "lon": 135.1069,
    "siteAmp": 0.97,
    "isUnderground": false
  },
  {
    "code": "HYG010",
    "name": "丹南",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 35.0561,
    "lon": 135.1805,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG011",
    "name": "上月",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9816,
    "lon": 134.3255,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG012",
    "name": "山崎",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9927,
    "lon": 134.5547,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG013",
    "name": "市川",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9858,
    "lon": 134.7661,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG014",
    "name": "西脇",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9991,
    "lon": 135.0027,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG015",
    "name": "三田",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.9483,
    "lon": 135.2741,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG016",
    "name": "赤穂",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.7519,
    "lon": 134.3927,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG017",
    "name": "龍野",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.8561,
    "lon": 134.5472,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG018",
    "name": "姫路",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.8111,
    "lon": 134.6897,
    "siteAmp": 0.99,
    "isUnderground": false
  },
  {
    "code": "HYG019",
    "name": "加古川",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.8288,
    "lon": 134.8263,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "HYG020",
    "name": "三木",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.7944,
    "lon": 134.9927,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG021",
    "name": "神戸",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.6866,
    "lon": 135.1611,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG022",
    "name": "西宮",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.743,
    "lon": 135.3527,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG023",
    "name": "明石",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.6411,
    "lon": 135.0027,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG024",
    "name": "東浦",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.5297,
    "lon": 134.9932,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG025",
    "name": "洲本",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.3372,
    "lon": 134.9041,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG026",
    "name": "五色",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.4116,
    "lon": 134.7952,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "HYG027",
    "name": "南淡",
    "pref": "兵庫県",
    "region": "近畿",
    "lat": 34.2466,
    "lon": 134.7319,
    "siteAmp": 1.02,
    "isUnderground": false
  },
  {
    "code": "IBR001",
    "name": "大子",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.773,
    "lon": 140.3602,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR002",
    "name": "高萩",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.703,
    "lon": 140.7102,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR003",
    "name": "日立",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.5883,
    "lon": 140.6486,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR004",
    "name": "大宮",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.5485,
    "lon": 140.4135,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR005",
    "name": "笠間",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.3819,
    "lon": 140.2405,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR006",
    "name": "水戸",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.3633,
    "lon": 140.4576,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR007",
    "name": "那珂湊",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.3491,
    "lon": 140.5988,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR008",
    "name": "下館",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.303,
    "lon": 139.9861,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR009",
    "name": "古河",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1816,
    "lon": 139.7069,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "IBR010",
    "name": "下妻",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1811,
    "lon": 139.9686,
    "siteAmp": 1.2,
    "isUnderground": false
  },
  {
    "code": "IBR011",
    "name": "つくば",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1219,
    "lon": 140.0936,
    "siteAmp": 1.2,
    "isUnderground": false
  },
  {
    "code": "IBR012",
    "name": "石岡",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1922,
    "lon": 140.2746,
    "siteAmp": 1.2,
    "isUnderground": false
  },
  {
    "code": "IBR013",
    "name": "鉾田",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.1555,
    "lon": 140.4925,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR014",
    "name": "土浦",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.0697,
    "lon": 140.198,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR015",
    "name": "岩井",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.0661,
    "lon": 139.9113,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR016",
    "name": "取手",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.908,
    "lon": 140.0527,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR017",
    "name": "江戸崎",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.9505,
    "lon": 140.3227,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR018",
    "name": "鹿嶋",
    "pref": "茨城県",
    "region": "関東",
    "lat": 35.9738,
    "lon": 140.6355,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "IBR019",
    "name": "北茨城",
    "pref": "茨城県",
    "region": "関東",
    "lat": 36.8777,
    "lon": 140.6578,
    "siteAmp": 1.19,
    "isUnderground": true
  },
  {
    "code": "ISK001",
    "name": "大谷",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.4969,
    "lon": 137.1794,
    "siteAmp": 0.94,
    "isUnderground": false
  },
  {
    "code": "ISK002",
    "name": "正院",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.4413,
    "lon": 137.2908,
    "siteAmp": 0.94,
    "isUnderground": false
  },
  {
    "code": "ISK003",
    "name": "輪島",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.3889,
    "lon": 136.9113,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK004",
    "name": "能都",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.305,
    "lon": 137.15,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK005",
    "name": "穴水",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.2277,
    "lon": 136.9069,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK006",
    "name": "富来",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.1572,
    "lon": 136.6927,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK007",
    "name": "七尾",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.0397,
    "lon": 136.9711,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK008",
    "name": "羽咋",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.8888,
    "lon": 136.7813,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK009",
    "name": "七塚",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.7304,
    "lon": 136.7055,
    "siteAmp": 0.93,
    "isUnderground": false
  },
  {
    "code": "ISK010",
    "name": "金沢",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.5388,
    "lon": 136.6461,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "ISK011",
    "name": "小松",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.3936,
    "lon": 136.4461,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "ISK012",
    "name": "鳥越",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.3544,
    "lon": 136.6075,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "ISK013",
    "name": "白峰",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.1774,
    "lon": 136.6276,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "ISK014",
    "name": "加賀",
    "pref": "石川県",
    "region": "中部",
    "lat": 36.2997,
    "lon": 136.3183,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "ISK015",
    "name": "大町",
    "pref": "石川県",
    "region": "中部",
    "lat": 37.2235,
    "lon": 136.9117,
    "siteAmp": 0.9,
    "isUnderground": false
  },
  {
    "code": "IWT001",
    "name": "種市",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.4072,
    "lon": 141.7227,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT002",
    "name": "久慈",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.1791,
    "lon": 141.7677,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT003",
    "name": "普代",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.0055,
    "lon": 141.8897,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT004",
    "name": "田老",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.7329,
    "lon": 141.9707,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT005",
    "name": "宮古",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6444,
    "lon": 141.95,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT006",
    "name": "山田",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.4821,
    "lon": 141.9784,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT007",
    "name": "釜石",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.2672,
    "lon": 141.8597,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT008",
    "name": "大船渡",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.0786,
    "lon": 141.7119,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT009",
    "name": "大東",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.0158,
    "lon": 141.4066,
    "siteAmp": 1.65,
    "isUnderground": false
  },
  {
    "code": "IWT010",
    "name": "一関",
    "pref": "岩手県",
    "region": "東北",
    "lat": 38.9317,
    "lon": 141.1298,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "IWT011",
    "name": "水沢",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.1425,
    "lon": 141.1555,
    "siteAmp": 1.63,
    "isUnderground": false
  },
  {
    "code": "IWT012",
    "name": "北上",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.318,
    "lon": 141.1413,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT013",
    "name": "遠野",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.3262,
    "lon": 141.5672,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT014",
    "name": "石鳥谷",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.4816,
    "lon": 141.1505,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT015",
    "name": "川尻",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.3152,
    "lon": 140.7827,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT016",
    "name": "川井",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.5969,
    "lon": 141.6825,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT017",
    "name": "門馬",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6308,
    "lon": 141.4411,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT018",
    "name": "盛岡",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.6925,
    "lon": 141.1513,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT019",
    "name": "岩泉",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.8002,
    "lon": 141.662,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "IWT020",
    "name": "藪川",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.7813,
    "lon": 141.333,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "IWT021",
    "name": "西根",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.9175,
    "lon": 141.0855,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "IWT022",
    "name": "安代",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.0983,
    "lon": 141.0558,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "IWT023",
    "name": "葛巻",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.0338,
    "lon": 141.4538,
    "siteAmp": 1.6,
    "isUnderground": false
  },
  {
    "code": "IWT024",
    "name": "二戸",
    "pref": "岩手県",
    "region": "東北",
    "lat": 40.2585,
    "lon": 141.2944,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWT025",
    "name": "大志田",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.5141,
    "lon": 140.8336,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "IWT026",
    "name": "相去",
    "pref": "岩手県",
    "region": "東北",
    "lat": 39.254,
    "lon": 141.1018,
    "siteAmp": 1.59,
    "isUnderground": false
  },
  {
    "code": "KGS001",
    "name": "東",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 32.1913,
    "lon": 130.1786,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "KGS002",
    "name": "出水",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 32.0882,
    "lon": 130.3542,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS003",
    "name": "大口",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 32.0525,
    "lon": 130.5897,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS004",
    "name": "阿久根",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 32.0111,
    "lon": 130.195,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS005",
    "name": "宮之城",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.8972,
    "lon": 130.4536,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS006",
    "name": "横川",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.9025,
    "lon": 130.7044,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS007",
    "name": "川内",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.8108,
    "lon": 130.3055,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS008",
    "name": "蒲生",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.7586,
    "lon": 130.5722,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS009",
    "name": "国分",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.7333,
    "lon": 130.7636,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "KGS010",
    "name": "串木野",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.7088,
    "lon": 130.2758,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "KGS011",
    "name": "日吉",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.5861,
    "lon": 130.3513,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "KGS012",
    "name": "鹿児島",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.6022,
    "lon": 130.5763,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "KGS013",
    "name": "大隅",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.5938,
    "lon": 130.9961,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "KGS014",
    "name": "垂水",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.4925,
    "lon": 130.7022,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "KGS015",
    "name": "大崎",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.4269,
    "lon": 131.0133,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "KGS016",
    "name": "加世田",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.4127,
    "lon": 130.3247,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "KGS017",
    "name": "鹿屋",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.3919,
    "lon": 130.8725,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "KGS018",
    "name": "喜入",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.3722,
    "lon": 130.5472,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "KGS019",
    "name": "枕崎",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.2741,
    "lon": 130.303,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "KGS020",
    "name": "頴娃",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.2361,
    "lon": 130.4938,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS021",
    "name": "指宿",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.25,
    "lon": 130.6347,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS022",
    "name": "内之浦",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.2769,
    "lon": 131.0527,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS023",
    "name": "田代",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.1955,
    "lon": 130.8513,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS024",
    "name": "佐多",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.0852,
    "lon": 130.7005,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS025",
    "name": "西之表",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 30.7283,
    "lon": 131,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS026",
    "name": "中種子",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 30.5166,
    "lon": 130.9566,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "KGS027",
    "name": "門倉崎",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 30.3452,
    "lon": 130.8852,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGS028",
    "name": "上屋久",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 30.4168,
    "lon": 130.5793,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGS029",
    "name": "屋久",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 30.2327,
    "lon": 130.5575,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KGS030",
    "name": "笠利",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 28.4472,
    "lon": 129.6805,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS031",
    "name": "大和",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 28.3517,
    "lon": 129.3947,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS032",
    "name": "瀬戸内",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 28.135,
    "lon": 129.3227,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS033",
    "name": "伊仙",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 27.6844,
    "lon": 128.9447,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS034",
    "name": "知名",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 27.3302,
    "lon": 128.5763,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS035",
    "name": "与論",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 27.0483,
    "lon": 128.4261,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS036",
    "name": "上甑",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.8325,
    "lon": 129.87,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGS037",
    "name": "下甑",
    "pref": "鹿児島県",
    "region": "九州",
    "lat": 31.6355,
    "lon": 129.71,
    "siteAmp": 1.41,
    "isUnderground": false
  },
  {
    "code": "KGW001",
    "name": "土庄",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.542,
    "lon": 134.2831,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KGW002",
    "name": "内海",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.4694,
    "lon": 134.3166,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KGW003",
    "name": "丸亀",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2611,
    "lon": 133.7922,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KGW004",
    "name": "高松",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.344,
    "lon": 134.0401,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KGW005",
    "name": "観音寺",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.1105,
    "lon": 133.638,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KGW006",
    "name": "長尾",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2463,
    "lon": 134.1883,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KGW007",
    "name": "引田",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.2097,
    "lon": 134.416,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KGW008",
    "name": "琴南",
    "pref": "香川県",
    "region": "四国",
    "lat": 34.1611,
    "lon": 133.9269,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KMM001",
    "name": "小国",
    "pref": "熊本県",
    "region": "九州",
    "lat": 33.1175,
    "lon": 131.0711,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM002",
    "name": "山鹿",
    "pref": "熊本県",
    "region": "九州",
    "lat": 33.0152,
    "lon": 130.6869,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM003",
    "name": "玉名",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9302,
    "lon": 130.55,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM004",
    "name": "一の宮",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.9286,
    "lon": 131.1238,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM005",
    "name": "大津",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.8727,
    "lon": 130.8797,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM006",
    "name": "熊本",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.79,
    "lon": 130.7795,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM007",
    "name": "高森",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.8233,
    "lon": 131.125,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM008",
    "name": "宇土",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.6841,
    "lon": 130.6621,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM009",
    "name": "矢部",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.683,
    "lon": 130.991,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "KMM010",
    "name": "三角",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.6102,
    "lon": 130.4897,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "KMM011",
    "name": "砥用",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.6133,
    "lon": 130.8675,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "KMM012",
    "name": "八代",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.5065,
    "lon": 130.5931,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "KMM013",
    "name": "田浦",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3616,
    "lon": 130.5122,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM014",
    "name": "五木",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3927,
    "lon": 130.8291,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM015",
    "name": "水俣",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.2127,
    "lon": 130.4069,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM016",
    "name": "人吉",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.1931,
    "lon": 130.778,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM017",
    "name": "多良木",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.2527,
    "lon": 130.928,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM018",
    "name": "龍ヶ岳",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3908,
    "lon": 130.3908,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM019",
    "name": "本渡",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.4514,
    "lon": 130.183,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "KMM020",
    "name": "新和",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3602,
    "lon": 130.183,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "KMM021",
    "name": "天草",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.3759,
    "lon": 130.002,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "KMM022",
    "name": "牛深",
    "pref": "熊本県",
    "region": "九州",
    "lat": 32.1911,
    "lon": 130.0288,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "KNG001",
    "name": "川崎",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.5258,
    "lon": 139.7094,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "KNG002",
    "name": "横浜",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4338,
    "lon": 139.6372,
    "siteAmp": 1.36,
    "isUnderground": false
  },
  {
    "code": "KNG003",
    "name": "横須賀",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.2694,
    "lon": 139.6611,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG004",
    "name": "三崎",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.1408,
    "lon": 139.625,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG005",
    "name": "鎌倉",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3159,
    "lon": 139.5494,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG006",
    "name": "二俣川",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4511,
    "lon": 139.5419,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG007",
    "name": "藤沢",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3349,
    "lon": 139.4958,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG008",
    "name": "相模原",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.5719,
    "lon": 139.3297,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG009",
    "name": "厚木",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.4391,
    "lon": 139.365,
    "siteAmp": 1.35,
    "isUnderground": false
  },
  {
    "code": "KNG010",
    "name": "平塚",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3306,
    "lon": 139.3478,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "KNG011",
    "name": "藤野",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.6122,
    "lon": 139.158,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "KNG012",
    "name": "秦野",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3761,
    "lon": 139.208,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "KNG013",
    "name": "小田原",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.2608,
    "lon": 139.1552,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "KNG014",
    "name": "山北",
    "pref": "神奈川県",
    "region": "関東",
    "lat": 35.3575,
    "lon": 139.0858,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "KNG201",
    "name": "平塚ST1",
    "pref": "-",
    "region": "関東",
    "lat": 34.5922,
    "lon": 139.9215,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KNG202",
    "name": "平塚ST2",
    "pref": "-",
    "region": "関東",
    "lat": 34.7363,
    "lon": 139.8425,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "KNG203",
    "name": "平塚ST3",
    "pref": "-",
    "region": "関東",
    "lat": 34.795,
    "lon": 139.6467,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "KNG204",
    "name": "平塚ST4",
    "pref": "-",
    "region": "関東",
    "lat": 34.8898,
    "lon": 139.5743,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "KNG205",
    "name": "平塚ST5",
    "pref": "-",
    "region": "関東",
    "lat": 34.938,
    "lon": 139.4245,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "KNG206",
    "name": "平塚ST6",
    "pref": "-",
    "region": "関東",
    "lat": 35.0933,
    "lon": 139.381,
    "siteAmp": 1.42,
    "isUnderground": false
  },
  {
    "code": "KOC001",
    "name": "東洋",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.5241,
    "lon": 134.2841,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "KOC002",
    "name": "室戸",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.2869,
    "lon": 134.1708,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC003",
    "name": "安芸",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.498,
    "lon": 133.9094,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC004",
    "name": "物部",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.6941,
    "lon": 133.8797,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC005",
    "name": "土佐山田",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.59,
    "lon": 133.6947,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC006",
    "name": "土佐",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.4911,
    "lon": 133.4191,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC007",
    "name": "高知",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.5577,
    "lon": 133.5297,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC008",
    "name": "本川",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.7725,
    "lon": 133.3491,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC009",
    "name": "吾川",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.5708,
    "lon": 133.1744,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "KOC010",
    "name": "須崎",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.3891,
    "lon": 133.2922,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "KOC011",
    "name": "檮原",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.3948,
    "lon": 132.8987,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "KOC012",
    "name": "大正",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.1933,
    "lon": 132.9783,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "KOC013",
    "name": "佐賀",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.0763,
    "lon": 133.1041,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "KOC014",
    "name": "中村",
    "pref": "高知県",
    "region": "四国",
    "lat": 32.9861,
    "lon": 132.9402,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "KOC015",
    "name": "宿毛",
    "pref": "高知県",
    "region": "四国",
    "lat": 32.9336,
    "lon": 132.7277,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "KOC016",
    "name": "土佐清水",
    "pref": "高知県",
    "region": "四国",
    "lat": 32.7325,
    "lon": 132.9779,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "KOC017",
    "name": "大豊",
    "pref": "高知県",
    "region": "四国",
    "lat": 33.7811,
    "lon": 133.7324,
    "siteAmp": 1,
    "isUnderground": false
  },
  {
    "code": "KYT001",
    "name": "丹後",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.7375,
    "lon": 135.105,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT002",
    "name": "久美浜",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.6005,
    "lon": 134.8969,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT003",
    "name": "伊根",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.6736,
    "lon": 135.2947,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT004",
    "name": "宮津",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.5322,
    "lon": 135.1988,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT005",
    "name": "舞鶴",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.4727,
    "lon": 135.3919,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT006",
    "name": "福知山",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.2727,
    "lon": 135.1855,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT007",
    "name": "芦生",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.3025,
    "lon": 135.7158,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT008",
    "name": "本庄",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.258,
    "lon": 135.3994,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT009",
    "name": "日吉",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.1605,
    "lon": 135.5044,
    "siteAmp": 1.34,
    "isUnderground": false
  },
  {
    "code": "KYT010",
    "name": "大布施",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.2066,
    "lon": 135.7766,
    "siteAmp": 1.32,
    "isUnderground": true
  },
  {
    "code": "KYT011",
    "name": "亀岡",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.0138,
    "lon": 135.5666,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "KYT012",
    "name": "京都",
    "pref": "京都府",
    "region": "近畿",
    "lat": 34.993,
    "lon": 135.8216,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "KYT013",
    "name": "宇治",
    "pref": "京都府",
    "region": "近畿",
    "lat": 34.8752,
    "lon": 135.8075,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "KYT014",
    "name": "南山城",
    "pref": "京都府",
    "region": "近畿",
    "lat": 34.77,
    "lon": 135.995,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "KYT015",
    "name": "広河原",
    "pref": "京都府",
    "region": "近畿",
    "lat": 35.2465,
    "lon": 135.7695,
    "siteAmp": 1.31,
    "isUnderground": false
  },
  {
    "code": "MIE001",
    "name": "藤原",
    "pref": "三重県",
    "region": "近畿",
    "lat": 35.1686,
    "lon": 136.4972,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE002",
    "name": "菰野",
    "pref": "三重県",
    "region": "近畿",
    "lat": 35.0247,
    "lon": 136.5102,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE003",
    "name": "四日市",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.9672,
    "lon": 136.6386,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE004",
    "name": "亀山",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.8536,
    "lon": 136.4522,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE005",
    "name": "上野",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.7644,
    "lon": 136.118,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE006",
    "name": "津",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.7145,
    "lon": 136.5068,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE007",
    "name": "白山",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.6402,
    "lon": 136.3394,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE008",
    "name": "名張",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.6252,
    "lon": 136.1102,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE009",
    "name": "松阪",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.5719,
    "lon": 136.5325,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "MIE010",
    "name": "伊勢",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.4875,
    "lon": 136.7363,
    "siteAmp": 1.23,
    "isUnderground": false
  },
  {
    "code": "MIE011",
    "name": "飯高",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.425,
    "lon": 136.3358,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE012",
    "name": "志摩",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.2511,
    "lon": 136.8261,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE013",
    "name": "南島",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.2744,
    "lon": 136.5025,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE014",
    "name": "尾鷲",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.0605,
    "lon": 136.1716,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE015",
    "name": "熊野",
    "pref": "三重県",
    "region": "近畿",
    "lat": 33.875,
    "lon": 136.085,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE016",
    "name": "紀和",
    "pref": "三重県",
    "region": "近畿",
    "lat": 33.873,
    "lon": 135.9216,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE017",
    "name": "宮川",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.3591,
    "lon": 136.3377,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MIE018",
    "name": "椿世",
    "pref": "三重県",
    "region": "近畿",
    "lat": 34.867,
    "lon": 136.4575,
    "siteAmp": 1.22,
    "isUnderground": false
  },
  {
    "code": "MYG001",
    "name": "気仙沼",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.8986,
    "lon": 141.5719,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "MYG002",
    "name": "歌津",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7233,
    "lon": 141.5144,
    "siteAmp": 1.33,
    "isUnderground": false
  },
  {
    "code": "MYG003",
    "name": "東和",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7319,
    "lon": 141.3141,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG004",
    "name": "築館",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7295,
    "lon": 141.0306,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG005",
    "name": "鳴子",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7963,
    "lon": 140.6541,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG006",
    "name": "古川",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5631,
    "lon": 140.9802,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG007",
    "name": "豊里",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5847,
    "lon": 141.2545,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG008",
    "name": "北上",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.5647,
    "lon": 141.4301,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG009",
    "name": "大和",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.4436,
    "lon": 140.8908,
    "siteAmp": 1.32,
    "isUnderground": false
  },
  {
    "code": "MYG010",
    "name": "石巻",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.4262,
    "lon": 141.2853,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG011",
    "name": "牡鹿",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.3022,
    "lon": 141.5079,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG012",
    "name": "塩竈",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.3258,
    "lon": 141.0163,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG013",
    "name": "仙台",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.2633,
    "lon": 140.9327,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG014",
    "name": "作並",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.3147,
    "lon": 140.6391,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG015",
    "name": "岩沼",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.1019,
    "lon": 140.8733,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYG016",
    "name": "白石",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.0055,
    "lon": 140.6244,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYG017",
    "name": "角田",
    "pref": "宮城県",
    "region": "東北",
    "lat": 37.9733,
    "lon": 140.7852,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYG018",
    "name": "伊里前",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7165,
    "lon": 141.5263,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYG019",
    "name": "鳴子温泉",
    "pref": "宮城県",
    "region": "東北",
    "lat": 38.7484,
    "lon": 140.726,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYZ001",
    "name": "高千穂",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.7016,
    "lon": 131.3113,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ002",
    "name": "北川",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.6944,
    "lon": 131.6855,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ003",
    "name": "延岡",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.5625,
    "lon": 131.6622,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ004",
    "name": "南郷",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.3855,
    "lon": 131.3363,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ005",
    "name": "日向",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.4252,
    "lon": 131.6033,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ006",
    "name": "都農",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.253,
    "lon": 131.5633,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ007",
    "name": "西米良",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.2319,
    "lon": 131.1182,
    "siteAmp": 1.3,
    "isUnderground": false
  },
  {
    "code": "MYZ008",
    "name": "西都",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.1025,
    "lon": 131.3952,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYZ009",
    "name": "えびの",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.0427,
    "lon": 130.8133,
    "siteAmp": 1.29,
    "isUnderground": false
  },
  {
    "code": "MYZ010",
    "name": "小林",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.9933,
    "lon": 130.9745,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ011",
    "name": "綾",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.9916,
    "lon": 131.258,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ012",
    "name": "高崎",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.8688,
    "lon": 131.0708,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ013",
    "name": "宮崎",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.9052,
    "lon": 131.4211,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ014",
    "name": "田野",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.8419,
    "lon": 131.305,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ015",
    "name": "都城",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.715,
    "lon": 131.0644,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ016",
    "name": "日南",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.6094,
    "lon": 131.3766,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ017",
    "name": "串間",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.4602,
    "lon": 131.23,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ018",
    "name": "都井岬",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 31.395,
    "lon": 131.3075,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ019",
    "name": "北郷",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.4972,
    "lon": 131.4468,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "MYZ020",
    "name": "椎葉",
    "pref": "宮崎県",
    "region": "九州",
    "lat": 32.4516,
    "lon": 131.1494,
    "siteAmp": 1.25,
    "isUnderground": false
  },
  {
    "code": "NAR001",
    "name": "生駒",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.7122,
    "lon": 135.73,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR002",
    "name": "奈良",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.665,
    "lon": 135.838,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR003",
    "name": "大和高田",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.5136,
    "lon": 135.7219,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR004",
    "name": "榛原",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.5247,
    "lon": 135.954,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR005",
    "name": "五條",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.3375,
    "lon": 135.6911,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR006",
    "name": "川上",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.335,
    "lon": 135.9569,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR007",
    "name": "大塔",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.218,
    "lon": 135.7397,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR008",
    "name": "上北山",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 34.1319,
    "lon": 136.0075,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NAR009",
    "name": "十津川",
    "pref": "奈良県",
    "region": "近畿",
    "lat": 33.9347,
    "lon": 135.758,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "NGN001",
    "name": "飯山",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.8483,
    "lon": 138.3691,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN002",
    "name": "信濃",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.8038,
    "lon": 138.21,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN003",
    "name": "山ノ内",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.7372,
    "lon": 138.4161,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN004",
    "name": "長野",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.6455,
    "lon": 138.1969,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN005",
    "name": "白馬",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.695,
    "lon": 137.8575,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN006",
    "name": "大町",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.5055,
    "lon": 137.8538,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN007",
    "name": "杭瀬下",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.5308,
    "lon": 138.1222,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN008",
    "name": "上田",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.3987,
    "lon": 138.2513,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN009",
    "name": "穂高",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.3347,
    "lon": 137.8725,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN010",
    "name": "小諸",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.325,
    "lon": 138.4388,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN011",
    "name": "長門",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.2533,
    "lon": 138.27,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN012",
    "name": "松本",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.2533,
    "lon": 137.9816,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN013",
    "name": "安曇",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.1802,
    "lon": 137.7883,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN014",
    "name": "小海",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.0924,
    "lon": 138.4875,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN015",
    "name": "諏訪",
    "pref": "長野県",
    "region": "中部",
    "lat": 36.0422,
    "lon": 138.1147,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN016",
    "name": "富士見",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9101,
    "lon": 138.226,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN017",
    "name": "楢川",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.9716,
    "lon": 137.8286,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN018",
    "name": "王滝",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.81,
    "lon": 137.5325,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN019",
    "name": "木曽福島",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.853,
    "lon": 137.7108,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN020",
    "name": "伊那",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.825,
    "lon": 137.9563,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN021",
    "name": "駒ヶ根",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.7272,
    "lon": 137.9372,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN022",
    "name": "南木曽",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.6047,
    "lon": 137.6155,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN023",
    "name": "大鹿",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.5755,
    "lon": 138.0369,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN024",
    "name": "飯田",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.52,
    "lon": 137.8405,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGN025",
    "name": "天龍",
    "pref": "長野県",
    "region": "中部",
    "lat": 35.2832,
    "lon": 137.8601,
    "siteAmp": 0.85,
    "isUnderground": false
  },
  {
    "code": "NGS001",
    "name": "平戸",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.3583,
    "lon": 129.5405,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "NGS002",
    "name": "松浦",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.3411,
    "lon": 129.7077,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "NGS003",
    "name": "志々伎",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.1983,
    "lon": 129.415,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "NGS004",
    "name": "佐世保",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.1775,
    "lon": 129.72,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "NGS005",
    "name": "東彼杵",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.0338,
    "lon": 129.9194,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "NGS006",
    "name": "大瀬戸",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.9294,
    "lon": 129.645,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "NGS007",
    "name": "琴海",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.9027,
    "lon": 129.7825,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "NGS008",
    "name": "小長井",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.9197,
    "lon": 130.1866,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "NGS009",
    "name": "諫早",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.8422,
    "lon": 130.0241,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "NGS010",
    "name": "長崎",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.7319,
    "lon": 129.8786,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS011",
    "name": "千々石",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.7805,
    "lon": 130.2047,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS012",
    "name": "島原",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.785,
    "lon": 130.3486,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS013",
    "name": "野母崎",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.5777,
    "lon": 129.7619,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS014",
    "name": "口之津",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.6072,
    "lon": 130.1872,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS015",
    "name": "宇久",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.2525,
    "lon": 129.1277,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS016",
    "name": "若松",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.8847,
    "lon": 129.0233,
    "siteAmp": 1.06,
    "isUnderground": false
  },
  {
    "code": "NGS017",
    "name": "福江",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.6625,
    "lon": 128.8455,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "NGS018",
    "name": "玉之浦",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.6308,
    "lon": 128.6216,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "NGS019",
    "name": "大村",
    "pref": "長崎県",
    "region": "九州",
    "lat": 32.8969,
    "lon": 129.9605,
    "siteAmp": 1.05,
    "isUnderground": false
  },
  {
    "code": "NGS020",
    "name": "上対馬",
    "pref": "長崎県",
    "region": "九州",
    "lat": 34.6577,
    "lon": 129.4617,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGS021",
    "name": "豊玉",
    "pref": "長崎県",
    "region": "九州",
    "lat": 34.3941,
    "lon": 129.3263,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGS022",
    "name": "国分",
    "pref": "長崎県",
    "region": "九州",
    "lat": 34.1997,
    "lon": 129.2891,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NGS023",
    "name": "郷ノ浦",
    "pref": "長崎県",
    "region": "九州",
    "lat": 33.7469,
    "lon": 129.6922,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "NIG001",
    "name": "岩谷口",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.2555,
    "lon": 138.4369,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG002",
    "name": "両津",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.0716,
    "lon": 138.443,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG003",
    "name": "佐和田",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.9947,
    "lon": 138.3258,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG004",
    "name": "小木",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.8175,
    "lon": 138.2827,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG005",
    "name": "松ヶ崎",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.9175,
    "lon": 138.5013,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG006",
    "name": "寒川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.4472,
    "lon": 139.4994,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG007",
    "name": "村上",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.2272,
    "lon": 139.4897,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG008",
    "name": "中条",
    "pref": "新潟県",
    "region": "中部",
    "lat": 38.05,
    "lon": 139.4088,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG009",
    "name": "新発田",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.9477,
    "lon": 139.3408,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "NIG010",
    "name": "新潟",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.9116,
    "lon": 139.014,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "NIG011",
    "name": "新津",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.7983,
    "lon": 139.1475,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "NIG012",
    "name": "鹿瀬",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6833,
    "lon": 139.4805,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG013",
    "name": "巻",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.7608,
    "lon": 138.8866,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG014",
    "name": "三条",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.638,
    "lon": 138.9591,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG015",
    "name": "村松",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6905,
    "lon": 139.1919,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG016",
    "name": "寺泊",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.6391,
    "lon": 138.7708,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG017",
    "name": "長岡",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.4386,
    "lon": 138.8463,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG018",
    "name": "柏崎",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.3694,
    "lon": 138.5611,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG019",
    "name": "小千谷",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.3013,
    "lon": 138.8153,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "NIG020",
    "name": "小出",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.2302,
    "lon": 138.9652,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "NIG021",
    "name": "十日町",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.1982,
    "lon": 138.7814,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "NIG022",
    "name": "塩沢",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0333,
    "lon": 138.8494,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "NIG023",
    "name": "津南",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0116,
    "lon": 138.6561,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "NIG024",
    "name": "安塚",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.1238,
    "lon": 138.4472,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIG025",
    "name": "直江津",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.1577,
    "lon": 138.2266,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIG026",
    "name": "新井",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0197,
    "lon": 138.2538,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIG027",
    "name": "糸魚川",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.0205,
    "lon": 137.8655,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "NIG028",
    "name": "長岡支所",
    "pref": "新潟県",
    "region": "中部",
    "lat": 37.4231,
    "lon": 138.8894,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "OIT001",
    "name": "国見",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.675,
    "lon": 131.596,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT002",
    "name": "中津",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.5652,
    "lon": 131.2702,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT003",
    "name": "豊後高田",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.5542,
    "lon": 131.4485,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT004",
    "name": "国東",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.5633,
    "lon": 131.7402,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT005",
    "name": "耶馬渓",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4516,
    "lon": 131.1166,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT006",
    "name": "院内",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4211,
    "lon": 131.3172,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT007",
    "name": "杵築",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.4136,
    "lon": 131.6166,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT008",
    "name": "天瀬",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.2522,
    "lon": 131.0227,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT009",
    "name": "湯布院",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.2536,
    "lon": 131.3463,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OIT010",
    "name": "大分",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.2284,
    "lon": 131.5958,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "OIT011",
    "name": "佐賀関",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.2427,
    "lon": 131.8836,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT012",
    "name": "直入",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.063,
    "lon": 131.3758,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT013",
    "name": "犬飼",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.0692,
    "lon": 131.5958,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT014",
    "name": "津久見",
    "pref": "大分県",
    "region": "九州",
    "lat": 33.0622,
    "lon": 131.8613,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT015",
    "name": "竹田",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.9688,
    "lon": 131.3994,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT016",
    "name": "佐伯",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.9713,
    "lon": 131.9052,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT017",
    "name": "宇目",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.8544,
    "lon": 131.6611,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OIT018",
    "name": "蒲江",
    "pref": "大分県",
    "region": "九州",
    "lat": 32.7938,
    "lon": 131.9275,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OKN001",
    "name": "国頭",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.7363,
    "lon": 128.1755,
    "siteAmp": 1.74,
    "isUnderground": false
  },
  {
    "code": "OKN002",
    "name": "名護",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.5877,
    "lon": 127.9786,
    "siteAmp": 1.74,
    "isUnderground": false
  },
  {
    "code": "OKN003",
    "name": "具志川",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.3761,
    "lon": 127.8591,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN004",
    "name": "那覇",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.2458,
    "lon": 127.6805,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN005",
    "name": "知念",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.1647,
    "lon": 127.8286,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN006",
    "name": "久米島",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 26.3458,
    "lon": 126.7497,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN007",
    "name": "狩俣",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 24.8494,
    "lon": 125.2975,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN008",
    "name": "城辺",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 24.7522,
    "lon": 125.3875,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN009",
    "name": "新栄",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 24.3358,
    "lon": 124.1522,
    "siteAmp": 1.73,
    "isUnderground": false
  },
  {
    "code": "OKN010",
    "name": "伊原間",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 24.5033,
    "lon": 124.2816,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "OKN011",
    "name": "上原",
    "pref": "沖縄県",
    "region": "沖縄",
    "lat": 24.4283,
    "lon": 123.7813,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "OKY001",
    "name": "湯原",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.167,
    "lon": 133.7338,
    "siteAmp": 1.11,
    "isUnderground": false
  },
  {
    "code": "OKY002",
    "name": "加茂",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.1755,
    "lon": 134.0527,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY003",
    "name": "西粟倉",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.1705,
    "lon": 134.3413,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY004",
    "name": "新見",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.9547,
    "lon": 133.5044,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY005",
    "name": "落合",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.0066,
    "lon": 133.7344,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY006",
    "name": "津山",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.0652,
    "lon": 134.0077,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY007",
    "name": "高梁",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.7775,
    "lon": 133.6147,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY008",
    "name": "建部",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.8669,
    "lon": 133.9063,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY009",
    "name": "吉井",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.9144,
    "lon": 134.095,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "OKY010",
    "name": "備前",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.7196,
    "lon": 134.1256,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "OKY011",
    "name": "岡山",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.6508,
    "lon": 133.9094,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "OKY012",
    "name": "倉敷",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.5861,
    "lon": 133.7572,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "OKY013",
    "name": "笠岡",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.5063,
    "lon": 133.5125,
    "siteAmp": 1.08,
    "isUnderground": false
  },
  {
    "code": "OKY014",
    "name": "下津井",
    "pref": "岡山県",
    "region": "中国",
    "lat": 34.443,
    "lon": 133.7902,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OKY015",
    "name": "上斎原",
    "pref": "岡山県",
    "region": "中国",
    "lat": 35.2761,
    "lon": 133.9283,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "OSK001",
    "name": "能勢",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.9656,
    "lon": 135.3988,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK002",
    "name": "高槻",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.8541,
    "lon": 135.5986,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK003",
    "name": "豊中",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.7636,
    "lon": 135.4711,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK004",
    "name": "四條畷",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.7372,
    "lon": 135.6422,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK005",
    "name": "大阪",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.7222,
    "lon": 135.5127,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK006",
    "name": "堺",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.5861,
    "lon": 135.4738,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK007",
    "name": "羽曳野",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.5544,
    "lon": 135.6086,
    "siteAmp": 1.27,
    "isUnderground": false
  },
  {
    "code": "OSK008",
    "name": "岸和田",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.4369,
    "lon": 135.3945,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "OSK009",
    "name": "河内長野",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.4333,
    "lon": 135.5844,
    "siteAmp": 1.26,
    "isUnderground": false
  },
  {
    "code": "OSK010",
    "name": "泉南",
    "pref": "大阪府",
    "region": "近畿",
    "lat": 34.3722,
    "lon": 135.2577,
    "siteAmp": 1.24,
    "isUnderground": false
  },
  {
    "code": "SAG001",
    "name": "鎮西",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.5241,
    "lon": 129.8794,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG002",
    "name": "唐津",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.4214,
    "lon": 129.9218,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG003",
    "name": "富士",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.3697,
    "lon": 130.2097,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG004",
    "name": "伊万里",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.2613,
    "lon": 129.8836,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG005",
    "name": "厳木",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.318,
    "lon": 130.0666,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG006",
    "name": "武雄",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.1883,
    "lon": 130.0363,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG007",
    "name": "佐賀",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.2594,
    "lon": 130.3027,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SAG008",
    "name": "鹿島",
    "pref": "佐賀県",
    "region": "九州",
    "lat": 33.1005,
    "lon": 130.1019,
    "siteAmp": 0.96,
    "isUnderground": false
  },
  {
    "code": "SIG001",
    "name": "余呉",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.5366,
    "lon": 136.2094,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG002",
    "name": "今津",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.4183,
    "lon": 136.0272,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG003",
    "name": "長浜",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.3738,
    "lon": 136.2669,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG004",
    "name": "朽木",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.3444,
    "lon": 135.9213,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG005",
    "name": "彦根",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.2461,
    "lon": 136.245,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG006",
    "name": "志賀",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.1969,
    "lon": 135.9238,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG007",
    "name": "近江八幡",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.1307,
    "lon": 136.0986,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG008",
    "name": "永源寺",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.0669,
    "lon": 136.2975,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG009",
    "name": "甲西",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 35.0019,
    "lon": 136.0883,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIG010",
    "name": "大津",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 34.9686,
    "lon": 135.8994,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "SIG011",
    "name": "信楽",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 34.8747,
    "lon": 136.0616,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "SIG012",
    "name": "甲賀",
    "pref": "滋賀県",
    "region": "近畿",
    "lat": 34.9011,
    "lon": 136.2336,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SIT001",
    "name": "本庄",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.2397,
    "lon": 139.1969,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIT002",
    "name": "熊谷",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.1444,
    "lon": 139.3916,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIT003",
    "name": "久喜",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.0688,
    "lon": 139.7,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIT004",
    "name": "長瀞",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.1147,
    "lon": 139.1077,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIT005",
    "name": "小川",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.053,
    "lon": 139.2658,
    "siteAmp": 1.71,
    "isUnderground": false
  },
  {
    "code": "SIT006",
    "name": "秩父",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9922,
    "lon": 139.0741,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "SIT007",
    "name": "東松山",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 36.0508,
    "lon": 139.3944,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "SIT008",
    "name": "春日部",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9797,
    "lon": 139.7488,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "SIT009",
    "name": "川越",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9002,
    "lon": 139.4858,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "SIT010",
    "name": "大宮",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9033,
    "lon": 139.6513,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SIT011",
    "name": "川口",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.8066,
    "lon": 139.7244,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SIT012",
    "name": "飯能",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.8369,
    "lon": 139.3247,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SIT013",
    "name": "所沢",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.7933,
    "lon": 139.4691,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SIT014",
    "name": "中津川",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9922,
    "lon": 138.8041,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "SMN001",
    "name": "美保関",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.5341,
    "lon": 133.1638,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN002",
    "name": "松江",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.4683,
    "lon": 133.0708,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN003",
    "name": "横田",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.1763,
    "lon": 133.0955,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN004",
    "name": "木次",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.285,
    "lon": 132.903,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN005",
    "name": "出雲",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.358,
    "lon": 132.7475,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN006",
    "name": "大田",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.1911,
    "lon": 132.5003,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN007",
    "name": "邑智",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.0775,
    "lon": 132.5939,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN008",
    "name": "瑞穂",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.8491,
    "lon": 132.5333,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN009",
    "name": "江津",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.008,
    "lon": 132.2252,
    "siteAmp": 1.15,
    "isUnderground": false
  },
  {
    "code": "SMN010",
    "name": "浜田",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.8838,
    "lon": 132.0808,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "SMN011",
    "name": "匹見",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.5686,
    "lon": 132.0166,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "SMN012",
    "name": "六日市",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.3497,
    "lon": 131.9377,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "SMN013",
    "name": "益田",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.6658,
    "lon": 131.8483,
    "siteAmp": 1.13,
    "isUnderground": false
  },
  {
    "code": "SMN014",
    "name": "津和野",
    "pref": "島根県",
    "region": "中国",
    "lat": 34.4636,
    "lon": 131.7777,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN015",
    "name": "広瀬",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.3613,
    "lon": 133.173,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN016",
    "name": "掛合",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.1925,
    "lon": 132.8172,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN017",
    "name": "西ノ島",
    "pref": "島根県",
    "region": "中国",
    "lat": 36.0902,
    "lon": 132.9866,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN018",
    "name": "都万",
    "pref": "島根県",
    "region": "中国",
    "lat": 36.1894,
    "lon": 133.2358,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN019",
    "name": "布施",
    "pref": "島根県",
    "region": "中国",
    "lat": 36.2902,
    "lon": 133.3588,
    "siteAmp": 1.12,
    "isUnderground": false
  },
  {
    "code": "SMN020",
    "name": "下宇部尾",
    "pref": "島根県",
    "region": "中国",
    "lat": 35.5316,
    "lon": 133.1678,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "SZO001",
    "name": "熱海",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.1391,
    "lon": 139.0827,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "SZO002",
    "name": "伊東",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9619,
    "lon": 139.1063,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "SZO003",
    "name": "東伊豆",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.8125,
    "lon": 139.0577,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "SZO004",
    "name": "南伊豆",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.6436,
    "lon": 138.8225,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO005",
    "name": "松崎",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7516,
    "lon": 138.7872,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO006",
    "name": "土肥",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.908,
    "lon": 138.7972,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO007",
    "name": "修善寺",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9738,
    "lon": 138.9497,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO008",
    "name": "沼津",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0927,
    "lon": 138.8688,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO009",
    "name": "裾野",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.1938,
    "lon": 138.9158,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "SZO010",
    "name": "御殿場",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.3101,
    "lon": 138.9094,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO011",
    "name": "富士宮",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.2095,
    "lon": 138.6047,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO012",
    "name": "蒲原",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.1238,
    "lon": 138.6244,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO013",
    "name": "清水",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0377,
    "lon": 138.4791,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO014",
    "name": "静岡",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9616,
    "lon": 138.3766,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO015",
    "name": "梅ヶ島",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.2402,
    "lon": 138.3438,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "SZO016",
    "name": "焼津",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.8533,
    "lon": 138.3144,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "SZO017",
    "name": "浜岡",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.6341,
    "lon": 138.1311,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "SZO018",
    "name": "榛原",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7369,
    "lon": 138.2272,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "SZO019",
    "name": "掛川",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7666,
    "lon": 138.0011,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "SZO020",
    "name": "川根",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0052,
    "lon": 138.1505,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO021",
    "name": "本川根",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0936,
    "lon": 138.1363,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO022",
    "name": "佐久間",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0883,
    "lon": 137.8166,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO023",
    "name": "天竜",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.8705,
    "lon": 137.8194,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO024",
    "name": "浜松",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7069,
    "lon": 137.7227,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO025",
    "name": "湖西",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.7161,
    "lon": 137.5344,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO026",
    "name": "春野",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9783,
    "lon": 137.9005,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO027",
    "name": "西伊豆",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.787,
    "lon": 138.8039,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZO028",
    "name": "川奈",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.9491,
    "lon": 139.141,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "TCG001",
    "name": "黒磯",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.9386,
    "lon": 140.0861,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG002",
    "name": "塩原",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.9869,
    "lon": 139.8066,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG003",
    "name": "藤原",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.8113,
    "lon": 139.7186,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG004",
    "name": "湯元",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.803,
    "lon": 139.4236,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG005",
    "name": "矢板",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.803,
    "lon": 139.9297,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG006",
    "name": "小川",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.7608,
    "lon": 140.133,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG007",
    "name": "宇都宮",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5661,
    "lon": 139.8894,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "TCG008",
    "name": "鹿沼",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5569,
    "lon": 139.7708,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "TCG009",
    "name": "今市",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.7227,
    "lon": 139.7188,
    "siteAmp": 1.68,
    "isUnderground": false
  },
  {
    "code": "TCG010",
    "name": "足尾",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.6316,
    "lon": 139.4408,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG011",
    "name": "葛生",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.3836,
    "lon": 139.6177,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG012",
    "name": "小山",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.2827,
    "lon": 139.808,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG013",
    "name": "真岡",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.4336,
    "lon": 140.0258,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG014",
    "name": "茂木",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5419,
    "lon": 140.1775,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG015",
    "name": "芹沼",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.7458,
    "lon": 139.7177,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TCG016",
    "name": "北高岡",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.5256,
    "lon": 140.159,
    "siteAmp": 1.66,
    "isUnderground": false
  },
  {
    "code": "TKS001",
    "name": "鳴門",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.1997,
    "lon": 134.6125,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "TKS002",
    "name": "徳島",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.0405,
    "lon": 134.5847,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "TKS003",
    "name": "阿南",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.8683,
    "lon": 134.6066,
    "siteAmp": 1.1,
    "isUnderground": false
  },
  {
    "code": "TKS004",
    "name": "由岐",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.7716,
    "lon": 134.5941,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS005",
    "name": "上勝",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.8755,
    "lon": 134.3916,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS006",
    "name": "牟岐",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.6658,
    "lon": 134.4219,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS007",
    "name": "市場",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.0872,
    "lon": 134.2877,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS008",
    "name": "木屋平",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.9311,
    "lon": 134.2147,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS009",
    "name": "木頭",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.7686,
    "lon": 134.2022,
    "siteAmp": 1.09,
    "isUnderground": false
  },
  {
    "code": "TKS010",
    "name": "貞光",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.0347,
    "lon": 134.0641,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "TKS011",
    "name": "東祖谷山",
    "pref": "徳島県",
    "region": "四国",
    "lat": 33.8713,
    "lon": 133.9244,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "TKS012",
    "name": "池田",
    "pref": "徳島県",
    "region": "四国",
    "lat": 34.0286,
    "lon": 133.8116,
    "siteAmp": 1.07,
    "isUnderground": false
  },
  {
    "code": "TKY001",
    "name": "氷川",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7997,
    "lon": 139.0988,
    "siteAmp": 1.58,
    "isUnderground": false
  },
  {
    "code": "TKY002",
    "name": "桧原",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7272,
    "lon": 139.1486,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY003",
    "name": "青梅",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7936,
    "lon": 139.2944,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY004",
    "name": "八王子",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.625,
    "lon": 139.4066,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY005",
    "name": "町田",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.5766,
    "lon": 139.4169,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY006",
    "name": "小金井",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6958,
    "lon": 139.5061,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY007",
    "name": "新宿",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7075,
    "lon": 139.6891,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY008",
    "name": "岡田",
    "pref": "東京都",
    "region": "関東",
    "lat": 34.7819,
    "lon": 139.3941,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY009",
    "name": "波浮港",
    "pref": "東京都",
    "region": "関東",
    "lat": 34.6841,
    "lon": 139.4444,
    "siteAmp": 1.57,
    "isUnderground": false
  },
  {
    "code": "TKY010",
    "name": "新島",
    "pref": "東京都",
    "region": "関東",
    "lat": 34.3745,
    "lon": 139.2605,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "TKY011",
    "name": "神着",
    "pref": "東京都",
    "region": "関東",
    "lat": 34.1194,
    "lon": 139.5347,
    "siteAmp": 1.55,
    "isUnderground": true
  },
  {
    "code": "TKY012",
    "name": "八丈",
    "pref": "東京都",
    "region": "関東",
    "lat": 33.1158,
    "lon": 139.8019,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "TKY013",
    "name": "砂町",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6564,
    "lon": 139.8375,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "TKY014",
    "name": "亀戸",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6858,
    "lon": 139.8386,
    "siteAmp": 1.55,
    "isUnderground": false
  },
  {
    "code": "TKY015",
    "name": "東白鬚",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7281,
    "lon": 139.8153,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "TKY016",
    "name": "東雲",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6453,
    "lon": 139.8022,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "TKY017",
    "name": "辰巳",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6442,
    "lon": 139.8125,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "TKY018",
    "name": "八枝",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6519,
    "lon": 139.8147,
    "siteAmp": 1.54,
    "isUnderground": false
  },
  {
    "code": "TKY019",
    "name": "豊洲",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6506,
    "lon": 139.798,
    "siteAmp": 1.54,
    "isUnderground": true
  },
  {
    "code": "TKY020",
    "name": "塩浜",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6625,
    "lon": 139.8119,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY021",
    "name": "猿江",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6844,
    "lon": 139.8225,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY022",
    "name": "横網",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6842,
    "lon": 139.7994,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY023",
    "name": "八広",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7222,
    "lon": 139.8281,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY024",
    "name": "奥戸",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7369,
    "lon": 139.8656,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY025",
    "name": "篠崎",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.7106,
    "lon": 139.9003,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY026",
    "name": "宇喜田",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6672,
    "lon": 139.8667,
    "siteAmp": 1.52,
    "isUnderground": false
  },
  {
    "code": "TKY027",
    "name": "瑞江",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6894,
    "lon": 139.8944,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "TKY028",
    "name": "越中島",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6653,
    "lon": 139.7925,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "TKY029",
    "name": "三宅",
    "pref": "東京都",
    "region": "関東",
    "lat": 34.0711,
    "lon": 139.4825,
    "siteAmp": 1.51,
    "isUnderground": false
  },
  {
    "code": "TTR001",
    "name": "若桜",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.3383,
    "lon": 134.4002,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "TTR002",
    "name": "鳥取",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.4822,
    "lon": 134.2225,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "TTR003",
    "name": "用瀬",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.34,
    "lon": 134.2102,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "TTR004",
    "name": "鹿野",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.4574,
    "lon": 134.0575,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "TTR005",
    "name": "倉吉",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.4258,
    "lon": 133.828,
    "siteAmp": 1.19,
    "isUnderground": false
  },
  {
    "code": "TTR006",
    "name": "赤碕",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.5075,
    "lon": 133.633,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "TTR007",
    "name": "江府",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.2794,
    "lon": 133.4902,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "TTR008",
    "name": "米子",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.4227,
    "lon": 133.3327,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "TTR009",
    "name": "日南",
    "pref": "鳥取県",
    "region": "中国",
    "lat": 35.1676,
    "lon": 133.3139,
    "siteAmp": 1.18,
    "isUnderground": false
  },
  {
    "code": "TYM001",
    "name": "境",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.973,
    "lon": 137.6288,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM002",
    "name": "氷見",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.863,
    "lon": 136.9777,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM003",
    "name": "魚津",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.8133,
    "lon": 137.4222,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM004",
    "name": "宇奈月",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.8594,
    "lon": 137.5305,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM005",
    "name": "新湊",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.7581,
    "lon": 137.0961,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM006",
    "name": "小矢部",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.6686,
    "lon": 136.9,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM007",
    "name": "富山",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.6656,
    "lon": 137.2153,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM008",
    "name": "大山",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.6055,
    "lon": 137.2861,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM009",
    "name": "八尾",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.5833,
    "lon": 137.1436,
    "siteAmp": 1.5,
    "isUnderground": false
  },
  {
    "code": "TYM010",
    "name": "福光",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.5569,
    "lon": 136.8902,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "TYM011",
    "name": "芦弁",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.575,
    "lon": 137.388,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "TYM012",
    "name": "利賀",
    "pref": "富山県",
    "region": "中部",
    "lat": 36.438,
    "lon": 137.0383,
    "siteAmp": 1.48,
    "isUnderground": false
  },
  {
    "code": "WKY001",
    "name": "和歌山",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.2255,
    "lon": 135.1722,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "WKY002",
    "name": "那賀",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.2722,
    "lon": 135.4333,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "WKY003",
    "name": "有田",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.0963,
    "lon": 135.1188,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "WKY004",
    "name": "清水",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.0808,
    "lon": 135.4337,
    "siteAmp": 0.92,
    "isUnderground": false
  },
  {
    "code": "WKY005",
    "name": "龍神",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.8905,
    "lon": 135.4911,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "WKY006",
    "name": "御坊",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.8875,
    "lon": 135.1552,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "WKY007",
    "name": "本宮",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.8341,
    "lon": 135.7763,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "WKY008",
    "name": "田辺",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.7255,
    "lon": 135.38,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "WKY009",
    "name": "新宮",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.7175,
    "lon": 135.9841,
    "siteAmp": 0.91,
    "isUnderground": false
  },
  {
    "code": "WKY010",
    "name": "すさみ",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.5469,
    "lon": 135.5,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "WKY011",
    "name": "太地",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.5913,
    "lon": 135.9488,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "WKY012",
    "name": "串本",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.4686,
    "lon": 135.7863,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "WKY013",
    "name": "高野",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 34.2127,
    "lon": 135.5888,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "WKY014",
    "name": "木守",
    "pref": "和歌山県",
    "region": "近畿",
    "lat": 33.7019,
    "lon": 135.6425,
    "siteAmp": 1.79,
    "isUnderground": false
  },
  {
    "code": "YMG001",
    "name": "須佐",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.6141,
    "lon": 131.6044,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG002",
    "name": "萩",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.4041,
    "lon": 131.4011,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG003",
    "name": "生雲中",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.3797,
    "lon": 131.6027,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG004",
    "name": "長門",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.3602,
    "lon": 131.1889,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG005",
    "name": "豊北",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.2872,
    "lon": 130.9508,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG006",
    "name": "豊浦",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1458,
    "lon": 130.9322,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG007",
    "name": "美祢",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1625,
    "lon": 131.2088,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG008",
    "name": "山口",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0088,
    "lon": 131.4066,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG009",
    "name": "鹿野",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.2286,
    "lon": 131.8194,
    "siteAmp": 1.72,
    "isUnderground": false
  },
  {
    "code": "YMG010",
    "name": "美川",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.2272,
    "lon": 131.9847,
    "siteAmp": 1.7,
    "isUnderground": false
  },
  {
    "code": "YMG011",
    "name": "下関",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0611,
    "lon": 131.0238,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG012",
    "name": "宇部",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.9908,
    "lon": 131.2205,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG013",
    "name": "防府",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0277,
    "lon": 131.5372,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG014",
    "name": "徳山",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0511,
    "lon": 131.8102,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG015",
    "name": "玖珂",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.0933,
    "lon": 132.0783,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG016",
    "name": "岩国",
    "pref": "山口県",
    "region": "中国",
    "lat": 34.1666,
    "lon": 132.1791,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG017",
    "name": "柳井",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.9616,
    "lon": 132.1036,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG018",
    "name": "東和",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.9058,
    "lon": 132.3586,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMG019",
    "name": "上関",
    "pref": "山口県",
    "region": "中国",
    "lat": 33.8422,
    "lon": 132.1229,
    "siteAmp": 1.69,
    "isUnderground": false
  },
  {
    "code": "YMN001",
    "name": "丹波山",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.7863,
    "lon": 138.923,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "YMN002",
    "name": "大月",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.61,
    "lon": 138.9502,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "YMN003",
    "name": "富士吉田",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.4616,
    "lon": 138.8161,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "YMN004",
    "name": "塩山",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.6988,
    "lon": 138.7297,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "YMN005",
    "name": "甲府",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.6516,
    "lon": 138.5708,
    "siteAmp": 1.04,
    "isUnderground": false
  },
  {
    "code": "YMN006",
    "name": "本栖",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.4652,
    "lon": 138.61,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "YMN007",
    "name": "南部",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.2758,
    "lon": 138.468,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "YMN008",
    "name": "早川",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.4288,
    "lon": 138.3352,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "YMN009",
    "name": "六郷",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.4933,
    "lon": 138.4658,
    "siteAmp": 1.03,
    "isUnderground": false
  },
  {
    "code": "YMN010",
    "name": "須玉",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.7886,
    "lon": 138.4127,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "YMN011",
    "name": "芦安",
    "pref": "山梨県",
    "region": "中部",
    "lat": 35.635,
    "lon": 138.3866,
    "siteAmp": 1.01,
    "isUnderground": false
  },
  {
    "code": "YMT001",
    "name": "酒田",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.9111,
    "lon": 139.8161,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "YMT002",
    "name": "新庄",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.765,
    "lon": 140.2991,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "YMT003",
    "name": "鶴岡",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.7263,
    "lon": 139.8047,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "YMT004",
    "name": "温海",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.6247,
    "lon": 139.5922,
    "siteAmp": 1.47,
    "isUnderground": false
  },
  {
    "code": "YMT005",
    "name": "肘折",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.6041,
    "lon": 140.1655,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "YMT006",
    "name": "尾花沢",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.5972,
    "lon": 140.4088,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "YMT007",
    "name": "東根",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.4277,
    "lon": 140.3941,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "YMT008",
    "name": "中村",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.3827,
    "lon": 139.9955,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "YMT009",
    "name": "寒河江",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.3869,
    "lon": 140.2777,
    "siteAmp": 1.46,
    "isUnderground": false
  },
  {
    "code": "YMT010",
    "name": "山形",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.2575,
    "lon": 140.3522,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT011",
    "name": "上山",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.1472,
    "lon": 140.2708,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT012",
    "name": "長井",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.1044,
    "lon": 140.0461,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT013",
    "name": "小国",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.0591,
    "lon": 139.7608,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT014",
    "name": "下屋地",
    "pref": "山形県",
    "region": "東北",
    "lat": 37.9177,
    "lon": 139.873,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT015",
    "name": "米沢",
    "pref": "山形県",
    "region": "東北",
    "lat": 37.9013,
    "lon": 140.103,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT016",
    "name": "清川",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.7866,
    "lon": 140.0219,
    "siteAmp": 1.44,
    "isUnderground": false
  },
  {
    "code": "YMT017",
    "name": "新庄支所",
    "pref": "山形県",
    "region": "東北",
    "lat": 38.788,
    "lon": 140.3164,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SITH12",
    "name": "都幾川2",
    "pref": "埼玉県",
    "region": "関東",
    "lat": 35.9969,
    "lon": 139.2194,
    "siteAmp": 1.62,
    "isUnderground": false
  },
  {
    "code": "TKY030",
    "name": "赤坂",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6698,
    "lon": 139.736,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "TKY031",
    "name": "千駄ヶ谷",
    "pref": "東京都",
    "region": "関東",
    "lat": 35.6789,
    "lon": 139.707,
    "siteAmp": 1.49,
    "isUnderground": false
  },
  {
    "code": "SZOH21",
    "name": "森",
    "pref": "静岡県",
    "region": "中部",
    "lat": 34.8601,
    "lon": 137.9426,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "SZOH22",
    "name": "黒俣",
    "pref": "静岡県",
    "region": "中部",
    "lat": 35.0332,
    "lon": 138.1979,
    "siteAmp": 1.43,
    "isUnderground": false
  },
  {
    "code": "TCGH19",
    "name": "大田原2",
    "pref": "栃木県",
    "region": "関東",
    "lat": 36.906,
    "lon": 140.1119,
    "siteAmp": 1.6,
    "isUnderground": false
  }
];
