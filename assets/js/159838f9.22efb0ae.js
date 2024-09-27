"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[1156],{5875:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(4848),i=o(8453);const r={sidebar_position:3},t="Gogs",c={id:"configuration/source_docu/gogs",title:"Gogs",description:"- token: your gogs token. You don't need one, if you backup only public repositories. It can also be an environment variable.",source:"@site/docs/configuration/source_docu/gogs.md",sourceDirName:"configuration/source_docu",slug:"/configuration/source_docu/gogs",permalink:"/gickup-documentation/configuration/source_docu/gogs",draft:!1,unlisted:!1,editUrl:"https://github.com/cooperspencer/gickup-documentation/blob/main/docs/docs/configuration/source_docu/gogs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/gickup-documentation/configuration/source_docu/gitea"},next:{title:"Onedev",permalink:"/gickup-documentation/configuration/source_docu/onedev"}},l={},d=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gogs",children:"Gogs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config"',children:'source:\n  gogs:\n    - token: some-token\n      token_file: token.txt\n      url: http(s)://url-to-gogs\n      user: some-user\n      username: your-user\n      password: your-password\n      ssh: true\n      sshkey: /path/to/key\n      exclude: # this excludes the repos "foo" and "bar"\n        - foo\n        - bar\n      include: # this includes the repo "foobar"\n        - foobar\n      excludeorgs: # this excludes repos from the organizations "foo" and "bar"\n        - foo\n        - bar\n      includeorgs: # this includes repos from the organizations "foo1" and "bar1"\n        - foo1\n        - bar1\n      wiki: true\n      issues: true\n      filter:\n        lastactivity: 1y\n        stars: 100\n        excludeforks: true\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token"}),": your gogs token. You don't need one, if you backup only public repositories. It can also be an environment variable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token_file"}),": alternatively, specify the token in a file, relative to current working directory when executed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),": there is no default value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user"}),": the user you want to clone the repositories from."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["if you want to get everything from your user, leave out the ",(0,s.jsx)(n.code,{children:"user"})," parameter and just use the token."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"for the clone process, either use:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"username + password"}),"\n",(0,s.jsx)(n.li,{children:"sshkey"}),"\n",(0,s.jsx)(n.li,{children:"token"}),"\n",(0,s.jsx)(n.li,{children:"nothing, if you only clone public repositories"}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"username"}),": user that will be used for the clone process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"password"}),": password for said user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ssh"}),": boolean value if the clone should be done via ssh."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sshkey"}),": if empty, it uses your home directories' .ssh/id_rsa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exclude"}),": you can exclude repositories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"include"}),": only clone those specific repositories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"excludeorgs"}),": leave out specific organizations of the user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"includeorgs"}),": only clone those specific organizations repositories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wiki"}),": also clone the wikis of the repositories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issues"}),": creates a backup of the issues of the repositorie. works only with a local destination."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lastactivity"}),": only repos that were active in this time frame are cloned (y, M, d, h, m, s)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stars"}),": clone repos with at least x stars."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"excludeforks"}),": do not clone forked repos"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);