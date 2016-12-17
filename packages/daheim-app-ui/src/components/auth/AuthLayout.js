import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {FormattedMessage} from 'react-intl'

import Logo from '../Logo'

export default class AuthLayout extends Component {

  static propTypes = {
    children: PropTypes.node,
    intl: PropTypes.object.isRequired
  }

  render () {
    return (
      <div style={{paddingTop: 100, textAlign: 'center'}}>

        <div style={{background: '#222', backgroundSize: 'cover', backgroundImage: 'url(https://assets.willkommen-daheim.org/media/daheim_hero.jpg),url(https://assets.willkommen-daheim.org/media/daheim_hero@tiny.jpg)', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}} />

        <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: 10, padding: '12px 20px', position: 'relative', margin: '0 auto', display: 'inline-block', textAlign: 'start'}}>
          <div style={{textAlign: 'center', marginTop: 8, marginBottom: 16}}><Link to='/'><Logo style={{height: 36}} /></Link></div>
          {this.props.children}
        </div>

        <div style={{textAlign: 'center', textShadow: '1px 1px 5px black', paddingTop: 6, color: 'rgba(255, 255, 255, 0.8)', fontSize: 12, lineHeight: '22px', position: 'relative'}}>
          <span style={{padding: '0 10px'}}><a style={{color: 'rgba(255, 255, 255, 0.8)'}} href='https://daheimapp.de'><FormattedMessage id='menu.homepage' /></a></span> |
          <span style={{padding: '0 10px'}}><a style={{color: 'rgba(255, 255, 255, 0.8)'}} href='https://daheimapp.de/impressum/' target='_blank'><FormattedMessage id='menu.imprint' /></a></span> |
          <span style={{padding: '0 10px'}}><a style={{color: 'rgba(255, 255, 255, 0.8)'}} href='https://daheimapp.de/agb/' target='_blank'><FormattedMessage id='menu.termsAndConditions' /></a></span> |
          <span style={{padding: '0 10px'}}><a style={{color: 'rgba(255, 255, 255, 0.8)'}} href='https://daheimapp.de/privacy/' target='_blank'><FormattedMessage id='menu.privacy' /></a></span>
        </div>
        <div style={{textAlign: 'center', textShadow: '1px 1px 5px black', color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, lineHeight: '22px', position: 'relative', marginBottom: 30}}>
          <FormattedMessage id='menu.copyright' />
        </div>

      </div>
    )
  }

}
