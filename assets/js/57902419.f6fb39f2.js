"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[7176],{86907:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),r=i(28453);const s={title:"Roadmap",sidebar_position:70},o="Roadmap",a={id:"about/roadmap",title:"Roadmap",description:"About this roadmap",source:"@site/docs/about/roadmap.md",sourceDirName:"about",slug:"/about/roadmap",permalink:"/about/roadmap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Roadmap",sidebar_position:70},sidebar:"minder",previous:{title:"Minder CLI configuration",permalink:"/ref/cli_configuration"},next:{title:"Contributing to Minder",permalink:"/about/contributing"}},d={},l=[{value:"About this roadmap",id:"about-this-roadmap",level:2},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"In progress",id:"in-progress",level:2},{value:"Next",id:"next",level:2},{value:"Future considerations",id:"future-considerations",level:2}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"roadmap",children:"Roadmap"})}),"\n",(0,t.jsx)(n.h2,{id:"about-this-roadmap",children:"About this roadmap"}),"\n",(0,t.jsx)(n.p,{children:"This roadmap should serve as a reference point for Minder users and community members to understand where the project is heading. The roadmap is where you can learn about what features we're working on, what stage they're in, and when we expect to bring them to you. Priorities and requirements may change based on community feedback, roadblocks encountered, community contributions, and other factors. If you depend on a specific item, we encourage you to reach out to Stacklok to get updated status information, or help us deliver that feature by contributing to Minder."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,t.jsxs)(n.p,{children:["Have any questions or comments about items on the Minder roadmap? Share your feedback via ",(0,t.jsx)(n.a,{href:"https://github.com/stacklok/minder/discussions",children:"Minder GitHub Discussions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Last updated: June 2024"})}),"\n",(0,t.jsx)(n.h2,{id:"in-progress",children:"In progress"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Register an entire GitHub organization:"})," instead of individually selecting repositories, you can register a GitHub organization to manage all the repositories within it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Individual repository selection:"})," instead of profiles always applying to all repositories, you can select which repositories a profile applies to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enforce license information for dependencies:"})," Ensure that dependencies in your repositories use licenses that you approve."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved user management:"})," easier ways to invite users to your Minder organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Historical evaluation:"})," provide information about how your security posture has changed over time."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next",children:"Next"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project hierarchies:"})," Enable users to create nested projects and group repositories within those projects. Projects will inherit profile rules in order to simplify profile and policy management."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Report CVEs, Trusty scores, and license info for ingested SBOMs:"})," Ingest SBOMS and identify dependencies; show CVEs, Trusty scores, and license information including any changes over time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Block PRs based on Trusty scores:"})," In addition to adding comments to pull requests (as is currently available), add the option to block pull requests as a policy remediation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create policy to manage licenses in PRs:"})," Add a rule type to block and/or add comments to pull requests based on the licenses of the dependencies they import."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Policy events:"})," Provide information about rule evaluation as it changes, and historical rule evaluation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Generate SBOMs:"})," Enable users to automatically create and sign SBOMs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"future-considerations",children:"Future considerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automate the generation and signing of SLSA provenance statements:"})," Enable users to generate SLSA provenance statements (e.g. through SLSA GitHub generator) and sign them with Sigstore."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Register GitLab and Bitbucket repositories:"})," In addition to managing GitHub repositories, enable users to manage configuration and policy for other source control providers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Export a Minder 'badge/certification' that shows what practices a project followed:"})," Create a badge that OSS maintainers and enterprise developers can create and share with others that asserts the Minder practices and policies their projects follow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Temporary permissions to providers vs. long-running:"})," Policy remediation currently requires long-running permissions to providers such as GitHub; provide the option to enable temporary permissions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create PRs for dependency updates:"})," As a policy autoremediation option, enable Minder to automatically create pull requests to update dependencies based on vulnerabilities, Trusty scores, or license changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Drive policy through git (config management):"})," Enable users to dynamically create and maintain policies from other sources, e.g. Git, allowing for easier policy maintenance and the ability to manage policies through GitOps workflows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integrations with additional OSS and commercial tools:"})," Integrate with tools that run code and secrets scanning (eg Snyk), and behavior analysis (eg ",(0,t.jsx)(n.a,{href:"https://github.com/ossf/package-analysis",children:"OSSF Package Analysis tool"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Help package authors improve Trusty Scores:"})," Provide guidance and/or policy to improve key Trusty Store metrics (open issues, active contributors)."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);