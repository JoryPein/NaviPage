var search_form = {
    "搜索": {
        "Google": ["google", "4285f4", "https://www.google.com/search?q=", "&safe=off"],
        "DuckDuckGo": ["duckduckgo", "de5833", "https://duckduckgo.com/?q="],
        "DuckDuckGoO": ["duckduckgoo", "de5833", "https://3g2upl4pq6kufc4m.onion/?q=", "&ia=web"],
        "Bing": ["bing", "ffb300", "https://cn.bing.com/search?q="],
        "百度": ["baidu", "3388ff", "https://www.baidu.com/s?wd="],
        "Yandex": ["yandex","FF0000","https://yandex.com/search/?text="],
        "Yahoo": ["yahoo","824dfe","https://search.yahoo.com/search?p="],
        "Yahoo Japan": ["yahoojp","824dfe","https://search.yahoo.co.jp/search?p="],
        "Naver": ["naver","03CF5D","https://search.naver.com/search.naver?query="],
        "搜狗": ["sogou","fd6853","https://www.sogou.com/web?query="],
        "搜索360": ["so360","19b955","https://www.so.com/s?q="],
        "Magi": ["magi","14A2F5","https://magi.com/search?q="],
        "Ahmia": ["ahmia","303030","http://msydqstlz2kzerdg.onion/search/?q="],
        "not Evil": ["notEvil","303030","http://hss3uro2hsxfogfq.onion/index.php?q="]
    },
    "Code": {
    	"GitHub Resp": ["githubresp","81d364","https://github.com/search?q="],
    	"GitHub Code": ["githubcode","81d364","https://github.com/search?q=", "&type=Code"],
    	"Gitlab": ["gitlab","292961","https://gitlab.com/search?utf8=%E2%9C%93&search="],
        "GitOSC": ["gitOSC","ca1212","https://git.oschina.net/search?search="],
        "Code": ["csdnCode","48525e","https://code.csdn.net/search?search="],
        "Pudn": ["pudn", "1ab394", "http://search.pudn.com/Read/index?content_type=read&keyword="],
        "Nuget": ["nuget", "BC6D00", "https://www.nuget.org/packages?q="],
        "NPM": ["npmjs", "FB3E44", "https://www.npmjs.com/search?q="],
        "Rubygems": ["rubygems", "E9573F", "https://rubygems.org/search?utf8=✓&query="],
    	"PyPi": ["pypi","0073B7","https://pypi.org/search/?q="],
    },
    "参考": {
        "StackOverflow": ["stackoverflow","f48024","http://stackoverflow.com/search?q="],
        "菜鸟教程": ["runoob","96B97D","http://www.runoob.com/?s="],
    	"OutOfMemory": ["outofmemory","244eb1","http://outofmemory.cn/search?q="],
        "Android Devs": ["AndroidDevelopers","6ab344","https://developer.android.com/index.html#q="],
        "PHP": ["phpnet","8892BF","http://php.net/manual-lookup.php?pattern="],
        "StackExchange": ["stackexchange","195398","https://stackexchange.com/search?q="],
        "SegmentFault": ["segmentfault","009a61","https://segmentfault.com/search?q="],
        "CSDN": ["csdn","be1a21","https://so.csdn.net/so/search/s.do?q="],
        "MSDN": ["msdn", "000", "https://social.msdn.microsoft.com/Search/en-US?query="],
        "MSDN-ZH": ["msdnzh", "000", "https://social.msdn.microsoft.com/Search/zh-CN?query="],
        "Python3 Doc": ["python3documentation", "0073B7", "https://docs.python.org/3/search.html?q="],
        "Mozilla Dev": ["MozillaDev","000","https://developer.mozilla.org/en-US/search?q="],
    },
    "资源": {
        "Source Forge": ["sourceforge", "ff6600", "https://sourceforge.net/directory/?q="],
        "RSSHUB": ["rsshub", "FF8549", "https://rsshub.app/"],
        "Ubuntu Package": ["ubuntupackages", "DD6D41", "https://packages.ubuntu.com/search?searchon=names&suite=all&section=all&keywords="],
        "Sublime Package": ["packagecontrol", "FC9701", "https://packagecontrol.io/search/"],
        "DockerHub": ["dockerhub", "099CEC", "https://hub.docker.com/search/?q="],
        "Tor Relay": ["TorRelay", "7C4597", "https://metrics.torproject.org/rs.html#search/"],
    	"脚本之家": ["jbzj-bd", "A24937", "https://www.baidu.com/s?wd=", " inurl:www.jb51.net"],
        "Shodan": ["Shodan","c61612","https://www.shodan.io/search?query="],
        "ZoomEye": ["Zoomeye","01acfe","https://www.zoomeye.org/searchResult?q="],
        "Censys": ["censys","4688F1","https://censys.io/domain?q="],
        "FOFA": ["fofa","28FEFC","https://fofa.so/result?q="],
    },
    "社区": {
        "经验": ["jingyan","43bf0f","http://jingyan.baidu.com/search?word="],
        "知道": ["zhidao","2bb453","http://zhidao.baidu.com/search?word="],
        "Quora": ["quora","b92b27","https://www.quora.com/?q="],
        "知乎": ["zhihu","137ad5","https://www.zhihu.com/search?q="],
        "Reddit": ["reddit", "FF4500", "https://www.reddit.com/search?q="],
        "贴吧": ["tieba","5b95f0","http://tieba.baidu.com/f?kw="],
        "微博": ["SinaWeibo","ff9b37","http://s.weibo.com/weibo/"],
        "微信": ["weixin","06b04f","http://weixin.sogou.com/weixin?type=2&query="],
        "2ch": ["twoch","6e80aa","http://find.2ch.sc/?STR="],
        "CNKI": ["cnki","f48400","http://scholar.cnki.net/result.aspx?q="],
        "豆瓣": ["douban","228a31","https://www.douban.com/search?q="],
        "果壳": ["guokr","a5d92e","http://www.guokr.com/search/all/?wd="],
        "简书": ["jianshu","ea6f5a","http://www.jianshu.com/search?q="],
        "酷安": ["cookapk","57C65C","https://www.coolapk.com/search?q="],
        "Livedoor": ["livedoor","da0b16","http://search.livedoor.com/search?q="]
    },
    "百科": {
        "Wikipedia": ["wikien","3963cd","https://en.wikipedia.org/w/index.php?search="],
        "维基百科": ["wikizh","3963cd","https://zh.wikipedia.org/w/index.php?search="],
        "百度百科": ["baidubaike","3388ff","http://baike.baidu.com/search?word="],
        "互动百科": ["HudongBaike","ff9423","http://www.baike.com/wiki/?kw="],
        "百度文库": ["baiduwenku","21BB8B","http://wenku.baidu.com/search?word="],
        "伪基百科": ["uncyclopedia","110f1d","http://cn.uncyclopedia.wikia.com/wiki/?kw="],
        "萌娘百科": ["moegirl","222222","https://zh.moegirl.org/index.php?search="],
        "GOT Wiki": ["GOTWiki","222222","http://gameofthrones.wikia.com/wiki/Special:Search?search="],
        "煮酒论史": ["tianya","0084c4","http://search.tianya.cn/bbs?q="],
        "殆知阁": ["fanren8","337ab7","http://122.200.75.13/result.php"],
        "搜神": ["soshen","359a34","http://m.soshen.cn/spring/soshen/search?canshu="],
        "Readthedocs": ["readthedocs", "7C8F99", "https://readthedocs.org/search/?q="]
    },
    "图书": {
    	"Enbookfi": ["enbookfi", "8ECD51", "http://en.bookfi.net/s/?q=", "&t=0"],
        "PDF": ["pdfSearchEngine","FA7575","http://pdf-downloads.net/", "-pdf.html"],
    },
    "词典": {
        "Google Translate": ["googletranslate","000","https://translate.google.cn/#view=home&op=translate&sl=auto&tl=zh-CN&text="],
        "Yandex Translate": ["yandextranslate","f00","https://translate.yandex.com/?family=yes&lang=en-zh&text="],
        "Etymology": ["etymonline","700020","http://www.etymonline.com/index.php?search="],
        "Dictionary": ["Dictc","3c7bbe","http://www.dictionary.com/browse/?kw="],
        "FreeDict": ["FreeDict","2eb398","http://www.thefreedictionary.com/?kw="],
        "Webster": ["merriam-webster","2D5F7C","https://www.merriam-webster.com/dictionary/"],
        "Urban": ["UrbanDict","1d2439","http://www.urbandictionary.com/define.php?term="],
        "Bing": ["bingdict","0078d7","https://www.bing.com/dict/search?q="],
        "Eudic": ["Eudic","64B5FF","http://dict.eudic.net/dicts/en/"],
        "海词": ["SeaDict","2fb8cb","http://dict.cn/"],
        "有道": ["YoudaoDict","e31435","http://dict.youdao.com/w/eng/"],
        "爱词霸": ["Iciba","1596f5","http://www.iciba.com/"],
        "沪江法语": ["HJFR","8bc71a","https://dict.hjenglish.com/fr/"],
        "沪江日语": ["HJJP","8bc71a","https://dict.hjenglish.com/jp/jc/"],
        "漢字辞典": ["kjjt","000000","http://kanji.jitenon.jp/cat/search.php?getdata="],
        "汉典": ["zdic","c5a17f","http://www.zdic.net/search/?c=1&q="],
        "象形字典": ["vividict","3482c9","http://www.vividict.com/Word.aspx?ie=utf8&wd="],
        "字源": ["cnetymology","F18BF3","http://www.chineseetymology.org/CharacterEtymology.aspx?characterInput="],
        "潮州音": ["Teochow","896E5D","http://www.mogher.com/"],
        "潮州音字典": ["czyzd","003366","http://www.czyzd.com/"]
    },
    "视频": {
        "YouTube": ["youtube","cc181e","https://www.youtube.com/results?search_query="],
        "DailyMotion": ["dailymotion","0066DC","http://www.dailymotion.com/jp/relevance/universal/search/"],
        "ACFUN": ["ACFUN","fd4c5d","http://www.acfun.cn/search/#query="],
        "bilibili": ["bilibili","00A1D6","http://search.bilibili.com/all?keyword="],
        "搜库": ["soku","53b7f7","http://www.soku.com/search_video?keyword="],
        "腾讯视频": ["qqvideo","ff920b","https://v.qq.com/x/search/?q="],
        "范特西": ["fantasy","ff6600","https://www.onln.cn/search.html?search="],
        "爱奇艺": ["Iqiyi","72ad00","http://so.iqiyi.com/so/q_"],
        "乐看": ["letv","e42112","http://so.le.com/s?wd="],
        "IMDb": ["imdb","e4bb25","http://www.imdb.com/find?q="],
        "SubScene": ["SubScene","1d445a","https://subscene.com/subtitles/title?q="],
        "TED": ["ted","e62b1e","http://www.ted.com/search?q="],
        "Coursera": ["coursera","428bca","https://www.coursera.org/courses?query="]
    },
    "图片": {
        "Google Image": ["googleimage","000000","https://www.google.com.hk/search?q="],
        "Yandex Image": ["yandeximage","ff0000","https://yandex.com/images/search?text="],
        "Bing Image": ["bingimage","007DAA","https://cn.bing.com/images/search?q="],
        "百度图片": ["baiduimage","3388ff","https://image.baidu.com/search/index?tn=baiduimage&ipn=r&word="],
        "Tumblr": ["tumblr","2f3d51","https://www.tumblr.com/search?q="],
        "Pinterest": ["pinterest","bd081c","https://www.pinterest.com/search/?q="],
        "搜狗": ["sougouimage","454251","http://pic.sogou.com/pics?query="],
        "花瓣": ["petal","D43636","http://huaban.com/search/?q="],
        "Pixabay": ["Pixabay","333","https://pixabay.com/zh/photos/?q="],
        "IconPng": ["iconpng","8CDE22","http://www.iconpng.com/search/tag="],
        "EasyIcon": ["EasyIcon","76D17F","http://www.easyicon.net/language.en/iconsearch/"],
        "腾讯动漫": ["TecentCartoon","fa9144","http://ac.qq.com/Comic/searchList/search/"],
        "动漫之家": ["dmzj","049FC0","http://manhua.dmzj.com/tags/search.shtml?s="],
        "9GAG": ["ninegag","000000","http://9gag.com/search?query="],
        "Iconfont": ["iconfont", "090723", "https://www.iconfont.cn/search/index?q="]
    },
    "音乐": {
        "音悦Tai": ["yinyuetai","669900","http://so.yinyuetai.com/mv?keyword="],
        "网易云": ["neteasymusic","c70c0c","http://music.163.com/#/search/m/?s="],
        "虾米": ["xiami","F98320","http://www.xiami.com/search?key="],
        "酷我": ["kuwo","333333","http://sou.kuwo.cn/ws/NSearch?key="],
        "百度": ["baidumusic","337ccb","http://music.baidu.com/search?key="],
        "一听": ["oneting","009FFF","http://so.1ting.com/all.do?q="],
        "喜马拉雅": ["ximalaya","ff4611","http://www.ximalaya.com/search/all/kw/"]
    },
    "生活": {
        "淘宝": ["taobao","ff4400","https://s.taobao.com/search?q="],
        "天猫": ["tmall","dd2727","https://list.tmall.com/search_product.htm?q="],
        "京东": ["jd","c91623","http://search.jd.com/Search?keyword=","&enc=utf-8"],
        "1688": ["1688", "FF500B", "https://s.1688.com/selloffer/offer_search.htm?keywords="],
        "当当": ["dandan","ff2832","http://search.dangdang.com/?key="],
        "Amazon": ["amazon","232f3e","https://www.amazon.com/s/ref=nb_sb_noss?field-keywords="],
        "闲鱼": ["xianyu","333","https://www.baidu.com/s?wd="," site:s.2.taobao.com"],
        "Google Map": ["GoogleMap","679DF6","http://www.google.cn/maps/search/"],
        "高德地图": ["gaodeditu","0093FD","http://ditu.amap.com/search?query="],
        "百度地图": ["baiduditu","0093FD","http://map.baidu.com/?newmap=1&s=s%26wd%3D?wd="]
    }
};
