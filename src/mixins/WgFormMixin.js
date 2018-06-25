import { validationMixin } from 'vuelidate'
import { required, email, between, minLength } from 'vuelidate/lib/validators'

export const WgFormMixin = {
	mixins: [validationMixin],
	methods: {
		getFormModel: function (formSchema) {
			var formModel = {};
			formSchema.map(field => {
				formModel[field.props.name] = field.props.value
			});
			return formModel;
		},
		getFormValidations: function (formSchema) {
			var validationSchema = {}
			formSchema.map(field => {
				validationSchema[field.props.name] = this.getFieldValidations(field.validations || {})
			})
			return validationSchema
		},
		getFieldValidations: function(validations) {
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
	}
}
