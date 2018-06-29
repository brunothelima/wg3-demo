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
export const setFontSizeCCP = (target, name, value) => {
  target.style.setProperty(name, `${value}px`)
  target.style.setProperty(`${name}-l`, `calc(var(${name}) + 2px)`)
  target.style.setProperty(`${name}-xl`, `calc(var(${name}) + 4px)`)
  target.style.setProperty(`${name}-s`, `calc(var(${name}) - 2px)`)
  target.style.setProperty(`${name}-xs`, `calc(var(${name}) - 4px)`)
}
export const setProgressiveCCP = (target, name, value) => {
  target.style.setProperty(name, `${value}px`)
  target.style.setProperty(`${name}-l`, `calc(var(${name}) * 2)`)
  target.style.setProperty(`${name}-xl`, `calc(var(${name}) * 3)`)
  target.style.setProperty(`${name}-xxl`, `calc(var(${name}) * 4)`)
}
export const setTransitionDurationCCP = (target, name, value) => {
  target.style.setProperty(name, `${value}ms`)
  target.style.setProperty(`${name}-faster`, `calc(var(${name}) / 2)`)
  target.style.setProperty(`${name}-slower`, `calc(var(${name}) * 2)`)
}
export const setBoxShadowCCP = (target, name, value) => {
  let x = 0.001, rgb = '0,0,0'
  target.style.setProperty(name, `${x}px ${value / 3}px ${value / 2}px  rgba(${rgb}, ${value * 0.008})`)
  target.style.setProperty(`${name}-l`, `${x}px ${value / 2.66}px ${value / 1.66}px  rgba(${rgb}, ${value * 0.010})`)
  target.style.setProperty(`${name}-xl`, `${x}px ${value / 2.33}px ${value / 1.33}px rgba(${rgb}, ${value * 0.12})`)
  target.style.setProperty(`${name}-xxl`, `${x}px ${value / 2}px ${value}px rgba(${rgb}, ${value * 0.014})`)
}
