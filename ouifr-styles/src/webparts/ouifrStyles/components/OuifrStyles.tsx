import * as React from 'react';
import styles from './OuifrStyles.module.scss';
import { IOuifrStylesProps } from './IOuifrStylesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class OuifrStyles extends React.Component<IOuifrStylesProps, {}> {
  public render(): React.ReactElement<IOuifrStylesProps> {
    return (
      <div className={ styles.ouifrStyles }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <br />
              <i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
