import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonGroup from 'components/button-elements/ButtonGroup/ButtonGroup';
import { ButtonGroupItem } from 'components';

import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/ButtonGroup',
    component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <>
        <ButtonGroup buttonSize="sm">
            <ButtonGroupItem
                value={ 1 } text="Option 1" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
            <ButtonGroupItem
                value={ 2 } text="Option 2" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
            <ButtonGroupItem
                value={ 3 } text="Option 3" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
        </ButtonGroup>
        {' '}
        <ButtonGroup buttonSize="md">
            <ButtonGroupItem
                value={ 1 } text="Option 1" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
            <ButtonGroupItem
                value={ 2 } text="Option 2" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
            <ButtonGroupItem
                value={ 3 } text="Option 3" handleClick={ (value) => console.log(value) } Icon={ CalendarIcon } />
        </ButtonGroup>
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};