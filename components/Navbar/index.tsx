
import type {NextPage} from 'next'
import Link from 'next/link'
import { navs } from './config';
import styles from './index.module.scss'

const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>Blog-C</section>
      <section className={styles.linkArea}>
        {
          navs?.map(nav => (
            <Link key={nav?.label} href={nav?.value}>
              <a>{nav?.label}</a>
            </Link>
          ))
        }
      </section>
    </div>
  )
}

export default Navbar