/**
 * Created by thh on 2018/6/21.
 */
import './frame.scss';
import '../../fonts/antd-iconfont/iconfont.css';
import '../../global/global';
import React, {Component} from 'react';

export default class Frame extends Component {
  render() {
    return (
      <div className="layout-frame" id="layout-frame">
        {this.props.children}
      </div>
    );
  }
}