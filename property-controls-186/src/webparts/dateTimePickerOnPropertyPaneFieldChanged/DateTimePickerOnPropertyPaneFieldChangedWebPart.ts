import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { PropertyFieldDateTimePicker, IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

import * as strings from 'DateTimePickerOnPropertyPaneFieldChangedWebPartStrings';
import DateTimePickerOnPropertyPaneFieldChanged from './components/DateTimePickerOnPropertyPaneFieldChanged';
import { IDateTimePickerOnPropertyPaneFieldChangedProps } from './components/IDateTimePickerOnPropertyPaneFieldChangedProps';

export interface IDateTimePickerOnPropertyPaneFieldChangedWebPartProps {
  datetime: IDateTimeFieldValue;
}

export default class DateTimePickerOnPropertyPaneFieldChangedWebPart extends BaseClientSideWebPart<IDateTimePickerOnPropertyPaneFieldChangedWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDateTimePickerOnPropertyPaneFieldChangedProps > = React.createElement(
      DateTimePickerOnPropertyPaneFieldChanged,
      {
        datetime: this.properties.datetime
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /*protected get disableReactivePropertyChanges(): boolean {
    return true;
  }*/

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldDateTimePicker('datetime', {
                  label: strings.DescriptionFieldLabel,
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  initialDate: this.properties.datetime,
                  key: 'datetimefield'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
