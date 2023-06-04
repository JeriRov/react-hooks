import { FC } from 'react';

import { UseState } from './01-useState/UseState';
import { UseEffect } from './02-useEffect/UseEffect';
import { UseContext } from './03-useContext/UseContext';
import { UseRef } from './04-useRef/UseRef';
import { UseMemo } from './05-useMemo/UseMemo';
import { UseCallback } from './06-useCallback/UseCallback';
import { NumberIncrementor } from './07-useReducer/NumberIncrementor';
import { Todo } from './07-useReducer/Todo';
import { UseReducer } from './07-useReducer/UseReducer';
import { UseTransition } from './08-useTransition/UseTransition';
import { UseDeferredValue } from './09-useDeferredValue/UseDeferredValue';
import { UseLayoutEffect } from './10-useLayoutEffect/UseLayoutEffect';
import { UseDebugValue } from './11-useDebugValue/UseDebugValue';
import { Main } from './Main/Main';

interface RouteItem {
  path: string;
  Element: FC;
  hook?: boolean;
}

export const router: Record<string, RouteItem> = {
  main: {
    path: '/',
    Element: Main,
  },
  useState: {
    path: '/useState',
    Element: UseState,
    hook: true,
  },
  useEffect: {
    path: '/useEffect',
    Element: UseEffect,
    hook: true,
  },
  useContext: {
    path: '/useContext',
    Element: UseContext,
    hook: true,
  },
  useRef: {
    path: '/useRef',
    Element: UseRef,
    hook: true,
  },
  useMemo: {
    path: '/useMemo',
    Element: UseMemo,
    hook: true,
  },
  useCallback: {
    path: '/useCallback',
    Element: UseCallback,
    hook: true,
  },
  useReducer: {
    path: '/useReducer',
    Element: UseReducer,
    hook: true,
  },
  numberIncrementor: {
    path: '/number-incrementor',
    Element: NumberIncrementor,
  },
  todo: {
    path: '/todo',
    Element: Todo,
  },
  useTransition: {
    path: '/useTransition',
    Element: UseTransition,
    hook: true,
  },
  useDeferredValue: {
    path: '/useDeferredValue',
    Element: UseDeferredValue,
    hook: true,
  },
  useLayoutEffect: {
    path: '/useLayoutEffect',
    Element: UseLayoutEffect,
    hook: true,
  },
  useDebugValue: {
    path: '/useDebugValue',
    Element: UseDebugValue,
    hook: true,
  },
};
