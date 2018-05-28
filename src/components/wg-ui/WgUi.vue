<template>
  <div class="wg-ui">
    <section>
      <WgHeading level="h2" >Headings</WgHeading>
      <div class="wg-ui__headings">
        <WgHeading level="h1" >Heading Level 1 - H1</WgHeading>
        <WgHeading level="h2" >Heading Level 2 - H2</WgHeading>
        <WgHeading level="h3" >Heading Level 3 - H3</WgHeading>
        <WgHeading level="h4" >Heading Level 4 - H4</WgHeading>
        <WgHeading level="h5" >Heading Level 5 - H5</WgHeading>
        <WgHeading level="h6" >Heading Level 6 - H6</WgHeading>
      </div>
    </section>
    <section>
      <WgHeading level="h2" >Themes</WgHeading>
      <div class="wg-ui__themes">
        <WgThemes :themes="themes" />
      </div>
    </section>
    <section>
      <WgHeading level="h2" >Form Inputs</WgHeading>
      <div class="wg-ui__form">
        <WgForm>
          <WgField label="Input Text" placeholder="Type here your text" />
          <WgField type="email" label="Input Email" placeholder="ex: email@example.com" />
          <WgField type="tel" label="Input Tel" placeholder="(xx) xxxxx-xxxx" />
        </WgForm>
      </div>
    </section>
    <section>
      <WgHeading level="h2">Buttons</WgHeading>
      <div class="wg-ui__btn">
        <WgBtn>Button Primary</WgBtn>
        <WgBtn :secondary="true">Button Secondary</WgBtn>
        <WgBtn :small="true">Button Small Primary</WgBtn>
        <WgBtn :small="true" :secondary="true">Button Small Secondary</WgBtn>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WgThemes from '@/components/wg-ui/WgThemes'
import WgHeading from '@/components/wg-ui/WgHeading'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgField from '@/components/wg-ui/wg-form/WgField'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgUi',
  components: {
    WgThemes,
    WgHeading,
    WgForm,
    WgField,
    WgBtn,
  },
  computed: mapGetters({
    themes: 'getThemes'
  }),
}
</script>

<style lang="scss" scoped>
.wg-ui {
  box-sizing: border-box;
  padding: var(--gutter-double) 0;
  margin: auto;
  max-width: 800px;
  > section {
    margin-bottom: calc(var(--gutter-double) * 2);

    > [class*="wg-ui__"] { 
      padding: var(--gutter-double);
      border-radius: 4px;
      box-shadow: 0 0 40px rgba(black, 0.2);
    }
  }
}
.wg-ui__btn {
    margin: 0  calc(var(--gutter-half) * -1);
  .wg-btn {
    margin: var(--gutter-half);
  }
}
</style>
