clearProject();
//Q:假设你在玩一局立直麻将的时候，某一巡轮到你摸牌的时候，场况如下：
//1.你虽然听牌了，但是无役（无论荣胡还是自摸，多面听情况下无论哪一张都无役）且手中无宝牌、
//推论：此时玩家必定处于副录状态，否则一定会有门清自摸的役，与1相违背。所以立直就别想了
//2.牌山剩余牌数为1
//3.这一局是ALL LAST且自家不是亲家，即便算上供托和本场也必须在这一局自摸役满才能逆转首位
//4.上家已经立直（这意味着只要自己切了牌，由于上家不能碰，即便对家碰牌，也来不及让你摸第二次牌。）
//并且这一局你成功达成了3的要求，自摸役满逆1
//问：你摸倒数第二张牌的时候你的手牌是怎样的？后来发生了什么？
//A:请见下
player_datas[0].nickname = player_datas[2].nickname = player_datas[3].nickname = '黑暗能量';
player_datas[0].avatar_id = player_datas[2].avatar_id = player_datas[3].avatar_id = 405103;
player_datas[1] = {
    nickname: '喜羊羊',
    avatar_id: 405003, // 鲁鲁修-契约
    title: 600034, // 称号也可以看, 不过称号不属于严格意义上的装扮, 这里用 天选之证 举例
    avatar_frame: 305552, // 头像框, 用 大小姐发带 举例
    views: [
        {slot: 0, item_id: 308028}, // 立直棒, 用 骑士的钥匙 举例
        {slot: 1, item_id: 308026}, // 和牌特效, 用 绝对的命令 举例
        {slot: 2, item_id: 308027}, // 立直特效, 用 王者的决意 举例
        {slot: 3, item_id: 309500}, // 手的样式, 用 橘色虎爪 举例
        // {slot: 4, item_id: 305025}, // 立直音乐, 这个回放中无法展现, 用 真剑胜负 举例
        {slot: 5, item_id: 305552}, // 头像框, 用 大小姐发带 举例
        // {slot: 6, item_id: 308029}, // 桌布, 这个与对局玩家无关, 在 setConfig 中修改, 用 魔女的契约 举例
        // {slot: 7, item_id: 308030}, // 牌背, 这个与对局玩家无关, 在 setConfig 中修改, 用 假面的裁决 举例
        // {slot: 10, item_id: 305901}, // 鸣牌指示, 这个回放中无法展现, 用 雷驰电掣 举例
        // {slot: 13, item_id: 305718}, // 牌面, 这个与对局玩家无关, 在 setConfig 中修改, 用 猫咪雀圣 举例
    ]
};
setConfig({
    category: 4,
    meta: {mode_id: 0},
    mode: {
        mode: 1,
        detail_rule: {
            _tablecloth_id: 308029, // 桌布-魔女的契约
            _mjp_id: 308030, // 牌背-假面的裁决
            _mjpsurface_id: 305718, // 牌面-猫咪雀圣
            _mainrole_: 1,
            _chang_ju_ben_num_: [0, 3, 0, 0],
            _scores_:[40000,0,30000,30000],
            _mainrole_:1,
        }
    }
});
//解法如下
begin_tiles[3]="666777888m1122z3s";
begin_tiles[0]="666777888p2233z";
begin_tiles[1]="1122223m1115p11s";
begin_tiles[2]="11334z55566677z";
randomPaishan("...7z.1s...1p","1m....1m3m9s3m5m.5p.5s.3m.1s");
roundBegin();
qiepai("3s",true);
moqieLiqi();
normalMoqie(3);
mingQiepai("4z");
normalMoqie(2);
mingQiepai("5p");
normalMoqie(3);
mopai();
comboMopai("1p");
comboMopai("1s");
qiepai();
//成功拿到所需要的牌型
normalMoqie(getLeftTileCnt()-2);
//进入题目要求的时刻，展开变化
mopai();
comboMopai("2m");
hupai();
//注1：如果承认花天月地的役满，那么任何一个有刻子的牌型都能符合要求
//注2：还有其他本质不同的解吗？