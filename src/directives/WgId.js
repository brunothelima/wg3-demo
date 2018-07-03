const ObjToHash = require('object-hash');

export const WgId = {
	bind: function (el) {
		el.wgId = ObjToHash(el.className.split(' ')).substr(0, 7)
		el.setAttribute(`data-wg-${el.wgId}`, '')
		let styleTag = document.createElement('style')
		styleTag.setAttribute('type', 'text/css')
		styleTag.setAttribute(`data-wg-${el.wgId}`, '')
		document.head.appendChild(styleTag);
	},
	unbind: function (el) {
		document.querySelector(`style[data-wg-${el.wgId}]`).remove()
	},
}