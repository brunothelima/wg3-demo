export default [
  // Input Default
  {
    type: 'text',
    name: 'normal',
    value: '',
    placeholder: 'Placeholder here',
    layout: {
      cols: 4,
      label: 'Input default',
    },
    validations: {
      required: true,
    }
  },
  // Input Default :hover
  {
    type: 'text',
    name: 'hover', 
    value: '',
    placeholder: 'Placeholder here',
    hover: true,
    layout: {
      cols: 4,
      label: 'Input default :hover',
    },
    validations: {
      required: true,
    }
  },
  // Input Default :focus
  {
    type: 'text',
    name: 'focus',
    value: '',
    placeholder: 'Placeholder here',
    focus: true,
    layout: {
      cols: 4,
      label: 'Input default :focus',
    },
    validations: {
      required: true,
    }
  },
  // Input Default :disabled
  {
    type: 'text',
    name: 'disabled',
    value: '',
    placeholder: 'Placeholder here',
    disabled: true,
    layout: {
      cols: 4,
      label: 'Input default :disabled',
    },
    validations: {
      required: true,
    }
  },
  // Input Default :error
  {
    type: 'text',
    name: 'error',
    placeholder: 'Placeholder here',
    value: '',
    layout: {
      cols: 4,
      label: 'Input default :error',
      error: true,
    },
    validations: {
      required: true,
    }
  },
  // Input Default : success
  {
    type: 'text',
    name: 'success',
    placeholder: 'Placeholder here',
    value: '',
    layout: {
      cols: 4,
      label: 'Input default :success',
      success: true,
    },
    validations: {
      required: true,
    }
  },
  // Textarea Default 
  {
    type: 'textarea',
    name: 'textarea',
    value: '',
    placeholder: 'Placeholder here',
    layout: {
      cols: 4,
      label: 'Textarea default',
    },
    validations: {
      required: true,
      minLength: 20,
    }
  },
  // Textarea Default : hover 
  {
    type: 'textarea',
    name: 'textarea_hover',
    value: '',
    placeholder: 'Placeholder here',
    hover: true,
    layout: {
      cols: 4,
      label: 'Textarea default :hover',
    },
    validations: {
      required: true,
      minLength: 20,
    }
  },
  // Textarea Default : focus 
  {
    type: 'textarea',
    name: 'textarea_focus',
    value: '',
    placeholder: 'Placeholder here',
    focus: true,
    layout: {
      cols: 4,
      label: 'Textarea default :focus',
    },
    validations: {
      required: true,
      minLength: 20
    }
  },
  // Textarea Default : disabled 
  {
    type: 'textarea',
    name: 'textarea_disabled',
    value: '',
    placeholder: 'Placeholder here',
    disabled: true,
    layout: {
      cols: 4,
      label: 'Textarea default :disabled',
    },
    validations: {
      required: true,
      minLength: 20
    }
  },
    // Textarea Default : error 
  {
    type: 'textarea',
    name: 'textarea_error',
    value: '',
    placeholder: 'Placeholder here',
    layout: {
      cols: 4,
      label: 'Textarea default :error',
      error: true
    },
    validations: {
      required: true,
      minLength: 20
    }
  },
   // Textarea Default : success 
  {
    type: 'textarea',
    name: 'textarea_success',
    value: '',
    placeholder: 'Placeholder here',
    layout: {
      cols: 4,
      label: 'Textarea default :success',
      success: true
    },
    validations: {
      required: true,
      minLength: 20
    }
  },
  //  Select Default 
  {
    type: 'select',
    name: 'select',
    placeholder: 'Placeholder here',
    value: null,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default',
    },
    validations: {
      required: true,
    }
  },
   // Select Default :hover
  {
    type: 'select',
    name: 'select_hover',
    placeholder: 'Placeholder here',
    value: null,
    hover: true,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default :hover',
    },
    validations: {
      required: true,
    }
  },
   // Select Default : focus 
  {
    type: 'select',
    name: 'select_disabled',
    placeholder: 'Placeholder here',
    value: null,
    focus: true,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default :disabled',
    },
    validations: {
      required: true,
    }
  },
   // Select Default : disabled 
  {
    type: 'select',
    name: 'select_disabled',
    placeholder: 'Placeholder here',
    value: null,
    disabled: true,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default :disabled',
    },
    validations: {
      required: true,
    }
  },
   // Select Default : error 
  {
    type: 'select',
    name: 'select_error',
    placeholder: 'Placeholder here',
    value: null,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default:  eerror',
      error: true
    },
    validations: {
      required: true,
    }
  },
   // Select Default : disabled 
  {
    type: 'select',
    name: 'select_success',
    placeholder: 'Placeholder here',
    value: null,
    disabled: true,
    options: [
      {value: 1, text: 'Select Option 1'}, 
      {value: 2, text: 'Select Option 2'}, 
      {value: 3, text: 'Select Option 3'}, 
    ],
    layout: {
      cols: 4,
      label: 'Select default :success',
      success: true
    },
    validations: {
      required: true,
    }
  },
 	// Input File
  {
    type: 'file',
    name: 'file',
    value: '',
    placeholder: 'Select a file',
    layout: {
      cols: 4,
      label: 'Input File',
    },
    validations: {
      required: true,
    }
  },
  // Input File :hover
  {
    type: 'file',
    name: 'file_hover',
    value: '',
    placeholder: 'Select a file',
    hover: true,
    layout: {
      cols: 4,
      label: 'Input File :hover',
    },
    attrs: {
    },
    validations: {
      required: true,
    }
  },
  // Input File :focus
  {
    type: 'file',
    name: 'file_hover',
    value: '',
    placeholder: 'Select a file',
    focus: true,
    layout: {
      cols: 4,
      label: 'Input File :hover',
    },
    attrs: {
    },
    validations: {
      required: true,
    }
  },
  // Input File :disabled
  {
    type: 'file',
    name: 'file_disabled',
    value: '',
    placeholder: 'Select a file',
    disabled: true,
    layout: {
      cols: 4,
      label: 'Input File :disabled',
    },
    validations: {
      required: true,
    }
  },
  // Input File :error
  {
    type: 'file',
    name: 'file_success',
    value: '',
    placeholder: 'Select a file',
    layout: {
      cols: 4,
      label: 'Input File :error',
      error: true
    },
    validations: {
      required: true,
    }
  },
  // Input File :success
  {
    type: 'file',
    name: 'file_error',
    value: '',
    placeholder: 'Select a file',
    layout: {
      cols: 4,
      label: 'Input File :success',
      success: true
    },
    validations: {
      required: true,
    }
  },  
  // //CheckboxesDefault
  {
    type: 'checkbox',
    value: null,
    options: [
      { name: 'checkbox_1', text: 'Checkbox 1'}, 
      { name: 'checkbox_2', text: 'Checkbox 2'}, 
      { name: 'checkbox_3', text: 'Checkbox 3'}, 
    ],
    layout: {
      cols: 6,
      label: 'Checkboxes',
    },
    validations: {
      required: true,
    },
  },
  // Radio Buttons Default
  {
    type: 'radio',
    name: 'radio_button',
    value: null,
    options: [
      {value: 1, text: 'Radio Option 1'}, 
      {value: 2, text: 'Radio Option 2'}, 
      {value: 3, text: 'Radio Option 3'}, 
    ],
    layout: {
      cols: 6,
      label: 'Radio Buttons',
    },
    validations: {
      required: true,
    },
  },
]