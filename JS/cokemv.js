muban.mxpro.二级.tabs = '.module-tab-item.tab-item';
var rule = Object.assign(muban.mxpro,{
title:'cokemv',
host:'https://cokemv.me',
class_parse:'.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html',
});