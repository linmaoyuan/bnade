var leftTimeMap = {"VERY_LONG":"非常长","LONG":"长","MEDIUM":"中","SHORT":"短"};
var Realm = {
	REALMS : [{"id":1,"name":"万色星辰","connected":"万色星辰-奥蕾莉亚-世界之树-布莱恩"},{"id":2,"name":"丹莫德","connected":"丹莫德-克苏恩"},{"id":3,"name":"主宰之剑","connected":"主宰之剑-霍格"},{"id":4,"name":"丽丽-四川","connected":"丽丽-四川"},{"id":5,"name":"亚雷戈斯","connected":"亚雷戈斯-银松森林"},{"id":6,"name":"亡语者","connected":"亡语者"},{"id":7,"name":"伊兰尼库斯","connected":"伊兰尼库斯-阿克蒙德-恐怖图腾"},{"id":8,"name":"伊利丹","connected":"伊利丹-尘风峡谷"},{"id":9,"name":"伊森利恩","connected":"伊森利恩"},{"id":10,"name":"伊森德雷","connected":"伊森德雷-达斯雷玛-库尔提拉斯-雷霆之怒"},{"id":11,"name":"伊瑟拉","connected":"伊瑟拉-艾森娜-月神殿-轻风之语"},{"id":12,"name":"伊莫塔尔","connected":"伊莫塔尔-萨尔"},{"id":13,"name":"伊萨里奥斯","connected":"伊萨里奥斯-祖阿曼"},{"id":14,"name":"元素之力","connected":"元素之力-菲米丝-夏维安"},{"id":15,"name":"克尔苏加德","connected":"克尔苏加德"},{"id":16,"name":"克洛玛古斯","connected":"克洛玛古斯-金度"},{"id":17,"name":"军团要塞","connected":"军团要塞-生态船"},{"id":18,"name":"冬拥湖","connected":"冬拥湖-迪托马斯-达基萨斯"},{"id":19,"name":"冬泉谷","connected":"冬泉谷-寒冰皇冠"},{"id":20,"name":"冰川之拳","connected":"冰川之拳-双子峰-埃苏雷格-凯尔萨斯"},{"id":21,"name":"冰霜之刃","connected":"冰霜之刃-安格博达"},{"id":22,"name":"冰风岗","connected":"冰风岗"},{"id":23,"name":"凤凰之神","connected":"凤凰之神-托塞德林"},{"id":24,"name":"凯恩血蹄","connected":"凯恩血蹄-瑟莱德丝-卡德加"},{"id":25,"name":"利刃之拳","connected":"利刃之拳-黑翼之巢"},{"id":26,"name":"刺骨利刃","connected":"刺骨利刃-千针石林"},{"id":27,"name":"加兹鲁维","connected":"加兹鲁维-奥金顿-哈兰"},{"id":28,"name":"加基森","connected":"加基森-黑暗虚空"},{"id":29,"name":"加尔","connected":"加尔-黑龙军团"},{"id":30,"name":"加里索斯","connected":"加里索斯-库德兰"},{"id":31,"name":"勇士岛","connected":"勇士岛-达文格尔-索拉丁"},{"id":32,"name":"卡德罗斯","connected":"卡德罗斯-符文图腾-黑暗魅影-阿斯塔洛"},{"id":33,"name":"卡扎克","connected":"卡扎克-爱斯特纳-戈古纳斯-巴纳扎尔"},{"id":34,"name":"卡拉赞","connected":"卡拉赞-苏塔恩"},{"id":35,"name":"卡珊德拉","connected":"卡珊德拉-暗影之月"},{"id":36,"name":"厄祖玛特","connected":"厄祖玛特-奎尔萨拉斯"},{"id":37,"name":"古加尔","connected":"古加尔-洛丹伦"},{"id":38,"name":"古尔丹","connected":"古尔丹-血顶"},{"id":39,"name":"古拉巴什","connected":"古拉巴什-安戈洛-深渊之喉-德拉诺"},{"id":40,"name":"古达克","connected":"古达克-梅尔加尼"},{"id":41,"name":"哈卡","connected":"哈卡-诺森德-燃烧军团-死亡熔炉"},{"id":42,"name":"嚎风峡湾","connected":"嚎风峡湾-闪电之刃"},{"id":43,"name":"回音山","connected":"回音山-霜之哀伤-神圣之歌-遗忘海岸"},{"id":44,"name":"国王之谷","connected":"国王之谷"},{"id":45,"name":"图拉扬","connected":"图拉扬-海达希亚-瓦里玛萨斯-塞纳里奥"},{"id":46,"name":"圣火神殿","connected":"圣火神殿-桑德兰"},{"id":47,"name":"地狱之石","connected":"地狱之石-火焰之树-耐奥祖"},{"id":48,"name":"地狱咆哮","connected":"地狱咆哮-阿曼尼-奈法利安"},{"id":49,"name":"埃克索图斯","connected":"埃克索图斯-血牙魔王"},{"id":50,"name":"埃加洛尔","connected":"埃加洛尔-鲜血熔炉-斩魔者"},{"id":51,"name":"埃基尔松","connected":"埃基尔松"},{"id":52,"name":"埃德萨拉","connected":"埃德萨拉"},{"id":53,"name":"埃雷达尔","connected":"埃雷达尔-永恒之井"},{"id":54,"name":"基尔加丹","connected":"基尔加丹-奥拉基尔"},{"id":55,"name":"基尔罗格","connected":"基尔罗格-巫妖之王-迦顿"},{"id":56,"name":"塔纳利斯","connected":"塔纳利斯-巴瑟拉斯-密林游侠"},{"id":57,"name":"塞拉摩","connected":"塞拉摩-暗影迷宫-麦姆"},{"id":58,"name":"塞拉赞恩","connected":"塞拉赞恩-太阳之井"},{"id":59,"name":"塞泰克","connected":"塞泰克-罗曼斯-黑暗之矛"},{"id":60,"name":"壁炉谷","connected":"壁炉谷"},{"id":61,"name":"外域","connected":"外域-织亡者-阿格拉玛-屠魔山谷"},{"id":62,"name":"大地之怒","connected":"大地之怒-恶魔之魂-希尔瓦娜斯"},{"id":63,"name":"大漩涡","connected":"大漩涡-风暴之怒"},{"id":64,"name":"天空之墙","connected":"天空之墙"},{"id":65,"name":"天谴之门","connected":"天谴之门"},{"id":66,"name":"夺灵者","connected":"夺灵者-战歌-奥斯里安"},{"id":67,"name":"奈萨里奥","connected":"奈萨里奥-红龙女王-菲拉斯"},{"id":68,"name":"奎尔丹纳斯","connected":"奎尔丹纳斯-艾莫莉丝-布鲁塔卢斯"},{"id":69,"name":"奥妮克希亚","connected":"奥妮克希亚-海加尔-纳克萨玛斯"},{"id":70,"name":"奥尔加隆","connected":"奥尔加隆"},{"id":71,"name":"奥杜尔","connected":"奥杜尔-普瑞斯托-逐日者"},{"id":72,"name":"奥特兰克","connected":"奥特兰克"},{"id":73,"name":"奥达曼","connected":"奥达曼-甜水绿洲"},{"id":74,"name":"守护之剑","connected":"守护之剑-瑞文戴尔"},{"id":75,"name":"安东尼达斯","connected":"安东尼达斯"},{"id":76,"name":"安其拉","connected":"安其拉-弗塞雷迦-盖斯"},{"id":77,"name":"安加萨","connected":"安加萨-莱索恩"},{"id":78,"name":"安威玛尔","connected":"安威玛尔-扎拉赞恩"},{"id":79,"name":"安纳塞隆","connected":"安纳塞隆-日落沼泽-风暴之鳞-耐普图隆"},{"id":80,"name":"安苏","connected":"安苏"},{"id":81,"name":"山丘之王","connected":"山丘之王-拉文霍德"},{"id":82,"name":"巨龙之吼","connected":"巨龙之吼-黑石尖塔"},{"id":83,"name":"巴尔古恩","connected":"巴尔古恩-托尔巴拉德"},{"id":84,"name":"布兰卡德","connected":"布兰卡德"},{"id":85,"name":"布莱克摩","connected":"布莱克摩-灰谷"},{"id":86,"name":"希雷诺斯","connected":"希雷诺斯-芬里斯-烈焰荆棘"},{"id":87,"name":"幽暗沼泽","connected":"幽暗沼泽"},{"id":88,"name":"影之哀伤","connected":"影之哀伤"},{"id":89,"name":"影牙要塞","connected":"影牙要塞-艾苏恩"},{"id":90,"name":"恶魔之翼","connected":"恶魔之翼-通灵学院"},{"id":91,"name":"戈提克","connected":"戈提克-雏龙之翼"},{"id":92,"name":"拉文凯斯","connected":"拉文凯斯-迪瑟洛克"},{"id":93,"name":"拉格纳洛斯","connected":"拉格纳洛斯-龙骨平原"},{"id":94,"name":"拉贾克斯","connected":"拉贾克斯-荆棘谷"},{"id":95,"name":"提尔之手","connected":"提尔之手-萨菲隆"},{"id":96,"name":"提瑞斯法","connected":"提瑞斯法-暗影议会"},{"id":97,"name":"摩摩尔","connected":"摩摩尔-熵魔-暴风祭坛"},{"id":98,"name":"斯坦索姆","connected":"斯坦索姆-穆戈尔-泰拉尔-格鲁尔"},{"id":99,"name":"无尽之海","connected":"无尽之海-米奈希尔"},{"id":100,"name":"无底海渊","connected":"无底海渊-阿努巴拉克-刀塔-诺莫瑞根"},{"id":101,"name":"时光之穴","connected":"时光之穴"},{"id":102,"name":"普罗德摩","connected":"普罗德摩-铜龙军团"},{"id":103,"name":"晴日峰-江苏","connected":"晴日峰-江苏"},{"id":104,"name":"暗影裂口","connected":"暗影裂口"},{"id":105,"name":"暮色森林","connected":"暮色森林-杜隆坦-狂风峭壁-玛瑟里顿"},{"id":106,"name":"月光林地","connected":"月光林地-麦迪文"},{"id":107,"name":"末日祷告祭坛","connected":"末日祷告祭坛-迦罗娜-纳沙塔尔-火羽山"},{"id":108,"name":"末日行者","connected":"末日行者"},{"id":109,"name":"朵丹尼尔","connected":"朵丹尼尔-蓝龙军团"},{"id":110,"name":"格瑞姆巴托","connected":"格瑞姆巴托-埃霍恩"},{"id":111,"name":"格雷迈恩","connected":"格雷迈恩-黑手军团-瓦丝琪"},{"id":112,"name":"梦境之树","connected":"梦境之树-诺兹多姆-泰兰德"},{"id":113,"name":"森金","connected":"森金-沙怒-血羽"},{"id":114,"name":"死亡之翼","connected":"死亡之翼"},{"id":115,"name":"毁灭之锤","connected":"毁灭之锤-兰娜瑟尔"},{"id":116,"name":"永夜港","connected":"永夜港-翡翠梦境-黄金之路"},{"id":117,"name":"沃金","connected":"沃金"},{"id":118,"name":"法拉希姆","connected":"法拉希姆-玛法里奥-麦维影歌"},{"id":119,"name":"洛肯","connected":"洛肯-海克泰尔"},{"id":120,"name":"洛萨","connected":"洛萨-阿卡玛-萨格拉斯"},{"id":121,"name":"深渊之巢","connected":"深渊之巢"},{"id":122,"name":"激流之傲","connected":"激流之傲-红云台地"},{"id":123,"name":"激流堡","connected":"激流堡-阿古斯"},{"id":124,"name":"火喉","connected":"火喉-雷克萨"},{"id":125,"name":"火烟之谷","connected":"火烟之谷-玛诺洛斯-达纳斯"},{"id":126,"name":"烈焰峰","connected":"烈焰峰-瓦拉斯塔兹"},{"id":127,"name":"熊猫酒仙","connected":"熊猫酒仙"},{"id":128,"name":"熔火之心","connected":"熔火之心-黑锋哨站"},{"id":129,"name":"燃烧之刃","connected":"燃烧之刃"},{"id":130,"name":"燃烧平原","connected":"燃烧平原-风行者"},{"id":131,"name":"狂热之刃","connected":"狂热之刃"},{"id":132,"name":"玛多兰","connected":"玛多兰-银月-羽月-耳语海岸"},{"id":133,"name":"玛洛加尔","connected":"玛洛加尔"},{"id":134,"name":"玛里苟斯","connected":"玛里苟斯-艾萨拉"},{"id":135,"name":"瓦拉纳","connected":"瓦拉纳"},{"id":136,"name":"白银之手","connected":"白银之手"},{"id":137,"name":"白骨荒野","connected":"白骨荒野-能源舰"},{"id":138,"name":"石爪峰","connected":"石爪峰-阿扎达斯"},{"id":139,"name":"石锤","connected":"石锤-范达尔鹿盔"},{"id":140,"name":"破碎岭","connected":"破碎岭-祖尔金"},{"id":141,"name":"祖达克","connected":"祖达克-阿尔萨斯"},{"id":142,"name":"索瑞森","connected":"索瑞森-试炼之环"},{"id":143,"name":"红龙军团","connected":"红龙军团"},{"id":144,"name":"罗宁","connected":"罗宁"},{"id":145,"name":"自由之风","connected":"自由之风-达隆米尔-艾欧纳尔-冬寒"},{"id":146,"name":"艾维娜","connected":"艾维娜-艾露恩"},{"id":147,"name":"范克里夫","connected":"范克里夫-血环"},{"id":148,"name":"萨洛拉丝","connected":"萨洛拉丝"},{"id":149,"name":"藏宝海湾","connected":"藏宝海湾-阿拉希-塔伦米尔"},{"id":150,"name":"蜘蛛王国","connected":"蜘蛛王国"},{"id":151,"name":"血吼","connected":"血吼-黑暗之门"},{"id":152,"name":"血色十字军","connected":"血色十字军"},{"id":153,"name":"贫瘠之地","connected":"贫瘠之地"},{"id":154,"name":"踏梦者","connected":"踏梦者-阿比迪斯"},{"id":155,"name":"辛达苟萨","connected":"辛达苟萨"},{"id":156,"name":"达克萨隆","connected":"达克萨隆-阿纳克洛斯"},{"id":157,"name":"达尔坎","connected":"达尔坎-鹰巢山"},{"id":158,"name":"迅捷微风","connected":"迅捷微风"},{"id":159,"name":"远古海滩","connected":"远古海滩"},{"id":160,"name":"迦拉克隆","connected":"迦拉克隆"},{"id":161,"name":"迦玛兰","connected":"迦玛兰-霜狼"},{"id":162,"name":"金色平原","connected":"金色平原"},{"id":163,"name":"阿拉索","connected":"阿拉索-阿迦玛甘"},{"id":164,"name":"雷斧堡垒","connected":"雷斧堡垒"},{"id":165,"name":"雷霆之王","connected":"雷霆之王"},{"id":166,"name":"雷霆号角","connected":"雷霆号角-风暴之眼"},{"id":167,"name":"风暴峭壁","connected":"风暴峭壁"},{"id":168,"name":"鬼雾峰","connected":"鬼雾峰"},{"id":169,"name":"黑铁","connected":"黑铁"},{"id":170,"name":"斯克提斯","connected":"斯克提斯"}],
	getIdByName : function(name) {
		for (var i in this.REALMS) {
			var realm = this.REALMS[i];
			if (realm.connected.indexOf(name) >= 0) {
				return realm.id;
			}
		}
		return -1;
	},
	getNameById : function(id) {
		for (var i in this.REALMS) {
			var realm = this.REALMS[i];
			if (realm.id === id) {
				return realm.name;
			}
		}
		return "";
	},
	getConnectedById : function(id) {
		for (var i in this.REALMS) {
			var realm = this.REALMS[i];
			if (id === realm.id) {
				return realm.connected;
			}
		}
		return "";
	},
	
	/**
	 * 通过服务器id获取服务器人气
	 * 从localStorage获取服务器信息
	 * @param id 服务器id
	 * @returns {Number} 服务器人气，找不到返回-1
	 */
	getOwnerQuantityById : function(id) {
		var quantity = -1;
		var realms = store.get("realms");
		if (realms !== null) {
			for (var i in realms) {
				var realm = realms[i];
				if (realm.id === id) {
					quantity = realm.ownerQuantity;
					break;
				}
			}
		}
		return quantity;
	}
}
var Bnade = {
	connectedRealm : {"奥杜尔":"奥杜尔-普瑞斯托-逐日者","恶魔之翼":"恶魔之翼-通灵学院","伊莫塔尔":"伊莫塔尔-萨尔","大地之怒":"大地之怒-恶魔之魂-希尔瓦娜斯","主宰之剑":"主宰之剑-霍格","雷霆号角":"雷霆号角-风暴之眼","基尔加丹":"基尔加丹-奥拉基尔","图拉扬":"图拉扬-海达希亚-瓦里玛萨斯-塞纳里奥","克洛玛古斯":"克洛玛古斯-金度","利刃之拳":"利刃之拳-黑翼之巢","索瑞森":"索瑞森-试炼之环","无尽之海":"无尽之海-米奈希尔","嚎风峡湾":"嚎风峡湾-闪电之刃","古加尔":"古加尔-洛丹伦","拉贾克斯":"拉贾克斯-荆棘谷","影牙要塞":"影牙要塞-艾苏恩","无底海渊":"无底海渊-阿努巴拉克-刀塔-诺莫瑞根","斯坦索姆":"斯坦索姆-穆戈尔-泰拉尔-格鲁尔","藏宝海湾":"藏宝海湾-阿拉希-塔伦米尔","拉格纳洛斯":"拉格纳洛斯-龙骨平原","安纳塞隆":"安纳塞隆-日落沼泽-风暴之鳞-耐普图隆","提瑞斯法":"提瑞斯法-暗影议会","法拉希姆":"法拉希姆-玛法里奥-麦维影歌","加里索斯":"加里索斯-库德兰","安其拉":"安其拉-弗塞雷迦-盖斯","烈焰峰":"烈焰峰-瓦拉斯塔兹","熔火之心":"熔火之心-黑锋哨站","奥达曼":"奥达曼-甜水绿洲","踏梦者":"踏梦者-阿比迪斯","暮色森林":"暮色森林-杜隆坦-狂风峭壁-玛瑟里顿","丹莫德":"丹莫德-克苏恩","格瑞姆巴托":"格瑞姆巴托-埃霍恩","勇士岛":"勇士岛-达文格尔-索拉丁","范克里夫":"范克里夫-血环","艾维娜":"艾维娜-艾露恩","塞泰克":"塞泰克-罗曼斯-黑暗之矛","洛萨":"洛萨-阿卡玛-萨格拉斯","回音山":"回音山-霜之哀伤-神圣之歌-遗忘海岸","提尔之手":"提尔之手-萨菲隆","凯恩血蹄":"凯恩血蹄-瑟莱德丝-卡德加","月光林地":"月光林地-麦迪文","永夜港":"永夜港-翡翠梦境-黄金之路","伊兰尼库斯":"伊兰尼库斯-阿克蒙德-恐怖图腾","梦境之树":"梦境之树-诺兹多姆-泰兰德","奈萨里奥":"奈萨里奥-红龙女王-菲拉斯","末日祷告祭坛":"末日祷告祭坛-迦罗娜-纳沙塔尔-火羽山","卡德罗斯":"卡德罗斯-符文图腾-黑暗魅影-阿斯塔洛","摩摩尔":"摩摩尔-熵魔-暴风祭坛","激流堡":"激流堡-阿古斯","火喉":"火喉-雷克萨","激流之傲":"激流之傲-红云台地","冰川之拳":"冰川之拳-双子峰-埃苏雷格-凯尔萨斯","冬泉谷":"冬泉谷-寒冰皇冠","燃烧平原":"燃烧平原-风行者","自由之风":"自由之风-达隆米尔-艾欧纳尔-冬寒","元素之力":"元素之力-菲米丝-夏维安","古达克":"古达克-梅尔加尼","埃加洛尔":"埃加洛尔-鲜血熔炉-斩魔者","加尔":"加尔-黑龙军团","外域":"外域-织亡者-阿格拉玛-屠魔山谷","普罗德摩":"普罗德摩-铜龙军团","冬拥湖":"冬拥湖-迪托马斯-达基萨斯","刺骨利刃":"刺骨利刃-千针石林","埃雷达尔":"埃雷达尔-永恒之井","奎尔丹纳斯":"奎尔丹纳斯-艾莫莉丝-布鲁塔卢斯","凤凰之神":"凤凰之神-托塞德林","伊利丹":"伊利丹-尘风峡谷","军团要塞":"军团要塞-生态船","安威玛尔":"安威玛尔-扎拉赞恩","拉文凯斯":"拉文凯斯-迪瑟洛克","万色星辰":"万色星辰-奥蕾莉亚-世界之树-布莱恩","哈卡":"哈卡-诺森德-燃烧军团-死亡熔炉","卡拉赞":"卡拉赞-苏塔恩","山丘之王":"山丘之王-拉文霍德","加基森":"加基森-黑暗虚空","守护之剑":"守护之剑-瑞文戴尔","伊萨里奥斯":"伊萨里奥斯-祖阿曼","圣火神殿":"圣火神殿-桑德兰","塞拉赞恩":"塞拉赞恩-太阳之井","卡扎克":"卡扎克-爱斯特纳-戈古纳斯-巴纳扎尔","石锤":"石锤-范达尔鹿盔","卡珊德拉":"卡珊德拉-暗影之月","大漩涡":"大漩涡-风暴之怒","埃克索图斯":"埃克索图斯-血牙魔王","希雷诺斯":"希雷诺斯-芬里斯-烈焰荆棘","奥妮克希亚":"奥妮克希亚-海加尔-纳克萨玛斯","森金":"森金-沙怒-血羽","毁灭之锤":"毁灭之锤-兰娜瑟尔","迦玛兰":"迦玛兰-霜狼","安加萨":"安加萨-莱索恩","格雷迈恩":"格雷迈恩-黑手军团-瓦丝琪","夺灵者":"夺灵者-战歌-奥斯里安","阿拉索":"阿拉索-阿迦玛甘","布莱克摩":"布莱克摩-灰谷","巴尔古恩":"巴尔古恩-托尔巴拉德","玛里苟斯":"玛里苟斯-艾萨拉","破碎岭":"破碎岭-祖尔金","塞拉摩":"塞拉摩-暗影迷宫-麦姆","伊森德雷":"伊森德雷-达斯雷玛-库尔提拉斯-雷霆之怒","塔纳利斯":"塔纳利斯-巴瑟拉斯-密林游侠","玛多兰":"玛多兰-银月-羽月-耳语海岸","古尔丹":"古尔丹-血顶","古拉巴什":"古拉巴什-安戈洛-深渊之喉-德拉诺","巨龙之吼":"巨龙之吼-黑石尖塔","地狱之石":"地狱之石-火焰之树-耐奥祖","厄祖玛特":"厄祖玛特-奎尔萨拉斯","达尔坎":"达尔坎-鹰巢山","伊瑟拉":"伊瑟拉-艾森娜-月神殿-轻风之语","朵丹尼尔":"朵丹尼尔-蓝龙军团","冰霜之刃":"冰霜之刃-安格博达","石爪峰":"石爪峰-阿扎达斯","火烟之谷":"火烟之谷-玛诺洛斯-达纳斯","血吼":"血吼-黑暗之门","达克萨隆":"达克萨隆-阿纳克洛斯","地狱咆哮":"地狱咆哮-阿曼尼-奈法利安","白骨荒野":"白骨荒野-能源舰","基尔罗格":"基尔罗格-巫妖之王-迦顿","加兹鲁维":"加兹鲁维-奥金顿-哈兰","亚雷戈斯":"亚雷戈斯-银松森林","洛肯":"洛肯-海克泰尔","祖达克":"祖达克-阿尔萨斯","戈提克":"戈提克-雏龙之翼"},
	itemBonusMap : {
		525 : "1阶",
		526 : "2阶",
		527 : "3阶",
		593 : "4阶",
		617 : "5阶",
		618 : "6阶",
		558 : "2阶",
		559 : "3阶",
		594 : "4阶",
		619 : "5阶",
		620 : "6阶",
		560 : "普通 战火",
		561 : "战火",
		562 : "战火",
		563 : "普通 带插槽",
		564 : "带插槽",
		565 : "带插槽",
		566 : "英雄级别",
		567 : "史诗",
		1372 : "-100装等",
		1377 : "-95装等",
		1382 : "-90装等",
		1387 : "-85装等",
		1392 : "-80装等",
		1397 : "-75装等",
		1402 : "-70装等",
		1407 : "-65装等",
		1412 : "-60装等",
		1417 : "-55装等",
		1422 : "-50装等",
		1427 : "-45装等",
		1432 : "-40装等",
		1437 : "-35装等",
		1442 : "-30装等",
		1447 : "-25装等",
		1452 : "-20装等",
		1457 : "-15装等",
		1462 : "-10装等",
		1467 : "-5装等",
		1472 : "+0装等",
		1477 : "+5装等",
		1482 : "+10装等",
		1487 : "+15装等",
		1492 : "+20装等",
		1497 : "+25装等",
		1502 : "+30装等",
		1507 : "+35装等",
		1512 : "+40装等",
		1517 : "+45装等",
		1522 : "+50装等",
		1527 : "+55装等",
		1532 : "+60装等",
		1537 : "+65装等",
		1542 : "+70装等",
		1547 : "+75装等",
		1552 : "+80装等",
		1557 : "+85装等",
		1562 : "+90装等",
		1567 : "+95装等",
		1572 : "+100装等",
		1577 : "+105装等",
		1582 : "+110装等",
		1587 : "+115装等",
		1592 : "+120装等",
		1597 : "+125装等",
		1602 : "+130装等",
		1607 : "+135装等",
		1612 : "+140装等",
		1617 : "+145装等",
		1622 : "+150装等",
		1627 : "+155装等",
		1632 : "+160装等",
		1637 : "+165装等",
		1642 : "+170装等",
		1647 : "+175装等",
		1652 : "+180装等",
		1657 : "+185装等",
		1662 : "+190装等",
		1667 : "+195装等",		
		1672 : "+200装等",
		1808 : "棱彩插槽",
		40 : "躲闪",
		41 : "吸血",
		42 : "速度",
		3398 : "按等级缩放",
		1676 : "快刀之 245全能 614暴击",
		1677 : "快刀之 307全能 552暴击",
		1678 : "快刀之 368全能 491暴击",
		1679 : "快刀之 429全能 429暴击",
		1680 : "快刀之 491全能 368暴击",
		1681 : "快刀之 552全能 307暴击",
		1682 : "快刀之 614全能 245暴击",
		1683 : "无双之 614暴击 245精通",
		1684 : "无双之 552暴击 307精通",
		1685 : "无双之 491暴击 368精通",
		1686 : "无双之 429暴击 429精通",
		1687 : "无双之 368暴击 491精通",
		1688 : "无双之 307暴击 552精通",
		1689 : "无双之 245暴击 614精通",
		1690 : "燎火之 614暴击 245急速",
		1691 : "燎火之 552暴击 307急速",
		1692 : "燎火之 491暴击 368急速",
		1693 : "燎火之 429暴击 429急速",
		1694 : "燎火之 368暴击 491急速",
		1695 : "燎火之 307暴击 552急速",
		1696 : "燎火之 245暴击 614急速",
		1697 : "灼光之 245精通 614急速",
		1698 : "灼光之 307精通 552急速",
		1699 : "灼光之 368精通 491急速",
		1700 : "灼光之 429精通 429急速",
		1701 : "灼光之 491精通 368急速",
		1702 : "灼光之 552精通 307急速",
		1703 : "灼光之 614精通 245急速",
		1704 : "曙光之 245全能 614急速",
		1705 : "曙光之 307全能 552急速",
		1706 : "曙光之 368全能 491急速",
		1707 : "曙光之 429全能 429急速",
		1708 : "曙光之 491全能 368急速",
		1709 : "曙光之 552全能 307急速",
		1710 : "曙光之 614全能 245急速",
		1711 : "谐律之 245全能 614精通",
		1712 : "谐律之 307全能 552精通",
		1713 : "谐律之 368全能 491精通",
		1714 : "谐律之 429全能 429精通",
		1715 : "谐律之 491全能 368精通",
		1716 : "谐律之 552全能 307精通",
		1717 : "谐律之 614全能 245精通",
		1718 : "屠夫之 859爆击",
		1719 : "应变之 859全能",
		1720 : "焦躁之 859急速",
		1721 : "专擅之 859精通",
		1742 : "快刀之 460全能 1150暴击",
		1743 : "快刀之 552全能 1058暴击",
		1744 : "快刀之 644全能 966暴击",
		1745 : "快刀之 736全能 874暴击",
		1746 : "快刀之 966全能 644暴击",
		1747 : "快刀之 1058全能 552暴击",
		1748 : "快刀之 1150全能 460暴击",
		1749 : "无双之 1150暴击 460精通",
		1750 : "无双之 1058暴击 552精通",
		1751 : "无双之 966暴击 644精通",
		1752 : "无双之 874暴击 736精通",
		1753 : "无双之 644暴击 966精通",
		1754 : "无双之 552暴击 1058精通",
		1755 : "无双之 460暴击 1150精通",
		1756 : "燎火之 460急速 1150暴击",
		1757 : "燎火之 598急速 1012暴击",
		1758 : "燎火之 644急速 966暴击",
		1759 : "燎火之 736急速 874暴击",
		1760 : "燎火之 966急速 644暴击",
		1761 : "燎火之 1058急速 552暴击",
		1762 : "燎火之 1150急速 460暴击",
		1763 : "灼光之 1150精通 460急速",
		1764 : "灼光之 1058精通 552急速",
		1765 : "灼光之 966精通 644急速",
		1766 : "灼光之 874精通 736急速",
		1767 : "灼光之 644精通 966急速",
		1768 : "灼光之 552精通 1058急速",
		1769 : "灼光之 460精通 1150急速",
		1770 : "曙光之 460全能 1150急速",
		1771 : "曙光之 552全能 1058急速",
		1772 : "曙光之 644全能 966急速",
		1773 : "曙光之 736全能 874急速",
		1774 : "曙光之 966全能 644急速",
		1775 : "曙光之 1058全能 552急速",
		1776 : "曙光之 1150全能 460急速",
		1777 : "谐律之 460全能 1150精通",
		1778 : "谐律之 552全能 1058精通",
		1779 : "谐律之 644全能 966精通",
		1780 : "谐律之 736全能 874精通",
		1781 : "谐律之 966全能 644精通",
		1782 : "谐律之 1058全能 552精通",
		1783 : "谐律之 1150全能 460精通",
		1784 : "屠夫之 1611爆击",
		1785 : "应变之 1611全能",
		1786 : "焦躁之 1611急速",
		1787 : "专擅之 1611精通",
		3343 : "快刀之 460全能 229暴击",
		3344 : "快刀之 575全能 114暴击",
		3345 : "快刀之 690全能",
		3361 : "快刀之 229全能 460暴击",
		3362 : "快刀之 114全能 575暴击",
		3363 : "快刀之 690暴击",
		3346 : "无双之 229暴击 460精通",
		3347 : "无双之 114暴击 575精通",
		3348 : "无双之 690精通",
		3351 : "无双之 229精通 460暴击",
		3352 : "无双之 114精通 575暴击",
		3354 : "无双之 690暴击",
		3349 : "燎火之 460急速 229暴击",
		3350 : "燎火之 575急速 114暴击",
		3353 : "燎火之 690急速",
		3370 : "燎火之 229急速 460暴击",
		3371 : "燎火之 114急速 575暴击",
		3372 : "燎火之 690暴击",
		3355 : "灼光之 460急速 229精通",
		3356 : "灼光之 575急速 114精通",
		3357 : "灼光之 690急速",
		3373 : "灼光之 229急速 460精通",
		3374 : "灼光之 114急速 575精通",
		3375 : "灼光之 690精通",
		3358 : "谐律之 460全能 229精通",
		3359 : "谐律之 575全能 114精通",
		3360 : "谐律之 690全能",
		3367 : "谐律之 229全能 460精通",
		3368 : "谐律之 114全能 575精通",
		3369 : "谐律之 690精通",
		3364 : "曙光之 229全能 460急速",
		3365 : "曙光之 114全能 575急速",
		3366 : "曙光之 690急速",
		3376 : "曙光之 460全能 229急速",
		3377 : "曙光之 575全能 114急速",
		3378 : "曙光之 690全能",
		3406 : "谐律之 全能 精通",
		3405 : "曙光之 全能 急速",
		3404 : "灼光之 精通 急速",
		3403 : "燎火之 暴击 急速",
		3402 : "无双之 暴击 精通",
		3401 : "快刀之 全能 暴击",

	},
	getConnectedRealms : function(realm) {
		var tmpRealm = this.connectedRealm[realm];
		return tmpRealm === undefined ? realm : tmpRealm;
	}, 
	getBonusDesc : function(bonusList) {
		var desc = "";
		if(bonusList === "") {
			return "普通";
		}
		var bonus = bonusList.split(",");		
		for(var i in bonus) {			
			desc += this.itemBonusMap[bonus[i]]+" ";
		}
		return desc;
	},
	getGold : function (value) {
		var v = toDecimal(value/10000);
		return v > 10 ? parseInt(v) : v;
	},
	getResult : function (data) {
		data.sort(function(a, b) {	
			return a - b;
		});
		var range = 0.8;
		var size = data.length;
		if (size === 1) {
			return {"min" : data[0], "max" : data[0], "avg" : data[0]};
		} else {
			var maxSize = parseInt(size * range);
			var tmpPrice = 0;
			var tmpData = [];
			for (var i = 0; i < maxSize; i++) {
				tmpData[i] = data[i];
				tmpPrice += data[i] / maxSize;
			}
			var result = {"min" : data[0], "max" : data[maxSize - 1], "avg" : tmpPrice};
			if (tmpPrice * 3 < data[maxSize - 1]) {
				result = this.getResult(tmpData);
			}			
			return result;
		}
	}
};
var BnadeLocalStorage = {
	isLSSupport : function() {
		if (typeof(Storage) !== "undefined"){
			return true;
		} else {
			alert("你的浏览器太老不支持本地存储,建议升级浏览器");
			return false;
		}		
	},
	lsItems : { 
		realm : {
			key : "queryRealms",
			countKey : "queryRealmCount",
			count : 5,
			elementId : "realmQueryList",
			selectElementId : "realmSelectList",
			title : "服务器",
			inputId : "realm",
			buttonId : "queryBtn" 
		}, item : {
			key : "queryItems",
			countKey : "queryItemCount",
			count : 15,
			elementId : "itemQueryList",
			selectElementId : "itemSelectList",
			title : "物品名",
			inputId : "itemName",
			buttonId : "queryBtn" 
		}, pet : {
			key : "queryPets",
			countKey : "queryPetCount",
			count : 15,
			elementId : "petQueryList",
			selectElementId : "petSelectList",
			title : "宠物名",
			inputId : "petName",
			buttonId : "queryBtn" 
		}
	},
	refresh : function(){
		if (this.isLSSupport()) {
			for(var i in this.lsItems) {
				var item = this.lsItems[i];
				var jsonArr=JSON.parse(localStorage.getItem(item.key));
				if (jsonArr !== null) {
					var element = $("#"+item.elementId);
					if (isDomExist(element)) {						
						element.html("<li class='active'><a href='javascript:void(0)'>" + item.title + "</a></li>");
						for(var j in jsonArr){
							if (jsonArr[j] !== null) {
								var id = item.key + j;
								element.append("<li><a href='javascript:void(0)' id='"+id+"' btnId='"+item.buttonId+"' inputId='"+item.inputId+"'>"+jsonArr[j]+"</a></li>");
								$("#" + id).click(function() {
									$("#" + $(this).attr("inputId")).val($(this).html());																		
									var buttonElement = $("#"+$(this).attr("btnId"));											
									if (isDomExist(buttonElement)) {
										buttonElement.click();
									}										
								});								
							}
						}
					}
					var selectElement = $("#"+item.selectElementId);
					if (isDomExist(selectElement)) {
						selectElement.empty();
						for(var k in jsonArr){
							if (jsonArr[k] !== null) {
								var selectId = item.selectElementId + k;
								selectElement.append("<li><a href='javascript:void(0)' id='"+selectId+"' inputId='"+item.inputId+"'>"+jsonArr[k]+"</a></li>");
								$("#"+selectId).click(function() {
									$("#"+$(this).attr("inputId")).val($(this).html());
								});								
							}
						}
					}
				} else {
					localStorage.setItem(item.countKey, item.count);
					localStorage.setItem(item.key,JSON.stringify(new Array(item.count)));
				}
			}
		}
	},
	addItem : function(key, value) {
		if(this.isLSSupport()){				
			var obj=JSON.parse(localStorage.getItem(key));
			if (obj !== null && obj.length > 0) {
				if(obj[0]!=value){
					var tmpItem=obj[0];
					obj[0]=value;
					for(var i in obj){						
						if (i !== "0") {
							if(obj[i]==value){
								obj[i]=tmpItem;
								break;
							}else{
								var tmpItem2=obj[i];
								obj[i]=tmpItem;
								tmpItem=tmpItem2;
							}
						}
					}
					localStorage.setItem(key,JSON.stringify(obj));
				}
			}
			this.refresh();
		}
	}
};
$(document).ready(function() {
	BnadeLocalStorage.refresh();
	// 注册回车事件
	$("body").keydown(function(evt) {			
        if(evt.which === 13) {  
        	if (isDomExist($("#queryBtn"))) {
        		$("#queryBtn").click();
        	}
		}	
	});	
});