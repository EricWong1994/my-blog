
import { Button, Input, message } from 'antd';
import type {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { ChangeEvent, useState } from 'react';
import request from 'service/fetch';
import { navs } from './config';
import styles from './index.module.scss'

const Navbar: NextPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: ''
  });
  const {pathname} = router;

  const handleGotoEditorPage = () => {
    // if (userId) {
    //   push('/editor/new');
    // } else {
    //   message.warning('请先登录');
    // }
  };

  const handleLogin = () => {
    request.post('./api/sendVerifyCode', {
      // to: '19933273217',
      to: userInfo.phone,
      templateId: 1
    }).then(res => {
      console.log('res: ', res);
      if (res?.code === 0) {
        console.log('没问题')
      } else {
        message.error(res?.message || '未知错误')
      }
    })
  }
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      phone: e.target.value
    })
  }

  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>Blog-C</section>
      <section className={styles.linkArea}>
        {
          navs?.map(nav => (
            <Link key={nav?.label} href={nav?.value}>
              <a className={pathname === nav?.value ? styles.active : ''} >{nav?.label}</a>
            </Link>
          ))
        }
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button type="primary" onClick={handleLogin}>
            登录
        </Button>
        <Input value={userInfo.phone} onChange={inputChangeHandler}></Input>
      </section>
    </div>
  )
}

export default Navbar