[x] eslint & prettier
[x] .configeditor
[x] recommeneded extensions
[x] reset css
[x] font-family (Google Noto (arabic and English))
[x] dotenv
[x] toaster
[x] storybook for UI components
[x] complete the create logic
[x] break down TodoCard to create and view mode
[x] UI
[x] handle loading and empty state
[x] History Page (Updates should reflect to user TODO's history which means we can see the updates we just did in the history tab.)
[x] General UI Enhancement (Space, Loading, Icons Size & Color, Header bar)
[x] Pagination Issue
[x] Add arrow and loading into dropdown, add label above the dropdown
[x] prevent user to save todo without title
[x] Prevent user to create more than one at same time + increase totalcount or decrease it
[x] Add hint to inform user that double click action is enable the update action
[x] i18n
check history.mapper after revamping
[x] jest & react testing library with unit testing
[x] copy public content to dist folder (because of assets)
[x] readme file
[x] check history again to show user name :/ (refactor)
[-] Write unit testing
[x] update screenshots

[] Smoke Testing

[] Revisit lint:eslint command (not working fine)

[] RTL
[] Dark
[] enable optimizing & chunking via webpack

```
src
  components              // contains all reusable component
    Business              // contains any business component that will be repeated
      TodoCard            // component for show todo item in edit & create mode (checkbox, textbox, Update Button and remove button)
      HistoryCard         // component for view only the todo as a history
    UI
      Icon
      Button
      Checkbox
      Dropdown
      Paginator
      Textbox
  Helpers
    logger                // logger manager
    http
      requester           // axios wrapper
      asyncer             // handleAsync Wrapper
  i18n                    // contains en & ar .json files & i18n.ts config setup
  Layouts
    Main                  // our main layout (responsive, support mobile view and narrow view (huge margin))
  Pages
    History               // the history page (list all done tasks)
    Home                  // the home page, list all active todo items, and to create a new todo item
  services                // contains all api callers
  utils
    date                  // handle date (date should be saved in UTC format and you should view it based on the current timezone)
                              // handle Relative Time (1 min ago, yesterday, two week ago, and so on)
                              // https://usefulangle.com/post/135/javascript-show-relative-time
```

dependencies

- axios
- classnames
- react-router-dom
- react-i18next

https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture
////////////////////////
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
title: 'Example/Page',
component: Page,
parameters: {
// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
layout: 'fullscreen',
},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
const canvas = within(canvasElement);
const loginButton = await canvas.getByRole('button', { name: /Log in/i });
await userEvent.click(loginButton);
};

androidbasha
