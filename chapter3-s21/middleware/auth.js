import Cookies from 'universal-cookie'

export default ({req, route, redirect }) => {
  console.log(route.path)
  if (['/'].includes(route.path)) {
    return
  }

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credentail = cookies.get('credentail')
  console.log('get cookie')

  if (credentail && route.path === '/login') {
    console.log('redirect top page')
    return redirect('/')
  }

  if (!credentail && route.path !== '/login') {
    console.log('redirect login page')
    return redirect('/login')
  }

}
