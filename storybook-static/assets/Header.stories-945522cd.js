var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime-e2ac5911.js";import"./index-2a900ff1.js";import{H as n}from"./Header-3bcd235d.js";import"./iframe-9454bd5f.js";import"./index-50ee27ec.js";import"./Button-1866a2d7.js";const L={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),l=t.bind({});l.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={};const f=["LoggedIn","LoggedOut"];export{l as LoggedIn,d as LoggedOut,f as __namedExportsOrder,L as default};
//# sourceMappingURL=Header.stories-945522cd.js.map
