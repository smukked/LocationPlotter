import * as React from 'react';
import styles from './LocationPlotter.module.scss';
import { ILocationPlotterProps } from './ILocationPlotterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const LocationPlotter = (props: ILocationPlotterProps) => {
  let x: IDropdownOption;
  
  return (
    <div className={ styles.locationPlotter }>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles.column }>
            <span className={ styles.title }>Welcome to SharePoint!</span>
            <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
            <p className={ styles.description }>{escape(this.props.description)}</p>
            <a href="https://aka.ms/spfx" className={ styles.button }>
              <span className={ styles.label }>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
