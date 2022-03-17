<script setup>
import * as d3 from 'd3';
import { ref } from 'vue';

const formatString = ref('0,.2f');
const error = ref(null);
const inputNumber = ref('1234.56');

function getOutputString() {
	console.log('formatting');
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
			type=""
		/>
	</div>
	<div class="mb-3">
		<p>{{ getOutputString() }}</p>
	</div>
	<div v-if="error">
		{{ error }}
	</div>
</CForm>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
