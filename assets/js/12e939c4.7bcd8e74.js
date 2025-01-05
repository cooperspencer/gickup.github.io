"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[9169],{4559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"configuration/destination_docu/gitlab","title":"Gitlab","description":"- token: your gitlab token.","source":"@site/docs/configuration/destination_docu/gitlab.md","sourceDirName":"configuration/destination_docu","slug":"/configuration/destination_docu/gitlab","permalink":"/gickup-documentation/configuration/destination_docu/gitlab","draft":false,"unlisted":false,"editUrl":"https://github.com/cooperspencer/gickup-documentation/blob/main/docs/docs/configuration/destination_docu/gitlab.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Github","permalink":"/gickup-documentation/configuration/destination_docu/github"},"next":{"title":"Gitea","permalink":"/gickup-documentation/configuration/destination_docu/gitea"}}');var o=n(4848),r=n(8453);const s={sidebar_position:3},c="Gitlab",a={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"gitlab",children:"Gitlab"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="config"',children:"destination:\n  gitlab:\n    - token: some-token\n      token_file: token.txt\n      url: http(s)://url-to-gitlab\n      force: true\n      mirror:\n        enabled: true\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"token"}),": your gitlab token."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"token_file"}),": alternatively, specify the token in a file, relative to current working directory when executed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"url"}),": if empty, ",(0,o.jsx)(t.a,{href:"https://gitlab.com",children:"https://gitlab.com"})," is used."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"A backup to Gitlab works in general. With the community edition, it just migrates the repository to Gitlab. Mirroring is only supported in the Enterprise Edition.\nI have no access to an Enterprise Edition, therefore I can't test it properly."})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"force"}),": enable force push."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"mirror"}),": handle the mirror functionality","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"enabled"}),": if set to ",(0,o.jsx)(t.code,{children:"false"})," gitlab will handle the mirror process itself, if set to ",(0,o.jsx)(t.code,{children:"true"})," gickup will clone the repo locally and push it to gitlab."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);