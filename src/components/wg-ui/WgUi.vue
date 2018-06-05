<template>
  <div class="wg-ui">
    <section>
      <wg-heading level="h2" >Themes</wg-heading>
      <div class="wg-ui__themes">      
        <wg-themes :themes="themes" />
      </div>
    </section>
    <section  v-if="currentTheme && currentTheme.font">
      <wg-heading level="h2" >Typos</wg-heading>
      <div class="wg-ui__typos">
        <wg-text>
           <p>
              <wg-heading level="h6">Paragraph</wg-heading>
              Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit. Molestias quasi nulla, <a href="">neque ducimus nesciunt</a> neque ducimus nesciunt ad voluptate, minima modi <i>iure nam expedita</i> voluptatem! Saepe iure, <small>officia impedit</small> excepturi obcaecati eligendi quibusdam.
           </p>
        </wg-text>
        <hr>
        <ul>
          <li v-for="(font, index) in currentTheme.font">
            --font-{{font.type}}: <b>{{font.value}}</b>
          </li>
          <li v-for="(typo, index) in currentTheme.typo">
            --typo-{{typo.type}}: <b>{{typo.value}}</b>
          </li>
        </ul>
      </div>
    </section>
    <section v-if="currentTheme && currentTheme.headings.length">
      <wg-heading level="h2" >Headings</wg-heading>
      <div class="wg-ui__headings">
        <wg-heading v-for="(heading, index) in currentTheme.headings" 
          :key="index"
          :level="heading.type" >
          Heading Level {{index}} - {{heading.type.toUpperCase()}} / {{heading.value}}
        </wg-heading>
      </div>
    </section>

    <section v-if="currentTheme && currentTheme.border">
      <wg-heading level="h2" >Border / Shadow</wg-heading>
      <div class="wg-ui__borders-shadow">
        <div class="example"></div>
        <hr>
        <ul>
          <li v-for="(border, index) in currentTheme.border">
            --border-{{border.type}}: <b>{{border.value}}</b>
          </li>
          <li v-for="(shadow, index) in currentTheme['box-shadow']">
            --box-shadow-{{shadow.type}}: <b>{{shadow.value}}</b>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <wg-heading level="h2" >Form Inputs</wg-heading>
      <div class="wg-ui__form">
        <wg-form-example />
      </div>
    </section>
    <section>
      <wg-heading level="h2">Buttons</wg-heading>
      <div class="wg-ui__btn">
        <wg-btn>Primary</wg-btn>
        <wg-btn :hover="true">:Hover</wg-btn>
        <wg-btn :active="true">:Active</wg-btn>
        <wg-btn :disabled="true">:Disabled</wg-btn>
        <wg-btn status="loading">:Loading</wg-btn>
        <br>
        <wg-btn model="outline">Outlined</wg-btn>
        <wg-btn model="outline" :hover="true">:Hover</wg-btn>
        <wg-btn model="outline" :active="true">:Active</wg-btn>
        <wg-btn model="outline" :disabled="true">:Disabled</wg-btn>
        <wg-btn model="outline" status="loading">:Loading</wg-btn>
        <hr>
        <wg-btn :small="true">Small</wg-btn>
        <wg-btn :small="true" :hover="true">:Hover</wg-btn>
        <wg-btn :small="true" :active="true">:Active</wg-btn>
        <wg-btn :small="true" :disabled="true">:Disabled</wg-btn>
        <wg-btn :small="true" status="loading">:Loading</wg-btn>
        <br>
        <wg-btn :small="true" model="outline">Outlined</wg-btn>
        <wg-btn :small="true" model="outline" :hover="true">:Hover</wg-btn>
        <wg-btn :small="true" model="outline" :active="true">:Active</wg-btn>
        <wg-btn :small="true" model="outline" :disabled="true">:Disabled</wg-btn>
        <wg-btn :small="true" model="outline" status="loading">:Loading</wg-btn>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WgThemes from '@/components/wg-ui/WgThemes'
import WgFormExample from '@/components/wg-ui/wg-form/WgFormExample'
import WgFormInput from '@/components/wg-ui/wg-form/WgFormInput'
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'
import WgHeading from '@/components/wg-ui/WgHeading'
import WgBtn from '@/components/wg-ui/WgBtn'
import WgText from '@/components/wg-ui/WgText'

export default {
  name: 'WgUi',
  components: {
    'wg-themes': WgThemes,
    'wg-form-example': WgFormExample,
    'wg-heading': WgHeading,
    'wg-btn': WgBtn,
    'wg-form-field': WgFormField,
    'wg-form-input': WgFormInput,
    'wg-text': WgText,
  },
  computed: mapGetters({
    themes: 'getThemes',
    currentTheme: 'getCurrentTheme'
  }),
}
</script>

<style lang="scss" scoped>
hr {
  margin: var(--gutter) 0
}
.wg-ui {
  box-sizing: border-box;
  padding: var(--gutter-double) 0;
  margin: auto;
  max-width: 900px;
  > section {
    margin-bottom: calc(var(--gutter-double) * 2);
    > [class*="wg-ui__"] { 
      padding: var(--gutter-double);
      border-radius: 4px;
      box-shadow: 0 0 40px rgba(black, 0.2);
    }
  }
}
.wg-ui__typos,
.wg-ui__borders-shadow  {
  ul {
    list-style: disc;
    display: flex;
    flex-wrap: wrap;
    padding: 0 var(--gutter);
    li {
      width: 33.33%;
      margin-bottom: var(--gutter)
    }
  }
}
.wg-ui__borders-shadow {
  .example {
    margin: 0 auto var(--gutter-double);
    width: 400px;
    height: 200px;
    border-width: var(--border-width);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-x) var(--box-shadow-y) var(--box-shadow-blur) var(--box-shadow-color);
  }
}
.wg-ui__btn {
    margin: 0 -5px;
  .wg-btn {
    margin: 5px;
  }
}
</style>
