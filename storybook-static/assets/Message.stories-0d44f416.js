var c=Object.defineProperty;var o=(e,n)=>c(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-e2ac5911.js";import"./index-2a900ff1.js";import"./iframe-9454bd5f.js";const s=o(({mode:e,label:n,...a})=>t("div",{className:["storybook-message",`storybook-message--${e}`].join(" "),...a,children:n}),"Message");s.defaultProps={mode:"success",label:void 0};s.__docgenInfo={description:"",methods:[],displayName:"Message",props:{mode:{defaultValue:{value:'"success"',computed:!1},required:!1},label:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const b={parameters:{storySource:{source:`import React from "react";

import { Message } from "./Message";

export default {
	title: "Example/Message",
	component: Message,
	argTypes: {
		mode: { control: { type: "select", options: ["success", "error", "warning"] } },
	},
};

const Template = (args) => <Message {...args} />;

export const Success = Template.bind({});
Success.args = {
	mode: "success",
	label: "Action is success!",
};

export const Error = Template.bind({});
Error.args = {
	mode: "error",
	label: "Action is failed!",
};

export const Warning = Template.bind({});
Warning.args = {
	mode: "warning",
	label: "Beware, you are changing something important!",
};
`,locationsMap:{success:{startLoc:{col:17,line:13},endLoc:{col:48,line:13},startBody:{col:17,line:13},endBody:{col:48,line:13}},error:{startLoc:{col:17,line:13},endLoc:{col:48,line:13},startBody:{col:17,line:13},endBody:{col:48,line:13}},warning:{startLoc:{col:17,line:13},endLoc:{col:48,line:13},startBody:{col:17,line:13},endBody:{col:48,line:13}}}}},title:"Example/Message",component:s,argTypes:{mode:{control:{type:"select",options:["success","error","warning"]}}}},r=o(e=>t(s,{...e}),"Template"),l=r.bind({});l.args={mode:"success",label:"Action is success!"};const i=r.bind({});i.args={mode:"error",label:"Action is failed!"};const d=r.bind({});d.args={mode:"warning",label:"Beware, you are changing something important!"};const y=["Success","Error","Warning"];export{i as Error,l as Success,d as Warning,y as __namedExportsOrder,b as default};
//# sourceMappingURL=Message.stories-0d44f416.js.map
