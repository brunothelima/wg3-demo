<template>
  <div class="wg-ui">
    <section>
      <wg-heading level="h2" >Themes</wg-heading>
      <div class="wg-ui__themes">      
        <wg-themes :themes="themes" />
      </div>
    </section>
    <section v-if="currentTheme && currentTheme.headings.length">
      <wg-heading level="h2" >Headings</wg-heading>
      <div class="wg-ui__headings">
        <wg-heading v-for="(heading, index) in currentTheme.headings" 
          :key="index"
          :level="heading.type" >
          Heading Level {{index}} - {{heading.type.toUpperCase()}} / <wg-form-input :value="heading.value"/>
        </wg-heading>
      </div>
    </section>
    <section>
      <wg-heading level="h2" >Typos</wg-heading>
      <wg-text class="wg-ui__typos">
         <p>
            <b>Paragraph</b> <br>
            Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit. Molestias quasi nulla, <a href="">neque ducimus nesciunt</a> neque ducimus nesciunt ad voluptate, minima modi <i>iure nam expedita</i> voluptatem! Saepe iure, <small>officia impedit</small> excepturi obcaecati eligendi quibusdam.
         </p>
      </wg-text>
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
.wg-ui__headings {
  input {
    display: inline-block;
    vertical-align: middle;
    width: 120px;
    border: none;
    &::placeholder {
      font-size: 0;
    }
  }
}
.wg-ui__btn {
    margin: 0 -5px;
  .wg-btn {
    margin: 5px;
  }
}
</style>
