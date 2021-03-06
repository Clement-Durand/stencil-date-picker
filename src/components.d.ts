/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppDatePicker {
    'currentDate': Date;
  }
  interface AppDatePickerAttributes extends StencilHTMLAttributes {
    'currentDate'?: Date;
  }

  interface AppPicker {}
  interface AppPickerAttributes extends StencilHTMLAttributes {}

  interface AppTimePicker {}
  interface AppTimePickerAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppDatePicker': Components.AppDatePicker;
    'AppPicker': Components.AppPicker;
    'AppTimePicker': Components.AppTimePicker;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-date-picker': Components.AppDatePickerAttributes;
    'app-picker': Components.AppPickerAttributes;
    'app-time-picker': Components.AppTimePickerAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppDatePickerElement extends Components.AppDatePicker, HTMLStencilElement {}
  var HTMLAppDatePickerElement: {
    prototype: HTMLAppDatePickerElement;
    new (): HTMLAppDatePickerElement;
  };

  interface HTMLAppPickerElement extends Components.AppPicker, HTMLStencilElement {}
  var HTMLAppPickerElement: {
    prototype: HTMLAppPickerElement;
    new (): HTMLAppPickerElement;
  };

  interface HTMLAppTimePickerElement extends Components.AppTimePicker, HTMLStencilElement {}
  var HTMLAppTimePickerElement: {
    prototype: HTMLAppTimePickerElement;
    new (): HTMLAppTimePickerElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-date-picker': HTMLAppDatePickerElement
    'app-picker': HTMLAppPickerElement
    'app-time-picker': HTMLAppTimePickerElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-date-picker': HTMLAppDatePickerElement;
    'app-picker': HTMLAppPickerElement;
    'app-time-picker': HTMLAppTimePickerElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
