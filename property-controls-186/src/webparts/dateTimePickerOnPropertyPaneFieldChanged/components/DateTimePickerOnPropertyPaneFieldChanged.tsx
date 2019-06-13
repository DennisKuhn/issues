import * as React from 'react';
import styles from './DateTimePickerOnPropertyPaneFieldChanged.module.scss';
import { IDateTimePickerOnPropertyPaneFieldChangedProps } from './IDateTimePickerOnPropertyPaneFieldChangedProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DateTimePickerOnPropertyPaneFieldChanged extends React.Component<IDateTimePickerOnPropertyPaneFieldChangedProps, {}> {
  public render(): React.ReactElement<IDateTimePickerOnPropertyPaneFieldChangedProps> {
    return (
      <div className={ styles.dateTimePickerOnPropertyPaneFieldChanged }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.datetime ? this.props.datetime.displayValue : '')}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
