import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'OuifrStylesWebPartStrings';
import OuifrStyles from './components/OuifrStyles';
import { IOuifrStylesProps } from './components/IOuifrStylesProps';

export interface IOuifrStylesWebPartProps {
  description: string;
}

export default class OuifrStylesWebPart extends BaseClientSideWebPart<IOuifrStylesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IOuifrStylesProps > = React.createElement(
      OuifrStyles,
      {
        description: this.properties.description
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
