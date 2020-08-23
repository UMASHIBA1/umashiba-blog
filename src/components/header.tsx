import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { homeURL } from '../constants/domains'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'Source Code', link: 'https://github.com/UMASHIBA1/umashiba-blog' },
]

const ogImageUrl = `https://${homeURL}/og-image.png`

export default ({ titlePre = '', ogImage = ogImageUrl }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} UMASHIBA Notion</title>
        <meta name="description" content="this is UMASHIBA Notion blog" />
        <meta
          name="og:title"
          content={`${titlePre ? `${titlePre} |` : ''} UMASHIBA Notion`}
        />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:site" content="@UMASHIBA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
