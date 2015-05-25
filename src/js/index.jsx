/** @jsx React.DOM */
'use strict'
var React = require('react');
var Project = require('./components/Project')
var project = {
	name: "Worlds Adrift",
	description: "Flying game",
	intro: "#Wow! Really `cool` stuff"
};
React.render(<Project project={project} />, document.getElementById('content'))
