import React, { Component } from 'react';
import './TripleSelectBox.css';

const DEFAULT_LINES_NUM = 8;

export default class TripleSelectBox extends Component {

  constructor(props) {
		super(props);
    this.state = {
      rightSelectedValues: [],
			leftSelectedValues: [],
			nonSelectedValues: [],
    };
    this._onClickUnSelectFromLeft = this._onClickUnSelectFromLeft.bind(this);
    this._onClickUnSelectFromRight = this._onClickUnSelectFromRight.bind(this);
    this._onClickSelectToRight = this._onClickSelectToRight.bind(this);
    this._onClickSelectToLeft = this._onClickSelectToLeft.bind(this);
  }

  _excludeValues(values = [], valuesToExclude = []) {
    const { compareFn } = this.props;
    if (compareFn instanceof Function) {
        return values.filter(value => !valuesToExclude.some(valueToExclude => compareFn(valueToExclude, value)));
    }
    return values.filter(value => !valuesToExclude.some(exclude => exclude == value));
  }

  _addValues(arrayToAdd = [], valuesToAdd = []) {
    return arrayToAdd.concat(valuesToAdd)
  }

  _unSelectNode(id) {
    const selectBoxChilds = document.getElementById(id).childNodes;
    selectBoxChilds.forEach(node => {
      if (node.selected) {
        node.selected = false;
        return;
      }
    });
  }

  _onClickSelectToRight() {
    const { id, onChange } = this.props;
    const clickedCodesForSelection = this.state.nonSelectedValues;

    let { centerValues, rightValues } = this.props;
    const { leftValues } = this.props;

    centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
    rightValues = this._addValues(rightValues, clickedCodesForSelection);

    onChange(leftValues, centerValues, rightValues);

    this.setState({ nonSelectedValues: [] });
    this._unSelectNode(`${id}-center-select-values-box`);
  }

  _onClickSelectToLeft() {
    const { id, onChange } = this.props;
    const clickedCodesForSelection = this.state.nonSelectedValues;

    let { leftValues, centerValues } = this.props;
    const { rightValues } = this.props;

    centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
    leftValues = this._addValues(leftValues, clickedCodesForSelection);

    onChange(leftValues, centerValues, rightValues);

    this.setState({ nonSelectedValues: [] });
    this._unSelectNode(`${id}-center-select-values-box`)
  }

  _onClickUnSelectFromLeft() {
    const { id, onChange } = this.props;
    const clickedCodesForUnSelection = this.state.leftSelectedValues;
    const { rightValues } = this.props;
    let { leftValues, centerValues } = this.props;

    leftValues = this._excludeValues(leftValues, clickedCodesForUnSelection);
    centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

    onChange(leftValues, centerValues, rightValues);

    this.setState({ leftSelectedValues: [] });
    this._unSelectNode(`${id}-left-select-values-box`)
  }

  _onClickUnSelectFromRight() {
    const { id, onChange } = this.props;
    const clickedCodesForUnSelection = this.state.rightSelectedValues;
    const { leftValues } = this.props;
    let { rightValues, centerValues } = this.props;

    rightValues = this._excludeValues(rightValues, clickedCodesForUnSelection);
    centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

    onChange(leftValues, centerValues, rightValues);

    this.setState({ rightSelectedValues: [] });
    this._unSelectNode(`${id}-right-select-values-box`)
  }

  _renderLeftPanel() {
    const { id, titleLeftBox } = this.props;
    let { leftValues } = this.props;

    return (<div style={{ display: 'inline-block', textAlign: 'center' }}>
        <label
          className="label-style"
          style={{ ...this.props.labelStyle }}
        >
          {titleLeftBox}
        </label>
        <select
          id={`${id}-left-select-values-box`}
          onChange={ (ev) => {
            leftValues = Array.apply(null, ev.target.options).filter(option => option.selected).map(o => o.value);
            this.setState({ leftSelectedValues: leftValues });
          }}
          className="box-style"
          style={{ ...this.props.boxStyle }}
          size={this.props.numberOfLines || DEFAULT_LINES_NUM}
          multiple
        >
            {leftValues.map(value =>
              <option key={value} className="select-box-option" style={{ fontSize: '14px', fontWeight: 600 }} value={value}>{value}</option>)}
        </select>
      </div>
    );
  }

  _renderRightPanel() {
    const { id, titleRightBox } = this.props;
    let { rightValues } = this.props;

    return (
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <label
          className="label-style"
          style={{ ...this.props.labelStyle }}
        >
          {titleRightBox}
        </label>
        <select
          id={`${id}-right-select-values-box`}
          onChange={ (ev) => {
            rightValues = Array.apply(null, ev.target.options).filter(option => option.selected).map(o => o.value);
            this.setState({ rightSelectedValues: rightValues });
          }}
          className="box-style"
          style={{ ...this.props.boxStyle }}
          size={this.props.numberOfLines || DEFAULT_LINES_NUM}
          multiple
        >
            {rightValues.map(value =>
              <option key={value} className="select-box-option" style={{ fontSize: '14px', fontWeight: 600 }} value={value}>{value}</option>)}
        </select>
      </div>
    );
  }

  _renderCenterPanel() {
    const { id, titleNonselectedBox } = this.props;
    let { centerValues } = this.props;

    return (
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <label
          className="label-style"
          style={{ ...this.props.labelStyle }}
        >
          {titleNonselectedBox}
        </label>
        <select
          id={`${id}-center-select-values-box`}
          onChange={ (ev) => {
            centerValues = Array.apply(null, ev.target.options).filter(option => option.selected).map(o => o.value);
            this.setState({ nonSelectedValues: centerValues });
          }}
          className="box-style"
          style={{ ...this.props.boxStyle }}
          size={this.props.numberOfLines || DEFAULT_LINES_NUM}
          multiple
        >
            {centerValues.map(value =>
              <option key={value} className="select-box-option" style={{ fontSize: '14px', fontWeight: 600 }} value={value}>{value}</option>)}
        </select>
      </div>
    );
  }

  _renderLeftButtons() {
    return (
      <div style={{ display: 'inline-block', bottom: '60px', position: 'relative' }}>
        <input
          id="btnRight"
          type="button"
          className="input-style btn-arrows"
          value="&gt;&gt;"
          onClick={ this._onClickUnSelectFromLeft }
          disabled={ !this.state.leftSelectedValues.length }
        />
        <input
          id="btnLeft"
          type="button"
          className="input-style btn-arrows"
          value="&lt;&lt;"
          onClick={ this._onClickSelectToLeft }
          disabled={ !this.state.nonSelectedValues.length }
        />
      </div>
    );
  }

  _renderRightButtons() {
    return (
      <div style={{ display: 'inline-block', bottom: '60px', position: 'relative' }}>
        <input
          id="btnRight"
          type="button"
          className="input-style btn-arrows"
          style={{ ...this.props.inputStyle }}
          value="&gt;&gt;"
          onClick={ this._onClickSelectToRight }
          disabled={ !this.state.nonSelectedValues.length }
        />
        <input
          id="btnLeft"
          type="button"
          className="input-style btn-arrows"
          style={{ ...this.props.inputStyle }}
          value="&lt;&lt;"
          onClick={ this._onClickUnSelectFromRight }
          disabled={ !this.state.rightSelectedValues.length }
        />
      </div>
    );
  }

  render() {
    const { id } = this.props;
    return (
      <div id={id} style={{ display: 'inline-block', padding: '10px', margin: 'auto' }}>
        {this._renderLeftPanel()}
        {this._renderLeftButtons()}
        {this._renderCenterPanel()}
        {this._renderRightButtons()}
        {this._renderRightPanel()}
      </div>
    );
  }

}

TripleSelectBox.propTypes = {
  id: React.PropTypes.string.isRequired,
  numberOfLines: React.PropTypes.number,
  boxStyle: React.PropTypes.object,
  labelStyle: React.PropTypes.object,
  inputStyle: React.PropTypes.object,
  rightValues: React.PropTypes.array.isRequired,
  leftValues: React.PropTypes.array.isRequired,
  centerValues: React.PropTypes.array.isRequired,
  titleRightBox: React.PropTypes.string.isRequired,
  titleLeftBox:	React.PropTypes.string.isRequired,
  titleNonselectedBox: React.PropTypes.string.isRequired,
  compareFn: React.PropTypes.func,
  onChange: React.PropTypes.func.isRequired,
};
