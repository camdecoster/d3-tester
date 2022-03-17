<script setup>
import * as d3 from 'd3';
import { ref } from 'vue';

// Save format to window object
window.d3format = d3.format;

const formatString = ref('0,.2f');
const error = ref(null);
const inputNumber = ref('1234.56');

function getOutputString() {
	let output = '';
	try {
		output = d3.format(formatString.value)(inputNumber.value);
		error.value = null;
	} catch(e) {
		error.value = e.message;
	}

	return output;
}
</script>

<template>
<h1>D3 Format Tester</h1>
<CForm>
	<div class="mb-3">
		<CFormLabel for="input">
			D3 Format String
		</CFormLabel>
		<CFormInput
			id="input"
			v-model="formatString"
			type="text"
		/>
	</div>

	<div class="mb-3">
		<CFormLabel for="value">
			Value
		</CFormLabel>
		<CFormInput
			id="value"
			v-model="inputNumber"
		/>
	</div>
	<div class="mb-3">
		<h3>Output String</h3>
		<p>{{ getOutputString() }}</p>
	</div>
	<div v-if="error">
		{{ error }}
	</div>
</CForm>
</template>
