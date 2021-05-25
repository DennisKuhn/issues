import * as React from 'react';
import styles from './Node14.module.scss';
import { INode14Props } from './INode14Props';
import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';

export default class Node14 extends React.Component<INode14Props, {}> {
  public render(): React.ReactElement<INode14Props> {
    return (
      <div className={ styles.node14 }>
        <PeoplePicker
                    data-Property="pnpPeoplePicker"
                    context={this.props.context}
                    titleText="PnP People Picker"
                    personSelectionLimit={3}
                    // groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
                    showtooltip={true}
                    required={false}
                    disabled={false}
                    onChange={(items: any) => {}}
                    showHiddenInUI={false}
                    principalTypes={[PrincipalType.User]}
                    resolveDelay={1000}
                />
      </div>
    );
  }
}
