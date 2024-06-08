"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[7525],{33437:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(74848),r=i(28453);const a={title:"Get Hacking",sidebar_position:1},t="Get Hacking",l={id:"developer_guide/get-hacking",title:"Get Hacking",description:"Prerequisites",source:"@site/docs/developer_guide/get-hacking.md",sourceDirName:"developer_guide",slug:"/developer_guide/get-hacking",permalink:"/developer_guide/get-hacking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Hacking",sidebar_position:1},sidebar:"minder",previous:{title:"Helm Install",permalink:"/run_minder_server/installing_minder"},next:{title:"Feature Flags",permalink:"/developer_guide/feature_flags"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the repository",id:"clone-the-repository",level:2},{value:"Build the application",id:"build-the-application",level:2},{value:"Install tools",id:"install-tools",level:2},{value:"Start dependencies",id:"start-dependencies",level:2},{value:"Set up a Keycloak user",id:"set-up-a-keycloak-user",level:2},{value:"Username / password Keycloak user",id:"username--password-keycloak-user",level:3},{value:"GitHub App",id:"github-app",level:3},{value:"Run the application",id:"run-the-application",level:2},{value:"Run the tests",id:"run-the-tests",level:2},{value:"CLI",id:"cli",level:2},{value:"APIs",id:"apis",level:2},{value:"How to generate protobuf stubs",id:"how-to-generate-protobuf-stubs",level:2},{value:"Database migrations and tooling",id:"database-migrations-and-tooling",level:2},{value:"Viper configuration",id:"viper-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"get-hacking",children:"Get Hacking"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://golang.org/doc/install",children:"Go"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:stacklok/minder.git\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-the-application",children:"Build the application"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-tools",children:"Install tools"}),"\n",(0,s.jsxs)(n.p,{children:["You may bootstrap the whole development environment, which includes initializing the ",(0,s.jsx)(n.code,{children:"config.yaml"})," and ",(0,s.jsx)(n.code,{children:"server-config.yaml"}),"\nfiles with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make bootstrap\n"})}),"\n",(0,s.jsx)(n.p,{children:"This also installs the required tools for running different make targets."}),"\n",(0,s.jsxs)(n.p,{children:["Note that if you intend to run minder outside ",(0,s.jsx)(n.code,{children:"docker compose"}),", you should\nchange the Keycloak and OpenFGA URLs in ",(0,s.jsx)(n.code,{children:"server-config.yaml"})," to refer to\nlocalhost instead of the ",(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," names. There are comments inside the\nconfig file which explain what needs to be changed."]}),"\n",(0,s.jsx)(n.h2,{id:"start-dependencies",children:"Start dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Note that the application requires a database to be running. This can be achieved\nusing docker compose:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'services="postgres keycloak migrate openfga" make run-docker\n'})}),"\n",(0,s.jsx)(n.h2,{id:"set-up-a-keycloak-user",children:"Set up a Keycloak user"}),"\n",(0,s.jsx)(n.p,{children:"You have two options here: setting up a GitHub app (possibly the same one you\nuse for Minder enrollment), or using username / password."}),"\n",(0,s.jsx)(n.h3,{id:"username--password-keycloak-user",children:"Username / password Keycloak user"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming that you've run ",(0,s.jsx)(n.code,{children:"make run-docker"}),", you can run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make password-login\n"})}),"\n",(0,s.jsxs)(n.p,{children:["to create a ",(0,s.jsx)(n.code,{children:"testuser"})," Keycloak user with the password ",(0,s.jsx)(n.code,{children:"tester"}),".  (You can create more users either through the KeyCloak UI or by modifying the command in ",(0,s.jsx)(n.a,{href:"https://github.com/stacklok/minder/blob/main/.mk/identity.mk",children:"./mk/identity.mk"}),".)  This is purely intended as a convenience method, and is fairly fragile."]}),"\n",(0,s.jsx)(n.h3,{id:"github-app",children:"GitHub App"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/run_minder_server/config_oauth",children:"Create an OAuth2 application for GitHub"}),".\nSelect ",(0,s.jsx)(n.code,{children:"New OAuth App"})," and fill in the details."]}),"\n",(0,s.jsx)(n.p,{children:"Create a new client secret for your OAuth2 client."}),"\n",(0,s.jsx)(n.p,{children:"Using the client ID and client secret you created above, enable GitHub login on Keycloak by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make KC_GITHUB_CLIENT_ID=<client_id> KC_GITHUB_CLIENT_SECRET=<client_secret> github-login\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-the-application",children:"Run the application"}),"\n",(0,s.jsx)(n.p,{children:"Then run the application"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bin/minder-server serve\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or direct from source"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run cmd/server/main.go serve\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The application will be available on ",(0,s.jsx)(n.code,{children:"https://localhost:8080"})," and gRPC on ",(0,s.jsx)(n.code,{children:"https://localhost:8090"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"run-the-tests",children:"Run the tests"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["The CLI is available in the ",(0,s.jsx)(n.code,{children:"cmd/cli"})," directory.  You can also use the pre-built ",(0,s.jsx)(n.code,{children:"minder"})," CLI with your new application; you'll need to set the ",(0,s.jsx)(n.code,{children:"--grpc-host localhost --grpc-port 8090"})," arguments in either case."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run cmd/cli/main.go --help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"apis",children:"APIs"}),"\n",(0,s.jsxs)(n.p,{children:["The APIs are defined in protobuf ",(0,s.jsx)(n.a,{href:"https://github.com/stacklok/minder/blob/main/proto/minder/v1/minder.proto",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An OpenAPI / swagger spec is generated to ",(0,s.jsx)(n.a,{href:"https://github.com/stacklok/minder/blob/main/pkg/api/openapi/proto/minder/v1/minder.swagger.json",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["It can be accessed over gRPC or HTTP using ",(0,s.jsx)(n.a,{href:"https://grpc-ecosystem.github.io/grpc-gateway/",children:"gprc-gateway"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-generate-protobuf-stubs",children:"How to generate protobuf stubs"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.a,{href:"https://buf.build/docs/",children:"buf"})," to generate the gRPC / HTTP stubs (both protobuf and openAPI)."]}),"\n",(0,s.jsx)(n.p,{children:"To build the stubs, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make clean-gen\nmake gen\n"})}),"\n",(0,s.jsx)(n.h2,{id:"database-migrations-and-tooling",children:"Database migrations and tooling"}),"\n",(0,s.jsxs)(n.p,{children:["Minder uses ",(0,s.jsx)(n.a,{href:"https://sqlc.dev/",children:"sqlc"})," to generate Go code from SQL."]}),"\n",(0,s.jsxs)(n.p,{children:["The main configuration file is ",(0,s.jsx)(n.code,{children:"sqlc.yaml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To make changes to the database schema, create a new migration file in the\n",(0,s.jsx)(n.code,{children:"database/migrations"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Add any queries to the ",(0,s.jsx)(n.code,{children:"database/queries/sqlc.sql"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"To generate the Go code, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make sqlc\n"})}),"\n",(0,s.jsx)(n.p,{children:"Users will then need to peform a migration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make migrateup\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make migratedown\n"})}),"\n",(0,s.jsx)(n.h2,{id:"viper-configuration",children:"Viper configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Minder uses ",(0,s.jsx)(n.a,{href:"https://github.com/spf13/viper",children:"viper"})," for configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["An example CLI configuration file is ",(0,s.jsx)(n.code,{children:"config/config.yaml.example"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An example server configuration file is ",(0,s.jsx)(n.code,{children:"config/server-config.yaml.example"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Most values should be quite self-explanatory."}),"\n",(0,s.jsxs)(n.p,{children:["Before running the app, please copy the content of ",(0,s.jsx)(n.code,{children:"config/config.yaml.example"})," into ",(0,s.jsx)(n.code,{children:"$PWD/config.yaml"})," file,\nand ",(0,s.jsx)(n.code,{children:"config/server-config.yaml.example"})," into ",(0,s.jsx)(n.code,{children:"$PWD/server-config.yaml"})," file, and modify to use your own settings."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(96540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);