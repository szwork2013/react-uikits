'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _TimeInput = require('react-ui-component').TimeInput;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var TimeInput = React.createClass({
    displayName: 'TimeInput',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_TimeInput, _extends({}, props, { className: className }));
    }
});

module.exports = {
    TimeInput: TimeInput
};