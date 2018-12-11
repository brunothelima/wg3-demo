const TinyColor = require('tinycolor2')

export const camelCaseToDash = (str) =>  {
  return str
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([0-9])([^0-9])/g, '$1-$2')
      .replace(/([^0-9])([0-9])/g, '$1-$2')
      .replace(/-+/g, '-')
      .toLowerCase();
}
const getFontSizeCCP = (name, value) => {
  let CCP = `${name}: ${value}px;`
  CCP += `${name}-l: calc(var(${name}) + 2px);`
  CCP += `${name}-xl: calc(var(${name}) + 4px);`
  CCP += `${name}-xxl: calc(var(${name}) + 6px);`
  CCP += `${name}-s: calc(var(${name}) - 2px);`
  CCP += `${name}-xs: calc(var(${name}) - 3px);`
  CCP += `${name}-xxs: calc(var(${name}) - 4px);`
  return CCP
}
const getProgressiveCCP = (name, value) => {
  let CCP = `${name}: ${value}px;`
  CCP += `${name}-l: calc(var(${name}) * 2);`
  CCP += `${name}-xl: calc(var(${name}) * 3);`
  CCP += `${name}-xxl: calc(var(${name}) * 4);`
  return CCP
}
const getTransitionDurationCCP = (name, value) => {
  let CCP = `${name}: ${value}ms;`
  CCP += `${name}-fast: calc(var(${name}) / 2);`
  CCP += `${name}-faster: calc(var(${name}) / 3);`
  CCP += `${name}-fastest: calc(var(${name}) / 4);`
  CCP += `${name}-slow: calc(var(${name}) * 2);`
  CCP += `${name}-slower: calc(var(${name}) * 3);`
  CCP += `${name}-slowest: calc(var(${name}) * 4);`
  return CCP
}
const getBoxShadowCCP = (name, value) => {
  let x = 0.001, rgb = '0,0,0'
  let CCP = `${name}: ${x}px ${value / 3}px ${value}px  rgba(${rgb}, ${value * 0.008});`
  CCP += `${name}-l: ${x}px ${value / 2.66}px ${value * 1.5}px  rgba(${rgb}, ${value * 0.010});`
  CCP += `${name}-xl: ${x}px ${value / 2.33}px ${value * 2}px rgba(${rgb}, ${value * 0.012});`
  CCP += `${name}-xxl: ${x}px ${value / 2}px ${value * 2.5}px rgba(${rgb}, ${value * 0.014});`
  return CCP
}
const getColorsCCP = (name, value) => {
  let CCP = `${name}: ${value};`
  CCP += `${name}-dark: ${TinyColor(value).darken(10).toString()};`
  CCP += `${name}-darken: ${TinyColor(value).darken(20).toString()};`
  CCP += `${name}-darkest: ${TinyColor(value).darken(30).toString()};`
  CCP += `${name}-light: ${TinyColor(value).lighten(10).toString()};`
  CCP += `${name}-lighter: ${TinyColor(value).lighten(20).toString()};`
  CCP += `${name}-lightest: ${TinyColor(value).lighten(30).toString()};`
  return CCP
}
export const getCCP = (CCPKey, CCPValue) => { 
  let CCPs = ''
  let CCPName = `--wg-${camelCaseToDash(CCPKey)}`
  if (['fontSize', 'headingSize'].indexOf(CCPKey) > -1) {
    CCPs += getFontSizeCCP(CCPName, CCPValue)
  } else if (['gutter', 'borderRadius'].indexOf(CCPKey) > -1) {
    CCPs += getProgressiveCCP(CCPName, CCPValue)
  } else if (['transitionDuration'].indexOf(CCPKey) > -1) {
    CCPs += getTransitionDurationCCP(CCPName, CCPValue)
  } else if (['boxShadow'].indexOf(CCPKey) > -1) {
    CCPs += getBoxShadowCCP(CCPName, CCPValue)
  } else if (['colorPrimary', 'colorSecondary'].indexOf(CCPKey) > -1) {
    CCPs += getColorsCCP(CCPName, CCPValue)
  } else {
    if (typeof CCPValue === 'number') {
      CCPValue += 'px'
    }
    CCPs += `${CCPName}: ${CCPValue};`
  }
  return CCPs
}
export const setCCPs = (el, props) => {
  let styleTag = document.querySelector(`style[data-wg-${el.wgId}]`)
  let styleText = `[data-wg-${el.wgId}] {`
  Object.keys(props).forEach(prop => {
    styleText += getCCP(prop, props[prop])
  }); 
  styleText += '}'
  styleTag.innerHTML = styleText
}