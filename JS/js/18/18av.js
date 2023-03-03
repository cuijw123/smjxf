var rule = {
    title:'18av',
    host:'https://maa1815.com/',
    url:'/zh/fyclass/all/fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name: '中文字幕AV&国产专区&欧美精品&动漫&中文字幕&人气女忧&不雅视频&韩三级&热剧大人版&抖音妹合集&猫咪自拍',
    class_url: 'chinese_random&32&16&31&34&35&37&39&40&41&42',
   //class_parse:'ul.animenu__nav&&li;a&&Text;a&&href',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.posts&&.video_9s;h3&&Text;img&&src;.meta&&Text;a&&href',
    二级:'*',
}