"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[1620],{1894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(4848),o=t(8453);const s={sidebar_position:7},r="Sourcehut",c={id:"configuration/destination_docu/sourcehut",title:"Sourcehut",description:"- token: your sourcehut token.",source:"@site/docs/configuration/destination_docu/sourcehut.md",sourceDirName:"configuration/destination_docu",slug:"/configuration/destination_docu/sourcehut",permalink:"/gickup-documentation/configuration/destination_docu/sourcehut",draft:!1,unlisted:!1,editUrl:"https://github.com/cooperspencer/gickup-documentation/docs/configuration/destination_docu/sourcehut.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Onedev",permalink:"/gickup-documentation/configuration/destination_docu/onedev"},next:{title:"Miscellaneous",permalink:"/gickup-documentation/configuration/miscellaneous"}},u={},d=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sourcehut",children:"Sourcehut"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config"',children:"  sourcehut:\n    - token: some-token\n      token_file: token.txt\n      url: http(s)://url-to-sourcehut\n      sshkey: /path/to/key\n      force: true\n      visibility:\n        repositories: private\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token"}),": your sourcehut token."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token_file"}),": alternatively, specify the token in a file, relative to current working directory when executed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"}),": if empty, ",(0,i.jsx)(n.a,{href:"https://git.sr.ht",children:"https://git.sr.ht"})," is used."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Sourcehut"})," uses SSH to manage write access for repositories, so you need to employ an SSH key to mirror a repository."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sshkey"}),": if empty, it uses your home directories' .ssh/id_rsa."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"force"}),": enable force push."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"visibility"}),": set the visibility of created organizations and repositories","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repositories"}),": can be ",(0,i.jsx)(n.code,{children:"private"})," or ",(0,i.jsx)(n.code,{children:"public"}),", default is ",(0,i.jsx)(n.code,{children:"private"})]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);