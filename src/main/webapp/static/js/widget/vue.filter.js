/**
 * Created by hzy24985 on 2016/4/25.
 */

/**
 * 将后台传来的数字型日期转成日期字符串, 格式按照momentjs类库做转换.
 * eg. data | toDate 'YYYY-MM-DD'
 *
 * @param format {String} 日期格式, 参照momentjs.
 * @author hzy24985
 */
Vue.filter('toDate', {
    read: function (value, format) {
        if (value) {
            return moment(value).format(format);
        } else {
            return value;
        }
    },
    write: function (value, format) {
        return value;
    }
});
/**
 * datas arr
 * 将 datas 里面对应的value显示为对应的text 页面过滤
 */
Vue.filter('toViewStr', {
    read: function (value, datas) {
        var text;
        $(datas).each(function (i, e) {
            if (value == e.value) {
                text = e.text;
            }
        });
        if (!text) {
            text = value;
        }
        return text;
    }
});
/**
 * 枚举值转换, 单项绑定，不会回写值.
 * @param value     {String}        传过来的值
 * @param all       {Array}         列表数据
 * @param feild     {String}  可选  列表中的属性名称, default: value
 * @param showFeild {String}  可选  显示成列表中的属性名称  default: text
 * @author hzy24985
 */
Vue.filter('enumFormat', function (value, all, feild, showFeild) {
    var text, feildName = feild, showName = showFeild;
    if (!feild) {
        feildName = 'value';
    }
    if (!showFeild) {
        showName = 'text';
    }
    $(all).each(function (index, item) {
        if (item[feildName] == value) {
            text = item[showName];
        }
    });
    return text;
});

/**
 * vip状态
 */
Vue.filter('vipState', function (value) {
    var text;
    switch(value) {
        case 0:
            text = "未购买";
        break;
        case 1:
            text = "已购买";
        break;
        case 2:
            text = "购买失败";
        break;
        case 3:
            text = "已退订";
        break;
        case 4:
            text = "已使用";
        break;
        case 5:
            text = "退订失败";
        break;
        case 6:
            text = "改签失败";
        break;
        default:
            text = "未知";
    }
    return text;
});
/**
 * 退改无忧状态
 */
Vue.filter('tgwyState', function (value) {
    var text;
    switch(value) {
        case 1:
            text = "未购买";
            break;
        case 2:
            text = "已购买";
            break;
        case 3:
            text = "已退订";
            break;
        case 4:
            text = "已生效（已使用）";
            break;
        case 5:
            text = "已取消";
            break;
        default:
            text = "未知";
    }
    return text;
});