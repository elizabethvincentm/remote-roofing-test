import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { ReactComponent as FbIcon } from '../assets/fb.svg'
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg'
import { ReactComponent as InstaIcon } from '../assets/insta.svg'
import { ReactComponent as MicrosoftBadge } from '../assets/microsoft.svg'
import { ReactComponent as GoolePlayBadge } from '../assets/googlePlay.svg'
import { ReactComponent as AppStoreBadge } from '../assets/appStore.svg'

export const Footer = () => {
  const footer_links =
    'border-white-50 border-r px-2 text-sm text-white-50 hover:text-white'
  return (
    <section className="footer">
      <Container>
        <div className="flex flex-row items-center justify-start py-2">
          <Link className={footer_links} to="/">
            Home
          </Link>
          <Link className={footer_links} to="/">
            Terms and Conditions
          </Link>
          <Link className={footer_links} to="/">
            Privacy Policy
          </Link>
          <Link className={footer_links} to="/">
            Collection Statement
          </Link>
          <Link className={footer_links} to="/">
            Help
          </Link>
          <Link className={footer_links + ' border-none'} to="/">
            Manage Account
          </Link>
        </div>
        <div className="p-2 text-sm text-white-50">
          Copyright &copy; 2016 DEMO Streaming All Rights Reserved
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <a
              aria-label="facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FbIcon className="footer_svg_icon" />
            </a>
            <a
              aria-label="twitter"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="footer_svg_icon" />
            </a>
            <a
              aria-label="instagram"
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon className="footer_svg_icon" />
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a
              aria-label="microsoft-appstore"
              href="https://www.apple.com/in/ios/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreBadge className="footer_svg_badge" />
            </a>
            <a
              aria-label="microsoft-appstore"
              href="https://play.google.com/store?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoolePlayBadge className="footer_svg_badge" />
            </a>
            <a
              aria-label="microsoft-appstore"
              href="https://www.microsoft.com/en-in/store/apps/windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MicrosoftBadge className="footer_svg_badge m-auto" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
