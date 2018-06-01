import { validationMixin } from 'vuelidate'
import { required, email, between, minLength } from 'vuelidate/lib/validators'

export const WgFormValidationMixin = {
	mixins: [validationMixin],
	methods: {
		setFormModel: function (formSchema) {
			var formModel = {};
			formSchema.map(field => {
				formModel[field.name] = field.value
			});
			return formModel;
		},
		getValidator: function(validations) {
			let fieldValidations = {};
			Object.keys(validations).map(validation => {
				if (validation === 'required') {
					fieldValidations['required'] = required
				}
				if (validation === 'email') {
					fieldValidations['email'] = email
				}
				if (validation === 'between') {
					let min = validations['between'][0] || 0;
					let max = validations['between'][1] || 1000;
					fieldValidations['between'] = between(min, max)
				}
				if (validation === 'minLength') {
					let length = validations['minLength'];
					fieldValidations['minLength'] = minLength(length)
				}
			})
			return fieldValidations
		},
		setValidations: function (formSchema) {
			var validationSchema = {}
			formSchema.map(field => {
				validationSchema[field.name] = this.getValidator(field.validations || {})
			})
			return validationSchema
		}
	}
}