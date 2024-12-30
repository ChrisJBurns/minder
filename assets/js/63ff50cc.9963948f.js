"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[3015],{73571:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"run_minder_server/run_the_server","title":"Installing a Development version","description":"This guide shows you how to run a Minder server locally. It is intended for users who would like to contribute to the Minder project. It is not intended for production use.","source":"@site/docs/run_minder_server/run_the_server.md","sourceDirName":"run_minder_server","slug":"/run_minder_server/run_the_server","permalink":"/run_minder_server/run_the_server","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Installing a Development version","sidebar_position":10},"sidebar":"minder","previous":{"title":"Introduction to running Minder","permalink":"/run_minder_server/intro_to_install"},"next":{"title":"Configure a Provider","permalink":"/run_minder_server/config_provider"}}');var t=i(74848),s=i(28453);const o={title:"Installing a Development version",sidebar_position:10},l="Installing a Development version",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Set up Development Environment",id:"set-up-development-environment",level:3},{value:"Build the application",id:"build-the-application",level:3},{value:"Configure the Repository Provider",id:"configure-the-repository-provider",level:3},{value:"Start the Minder server",id:"start-the-minder-server",level:3},{value:"Configure Keycloak",id:"configure-keycloak",level:3},{value:"Authenticate minder",id:"authenticate-minder",level:3},{value:"Optional Steps",id:"optional-steps",level:2},{value:"Setting up a Webhook",id:"setting-up-a-webhook",level:3},{value:"Running Minder server directly",id:"running-minder-server-directly",level:3},{value:"Stop the Minder server container",id:"stop-the-minder-server-container",level:4},{value:"Configuration Changes",id:"configuration-changes",level:4},{value:"Run the server",id:"run-the-server",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installing-a-development-version",children:"Installing a Development version"})}),"\n",(0,t.jsx)(n.p,{children:"This guide shows you how to run a Minder server locally. It is intended for users who would like to contribute to the Minder project. It is not intended for production use.\nThis guide will walk you through how to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Retrieve the latest source code"}),"\n",(0,t.jsx)(n.li,{children:"Set up your development environment"}),"\n",(0,t.jsx)(n.li,{children:"Run the dependent applications"}),"\n",(0,t.jsx)(n.li,{children:"Create a Provider"}),"\n",(0,t.jsx)(n.li,{children:"Set up authentication"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once you complete this guide, you will have a Minder server built from source and ready to contribute to."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://golang.org/doc/install",children:"Go 1.23"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ko.build/install/",children:"ko"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mikefarah/yq",children:"yq"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,t.jsx)(n.p,{children:"Begin by cloning the Minder repository to get the latest source code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:mindersec/minder.git\ncd minder\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-development-environment",children:"Set up Development Environment"}),"\n",(0,t.jsx)(n.p,{children:"To set up your development environment, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make bootstrap\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will install the required tools for running different make targets, initialize required configuration files, as well as generate a token key passphrase."}),"\n",(0,t.jsx)(n.h3,{id:"build-the-application",children:"Build the application"}),"\n",(0,t.jsx)(n.p,{children:"Run the following to build minder and minder-server (binaries will be present at ./bin/)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You may copy these into a location on your path, or run them directly from the ",(0,t.jsx)(n.code,{children:"bin"})," directory."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-repository-provider",children:"Configure the Repository Provider"}),"\n",(0,t.jsxs)(n.p,{children:["You now need to create a Provider to enable Minder to inspect and manage your repository configuration. Currently only GitHub is supported as a Provider, so we'll do this using a GitHub App. This app will also provide Keycloak with an authentication source. Follow the steps in ",(0,t.jsx)(n.a,{href:"/run_minder_server/config_provider",children:"Configuring a Provider"})," then return here to complete configuring the server. Be sure to save the Client ID and Client secret values, because you will need them again below."]}),"\n",(0,t.jsx)(n.h3,{id:"start-the-minder-server",children:"Start the Minder server"}),"\n",(0,t.jsxs)(n.p,{children:["At this point, you should have a GitHub provider configured and your ",(0,t.jsx)(n.code,{children:"server-config.yaml"})," file updated.\nStart ",(0,t.jsx)(n.code,{children:"minder-server"})," along with its dependent services (",(0,t.jsx)(n.code,{children:"keycloak"})," and ",(0,t.jsx)(n.code,{children:"postgres"}),") by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make run-docker\n"})}),"\n",(0,t.jsx)(n.p,{children:"As this command runs, you will see it build the Minder server container and then start the dependent containers.\nIf you run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,t.jsx)(n.p,{children:"you should see 4 new services running:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"keycloak"}),"\n",(0,t.jsx)(n.li,{children:"minder"}),"\n",(0,t.jsx)(n.li,{children:"openfga"}),"\n",(0,t.jsx)(n.li,{children:"postgres"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"At this point, you might also want to ensure that created folders are owned by the current user - e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo chown "$(id -un):$(id -gn)" {flags-config.yaml,.secrets,.ssh}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"configure-keycloak",children:"Configure Keycloak"}),"\n",(0,t.jsxs)(n.p,{children:["Now that the Keycloak application is running, you need to configure it using the GitHub App you previously configured.\nTo enable GitHub login on Keycloak run the following command, using the ",(0,t.jsx)(n.code,{children:"client_id"})," and ",(0,t.jsx)(n.code,{children:"client_secret"})," you generated setting up the GitHub app:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make KC_GITHUB_CLIENT_ID=<client_id> KC_GITHUB_CLIENT_SECRET=<client_secret> github-login\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see it create a new instance and new mappers. You may see a resource not found message. This is safe to ignore."}),"\n",(0,t.jsx)(n.h3,{id:"authenticate-minder",children:"Authenticate minder"}),"\n",(0,t.jsx)(n.p,{children:"At this point, you should have the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A PostgreSQL database and Keycloak and OpenFGA instances running in containers"}),"\n",(0,t.jsx)(n.li,{children:"A minder-server built from source running in a container"}),"\n",(0,t.jsx)(n.li,{children:"A GitHub application configured to provide access to a set of repositories"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to authenticate the ",(0,t.jsx)(n.code,{children:"minder"})," application using Keycloak and the GitHub application that was previous configured.\nTo do this run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder auth login\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will open Keycloak login window in your browser."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Keycloak Login",src:i(6352).A+"",width:"1494",height:"1152"})}),"\n",(0,t.jsx)(n.p,{children:"Click GitHub to sign in. This should display a GitHub authorization window asking if you'd like to give permission to your Minder server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Github Auth",src:i(43403).A+"",width:"1524",height:"1548"})}),"\n",(0,t.jsx)(n.p,{children:"Click Authorize. The browser window should say Authentication Successful and the command line should say you've been successfully registered."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Successful Minder Auth",src:i(60467).A+"",width:"1512",height:"788"})}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You've set up a Minder server! Now you're all ready to contribute to Minder."}),"\n",(0,t.jsxs)(n.p,{children:["For more information about the development process, please see the ",(0,t.jsx)(n.a,{href:"https://minder-docs.stacklok.dev/developer_guide/get-hacking",children:"Developer Guide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on contributing, please see our ",(0,t.jsx)(n.a,{href:"https://github.com/mindersec/minder/blob/main/CONTRIBUTING.md",children:"Contributing Guide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A list of good first issues can be found in the ",(0,t.jsx)(n.a,{href:"https://github.com/mindersec/minder/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22",children:"Minder GitHub project"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"optional-steps",children:"Optional Steps"}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-a-webhook",children:"Setting up a Webhook"}),"\n",(0,t.jsxs)(n.p,{children:["With the basic setup, GitHub is unable to notify Minder when certain events occur in your repositories. MORE DETAILS WOULD BE NICE. Configuring a Webhook will allow GitHub to communicate back to the Minder instance. Details on how to set this up can be found in the ",(0,t.jsx)(n.a,{href:"/run_minder_server/config_webhook",children:"Configuring a Webhook"})," guide."]}),"\n",(0,t.jsx)(n.h3,{id:"running-minder-server-directly",children:"Running Minder server directly"}),"\n",(0,t.jsx)(n.p,{children:"There are certain situations where you might want to run the Minder server directly, instead of as a container.\nThese steps will allow you to do that. They assume you have completed the basic setup."}),"\n",(0,t.jsx)(n.h4,{id:"stop-the-minder-server-container",children:"Stop the Minder server container"}),"\n",(0,t.jsx)(n.p,{children:"Stop the Minder server, while leaving the dependant containers to continue running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker stop minder_server\n"})}),"\n",(0,t.jsx)(n.h4,{id:"configuration-changes",children:"Configuration Changes"}),"\n",(0,t.jsxs)(n.p,{children:["Find the authz section in your ",(0,t.jsx)(n.code,{children:"server-config.yaml"})," file located in your root Minder directory. Update the ",(0,t.jsx)(n.code,{children:"api_url"})," to point to ",(0,t.jsx)(n.code,{children:"http://localhost:8082"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"authz:\n  api_url: http://localhost:8082 \n  store_name: minder\n  auth:\n    # Set to token for production\n    method: none\n"})}),"\n",(0,t.jsx)(n.h4,{id:"run-the-server",children:"Run the server"}),"\n",(0,t.jsx)(n.p,{children:"Start the server from the command line using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run cmd/server/main.go serve\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see the server start up and then a series of log messages. You are now running the Minder server directly."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},43403:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/github-auth-f4cb02ac84bb464175640a24ea087efb.png"},6352:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/keycloak-login-8933de16c68266bd4b8aa2597c25be46.png"},60467:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/successful-install-a03ce854e441440bc8002ac35721311d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);