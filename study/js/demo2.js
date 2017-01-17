require.config({
    paths: {
        "ramda": "../lib/ramda",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});
// 函数式编程版本：
// (起初有点难理解，但是更健壮、无缺陷)
// 用到的函数式编程技术：Functor、Maybe Monad 和柯里化
const R = require(['ramda']);
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
    return Maybe(user) //将 user 封装到一个 Maybe 对象
        .map(path(['prefs', 'languages', 'primary'])) //使用 Ramda 来获取首选语言
        .chain(maybeGetUrl); // 传递语言给 maybeGetUrl，得到 URL 或者null Monad
}

const maybeGetUrl = R.curry(function(allUrls, language) { // 柯里化来将它转换为一个函数参数
    return Maybe(allUrls[language]); // 返回 Monad(url | null)
})(indexURLs); // 传递 indexURLs 而不是全局访问


function boot(user, defaultURL) {
    showIndexPage(getURLForUser(user).getOrElse(defaultURL));
}

boot(joeUser, 'http://site.com/en'); //'http://site.com/sp'
