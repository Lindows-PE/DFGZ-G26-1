let tips = [
    "记笔记啊！",
    "学不好平均速度，你就学不好运动学！",
    "巨人！",
    "四班教官……",
    "批改人，自称棍木的人下课速来",
    "对的对的",
    "Let's make some noise.",
    "我巨！出大事了",
    "右小臂骨折，成果展示",
    "我爱xxx就会成为人",
    "我是一条天狗呀！",
    "六指猴从地面一跃而起，把全宇宙来吞了！"
];

function getTips() {
    return tips[getDate() % tips.length]
}