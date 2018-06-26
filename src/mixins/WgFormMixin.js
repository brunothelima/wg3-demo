import { validationMixin } from 'vuelidate'
import { required, email, between, minLength } from 'vuelidate/lib/validators'

export const WgFormMixin = {
	mixins: [validationMixin],
	methods: {
		generateFormDataModel: function (formSchema) {
			let formModel = {};
			formSchema.map(field => {
				formModel[field.name] = field.value || null
			});
			return formModel;
		},
		generateFormVuelidateModel: function (formSchema) {
			let vuelidateModel = {}
			formSchema.map(field => {
				if (field.validations) {
					vuelidateModel[field.name] = {}
					Object.keys(field.validations).map(validation => {
						vuelidateModel[field.name][validation] = this.getVuelidation(validation, field.validations[validation])
					})
				}
			})
			return vuelidateModel
		},
		getVuelidation: function(validation, value) {
			if (validation === 'required') {
				return required
			}
			if (validation === 'email') {
				return email
			}
			if (validation === 'between') {
				let min = value[0] || 0;
				let max = value[1] || 1000;
				return between(min, max)
			}
			if (validation === 'minLength') {
				return minLength(value)
			}
		},
	}
}
