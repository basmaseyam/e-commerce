'use client'

import React from 'react'

import classes from './index.module.scss'
import { Footer, Media } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../Button'


const FooterComponent = ({footer}: {footer: Footer}) => {
    const pathName = usePathname()
    const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathName) ? classes.hide : ''}>
        {/* <Gutter>
            <ul className={classes.inclusions}>
                {inclusions.map(inclusion => (
                    <li key={inclusion.title}>
                        <Image 
                            src={inclusion.icon}
                            alt={inclusion.title}
                            width={36}
                            height={36}
                            className={classes.icon}
                        />
                        <h5 className={inclusion.title}>{inclusion.title}</h5>
                        <p className={inclusion.description}>{inclusion.description}</p>
                    </li>
                ))}
            </ul>
        </Gutter> */}
        <div className={classes.footer}>
                <Gutter>
                    <div className={classes.wrap}>
                        <Link href="/">
                        <Image 
                            src="/logo-white.svg"
                            alt='logo'
                            width={170}
                            height={50}
                        />
                        </Link>
                        
                        
                       
                    </div>
                </Gutter>
        </div>
        
    </footer>
  )
}

export default FooterComponent