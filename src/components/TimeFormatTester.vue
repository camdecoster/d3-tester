<script setup>
import * as d3 from 'd3';
import { marked } from 'marked';
import { ref } from 'vue';

import directivesMdList from '../data/directivesMdList.js';

// Save format to window object
window.d3TimeFormat = d3.timeFormat;

const formatString = ref('%B %d, %Y');
const error = ref(null);
const inputDate = ref(new Date().toLocaleDateString());

function getOutputString() {
	let output = '';
	try {
		output = d3.timeFormat(formatString.value)(new Date(inputDate.value));
		error.value = null;
	} catch(e) {
		error.value = e.message;
	}

	return output;
}
</script>

<template>
<CContainer class="container-overall">
	<h1>D3 Time Format Tester</h1>
	<CContainer>
		<p style="text-align: left">
			<a
				href="https://github.com/d3/d3-time-format"
				target="_blank"
			>D3 Time Format</a> is a library that creates a string representation of a <a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
				target="_blank"
			>JavaScript Date object</a>. You pass it a specifier string built using directives and characters and a date and it transforms the date into an output string based on the specifier. See below for a list of directives that can be included in the the specifier.
		</p>
	</CContainer>
	<CForm>
		<CContainer class="d-flex flex-row justify-content-between mb-3">
			<div class="container-input">
				<CFormLabel for="input">
					Specifier
				</CFormLabel>
				<CFormInput
					id="input"
					v-model="formatString"
					type="text"
				/>
			</div>
			<div class="container-input">
				<CFormLabel for="value">
					Date
				</CFormLabel>
				<CFormInput
					id="value"
					v-model="inputDate"
				/>
			</div>
		</CContainer>
		<CContainer class="mb-3">
			<CFormLabel for="output">
				Output String
			</CFormLabel>
			<CFormInput
				id="output"
				readonly
				:value="getOutputString()"
			/>
		</CContainer>
	</CForm>
	<CContainer>
		<h2
			v-if="error"
			class="container-error"
		>
			Error: {{ error }}
		</h2>
	</CContainer>
	<section>
		<a href="https://github.com/d3/d3-time-format#locale_format">
			<h3>Format Directives</h3>
		</a>
		<div
			class="directives-list"
			v-html="marked(directivesMdList)"
		/>
		<p>Directives marked with an asterisk (*) may be affected by the locale definition.</p>
	</section>
</CContainer>
</template>

<style>
.directives-list {
	text-align: left;
}

.container-error {
	color: red;
}

.container-input {
	width: 47.5%;
}

.container-overall {
	margin-top: 20px;
	max-width: 800px;	
}
</style>