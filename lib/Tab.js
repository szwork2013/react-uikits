'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Tab = require('react-ui-component').Tab;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Tab = React.createClass({
    displayName: 'Tab',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_Tab, _extends({}, props, { className: className }));
    }
});

module.exports = {
    Tab: Tab
};