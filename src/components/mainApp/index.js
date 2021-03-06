import { h, render, Component } from 'preact'
import { remote } from 'electron'
import jetpack from 'fs-jetpack'
import PresetsBitwig from '../preset-bitwig'
import Header from '../header'
import Footer from '../footer'
import style from './style'

export default class Main extends Component {
  constructor () {
    super()
    this.app = remote.app
    this.appDir = jetpack.cwd(this.app.getAppPath())
  }
  render () {
    return (<div id='App' class={style.app}>
      <Header />
      <div class={style.repolist}>
        <PresetsBitwig app={this.app} remoterepo='https://github.com/polarity/preset-party-library.git' localdir='preset-party-standard' title='Bitwig:  Preset Party Standard' />
        <PresetsBitwig app={this.app} remoterepo='https://github.com/polarity/bitwig-presets.git' localdir='preset-party-competition' title='Bitwig:  Preset Competition' />
        <PresetsBitwig app={this.app} remoterepo='https://github.com/stylemistake/bitwig-presets-sm.git' localdir='preset-party-stylemistake' title='Bitwig: Stylemistake' />
        <PresetsBitwig app={this.app} remoterepo='https://github.com/jrelo/bitwig_presetz' localdir='preset-party-jrelo' title='Bitwig: jRelo' />
        <PresetsBitwig app={this.app} remoterepo='https://github.com/cyanit/Bitwig-Studio-Presets.git' localdir='preset-party-cyanit' title='Bitwig: Cyanit' />
      </div>
      <Footer />
    </div>
    )
  }
}
