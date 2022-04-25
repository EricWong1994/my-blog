import type {NextPage} from 'next'
import Footer from '../Footer'
// import Navbar from '../Navbar'
import Navbar from '../Navbar/index';
const Home: NextPage = () => {
  return (
      <div>
          <Navbar></Navbar>
          <div>首页</div>
          <Footer></Footer>
      </div>
  )
}

export default Home