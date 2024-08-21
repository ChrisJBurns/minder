"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[6130],{61796:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),r=i(28453);const s={title:"Manage profiles and compliance",sidebar_position:20},a="Manage profiles",o={id:"how-to/manage_profiles",title:"Manage profiles and compliance",description:"In order to detect security deviations from repositories or other entities, Minder is relying on the concepts of Profiles.",source:"@site/docs/how-to/manage_profiles.md",sourceDirName:"how-to",slug:"/how-to/manage_profiles",permalink:"/how-to/manage_profiles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Manage profiles and compliance",sidebar_position:20},sidebar:"minder",previous:{title:"Creating a profile",permalink:"/how-to/create_profile"},next:{title:"Enabling pull request reviews",permalink:"/how-to/pr_reviews"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"List rule types",id:"list-rule-types",level:2},{value:"Create a rule type",id:"create-a-rule-type",level:2},{value:"Create a profile",id:"create-a-profile",level:2},{value:"List profile status",id:"list-profile-status",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"manage-profiles",children:"Manage profiles"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to detect security deviations from repositories or other entities, Minder is relying on the concepts of ",(0,t.jsx)(n.strong,{children:"Profiles"}),".\nA profile is a definition of a verification we want to do on an entity in a pipeline.\nA ",(0,t.jsx)(n.strong,{children:"profile"})," is an instance of a profile type and applies to all repositories in a project, with the relevant settings filled in."]}),"\n",(0,t.jsx)(n.p,{children:"An example profile is the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\nversion: v1\ntype: profile\nname: acme-github-profile\ncontext:\n  provider: github\nrepository:\n  - type: secret_scanning\n    def:\n      enabled: true\n  - type: branch_protection_require_pull_request_approving_review_count\n    params:\n      branch: main\n    def:\n      required_approving_review_count: 2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The full example is available in the ",(0,t.jsx)(n.a,{href:"https://github.com/stacklok/minder-rules-and-profiles",children:"examples directory"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This profile is checking that secret scanning is enabled for all repositories and that the ",(0,t.jsx)(n.code,{children:"main"})," branch is protected,\nrequiring at least two approvals from code owners before landing a pull request."]}),"\n",(0,t.jsxs)(n.p,{children:["You'll notice that this profile calls two different rules: ",(0,t.jsx)(n.code,{children:"secret_scanning"})," and ",(0,t.jsx)(n.code,{children:"branch_protection_require_pull_request_approving_review_count"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Rules can be instantiated from rule types, and they are the ones that are actually doing the verification."}),"\n",(0,t.jsx)(n.p,{children:"A rule type is a definition of a verification we want to do on an entity in a pipeline."}),"\n",(0,t.jsx)(n.p,{children:"An example rule type is the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\nversion: v1\ntype: rule-type\nname: secret_scanning\ncontext:\n  provider: github\ndescription: |\n  Verifies that secret scanning is enabled for a given repository.\n  Note that this will will not work as expected for private repositories\n  unless you have GitHub Advanced Security enabled. If you still want to use\n  this rule because you have a mixture of private and public repositories,\n  enable the `skip_private_repos` flag.\nguidance: |\n  Secret scanning is a feature that scans repositories for secrets and alerts\n  the repository owner when a secret is found. To enable this feature in GitHub,\n  you must enable it in the repository settings.\n\n  For more information, see\n  https://docs.github.com/en/github/administering-a-repository/about-secret-scanning\ndef:\n  # Defines the section of the pipeline the rule will appear in.\n  # This will affect the template used to render multiple parts\n  # of the rule.\n  in_entity: repository\n  # Defines the schema for writing a rule with this rule being checked\n  rule_schema:\n    properties:\n      enabled:\n        type: boolean\n        default: true\n      skip_private_repos:\n        type: boolean\n        default: true\n        description: |\n          If true, this rule will be marked as skipped for private repositories\n  # Defines the configuration for ingesting data relevant for the rule\n  ingest:\n    type: rest\n    rest:\n      # This is the path to the data source. Given that this will evaluate\n      # for each repository in the organization, we use a template that\n      # will be evaluated for each repository. The structure to use is the\n      # protobuf structure for the entity that is being evaluated.\n      endpoint: "/repos/{{.Entity.Owner}}/{{.Entity.Name}}"\n      # This is the method to use to retrieve the data. It should already default to JSON\n      parse: json\n  # Defines the configuration for evaluating data ingested against the given profile\n  eval:\n    type: rego\n    rego:\n      type: deny-by-default\n      def: |\n        package minder\n\n        import future.keywords.if\n\n        default allow := false\n        default skip := false\n\n        allow if {\n          input.profile.enabled\n          input.ingested.security_and_analysis.secret_scanning.status == "enabled"\n        }\n\n        allow if {\n          not input.profile.enabled\n          input.ingested.security_and_analysis.secret_scanning.status == "disabled"\n        }\n\n        skip if {\n          input.profile.skip_private_repos == true\n          input.ingested.private == true\n        }\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The full example is available in the ",(0,t.jsx)(n.a,{href:"https://github.com/stacklok/minder-rules-and-profiles",children:"examples directory"})]}),"\n",(0,t.jsx)(n.p,{children:"This rule type is checking that secret scanning is enabled for all repositories."}),"\n",(0,t.jsx)(n.p,{children:"The rule type defines how the upstream GitHub API is to be queried, and how the data is to be evaluated.\nIt also defines how instances of this rule will be validated against the rule schema."}),"\n",(0,t.jsxs)(n.p,{children:["When a profile is created for an specific group, a continuous monitoring for the related objects start. An object can be a repository,\na branch, a package... depending on the profile definition. When an specific object is not matching what's expected,\na violation is presented via the profile's ",(0,t.jsx)(n.strong,{children:"status"}),". When a violation happens, the overall ",(0,t.jsx)(n.strong,{children:"Profile status"})," for this specific entity changes,\nbecoming failed. There is also individual statuses for each rule evaluation. User can check the reason for this violation and take remediation\nactions to comply with the profile."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"minder"})," CLI application"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/getting_started/register_repos",children:"At least one repository is registered for Minder"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"list-rule-types",children:"List rule types"}),"\n",(0,t.jsx)(n.p,{children:"Covered rule types are now:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"branch_protection_require_pull_request_approving_review_count: controls the branch protection approving review count rule on a repo"}),"\n",(0,t.jsx)(n.li,{children:"secret_scanning: enforces secret scanning for a repo"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can list all profile types registered in Minder:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder ruletype list\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default, a rule type is providing some recommended default values, so users can create profiles\nby using those defaults without having to create a new profile from scratch."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-rule-type",children:"Create a rule type"}),"\n",(0,t.jsx)(n.p,{children:"Before creating a profile, we need to ensure that all rule types exist in Minder."}),"\n",(0,t.jsx)(n.p,{children:"A rule type can be created by pointing to a directory (or file) containing the rule type definition:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder ruletype create -f ./examples/rules-and-profiles/rule-types/github/secret_scanning.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where the yaml files in the directory ",(0,t.jsx)(n.code,{children:"rule-types"})," may look as the example above."]}),"\n",(0,t.jsx)(n.p,{children:"Once all the relevant rule types are available for our group, we may take them into use\nby creating a profile."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-profile",children:"Create a profile"}),"\n",(0,t.jsx)(n.p,{children:"When there is a need to control the specific behaviours for a set of repositories, a profile can be\ncreated, based on the previous profile types."}),"\n",(0,t.jsx)(n.p,{children:"A profile needs to be associated with a provider, created within a certain project and it will be applied\nto all repositories belonging to that project."}),"\n",(0,t.jsx)(n.p,{children:"For example creating a profile happens by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder profile create -f ./examples/rules-and-profiles/profiles/github/profile.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"profile.yaml"})," may look as the example above."]}),"\n",(0,t.jsxs)(n.p,{children:["When a specific setting is not provided, the value of this setting is not compared against the profile.\nThis specific profile will monitor the ",(0,t.jsx)(n.code,{children:"main"})," branch for all registered repositories, checking that pull\nrequest enforcement is on place, requiring at least 2 code owners approvals before landing.\nIt will also require that force pushes and deletions are disabled for the ",(0,t.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,t.jsx)(n.p,{children:"When a profile is created, any repos registered for the same provider and project,\nare being reconciled. Each time that there is a change on the repo it causes the related profile status to be updated."}),"\n",(0,t.jsx)(n.h2,{id:"list-profile-status",children:"List profile status"}),"\n",(0,t.jsxs)(n.p,{children:["When there is an event that causes a profile violation, the violation is stored in the database, and the\noverall status of the profile for this specific repository is changed.\nThe ",(0,t.jsx)(n.code,{children:"profile status"})," command will inform about:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"profile_type (secret_scanning...)"}),"\n",(0,t.jsx)(n.li,{children:"status: [success, failure]"}),"\n",(0,t.jsx)(n.li,{children:"last updated: time when this status was updated"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Profile status can be checked using the following commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder profile status list --name github-profile\n"})}),"\n",(0,t.jsx)(n.p,{children:"To view all of the rule evaluations, use the following"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minder profile status list --name github-profile --detailed\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);