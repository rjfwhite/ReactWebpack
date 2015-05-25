/** @jsx React.DOM */
'use strict';
var React = require('react');
var ReactMarkdown = require('react-markdown');

var input = '# This is a header\n\nAnd this is a paragraph';

module.exports = React.createClass({
    render: function(){
        return (
    	<div>
    		<h1>{this.props.project.name}</h1>
    		<p>{this.props.project.description}</p>
    		<p>{this.props.project.info}</p>
            <ReactMarkdown source={input} />
    	</div>
        )
    }
});