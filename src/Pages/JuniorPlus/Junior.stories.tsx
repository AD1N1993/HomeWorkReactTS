import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {JuniorPlus} from "./JuniorPlus";
import {ReduxStoreProviderDecorators} from "../../stories/ReduxStoreProviderDecorators";


export default {
  title: 'HomeWork/JuniorPlus',
  component: JuniorPlus,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
    decorators:[ReduxStoreProviderDecorators]
} as Meta;

export const JuniorPlusBaseExamples = () =>{
    return(<JuniorPlus/>)
}