import type {NextPage} from 'next'
import Footer from 'components/Footer'
// import Navbar from '../Navbar'
import Navbar from 'components/Navbar'
// (alias) type NextPage<P = {}, IP = P> = React.ComponentType<P> & {
//   getInitialProps?(context: NextPageContext): IP | Promise<IP>;
// }
// import NextPage
// (parameter) children: any
// 类型“{}”上不存在属性“children”。

const Layout: NextPage = ({ children }) => {
  return (
      <div>
          <Navbar></Navbar>
          {/* <div>首页</div> */}
          <main>{children}</main>
          <Footer></Footer>
      </div>
  )
}

export default Layout;
