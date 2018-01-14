const  { hljs }  = require('./highlight');

hljs().registerLanguage('bash', require('./languages/bash'));
hljs().registerLanguage('coffeescript', require('./languages/coffeescript'));
hljs().registerLanguage('css', require('./languages/css'));
hljs().registerLanguage('dockerfile', require('./languages/dockerfile'));
hljs().registerLanguage('excel', require('./languages/excel'));
hljs().registerLanguage('ruby', require('./languages/ruby'));
hljs().registerLanguage('haml', require('./languages/haml'));
hljs().registerLanguage('xml', require('./languages/xml'));
hljs().registerLanguage('handlebars', require('./languages/handlebars'));
hljs().registerLanguage('htmlbars', require('./languages/htmlbars'));
hljs().registerLanguage('javascript', require('./languages/javascript'));
hljs().registerLanguage('json', require('./languages/json'));
hljs().registerLanguage('less', require('./languages/less'));
hljs().registerLanguage('markdown', require('./languages/markdown'));
hljs().registerLanguage('nginx', require('./languages/nginx'));
hljs().registerLanguage('php', require('./languages/php'));
hljs().registerLanguage('python', require('./languages/python'));
hljs().registerLanguage('scss', require('./languages/scss'));
hljs().registerLanguage('stylus', require('./languages/stylus'));
hljs().registerLanguage('typescript', require('./languages/typescript'));
hljs().registerLanguage('yaml', require('./languages/yaml'));

module.exports = hljs;