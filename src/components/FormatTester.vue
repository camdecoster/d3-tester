<script setup>
import * as d3 from 'd3';
import { ref } from 'vue';

// Save format to window object
window.d3Format = d3.format;

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

function getFormatSpecifier() {
	let output = {};
	try {
		output = d3.formatSpecifier(formatString.value);
		error.value = null;
	} catch(e) {
		error.value = e.message;
	}

	return output;
} 
</script>

<template>
<CContainer class="container-overall">
	<h1>D3 Format Tester</h1>
	<CContainer>
		<p style="text-align: left">
			<a
				href="https://github.com/d3/d3-format"
				target="_blank"
			>D3 Format</a> is a library that helps to make numbers more human readable. You pass it a format specifier and a value and it transforms the value into an output string based on the format specifier. The format specifier is built using the following template:
		</p>
		<p>
			<code>[[fill]align][sign][symbol][0][width][,][.precision][~][type]</code>
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
					Value
				</CFormLabel>
				<CFormInput
					id="value"
					v-model="inputNumber"
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
		<CContainer class="d-flex flex-column align-items-center">
			<h3>Format Specifier Information</h3>
			<CTable
				v-if="Object.keys(getFormatSpecifier()).length"
				class="container-table"
			>
				<CTableHead>
					<CTableRow>
						<CTableHeaderCell scope="col">
							Property
						</CTableHeaderCell>
						<CTableHeaderCell scope="col">
							Value
						</CTableHeaderCell>
					</CTableRow>
				</CTableHead>
				<CTableBody>
					<CTableRow
						v-for="(value, key) in getFormatSpecifier()"
						:key="key"
					>
						<CTableDataCell>{{ key }}</CTableDataCell>
						<CTableDataCell>{{ value }}</CTableDataCell>
					</CTableRow>
				</CTableBody>
			</CTable>
			<p v-else>
				Unable to determine format
			</p>
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
</CContainer>
</template>

<style>
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

.container-table {
	max-width: 360px;
}
</style>