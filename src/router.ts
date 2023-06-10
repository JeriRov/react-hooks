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
import { UseImperativeHandle } from './12-useImperativeHandle/UseImperativeHandle';
import { UseId } from './13-useId/UseId';
import { CreateCustomHook } from './14-how-to-create-custom-hooks/CreateCustomHook';
import { ToggleComponent } from './15-20-custom-hooks/1-useToggle/ToggleComponent';
import { FetchComponent } from './15-20-custom-hooks/10-useFetch/FetchComponent';
import { ScriptComponent } from './15-20-custom-hooks/11-useScript/ScriptComponent';
import { DeepCompareEffectComponent } from './15-20-custom-hooks/12-useDeepCompareEffect/DeepCompareEffectComponent';
import { EventListenerComponent } from './15-20-custom-hooks/13-useEventListener/EventListenerComponent';
import { OnScreenComponent } from './15-20-custom-hooks/14-useOnScreen/OnScreenComponent';
import { WindowSizeComponent } from './15-20-custom-hooks/15-useWindowSize/WindowSizeComponent';
import { MediaQueryComponent } from './15-20-custom-hooks/16-useMediaQuery/MediaQueryComponent';
import { GeolocationComponent } from './15-20-custom-hooks/17-useGeolocation/GeolocationComponent';
import { StateWithValidationComponent } from './15-20-custom-hooks/18-useStateWithValidation/StateWithValidationComponent';
import { SizeComponent } from './15-20-custom-hooks/19-useSize/SizeComponent';
import { TimeoutComponent } from './15-20-custom-hooks/2-useTimeout/TimeoutComponent';
import { EffectOnceComponent } from './15-20-custom-hooks/20-useEffectOnce/EffectOnceComponent';
import { ClickOutsideComponent } from './15-20-custom-hooks/21-useClickOutside/ClickOutsideComponent';
import { DarkModeComponent } from './15-20-custom-hooks/22-useDarkMode/DarkModeComponent';
import { CopyToClipboardComponent } from './15-20-custom-hooks/23-useCopyToClipboard/CopyToClipboardComponent';
import { CookieComponent } from './15-20-custom-hooks/24-useCookie/CookieComponent';
import { TranslationComponent } from './15-20-custom-hooks/25-useTranslation/TranslationComponent';
import { DebounceComponent } from './15-20-custom-hooks/3-useDebounce/DebounceComponent';
import { UpdateEffectComponent } from './15-20-custom-hooks/4-useUpdateEffect/UpdateEffectComponent';
import { ArrayComponent } from './15-20-custom-hooks/5-useArray/ArrayComponent';
import { PreviousComponent } from './15-20-custom-hooks/6-usePrevious/PreviousComponent';
import { StateWithHistoryComponent } from './15-20-custom-hooks/7-useStateWithHistory/StateWithHistoryComponent';
import { StorageComponent } from './15-20-custom-hooks/8-useStorage/StorageComponent';
import { AsyncComponent } from './15-20-custom-hooks/9-useAsync/AsyncComponent';
import { CustomHooks } from './15-20-custom-hooks/CustomHooks';
import { Main } from './Main/Main';

interface RouteItem {
  path: string;
  Element: FC;
  hook?: boolean;
  customHook?: boolean;
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
  useImperativeHandle: {
    path: '/useImperativeHandle',
    Element: UseImperativeHandle,
    hook: true,
  },
  useId: {
    path: '/useId',
    Element: UseId,
    hook: true,
  },
  customHook: {
    path: '/customHook',
    Element: CreateCustomHook,
    hook: true,
  },
  customHooks: {
    path: '/customHooks',
    Element: CustomHooks,
    hook: true,
  },
  useToggle: {
    path: '/useToggle',
    Element: ToggleComponent,
    customHook: true,
  },
  useTimeout: {
    path: '/useTimeout',
    Element: TimeoutComponent,
    customHook: true,
  },
  useDebounce: {
    path: '/useDebounce',
    Element: DebounceComponent,
    customHook: true,
  },
  useUpdateEffect: {
    path: '/useUpdateEffect',
    Element: UpdateEffectComponent,
    customHook: true,
  },
  useArray: {
    path: '/useArray',
    Element: ArrayComponent,
    customHook: true,
  },
  usePrevious: {
    path: '/usePrevious',
    Element: PreviousComponent,
    customHook: true,
  },
  useStateWithHistory: {
    path: '/useStateWithHistory',
    Element: StateWithHistoryComponent,
    customHook: true,
  },
  useStorage: {
    path: '/useStorage',
    Element: StorageComponent,
    customHook: true,
  },
  useAsync: {
    path: '/useAsync',
    Element: AsyncComponent,
    customHook: true,
  },
  useFetch: {
    path: '/useFetch',
    Element: FetchComponent,
    customHook: true,
  },
  useScript: {
    path: '/useScript',
    Element: ScriptComponent,
    customHook: true,
  },
  useDeepCompareEffect: {
    path: '/useDeepCompareEffect',
    Element: DeepCompareEffectComponent,
    customHook: true,
  },
  useEventListener: {
    path: '/useEventListener',
    Element: EventListenerComponent,
    customHook: true,
  },
  useOnScreen: {
    path: '/useOnScreen',
    Element: OnScreenComponent,
    customHook: true,
  },
  useWindowSize: {
    path: '/useWindowSize',
    Element: WindowSizeComponent,
    customHook: true,
  },
  useMediaQuery: {
    path: '/useMediaQuery',
    Element: MediaQueryComponent,
    customHook: true,
  },
  useGeolocation: {
    path: '/useGeolocation',
    Element: GeolocationComponent,
    customHook: true,
  },
  useStateWithValidation: {
    path: '/useStateWithValidation',
    Element: StateWithValidationComponent,
    customHook: true,
  },
  useSize: {
    path: '/useSize',
    Element: SizeComponent,
    customHook: true,
  },
  useEffectOnce: {
    path: '/useEffectOnce',
    Element: EffectOnceComponent,
    customHook: true,
  },
  useClickOutside: {
    path: '/useClickOutside',
    Element: ClickOutsideComponent,
    customHook: true,
  },
  useDarkMode: {
    path: '/useDarkMode',
    Element: DarkModeComponent,
    customHook: true,
  },
  useCopyToClipboard: {
    path: '/useCopyToClipboard',
    Element: CopyToClipboardComponent,
    customHook: true,
  },
  useCookie: {
    path: '/useCookie',
    Element: CookieComponent,
    customHook: true,
  },
  useTranslation: {
    path: '/useTranslation',
    Element: TranslationComponent,
    customHook: true,
  },
};
