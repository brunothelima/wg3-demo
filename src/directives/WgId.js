const ObjToHash = require('object-hash');

export const WgId = {
	bind (elem) {
		elem.wgId = ObjToHash(elem.className.split(' ')).substr(0, 7)
		elem.setAttribute(`data-wg-${elem.wgId}`, '')
		let styleTag = document.createElement('style')
		styleTag.setAttribute('type', 'text/css')
		styleTag.setAttribute(`data-wg-${elem.wgId}`, '')
		document.head.appendChild(styleTag);
	},
	unbind (elem) {
		document.querySelector(`style[data-wg-${elem.wgId}]`).remove()
	},
}