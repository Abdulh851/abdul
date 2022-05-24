(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1081:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://d.umijs.org/"},"dumi"]," 基于 ",["a",{title:null,href:"https://umijs.org/"},"Umi"],"、为组件开发场景而生的文档工具"],["p","使用 demo 地址请查看 ",["a",{title:null,href:"https://github.com/ant-motion/landing-dumi-example"},"dumi-example"],";"],["h2","文件路径"],["p","我们首先初始化一个站点模式的组件库开发脚手架, 如果没装安 dumi 的，请先查看 dumi 的",["a",{title:null,href:"https://d.umijs.org/#%E8%BD%BB%E6%9D%BE%E4%B8%8A%E6%89%8B"},"轻松上手"]],["pre",{lang:null,highlighted:'$ npx <span class="token variable">@umijs</span><span class="token operator">/</span>create<span class="token operator">-</span>dumi<span class="token operator">-</span>lib <span class="token operator">-</span><span class="token operator">-</span>site'},["code","$ npx @umijs/create-dumi-lib --site"]],["p","安装完后，再将 Home 复制到 docs 里，我们的文件目录为："],["pre",{lang:null,highlighted:'│── docs\n<span class="token operator">+</span> │── Home \n| └── index<span class="token punctuation">.</span>md\n│── src \n│ │── Foo\n│ │── index<span class="token punctuation">.</span>ts\n│ └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n│── package<span class="token punctuation">.</span>json\n│── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","│── docs\n+ │── Home \n| └── index.md\n│── src \n│ │── Foo\n│ │── index.ts\n│ └── ...\n│── package.json\n│── ..."]],["h2","安装依赖"],["p","安装 dumi 里的依赖: ",["code","npm install"],";"],["p","我们组件的依赖详细参考",["a",{title:null,href:"docs/use/getting-started#安装依赖"},"开始使用里的安装依赖"],";"],["h2","修改首页"],["p","更改 index.md, 删掉全部内容，增加 gapless: true, 再在下面添加 code， 最后的 index.md 如下:"],["pre",{lang:null,highlighted:'<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\ngapless<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n\n<span class="token operator">&lt;</span>code src<span class="token operator">=</span><span class="token string">"./Home/index.jsx"</span> inline <span class="token operator">/</span><span class="token operator">></span>'},["code",'---\ngapless: true\n---\n\n<code src="./Home/index.jsx" inline />']],["h2","删除 Home 里的 md 文件"],["p","将 documentation.md 从文件包里删除；"],["h2","完成"],["p","完成以上步骤之后，我们再启动 ",["code","npm start"]," 即可查看在 landing 上下载的模板。"]],meta:{order:2,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"dumi 里使用","en-US":"Use in dumi"},filename:"docs/use/dumi.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装依赖",title:"安装依赖"},"安装依赖"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改首页",title:"修改首页"},"修改首页"]],["li",["a",{className:"bisheng-toc-h2",href:"#删除-Home-里的-md-文件",title:"删除 Home 里的 md 文件"},"删除 Home 里的 md 文件"]],["li",["a",{className:"bisheng-toc-h2",href:"#完成",title:"完成"},"完成"]]]}}}]);