"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vertical
const qi_1 = require("./lib/qi");
let qi = new qi_1.QI({ w: 176, h: 264 }, qi_1.gray16);
const fs_1 = require("fs");
let poems = JSON.parse((0, fs_1.readFileSync)('./public/唐詩三百首.json').toString());
// let poems = [
//     {"詩名":"登幽州臺歌","作者":"陳子昂","詩體":"七言古詩","詩文":"前不見古人，後不見來者。念天地之悠悠，獨愴然而涕下。"},
//     {"詩名":"春宮曲","作者":"王昌齡","詩體":"七言絕句","詩文":"昨夜風開露井桃，未央前殿月輪高。平陽歌舞新承寵，簾外春寒賜錦袍。"},
//     {"詩名":"杜少府之任蜀州","作者":"王勃","詩體":"五言律詩","詩文":"城闕輔三秦，風煙望五津。與君離別意，同是宦遊人。海內存知己，天涯若比鄰。無為在歧路，兒女共沾巾。"},
//     {"詩名":"登鸛鵲樓","作者":"王之渙","詩體":"五言絕句","詩文":"白日依山盡，黃河入海流。欲窮千里目，更上一層樓。"},
//     {"詩名":"石魚湖上醉歌并序","作者":"元結","詩體":"七言古詩","詩文":"石魚湖，似洞庭，夏水欲滿君山青。山為樽，水為沼，酒徒歷歷坐洲鳥。長風連日作大浪，不能廢人運酒舫。我持長瓢坐巴邱，酌飲四座以散愁。"},
//     {"詩名":"遣悲懷三首之一","作者":"元稹","詩體":"七言律詩","詩文":"謝公最小偏憐女，自嫁黔婁百事乖。顧我無衣搜藎篋，泥他沽酒拔金釵。野蔬充膳甘長藿，落葉添薪仰古槐。今日俸錢過十萬，與君營奠復營齋。"},
//     {"詩名":"賊退示官吏并序","作者":"元結","詩體":"五言古詩","詩文":"昔歲逢太平，山林二十年。泉源在庭戶，洞壑當門前。井稅有常期，日晏猶得眠。忽然遭世變，數歲親戎旃。今來典斯郡，山夷又紛然。城小賊不屠，人貧傷可憐。是以陷鄰境，此州獨得全。使臣將王命，豈不如賊焉。令彼徵歛者，迫之如火煎。誰能絕人命，以作時世賢。思欲委符節，引竿自刺船。將家就魚麥，歸老江湖邊。"}
// ];    
function drawpoem20(poem) {
    let str = poem.詩文;
    if (str[0] == '(')
        str = str.split(')')[1];
    qi.verticalprintln(`${poem.詩名} ${poem.作者} 20`, 8, 4, { name: '繁體', size: 14, color: 'black' });
    let fs = 36;
    qi.setFonts({ name: '繁體', size: fs, color: 'black' });
    for (let i = 0; i < 4; i++)
        qi.verticalprint(str.substring(i * 6, i * 6 + 5), 22 + fs * i, 40);
    return 20;
}
function drawpoem40(poem) {
    let str = poem.詩文;
    if (str[0] == '(')
        str = str.split(')')[1];
    qi.verticalprintln(`${poem.詩名} ${poem.作者} 40`, 8, 4, { name: '繁體', size: 14, color: 'black' });
    let fs = 22;
    qi.setFonts({ name: '繁體', size: fs, color: 'black' });
    for (let i = 0; i < 4; i++)
        qi.verticalprint(str.substring(i * 12, i * 12 + 11), 44 + fs * i * 1.3, 4);
    return 40;
}
function drawpoem28(poem) {
    let str = poem.詩文;
    if (str[0] == '(')
        str = str.split(')')[1];
    qi.verticalprintln(`${poem.詩名} ${poem.作者} 28`, 8, 4, { name: '繁體', size: 14, color: 'black' });
    let fs = 32;
    qi.setFonts({ name: '繁體', size: fs, color: 'black' });
    for (let i = 0; i < 4; i++)
        qi.verticalprint(str.substring(i * 8, i * 8 + 7), 36 + fs * i * 1.05, 20);
    return 28;
}
function drawpoem56(poem) {
    let str = poem.詩文;
    if (str[0] == '(')
        str = str.split(')')[1];
    qi.verticalprintln(`${poem.詩名} ${poem.作者} 56`, 8, 4, { name: '繁體', size: 14, color: 'black' });
    let fs = 17;
    qi.setFonts({ name: '繁體', size: fs, color: 'black' });
    for (let i = 0; i < 4; i++)
        qi.verticalprint(str.substring(i * 16, i * 16 + 15), 46 + fs * i * 1.6, 4);
    return 56;
}
function drawpoem(poem) {
    let str = poem.詩文;
    if (str[0] == '(')
        str = str.split(')')[1];
    switch (str.length) {
        case 24: return drawpoem20(poem);
        case 48: return drawpoem40(poem);
        case 32: return drawpoem28(poem);
        case 64: return drawpoem56(poem);
        default: break;
    }
    qi.verticalprintln(`${poem.詩名} ${poem.作者}`, 4, 4, { name: '繁體', size: 14, color: 'black' });
    let fs = Math.floor(Math.sqrt((qi.dim.h - 12) * (qi.dim.w - 2) / str.length)) - 2;
    if (fs * (fs + 1) * str.length > (qi.dim.h - 12) * (qi.dim.w - 2))
        fs -= 1;
    fs = Math.min(fs, 34);
    qi.setFonts({ name: '繁體', size: fs, color: 'black' });
    let maxChar = Math.floor((qi.dim.h - 2) / fs);
    qi.margin = Math.floor((qi.dim.h - maxChar * fs) / 2);
    qi.cursor.y = qi.margin;
    qi.cursor.x += 2;
    // console.log({l:str.length,fs,maxChar});
    for (let i = 0; i * maxChar < str.length; i++) {
        qi.verticalprintln(str.substring(i * maxChar, (i + 1) * maxChar));
    }
    return 0;
}
async function test() {
    for (let i = 0; i < poems.length; i++) {
        qi.clear();
        let rr = drawpoem(poems[i]);
        qi.canvas2data().quantize();
        if (rr === 0)
            qi.qrDraw(`https://hclind.github.io/p300/?p=${i}`, 30, 260, "L", 1, true);
        else
            qi.qrDraw(`https://hclind.github.io/p300/?p=${i}`, 172, 260, "L", 1, true);
        // if (rr != 0) qi.qrDraw(`https://www.google.com/search?q=${poems[i].詩名}`,172,260,"L",1,true);
        qi.data2canvas();
        let id = i.toString();
        id = "0".repeat(3 - id.length) + id;
        // await qi.dumpPNG(`./daemon/${id}`);    
        await qi.dumpData(`./daemon/poem${id}.bin`, 0, 180);
    }
}
qi.loadfont('./public/LXGWWenKaiTC-Regular.ttf', '繁體');
console.log(JSON.stringify(poems.map(d => d.詩名)));
// test();
